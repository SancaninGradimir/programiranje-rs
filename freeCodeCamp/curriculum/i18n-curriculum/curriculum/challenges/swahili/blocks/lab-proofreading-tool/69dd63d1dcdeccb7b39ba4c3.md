---
id: 69dd63d1dcdeccb7b39ba4c3
title: Napravite alat za proveru grešaka u pisanju
challengeType: 26
dashedName: build-a-proofreading-tool
---

# --description--

U ovoj laboratoriji, ćeš napraviti alat za proveru tekstualnih grešaka koji analizira sekvence reči radi pronalaženja palindroma i repetitivnih fraza.

Palindrome je reč koja se čita isto napred i nazad. Na primer, `"racecar"` i `"level"` su palindromi, ali `"hello"` nije.

Fraza je niz reči koje slede jedna za drugom. Kwa mfano, u `["the", "cat", "sat", "the", "cat"]`, fraza `"the cat"` (niz od 2 reči) pojavljuje se na pozicijama 0 i 3.

**Cilj:** Popunite korisničke priče ispod i prođite sve testove da biste završili ovu laboratoriju.

**Priče korisnika:**

1. Treba definisati funkciju nazvanu `isPalindrome` koja prima sekvencu slova `word` kao svoj argument. Funkcija bi trebalo da vrati `true` ako se reč čita isto napred i nazad (bez obzira na veliko ili malo slovo), i `false` inače.

2. Morate definisati funkciju nazvanu `findPalindromeBreaks` koja prima niz podataka `words` kao svoj argument. Funkcija treba da vrati niz stringova koji nisu palindromi. Treba da vrati prazan niz ako je unos prazan.

3. Treba definisati funkciju nazvanu `findRepeatedPhrases` koja prima niz podataka `words` i broj `phraseLength` kao svoje argumente. Funkcija bi trebalo da vrati niz svih početnih indeksa gde se sekvenca reči `phraseLength` pojavljuje više od jednom u nizu — uključujući indeks prvog pojavljivanja. Treba da vrati prazan niz ako je `phraseLength` veći ili jednak dužini `words`. Takođe treba uzeti u obzir zatvorena ponavljajuća sekvenca.

4. Trebalo bi da se definiše funkcija nazvana `analyzeTexts` koja prima niz podataka `texts` i broj `phraseLength` kao svoje argumente. Ta funkcija bi trebalo da obradi svaki element od `texts` (svaki predstavljajući niz stringova) i vrati niz objekata, pri čemu svaki ima parametre `repeatedPhrases` i `palindromeBreaks`. Trebalo bi da vrati prazan niz ako je `texts` prazan.

# --hints--

`isPalindrome` Trebalo bi da bude funkcija.

```js
assert.isFunction(isPalindrome);
```

`isPalindrome` trebalo bi vratiti `true` za palindrom.

```js
assert.isTrue(isPalindrome("racecar"));
assert.isTrue(isPalindrome("a"));
```

`isPalindrome` mora da vrati `true` bez obzira na veliko ili malo slovo.

```js
assert.isTrue(isPalindrome("Level"));
```

`isPalindrome` mora da vrati `false` na nepalindrom.

```js
assert.isFalse(isPalindrome("hello"));
```

`findPalindromeBreaks` Trebalo bi da bude funkcija.

```js
assert.isFunction(findPalindromeBreaks);
```

`findPalindromeBreaks` Trebalo bi da vrati prazan red za prazan unos.

```js
assert.sameDeepOrderedMembers(findPalindromeBreaks([]), []);
```

`findPalindromeBreaks` Trebalo bi da vrati primere koji nisu palindromi.

```js
assert.sameDeepOrderedMembers(findPalindromeBreaks(["racecar", "hello", "level"]), [1]);
```

`findPalindromeBreaks` Trebalo bi da vrati prazan red kada su sve reči palindromi.

```js
assert.sameDeepOrderedMembers(findPalindromeBreaks(["racecar", "level", "aba"]), []);
```

`findRepeatedPhrases` Trebalo bi da bude funkcija.

```js
assert.isFunction(findRepeatedPhrases);
```

`findRepeatedPhrases` treba da vrati prazan red kada `phraseLength` je veći ili jednak dužini `words`.

```js
assert.sameDeepOrderedMembers(findRepeatedPhrases(["the", "cat"], 2), []);
```

`findRepeatedPhrases` treba vratiti prazan red kada `phraseLength` je veće od dužine `words`.

```js
assert.sameDeepOrderedMembers(findRepeatedPhrases(["the"], 2), []);
```

`findRepeatedPhrases` bi trebalo da vrati sve početne primere gde se izjava ponavlja, uključujući i prvi slučaj.

```js
assert.sameDeepOrderedMembers(findRepeatedPhrases(["the", "cat", "sat", "the", "cat"], 2), [0, 3]);
```

`findRepeatedPhrases` Trebalo bi vratiti sve početne primere ponavljajućih cikličnih fraza.

```js
assert.sameDeepOrderedMembers(findRepeatedPhrases(["ba", "ba", "ba"], 2), [0, 1]);
```

`analyzeTexts` trebalo bi da bude funkcija.

```js
assert.isFunction(analyzeTexts);
```

`analyzeTexts` Trebalo bi da vrati prazan red za prazan unos.

```js
assert.sameDeepOrderedMembers(analyzeTexts([], 2), []);
```

`analyzeTexts` rezultati bi trebalo da imaju parametre od `repeatedPhrases` i `palindromeBreaks`.

```js
const result = analyzeTexts([["racecar", "hello"]], 2);
assert.property(result[0], "repeatedPhrases");
assert.property(result[0], "palindromeBreaks");
```

`analyzeTexts` trebalo bi da izračuna rezultate tačno za svaki tekst.

```js
const result = analyzeTexts([["racecar", "hello", "level", "hello"]], 1);
assert.sameDeepOrderedMembers(result[0].repeatedPhrases, [1, 3]);
assert.sameDeepOrderedMembers(result[0].palindromeBreaks, [1, 3]);
```

`analyzeTexts` Trebalo bi da obrađuje velike količine teksta i vrati rezultate za svaku stavku.

```js
const result = analyzeTexts([["racecar", "hello"], ["level", "world", "level"]], 1);
assert.lengthOf(result, 2);
assert.sameDeepOrderedMembers(result[1].palindromeBreaks, [1]);
assert.sameDeepOrderedMembers(result[1].repeatedPhrases, [0, 2]);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function isPalindrome(word) {
  const lower = word.toLowerCase();
  for (let i = 0; i < Math.floor(lower.length / 2); i++) {
    if (lower[i] !== lower[lower.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function findPalindromeBreaks(words) {
  const breaks = [];
  if (words.length === 0) return breaks;
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }
  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  const result = [];
  if (phraseLength >= words.length) return result;

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    let found = false;

    for (let j = 0; j <= words.length - phraseLength; j++) {
      if (i === j) continue;
      if (words.slice(j, j + phraseLength).join(" ") === phrase) {
        found = true;
        break;
      }
    }

    if (found) result.push(i);
  }

  return result;
}

function analyzeTexts(texts, phraseLength) {
  const results = [];
  if (texts.length === 0) return results;

  for (let i = 0; i < texts.length; i++) {
    results.push({
      repeatedPhrases: findRepeatedPhrases(texts[i], phraseLength),
      palindromeBreaks: findPalindromeBreaks(texts[i])
    });
  }

  return results;
}
```
