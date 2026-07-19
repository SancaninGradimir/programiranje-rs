# Swahili → Serbian Translation Guide for freeCodeCamp Curriculum

## Goal

Translate freeCodeCamp curriculum files from Swahili to Serbian while preserving 100% functionality of the curriculum.

The project root:

```
/home/gagi_/freeCodeCamp/curriculum/i18n-curriculum/curriculum/challenges/swahili/blocks
```

---

## Critical Rule

The curriculum must continue to pass:

```bash
pnpm build
```

after every translation batch.

**Functionality is more important than translation completeness.**

**When uncertain, keep the original text.**

---

## LLM Handoff (When Tokens Run Out)

Use this block to continue work in any other LLM without losing context.

### 1) Mandatory Context to Share

- Workspace root:
    - `/home/gagi_/freeCodeCamp`
- Translation root:
    - `/home/gagi_/freeCodeCamp/curriculum/i18n-curriculum/curriculum/challenges/swahili/blocks`
- Current folder in progress (example):
    - `applied-accessibility`
- Rule priority:
    - Keep structure valid first, translation second
- Validation command:
    - `pnpm build`

### 2) Handoff Prompt Template

Copy and paste this to the next LLM:

```text
Continue Swahili -> Serbian translation for freeCodeCamp curriculum.
Root: /home/gagi_/freeCodeCamp/curriculum/i18n-curriculum/curriculum/challenges/swahili/blocks
Current folder: <FOLDER_NAME>
Rules:
1) Translate only user-facing text.
2) Do not change YAML keys, IDs, dashedName, challengeType, markers, code blocks, inline code, tests, URLs.
3) Ensure .bak exists before editing each file.
4) After each folder batch, run pnpm build.
5) If build fails, restore structure from .bak and re-apply only safe text translation.
Provide a concise progress log after each batch.
```

### 3) Progress Log Format (Always Update)

```text
Folder:
Files translated:
Backups created:
Build status:
Issues found:
Issues fixed:
Next file/folder:
```

### 4) Stop Conditions

Stop and report immediately if:

- Build fails due to structure/marker errors
- A file appears partially corrupted
- You are unsure whether text is user-facing or executable/parsing-sensitive

---

## Current Progress

### Completed Folders (8/16):
| Folder | Files | Status |
|--------|-------|--------|
| add-logic-to-c-sharp-console-applications | 8/8 | ✅ Done |
| advanced-oop-concepts | 2/2 | ✅ Done |
| algorithms-in-code | 3/3 | ✅ Done |
| angles-and-circular-motion | 3/3 | ✅ Done |
| back-end-development-and-apis-projects | 5/5 | ✅ Done |
| advanced-trig-conics | 10/10 | ✅ Done |
| algorithms | 9/10 | ⚠️ 1 file remaining: 61abc7ebf3029b56226de5b6.md |
| applied-accessibility | 22/22 | ✅ Done |

### Remaining Folders (9/16):
| Folder | Files | Status |
|--------|-------|--------|
| basic-node-and-express | 12 | ❌ Not started |
| basic-algorithm-scripting | 16 | ❌ Not started |
| basic-data-structures | 20 | ❌ Not started |
| advanced-node-and-express | 22 | ❌ Not started |
| basic-html-and-html5 | 28 | ❌ Not started |
| bootstrap | 31 | ❌ Not started |
| basic-css | 44 | ❌ Not started |
| applied-visual-design | 52 | ❌ Not started |
| basic-javascript | 113 | ❌ Not started |

**Total translated: ~62/393 files**
**Total remaining: ~331 files**

---

## Translation Scope

Translate ONLY user-facing educational content:

- Titles (in YAML `title:` field)
- Descriptions
- Instructions
- Explanations
- Hints text (text before code blocks)
- Question text shown to students
- Answer text shown to students (when it's natural language, not code)
- Assignment text

---

## Never Modify

### YAML Keys (frontmatter between `---` markers)

```yaml
---
id: ...
title: ...        # Translate ONLY the value, keep key unchanged
challengeType: ...
dashedName: ...   # NEVER change
msTrophyId: ...   # NEVER change
videoId: ...      # NEVER change
forumTopicId: ... # NEVER change
---
```

### Challenge Structure Markers

These markdown markers must remain EXACTLY unchanged:

```markdown
# --description--
# --instructions--
# --assignment--
# --questions--
## --text--
## --answers--
## --video-solution--
# --hints--
# --seed--
## --seed-contents--
# --before-user-code--
# --after-user-code--
# --solutions--
```

**CRITICAL:** Never change the spelling, capitalization, number of dashes, or formatting of these markers. The build system parses them exactly.

### Previous Bug (law-of-sines-video.md)

A typo `## --text#` (missing closing `--`) caused build failure. The correct form is always `## --text--`.

---

## Never Translate

### Code Blocks (between ``` markers)

```js
function add(a, b) {
  return a + b;
}
```

### Inline Code (between ` markers)

`console.log()`

### Variable Names, Function Names, Class Names

- `userName`, `calculateAverage()`, `Array.prototype.sort`

### URLs

`https://freecodecamp.org`

### File Names and Folder Names

`basic-javascript`, `law-of-sines-video.md`

### Math Formulas (LaTeX)

`$c^2 = a^2 + b^2 - 2ab\cos(C)$`

### HTML Elements (if present in file)

`<div style='margin-left: 2em;'>`, `<dfn>`, `<a href="...">`

### Test Assertions

```js
assert.isFunction(bubbleSort);
assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5]);
```

### Seed/Template Code

```js
function bubbleSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

---

## Backup Procedure

Before modifying ANY file:

1. Check if `.bak` version already exists.
2. If not, create it:
   ```bash
   cp file.md file.md.bak
   ```
3. **NEVER overwrite the backup.** If `.bak` exists, it is the original.

For this project, backups have already been created for all 393 files in the 16 folders listed above. The remaining 10 folders already have `.bak` files created.

---

## Translation Workflow

### Step 1: Create Backups (if not already done)

```powershell
$base = "curriculum/i18n-curriculum/curriculum/challenges/swahili/blocks"
$folders = @("folder-name-here")
foreach ($f in $folders) {
    $files = Get-ChildItem "$base/$f/*.md" -ErrorAction SilentlyContinue
    foreach ($file in $files) {
        if (-not (Test-Path "$($file.FullName).bak")) {
            Copy-Item $file.FullName "$($file.FullName).bak"
        }
    }
}
```

### Step 2: Read Original File

Use `read_file` tool to read the `.md` file.

### Step 3: Translate

Translate ONLY Swahili text to Serbian. Keep:
- All YAML frontmatter structure
- All markdown section markers
- All code blocks
- All inline code
- All HTML elements
- All test assertions
- All URLs

### Step 4: Save Changes

Use `apply_patch` for edits.

**IMPORTANT:** Keep patches minimal and only change user-facing Swahili text. Do not rewrite entire files unless absolutely necessary.

### Step 5: Verify Build

After completing each folder, run `pnpm build` to verify no errors were introduced.

---

## Current Working Method (June 2026)

This is the exact practical workflow currently used in this repo/session.

### 1) Pick folder and list all challenge titles

Use this to quickly see which files still have Swahili titles:

```powershell
$base='\\wsl.localhost\Ubuntu\home\gagi_\freeCodeCamp\curriculum\i18n-curriculum\curriculum\challenges\swahili\blocks\<FOLDER_NAME>'
Get-ChildItem $base -Filter '*.md' |
    Where-Object {$_.Name -notlike '*.bak'} |
    Sort-Object Name |
    ForEach-Object {
        $t = Select-String -Path $_.FullName -Pattern '^title:\s*(.*)$' | Select-Object -First 1
        if ($t) { "{0}`t{1}" -f $_.Name, $t.Matches[0].Groups[1].Value }
        else { "{0}`t<NO TITLE>" -f $_.Name }
    }
```

### 2) Read files in batches

- Read 5-10 `.md` files per batch with the `read_file` tool.
- Translate only natural-language text in `title`, `description`, `instructions`, and hint prose.
- Keep all code blocks/assertions/markers untouched.

### 3) Apply translations with minimal diffs

- Use one `apply_patch` per batch.
- Edit only lines that contain Swahili user-facing text.
- Never modify these keys: `id`, `challengeType`, `dashedName`, `forumTopicId`, `videoId`, `msTrophyId`.

### 4) Fast post-batch scan for leftover Swahili terms

Run a targeted search after each folder:

```powershell
$base='\\wsl.localhost\Ubuntu\home\gagi_\freeCodeCamp\curriculum\i18n-curriculum\curriculum\challenges\swahili\blocks\<FOLDER_NAME>'
$patterns=@('inapaswa','kurudisha','mfuatano','safu ya data','kitendakazi','thamani','Rudisha','Kagua','Ondoa','Kwa mfano','hoja ya kwanza','hoja ya pili')
Get-ChildItem $base -Filter '*.md' |
    Where-Object {$_.Name -notlike '*.bak'} |
    ForEach-Object { Select-String -Path $_.FullName -Pattern $patterns -SimpleMatch } |
    ForEach-Object { "$($_.Path):$($_.LineNumber): $($_.Line.Trim())" }
```

Expected result: no output.

### 5) Optional title-only sanity check

Use when you want a quick title-level check:

```powershell
$base='\\wsl.localhost\Ubuntu\home\gagi_\freeCodeCamp\curriculum\i18n-curriculum\curriculum\challenges\swahili\blocks\<FOLDER_NAME>'
$re='^title:\s*(.*\b(Badilisha|Kata|Geuza|Nina|Tafuta|Fanya|Rudisha|Andika|Punguza|Thibitisha|Mabadiliko|Rudia)\b.*)$'
Get-ChildItem $base -Filter '*.md' |
    Where-Object {$_.Name -notlike '*.bak'} |
    ForEach-Object { Select-String -Path $_.FullName -Pattern $re } |
    ForEach-Object { "$($_.Path):$($_.LineNumber): $($_.Line)" }
```

Note: this can return false positives for non-Swahili words in titles; always confirm with the full-term scan above.

### 6) Build validation

- User runs `pnpm build` after each completed folder batch.
- If build fails, restore from `.bak` and re-apply translation safely.

### 7) Batch size policy

- Default batch: 10 files.
- Final batch in folder: remaining files (usually 1-9).
- Report translated file list after each completed folder.

---

## File Types and Patterns

### Video Challenge Files (challengeType: 11)

Short files with:
- Title
- Description (1-2 sentences)
- One question with 4 answers
- Video solution number

Pattern: `*-video.md`

### Coding Challenge Files (challengeType: 1)

Longer files with:
- Title
- Long description with instructions
- Hints with test assertions
- Seed code
- Solution code

Pattern: alphanumeric hash `.md` (e.g., `8d5123c8c441eddfaeb5bdef.md`)

### Project Challenge Files (challengeType: 4)

Project-based challenges with:
- Title
- Description with external links
- Instructions
- Hints with test code

### Trophy Challenge Files (challengeType: 18)

Completion/trophy pages with:
- Title
- Description about completing a section

---

## Recovery Procedure

If a file becomes corrupted or build fails:

1. Identify the broken file from the error message.
2. Read the `.bak` version of that file.
3. Copy the `.bak` content back to the `.md` file to restore it.
4. Re-apply translation carefully, only to user-facing text.
5. Run `pnpm build` again.
6. Continue only after successful build.

```powershell
# Restore from backup:
$src = "curriculum/i18n-curriculum/curriculum/challenges/swahili/blocks"
Copy-Item "$src/folder/file.md.bak" "$src/folder/file.md" -Force
```

---

## Translation Examples

### Example 1: Video Challenge Title

**Swahili (original):**
```yaml
title: Sheria ya Sini
```

**Serbian (translated):**
```yaml
title: Sinusno pravilo
```

### Example 2: Description Text

**Swahili (original):**
```
Katika video hii, utafundishwa kuhusu Sheria ya Sini.
```

**Serbian (translated):**
```
U ovom videu, naučićete o sinusnom pravilu.
```

### Example 3: Hint Text Before Code

**Swahili (original):**
```
`bubbleSort` inapaswa kuwa kitendakazi.
```

**Serbian (translated):**
```
`bubbleSort` treba da bude funkcija.
```

### Example 4: Code Block (DO NOT CHANGE)

**Original:**
```js
assert.isFunction(bubbleSort);
```

**Keep exactly as-is.**

### Example 5: Section Marker (DO NOT CHANGE)

**Original:**
```markdown
## --text--
```

**Keep exactly as-is. NEVER change to `## --text#` or any other variant.**

---

## Quality Checklist

Before marking a folder as complete:

- [ ] All `.md` files in folder have been translated
- [ ] All `.bak` files exist
- [ ] YAML structure unchanged (id, challengeType, dashedName preserved)
- [ ] Section markers unchanged (`## --text--`, `## --answers--`, etc.)
- [ ] Code blocks unchanged
- [ ] Inline code unchanged
- [ ] Test assertions unchanged
- [ ] Seed/solution code unchanged
- [ ] `pnpm build` passes

---

## Known Issues and Lessons Learned

1. **law-of-sines-video.md**: Typo `## --text#` caused build failure. Always verify section markers have correct `--` formatting.

2. **HTML entities in SEARCH blocks**: Files containing `<`, `>`, or other HTML entities can cause `replace_in_file` SEARCH/REPLACE to fail. Use `write_to_file` instead for such files.

3. **Long files (>100 lines)**: For files with many code blocks and test assertions, it's safer to use `replace_in_file` with targeted SEARCH/REPLACE blocks rather than rewriting the entire file. Only use `write_to_file` for small files or when `replace_in_file` fails.

4. **Special characters**: Unicode characters in Serbian (č, ć, š, ž, đ) work fine in the markdown files. No encoding issues expected.

---

## PowerShell Helper Scripts

### Create backups for a folder:
```powershell
$base = "curriculum/i18n-curriculum/curriculum/challenges/swahili/blocks"
Get-ChildItem "$base/folder-name/*.md" | ForEach-Object {
    if (-not (Test-Path "$($_.FullName).bak")) {
        Copy-Item $_.FullName "$($_.FullName).bak"
    }
}
```

### List all folders and file counts:
```powershell
$base = "curriculum/i18n-curriculum/curriculum/challenges/swahili/blocks"
Get-ChildItem $base -Directory | ForEach-Object {
    $count = (Get-ChildItem "$($_.FullName)/*.md" -ErrorAction SilentlyContinue | Measure-Object).Count
    Write-Host "$($_.Name) : $count files"
}
```

### Restore a file from backup:
```powershell
$base = "curriculum/i18n-curriculum/curriculum/challenges/swahili/blocks"
Copy-Item "$base/folder/file.md.bak" "$base/folder/file.md" -Force
```

### Check if any files still contain Swahili text patterns:
```powershell
$base = "curriculum/i18n-curriculum/curriculum/challenges/swahili/blocks"
Get-ChildItem "$base/folder-name/*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match "inapaswa|kurudisha|kitendakazi|safu ya data") {
        Write-Host "Possible untranslated: $($_.Name)"
    }
}
```

---

## Success Criteria

The translation is considered complete ONLY when:

1. All 16 folders are fully translated.
2. All `.bak` files exist for every translated file.
3. `pnpm build` succeeds without errors.
4. No curriculum functionality is broken.