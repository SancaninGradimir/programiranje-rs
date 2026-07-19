---
id: bd7123c9c441eddfaeb4bdef
title: Komentari U Vasem JavaScript Kodu
challengeType: 1
forumTopicId: 16783
dashedName: comment-your-javascript-code
---

# --description--

Komentari su linije koda koje JavaScript namerno ignorise. Komentari su odlican nacin da ostavite belezke sebi i drugim ljudima koji ce kasnije morati da razumeju sta kod radi.

Postoje dva nacina za pisanje komentara u JavaScript-u:

Koriscenje `//` govori JavaScript-u da ignorise ostatak teksta u trenutnoj liniji. Ovo je jednolinijski komentar:

```js
// This is an in-line comment.
```

Viselinijski komentar mozete napisati tako sto pocinje sa `/*`, a zavrsava se sa `*/`. Ovo je viselinijski komentar:

```js
/* This is a
multi-line comment */
```

**NAPOMENA:** Kada pisete kod, trebalo bi redovno da dodajete komentare kako biste objasnili sta pojedini delovi rade. Dobro napisani komentari pomazu da se razume namera koda - i drugima i vama kasnije.

# --instructions--

Pokusajte da napravite po jedan primer svakog tipa komentara.

# --hints--

Treba da napravite komentar stila `//` sa pet ili vise karaktera.

```js
assert(code.match(/(\/\/)...../g));
```

Treba da napravite komentar stila `/* */` sa pet ili vise karaktera.

```js
assert(code.match(/(\/\*)([^\/]{5,})(?=\*\/)/gm));
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
// Fake Comment
/* Another Comment */
```
