---
id: 68b7cadffed0e75a517da66f
title: "Vežba 50: Najduža reč"
challengeType: 28
dashedName: challenge-50
---

# --description--

Ako je data rečenica, vrati najdužu reč u toj rečenici.

- Ignorišite interpunkcijske znakove (`.`) prilikom određivanja dužine reči.
- Ako više reči ima istu dužinu kao najduža reč, vratite prvu naiđenu reč.

# --hints--

`getLongestWord("coding is fun")` inapaswa kurudisha `"coding"`.

```js
assert.equal(getLongestWord("coding is fun"), "coding");
```

`getLongestWord("Coding challenges are fun and educational.")` inapaswa kurudisha `"educational"`.

```js
assert.equal(getLongestWord("Coding challenges are fun and educational."), "educational");
```

`getLongestWord("This sentence has multiple long words.")` treba da vrati `"sentence"`.

```js
assert.equal(getLongestWord("This sentence has multiple long words."), "sentence");
```

# --seed--

## --seed-contents--

```js
function getLongestWord(sentence) {

  return sentence;
}
```

# --solutions--

```js
function getLongestWord(sentence) {
  const words = sentence.split(' ');

  let longest = '';
  for (let word of words) {
    const cleanWord = word.replace(/\./g, '');
    if (cleanWord.length > longest.length) {
      longest = cleanWord;
    }
  }

  return longest;
}
```
