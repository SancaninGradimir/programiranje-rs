---
id: bd7123c9c450eddfaeb5bdef
title: Koristite Uglastu Notaciju za N-ti Karakter u Stringu
challengeType: 1
forumTopicId: 18343
dashedName: use-bracket-notation-to-find-the-nth-character-in-a-string
---

# --description--

Takodje mozete koristiti <dfn>uglaste zagrade</dfn> da pristupite karakteru na odredjenoj poziciji u stringu.

Zapamtite da racunari brojanje pocinju od `0`, pa je prvi karakter zapravo na poziciji nula.

Primer:

```js
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
```

`secondLetterOfFirstName` ce imati vrednost stringa `d`.

# --instructions--

Postavite `thirdLetterOfLastName` tako da bude jednako trecem karakteru promenljive `lastName` koristeci uglastu notaciju.

**Savet:** Pogledajte primer iznad ako zapnete.

# --hints--

Promenljiva `thirdLetterOfLastName` treba da ima vrednost `v`.

```js
assert(thirdLetterOfLastName === 'v');
```

Treba da koristite uglastu notaciju.

```js
assert(__helpers.removeJSComments(code).match(/thirdLetterOfLastName\s*=\s*lastName\s*\[\s*\d\s*\]/));
```

# --seed--

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];
```
