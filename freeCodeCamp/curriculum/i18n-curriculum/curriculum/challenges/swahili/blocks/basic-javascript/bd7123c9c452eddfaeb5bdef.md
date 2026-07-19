---
id: bd7123c9c452eddfaeb5bdef
title: Koristite Uglastu Notaciju za N-ti Karakter od Kraja Stringa
challengeType: 1
forumTopicId: 18344
dashedName: use-bracket-notation-to-find-the-nth-to-last-character-in-a-string
---

# --description--

Mozete koristiti isto pravilo koje smo koristili za pronalazenje poslednjeg karaktera stringa da pronadjete i N-ti karakter od kraja.

Na primer, vrednost treceg karaktera od kraja stringa `const firstName = "Augusta"` mozete dobiti pomocu `firstName[firstName.length - 3]`

Primer:

```js
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
```

`thirdToLastLetter` bi imao vrednost stringa `s`.

# --instructions--

Koristite <dfn>uglaste zagrade</dfn> da pronadjete drugi karakter od kraja u stringu `lastName`.

**Savet:** Pogledajte primer iznad ako zapnete.

# --hints--

`secondToLastLetterOfLastName` treba da bude karakter `c`.

```js
assert(secondToLastLetterOfLastName === 'c');
```

Treba da koristite `.length` da dobijete drugi karakter od kraja.

```js
assert(__helpers.removeJSComments(code).match(/\.length/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
```
