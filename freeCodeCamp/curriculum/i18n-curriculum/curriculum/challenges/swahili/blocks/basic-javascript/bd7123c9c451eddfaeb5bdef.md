---
id: bd7123c9c451eddfaeb5bdef
title: Koristite Uglastu Notaciju za Poslednji Karakter u Stringu
challengeType: 1
forumTopicId: 18342
dashedName: use-bracket-notation-to-find-the-last-character-in-a-string
---

# --description--

Da biste dobili poslednji karakter stringa, mozete oduzeti jedan od duzine stringa.

Na primer, ako je `const firstName = "Ada"`, vrednost poslednjeg karaktera stringa mozete dobiti pomocu `firstName[firstName.length - 1]`.

Primer:

```js
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
```

`lastLetter` bi imao vrednost stringa `a`.

# --instructions--

Koristite <dfn>uglaste zagrade</dfn> da pronadjete poslednji karakter u promenljivoj `lastName`.

**Savet:** Pogledajte primer iznad ako zapnete.

# --hints--

`lastLetterOfLastName` treba da bude karakter `e`.

```js
assert(lastLetterOfLastName === 'e');
```

Treba da koristite `.length` da biste dobili poslednji karakter.

```js
assert(__helpers.removeJSComments(code).match(/\.length/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
```
