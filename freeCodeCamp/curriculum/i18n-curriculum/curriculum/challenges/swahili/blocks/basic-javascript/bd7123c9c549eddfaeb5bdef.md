---
id: bd7123c9c549eddfaeb5bdef
title: Koristite Uglastu Notaciju za Prvi Karakter u Stringu
challengeType: 1
forumTopicId: 18341
dashedName: use-bracket-notation-to-find-the-first-character-in-a-string
---

# --description--

<dfn>Uglasta notacija</dfn> je nacin da pristupite karakteru na odredjenom indeksu u stringu.

Mnogi moderni programski jezici, kao JavaScript, ne pocinju brojanje od 1 kao ljudi. Pocinju od 0. To je poznato kao <dfn>indeksiranje od nule</dfn>.

Na primer, karakter na indeksu 0 u reci `Charles` je `C`. Dakle, ako je `const firstName = "Charles"`, vrednost prvog karaktera stringa mozete dobiti pomocu `firstName[0]`.

Primer:

```js
const firstName = "Charles";
const firstLetter = firstName[0];
```

`firstLetter` ce imati vrednost stringa `C`.

# --instructions--

Koristite uglastu notaciju da pronadjete prvi karakter u promenljivoj `lastName` i dodelite ga promenljivoj `firstLetterOfLastName`.

**Savet:** Pogledajte primer iznad ako zapnete.

# --hints--

Promenljiva `firstLetterOfLastName` treba da ima vrednost `L`.

```js
assert(firstLetterOfLastName === 'L');
```

Treba da koristite uglastu notaciju.

```js
assert(__helpers.removeJSComments(code).match(/firstLetterOfLastName\s*=\s*lastName\s*\[\s*\d\s*\]/));
```

# --seed--

## --seed-contents--

```js
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
```
