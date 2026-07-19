#!/usr/bin/env python3
"""
Swahili to Serbian Translation Script for freeCodeCamp Curriculum
Ultra-safe: LLM only sees small text chunks, never file structure.
"""

import os
import sys
import json
import urllib.request
import shutil
import time
import re
import threading
import hashlib
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime


FOLDERS_TO_TRANSLATE = [
    "curriculum/i18n-curriculum//curriculum/challenges/swahili/blocks/es-a1-learn-talking-about-colleagues",

]

# Technical terms that should never be translated
NEVER_TRANSLATE = {
    "JavaScript", "HTML", "CSS", "Node.js", "React", "Git", "GitHub",
    "JSON", "API", "DOM", "Python", "SQL", "MongoDB", "Express",
    "Angular", "Vue", "TypeScript", "Webpack", "Babel", "Docker",
    "Kubernetes", "AWS", "Azure", "GCP", "REST", "GraphQL",
    "HTTP", "HTTPS", "URL", "URI", "SSL", "TLS", "JWT",
    "OAuth", "XML", "YAML", "CSV", "PDF", "PNG", "JPG", "GIF",
    "Array", "Object", "Promise", "fetch", "console", "console.log",
    "Math", "Date", "Map", "Set", "JSON.stringify", "JSON.parse",
    "Boolean", "String", "Number", "Function", "Symbol", "null",
    "undefined", "true", "false", "let", "const", "var", "class",
    "extends", "super", "this", "new", "return", "if", "else",
    "for", "while", "do", "switch", "case", "break", "continue",
    "try", "catch", "finally", "throw", "async", "await", "import",
    "export", "default", "from", "as", "static", "get", "set"
}

# YAML fields that should never be translated
PROTECTED_YAML_FIELDS = {
    'id', 'challengeType', 'dashedName', 'videoId', 'forumTopicId', 
    'helpCategory', 'saveSubmissionToDB', 'isRequired'
}


# ======================================
# LOGGING (Thread-safe)
# ======================================

class TranslationLogger:
    def __init__(self, log_file='translation.log'):
        self.log_file = log_file
        self.lock = threading.Lock()
        self.stats = {
            'translated': 0,
            'skipped': 0,
            'failed': 0,
            'restored': 0
        }
        self.init_log()
    
    def init_log(self):
        with open(self.log_file, 'w', encoding='utf-8') as f:
            f.write(f"Translation Log - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            f.write("=" * 80 + "\n\n")
    
    def log(self, file_path, status, message=""):
        with self.lock:
            with open(self.log_file, 'a', encoding='utf-8') as f:
                f.write(f"[{status}] {file_path}\n")
                if message:
                    f.write(f"  {message}\n")
            
            if status in self.stats:
                self.stats[status] += 1
    
    def print_summary(self):
        print("\n" + "=" * 80)
        print("TRANSLATION SUMMARY")
        print("=" * 80)
        for status, count in self.stats.items():
            print(f"  {status.capitalize()}: {count}")
        print("=" * 80)


# Global logger instance
logger = TranslationLogger()


# ======================================
# LANGUAGE DETECTION
# ======================================

def has_swahili_text(text):
    """
    Check if text contains Swahili using common Swahili words and patterns.
    This is used for post-translation verification.
    """
    # Common Swahili words that are likely to remain if translation failed
    swahili_indicators = [
        # Very common Swahili words
        "ya", "wa", "na", "kwa", "la", "ni", "si", "ku", "mu", "tu",
        "mtu", "kazi", "sasa", "hapa", "hapo", "huku", "kule",
        "hadi", "toka", "kufika", "kwenda", "kuja", "ruka",
        # Pronouns and common words
        "hii", "hilo", "hili", "hiyo", "hizi", "hizo", "hawa", "hao",
        "mimi", "wewe", "yeye", " sisi", " ninyi", "wao",
        # Verbs (common)
        "sema", "fanya", "enda", "kuja", "ona", "sikia", "jua",
        "tafuta", "pata", "toa", "weka", "chukua", "peleka",
        # Time words
        "leo", "jana", "kesho", "sasa", "wakati", "muda",
        # Question words
        "nini", "wapi", "lini", "kwa nini", "vipi",
        # Common from examples
        "hadithi", "mtumiaji", "mradi", "mitihani", "imepitwa",
        "wasilisha", "ukiisha", "ramani", "mti", "kichwa",
        "maelezo", "pločica", "površina", "količini",
        "legenda", "tooltip", "područja", "indikator",
        "atribut", "elementi", "boje", "popunjavanja",
        "svojstva", "odgovaraju", "trebalo", "ima",
        "postoji", "bar", "dve", "različite", "svaka",
        "možda", "neće", "biti", "tačni", "dinamičan",
        "sadržaj", "trenutno", "nisu", "podržani",
        "nadam", "se", "ćemo", "vam", "moći", "pomoći",
        "kasnije", "ali", "ovi", "sistemi",
    ]
    
    text_lower = text.lower()
    matches = 0
    
    for word in swahili_indicators:
        # Match whole word only
        pattern = r'\b' + re.escape(word.lower()) + r'\b'
        if re.search(pattern, text_lower):
            matches += 1
            if matches >= 2:  # Require at least 2 matches for verification
                return True
    
    return False


# ======================================
# TRANSLATION
# ======================================

def is_refusal_message(text):
    """
    Check if text is a refusal/request message that should NOT be translated.
    These are messages where someone asks for Swahili text input.
    Detects in multiple languages (English, Serbian, Swahili).
    """
    if not text or not text.strip():
        return False
    
    text_lower = text.lower().strip()
    
    # English patterns
    refusal_patterns = [
        "please provide the swahili text",
        "please provide the text",
        "i need the swahili text",
        "i need the text",
        "provide the text you",
        "provide the swahili text",
        "which text would you like",
        "what text would you like",
        "please specify the text",
        "please enter the text",
        "give me the text to",
        "text to translate",
    ]
    
    # Serbian patterns (translated refusals)
    serbian_refusal_patterns = [
        "molim vas da mi date tekst",
        "molimo vas da dostavite tekst",
        "molimo vas da pružite tekst",
        "molimo vas da navedete tekst",
        "molim vas, unesite tekst",
        "molimo vas da mi pružite tekst",
        "dostavite tekst na swahili",
        "navedite tekst na swahili",
        "unesite tekst na swahili",
        "da li želite da prevedem",
        "koji želite da prevedem",
        "koji želite da prevedemo",
    ]
    
    all_patterns = refusal_patterns + serbian_refusal_patterns
    
    for pattern in all_patterns:
        if pattern in text_lower:
            return True
    
    # Check if it's very short and asks for text
    if len(text_lower) < 100:
        has_provide = any(word in text_lower for word in ["provide", "give", "enter", "dostavite", "pružite", "navedite", "unesite"])
        has_text = "tekst" in text_lower or "text" in text_lower
        has_translate = "preved" in text_lower or "translate" in text_lower
        
        if has_provide and has_text and has_translate:
            return True
    
    return False


def translate_text(text, model="gemma4:latest"):
    """Translate text using LLM."""
    if not text or not text.strip():
        return text
    
    # Check if original text is already a refusal message - skip it
    if is_refusal_message(text):
        logger.log("chunk", 'skipped', 'Original text is a refusal message, skipping')
        return text
    
    prompt = f"""Translate this Swahili text to Serbian (sr-RS).

RULES:
1. Translate ONLY natural language text
2. Do NOT translate: code, URLs, API names, programming keywords, technical terms
3. Keep the same formatting and structure
4. Use natural Serbian technical terminology
5. Provide ONLY the translation, no explanations

TEXT:

{text}"""

    for attempt in range(3):
        try:
            data = {
                "model": model,
                "prompt": prompt,
                "stream": False,
                "options": {
                    "temperature": 0.3,
                    "num_ctx": 4096
                }
            }

            req = urllib.request.Request(
                'http://localhost:11434/api/generate',
                data=json.dumps(data).encode('utf-8'),
                headers={'Content-Type': 'application/json'},
                method='POST'
            )

            with urllib.request.urlopen(req, timeout=300) as response:
                result = json.loads(response.read().decode('utf-8'))

            translated = result.get('response', '').strip()
            
            # Check if it's a refusal message (in case LLM returns one)
            if is_refusal_message(translated):
                if attempt < 2:
                    time.sleep(1)
                    continue
                else:
                    logger.log("chunk", 'skipped', 'LLM returned refusal message after 3 attempts')
                    return text
            
            # Validate translation - check tokens preserved
            if (translated and 
                translated.strip() != "" and
                translated.count("@@") == text.count("@@")):
                return translated
            else:
                if attempt < 2:
                    time.sleep(1)
                    continue
                return text

        except Exception as e:
            if attempt < 2:
                time.sleep(1)
            else:
                print(f"    ✗ Error: {e}")
                return text
    
    return text


def translate_and_verify(text, model="gemma4:latest", max_retries=2):
    """
    Translate text and verify no Swahili remains.
    Retry up to max_retries times if Swahili is detected.
    """
    if not text or not text.strip():
        return text
    
    # Skip if it's just code, newlines, or empty
    if not text.strip():
        return text
    
    # Translate
    translated = translate_text(text, model)
    
    # Verify no Swahili remains (only check if translation actually happened)
    if translated != text and has_swahili_text(translated):
        # Swahili still detected, retry
        for retry in range(max_retries):
            print(f"    ⚠ Swahili text detected in translation, retrying ({retry + 1}/{max_retries})...")
            time.sleep(1)
            translated = translate_text(text, model)
            
            # Check again
            if not has_swahili_text(translated):
                break
    
    return translated


# ======================================
# PROTECTION SYSTEM (Deterministic tokens)
# ======================================

def generate_token(prefix, index, original_text):
    """Generate deterministic token based on content hash."""
    hash_input = f"{prefix}:{index}:{original_text}".encode('utf-8')
    hash_hex = hashlib.sha256(hash_input).hexdigest()[:8].upper()
    return f"@@{prefix}_{hash_hex}_{index:04d}@@"


def protect_code_blocks(text):
    """Replace code blocks with tokens."""
    store = []
    pattern = r'```[\s\S]*?```'
    
    def replace(match):
        token = generate_token("CODE_BLOCK", len(store), match.group(0))
        store.append((token, match.group(0)))
        return token
    
    protected = re.sub(pattern, replace, text)
    return protected, store


def restore_code_blocks(text, store):
    """Restore code blocks from tokens."""
    result = text
    for token, original in store:
        result = result.replace(token, original)
    return result


def protect_inline_code(text):
    """Replace inline code with tokens."""
    store = []
    pattern = r'`[^`\n]+`'
    
    def replace(match):
        token = generate_token("INLINE_CODE", len(store), match.group(0))
        store.append((token, match.group(0)))
        return token
    
    protected = re.sub(pattern, replace, text)
    return protected, store


def restore_inline_code(text, store):
    """Restore inline code from tokens."""
    result = text
    for token, original in store:
        result = result.replace(token, original)
    return result


def protect_html_tags(text):
    """Replace HTML tags with tokens."""
    store = []
    pattern = r'</?[A-Za-z][^>]*>'
    
    def replace(match):
        token = generate_token("HTML_TAG", len(store), match.group(0))
        store.append((token, match.group(0)))
        return token
    
    protected = re.sub(pattern, replace, text)
    return protected, store


def restore_html_tags(text, store):
    """Restore HTML tags from tokens."""
    result = text
    for token, original in store:
        result = result.replace(token, original)
    return result


def protect_html_entities(text):
    """Replace HTML entities with tokens."""
    store = []
    pattern = r'&[a-zA-Z]+;|&[0-9]+;|&#[0-9]+;'
    
    def replace(match):
        token = generate_token("HTML_ENTITY", len(store), match.group(0))
        store.append((token, match.group(0)))
        return token
    
    protected = re.sub(pattern, replace, text)
    return protected, store


def restore_html_entities(text, store):
    """Restore HTML entities from tokens."""
    result = text
    for token, original in store:
        result = result.replace(token, original)
    return result


def protect_markdown_links(text):
    """Replace Markdown links with tokens."""
    store = []
    pattern = r'\[[^\]]+\]\([^)]+\)'
    
    def replace(match):
        token = generate_token("MD_LINK", len(store), match.group(0))
        store.append((token, match.group(0)))
        return token
    
    protected = re.sub(pattern, replace, text)
    return protected, store


def restore_markdown_links(text, store):
    """Restore Markdown links from tokens."""
    result = text
    for token, original in store:
        result = result.replace(token, original)
    return result


def protect_markdown_images(text):
    """Replace Markdown images with tokens."""
    store = []
    pattern = r'!\[([^\]]*)\]\([^\)]+\)'
    
    def replace(match):
        token = generate_token("MD_IMAGE", len(store), match.group(0))
        store.append((token, match.group(0)))
        return token
    
    protected = re.sub(pattern, replace, text)
    return protected, store


def restore_markdown_images(text, store):
    """Restore Markdown images from tokens."""
    result = text
    for token, original in store:
        result = result.replace(token, original)
    return result


def protect_reference_links(text):
    """Replace reference links with tokens."""
    store = []
    
    pattern1 = r'\[([^\]]+)\]\[([^\]]+)\]'
    pattern2 = r'^\[([^\]]+)\]:\s*.+$'
    
    def replace1(match):
        token = generate_token("REF_LINK", len(store), match.group(0))
        store.append((token, match.group(0)))
        return token
    
    def replace2(match):
        token = generate_token("REF_DEF", len(store), match.group(0))
        store.append((token, match.group(0)))
        return token
    
    text = re.sub(pattern1, replace1, text, flags=re.MULTILINE)
    text = re.sub(pattern2, replace2, text, flags=re.MULTILINE)
    
    return text, store


def restore_reference_links(text, store):
    """Restore reference links from tokens."""
    result = text
    for token, original in store:
        result = result.replace(token, original)
    return result


def protect_references(text):
    """Replace template references with tokens."""
    store = []
    
    pattern1 = r'\{\{[^}]+\}\}'
    pattern2 = r'\$\{[^}]+\}'
    pattern3 = r'%\{[^}]+\}'
    
    def replace(match):
        token = generate_token("REF", len(store), match.group(0))
        store.append((token, match.group(0)))
        return token
    
    text = re.sub(pattern1, replace, text)
    text = re.sub(pattern2, replace, text)
    text = re.sub(pattern3, replace, text)
    
    return text, store


def restore_references(text, store):
    """Restore references from tokens."""
    result = text
    for token, original in store:
        result = result.replace(token, original)
    return result


def protect_placeholders(text):
    """Replace format placeholders with tokens."""
    store = []
    
    pattern1 = r'%[sdifFeEgGxXo]'
    pattern2 = r'(?<!\{)\{[^{}]+\}(?!\})'
    pattern3 = r'\{\{[^}]+\}\}'
    pattern4 = r'\$\d+'
    
    def replace(match):
        token = generate_token("PLACEHOLDER", len(store), match.group(0))
        store.append((token, match.group(0)))
        return token
    
    text = re.sub(pattern1, replace, text)
    text = re.sub(pattern3, replace, text)
    text = re.sub(pattern2, replace, text)
    text = re.sub(pattern4, replace, text)
    
    return text, store


def restore_placeholders(text, store):
    """Restore placeholders from tokens."""
    result = text
    for token, original in store:
        result = result.replace(token, original)
    return result


def protect_technical_terms(text):
    """Replace technical terms with tokens."""
    store = []
    
    for term in sorted(NEVER_TRANSLATE, key=len, reverse=True):
        pattern = r'\b' + re.escape(term) + r'\b'
        
        def replace(match, term=term):
            token = generate_token("TECH_TERM", len(store), match.group(0))
            store.append((token, match.group(0)))
            return token
        
        text = re.sub(pattern, replace, text)
    
    return text, store


def restore_technical_terms(text, store):
    """Restore technical terms from tokens."""
    result = text
    for token, original in store:
        result = result.replace(token, original)
    return result


def protect_all(text):
    """Apply all protections in correct order."""
    text, code_blocks = protect_code_blocks(text)
    text, inline_codes = protect_inline_code(text)
    text, html_tags = protect_html_tags(text)
    text, html_entities = protect_html_entities(text)
    text, md_images = protect_markdown_images(text)
    text, md_links = protect_markdown_links(text)
    text, ref_links = protect_reference_links(text)
    text, refs = protect_references(text)
    text, placeholders = protect_placeholders(text)
    text, tech_terms = protect_technical_terms(text)
    
    return text, {
        'code_blocks': code_blocks,
        'inline_codes': inline_codes,
        'html_tags': html_tags,
        'html_entities': html_entities,
        'md_images': md_images,
        'md_links': md_links,
        'ref_links': ref_links,
        'refs': refs,
        'placeholders': placeholders,
        'tech_terms': tech_terms
    }


def restore_all(text, stores):
    """Restore all protected elements in reverse order."""
    text = restore_technical_terms(text, stores['tech_terms'])
    text = restore_placeholders(text, stores['placeholders'])
    text = restore_references(text, stores['refs'])
    text = restore_reference_links(text, stores['ref_links'])
    text = restore_markdown_links(text, stores['md_links'])
    text = restore_markdown_images(text, stores['md_images'])
    text = restore_html_entities(text, stores['html_entities'])
    text = restore_html_tags(text, stores['html_tags'])
    text = restore_inline_code(text, stores['inline_codes'])
    text = restore_code_blocks(text, stores['code_blocks'])
    return text


def verify_tokens_intact(text, stores):
    """Verify all tokens are still present after translation (before restore)."""
    all_ok = True
    missing = []
    
    for category, store in stores.items():
        for token, original in store:
            if token not in text:
                all_ok = False
                missing.append(token)
    
    return all_ok, missing


# ======================================
# FILE PROCESSING
# ======================================

def split_into_chunks(text, max_chunk_size=1000, max_lines=50):
    """Split text into translatable chunks."""
    chunks = []
    
    parts = re.split(r'(```[\s\S]*?```)', text)
    
    for part in parts:
        if part.startswith('```'):
            chunks.append(('code', part))
        else:
            paragraphs = re.split(r'(\n\n)', part)
            
            current_text = []
            current_lines = 0
            
            for para in paragraphs:
                if para == '\n\n':
                    if current_text:
                        text_block = ''.join(current_text)
                        chunks.append(('text', text_block))
                        current_text = []
                        current_lines = 0
                    chunks.append(('newline', para))
                elif para.strip():
                    para_lines = para.count('\n') + 1
                    
                    if current_text and (current_lines + para_lines > max_lines or 
                                        len(''.join(current_text)) + len(para) > max_chunk_size):
                        text_block = ''.join(current_text)
                        chunks.append(('text', text_block))
                        current_text = []
                        current_lines = 0
                    
                    current_text.append(para)
                    current_lines += para_lines
                else:
                    if current_text:
                        text_block = ''.join(current_text)
                        chunks.append(('text', text_block))
                        current_text = []
                        current_lines = 0
                    chunks.append(('empty', para))
            
            if current_text:
                text_block = ''.join(current_text)
                chunks.append(('text', text_block))
    
    return chunks


def translate_chunks(chunks, model="gemma4:latest"):
    """Translate a list of chunks."""
    translated_chunks = []
    
    for chunk_type, chunk in chunks:
        if chunk_type == 'code' or chunk_type == 'newline' or chunk_type == 'empty':
            translated_chunks.append((chunk_type, chunk))
        else:
            protected_text, stores = protect_all(chunk)
            translated = translate_and_verify(protected_text, model)
            
            # Verify tokens are intact BEFORE restore
            tokens_ok, missing = verify_tokens_intact(translated, stores)
            if not tokens_ok:
                print(f"    ⚠ Warning: {len(missing)} tokens damaged, keeping original chunk")
                translated = chunk
            else:
                # Restore protected elements
                translated = restore_all(translated, stores)
            
            translated_chunks.append((chunk_type, translated))
    
    return translated_chunks


def parse_file_structure(content):
    """
    Parse file into ordered list of (type, content) tuples.
    Types: 'yaml', 'marker', 'content'
    Preserves exact content including all whitespace using string slicing.
    """
    structure = []
    
    # Extract YAML frontmatter with exact content
    yaml_match = re.match(r'^(---\n.*?\n---\n)', content, re.DOTALL)
    if yaml_match:
        yaml_content = yaml_match.group(1)
        structure.append(('yaml', yaml_content))
        remaining = content[yaml_match.end():]
    else:
        remaining = content
    
    # Find all section markers with positions using regex
    # Capture the marker AND any trailing whitespace (newlines, spaces)
    marker_pattern = r'^(\#{1,6}\s*--[a-z-]+--\s*)(\n*)'
    
    last_end = 0
    for match in re.finditer(marker_pattern, remaining, re.MULTILINE):
        # Content before this marker (preserve exactly)
        if match.start() > last_end:
            content_text = remaining[last_end:match.start()]
            if content_text:
                structure.append(('content', content_text))
        # The marker itself with its trailing newlines
        marker_text = match.group(1)
        trailing_newlines = match.group(2)
        structure.append(('marker', marker_text, trailing_newlines))
        last_end = match.end()
    
    # Remaining content after last marker
    if last_end < len(remaining):
        content_text = remaining[last_end:]
        if content_text:
            structure.append(('content', content_text))
    elif last_end == 0:
        # No markers found, entire remaining is content
        structure.append(('content', remaining))
    
    return structure


def reconstruct_file(structure):
    """Reconstruct file from structure list, preserving exact formatting."""
    result = []
    for item in structure:
        if item[0] == 'marker':
            # Marker tuple: ('marker', marker_text, trailing_newlines)
            marker_text, trailing_newlines = item[1], item[2]
            result.append(marker_text)
            result.append(trailing_newlines)
        else:
            # YAML and content: ('yaml', content) or ('content', content)
            result.append(item[1])
    return ''.join(result)


def validate_translation(original_content, translated_content, original_structure, translated_structure):
    """Validate that translation preserved structure exactly."""
    errors = []
    
    if len(original_structure) != len(translated_structure):
        errors.append(f"Structure length mismatch: {len(original_structure)} vs {len(translated_structure)}")
        return errors
    
    for i, (orig_item, trans_item) in enumerate(zip(original_structure, translated_structure)):
        orig_type = orig_item[0]
        trans_type = trans_item[0]
        
        if orig_type != trans_type:
            errors.append(f"Part {i}: type mismatch {orig_type} vs {trans_type}")
        
        if orig_type == 'yaml':
            orig_content = orig_item[1]
            trans_content = trans_item[1]
            orig_lines = orig_content.split('\n')
            trans_lines = trans_content.split('\n')
            
            for j, (orig_line, trans_line) in enumerate(zip(orig_lines, trans_lines)):
                if orig_line.startswith('title:'):
                    continue
                elif orig_line.strip() in ('---', '...'):
                    if orig_line != trans_line:
                        errors.append(f"YAML delimiter changed at line {j}: {orig_line}")
                elif any(orig_line.startswith(f'{field}:') for field in PROTECTED_YAML_FIELDS):
                    if orig_line != trans_line:
                        errors.append(f"Protected YAML field changed at line {j}: {orig_line}")
                elif orig_line != trans_line:
                    errors.append(f"YAML line {j} changed: {orig_line}")
        
        elif orig_type == 'marker':
            # Marker tuple: ('marker', marker_text, trailing_newlines)
            orig_marker_text = orig_item[1]
            orig_trailing = orig_item[2]
            trans_marker_text = trans_item[1]
            trans_trailing = trans_item[2]
            
            if orig_marker_text != trans_marker_text:
                errors.append(f"Marker {i} text changed: {orig_marker_text} vs {trans_marker_text}")
            if orig_trailing != trans_trailing:
                errors.append(f"Marker {i} trailing whitespace changed: {repr(orig_trailing)} vs {repr(trans_trailing)}")
    
    # Check for corrupted marker patterns (marker directly followed by text without newline)
    corruption_patterns = [
        r'# --description--[^\n]',
        r'#### --text--[^\n]',
        r'#### --distractors--[^\n]',
        r'#### --answer--[^\n]',
    ]
    
    for pattern in corruption_patterns:
        matches = re.findall(pattern, translated_content)
        if matches:
            errors.append(f"Corrupted marker pattern detected: {pattern} - found {len(matches)} occurrences")
    
    return errors


def translate_file(file_path, model="gemma4:latest"):
    """Translate a markdown file with ultra-safe chunk-based translation."""
    with open(file_path, 'r', encoding='utf-8') as f:
        original_content = f.read()

    original_structure = parse_file_structure(original_content)
    
    if not original_structure:
        logger.log(file_path, 'skipped', 'Could not parse structure')
        print(f"  ⚠ Could not parse structure: {file_path}")
        return False
    
    yaml_count = sum(1 for item in original_structure if item[0] == 'yaml')
    marker_count = sum(1 for item in original_structure if item[0] == 'marker')
    
    print(f"  Found {len(original_structure)} parts: {yaml_count} YAML, {marker_count} markers, {len(original_structure) - yaml_count - marker_count} content sections")
    
    translated_structure = []
    
    for item in original_structure:
        part_type = item[0]
        part_content = item[1]
        
        if part_type == 'yaml':
            lines = part_content.split('\n')
            translated_lines = []
            title_translated = False
            
            for line in lines:
                if line.startswith('title:') and not title_translated:
                    match = re.match(r'^(title:\s*)(.+)$', line)
                    if match:
                        prefix = match.group(1)
                        title_text = match.group(2)
                        translated_title = translate_text(title_text, model)
                        translated_lines.append(f"{prefix}{translated_title}")
                        title_translated = True
                    else:
                        translated_lines.append(line)
                else:
                    translated_lines.append(line)
            
            translated_structure.append((part_type, '\n'.join(translated_lines)))
            print(f"    ✓ Translated YAML title")
        
        elif part_type == 'marker':
            # Preserve marker with its trailing newlines
            translated_structure.append(item)
        
        elif part_type == 'content':
            chunks = split_into_chunks(part_content)
            translated_chunks = translate_chunks(chunks, model)
            translated_content = ''.join(chunk for _, chunk in translated_chunks)
            
            translated_structure.append((part_type, translated_content))
            
            translated_count = 0
            for (t_type, trans_chunk), (o_type, orig_chunk) in zip(translated_chunks, chunks):
                if t_type == 'text' and o_type == 'text' and trans_chunk != orig_chunk:
                    translated_count += 1
            
            if translated_count > 0:
                print(f"    ✓ Translated {translated_count} text chunk(s) in section")
    
    translated_content = reconstruct_file(translated_structure)
    
    errors = validate_translation(original_content, translated_content, original_structure, translated_structure)
    
    if errors:
        logger.log(file_path, 'restored', '; '.join(errors[:3]))
        print(f"  ✗ Validation failed:")
        for error in errors[:5]:
            print(f"    - {error}")
        print(f"  ↳ Restoring from backup")
        backup_path = file_path + '.bak'
        if os.path.exists(backup_path):
            shutil.copy2(backup_path, file_path)
            print(f"  ✓ Restored from backup")
        else:
            print(f"  ⚠ No backup found to restore")
        return False
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(translated_content)
    
    logger.log(file_path, 'translated')
    return True


def translate_single_file(file_path, model="gemma4:latest"):
    """Wrapper for parallel processing."""
    try:
        backup_path = file_path + '.bak'
        if not os.path.exists(backup_path):
            shutil.copy2(file_path, backup_path)
        
        return translate_file(file_path, model)
    except Exception as e:
        logger.log(file_path, 'failed', str(e))
        print(f"✗ Error translating {file_path}: {e}")
        return False


def main():
    if len(sys.argv) < 2:
        print("Usage: python translate_novo.py <file.md|folder|all>")
        sys.exit(1)

    target = sys.argv[1]
    model = "gemma4:latest"

    if os.path.isfile(target):
        if not target.endswith('.md') or target.endswith('.bak'):
            print("Error: Please provide a .md file (not .bak)")
            sys.exit(1)

        backup_path = target + '.bak'
        if not os.path.exists(backup_path):
            print(f"Creating backup: {backup_path}")
            shutil.copy2(target, backup_path)

        success = translate_file(target, model)
        sys.exit(0 if success else 1)

    elif os.path.isdir(target):
        md_files = sorted([f for f in Path(target).glob('*.md') if not f.name.endswith('.bak')])
        
        if not md_files:
            print(f"No .md files found in {target}")
            sys.exit(1)

        print(f"Found {len(md_files)} files to translate")
        print("-" * 60)

        success_count = 0
        fail_count = 0

        for md_file in md_files:
            try:
                if translate_single_file(str(md_file), model):
                    success_count += 1
                else:
                    fail_count += 1
            except Exception as e:
                print(f"✗ Error translating {md_file}: {e}")
                fail_count += 1

        print("-" * 60)
        print(f"Translation complete! Success: {success_count}, Failed: {fail_count}")
        logger.print_summary()

    else:
        print(f"Error: {target} is not a valid file or directory")
        sys.exit(1)


def translate_all_folders():
    """Translate all folders in FOLDERS_TO_TRANSLATE with parallel processing."""
    model = "gemma4:latest"
    max_workers = 2

    print(f"Found {len(FOLDERS_TO_TRANSLATE)} folders to translate")
    print("=" * 60)

    total_success = 0
    total_failed = 0

    for folder in FOLDERS_TO_TRANSLATE:
        folder_path = Path(folder)
        if not folder_path.exists():
            logger.log(folder, 'skipped', 'Folder not found')
            print(f"\n⚠ Folder not found: {folder}")
            continue

        md_files = sorted([f for f in folder_path.glob('*.md') if not f.name.endswith('.bak')])

        if not md_files:
            logger.log(folder, 'skipped', 'No .md files')
            print(f"\n⚠ No .md files found in: {folder}")
            continue

        print(f"\n📁 Translating: {folder}")
        print(f"   Files: {len(md_files)}")
        print("-" * 60)

        folder_success = 0
        folder_failed = 0

        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            futures = {
                executor.submit(translate_single_file, str(md_file), model): md_file 
                for md_file in md_files
            }
            
            for future in as_completed(futures):
                md_file = futures[future]
                try:
                    if future.result():
                        folder_success += 1
                        total_success += 1
                    else:
                        folder_failed += 1
                        total_failed += 1
                except Exception as e:
                    logger.log(str(md_file), 'failed', str(e))
                    print(f"  ✗ Error translating {md_file.name}: {e}")
                    folder_failed += 1
                    total_failed += 1

        logger.log(folder, 'translated', f'{folder_success} success, {folder_failed} failed')
        print(f"\n  ✓ Folder complete: {folder_success} success, {folder_failed} failed")

    print("\n" + "=" * 60)
    print(f"TRANSLATION COMPLETE!")
    print(f"  Total success: {total_success}")
    print(f"  Total failed: {total_failed}")
    logger.print_summary()


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "all":
        translate_all_folders()
    else:
        main()