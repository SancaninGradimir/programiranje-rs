---
id: cf1111c1c11feddfaeb7bdef
title: Ugnjezdite Jedan Niz Unutar Drugog Niza
challengeType: 1
forumTopicId: 18247
dashedName: nest-one-array-within-another-array
---

# --description--

Takodje mozete ugnjezdavati nizove unutar drugih nizova, ovako:

```js
const teams = [["Bulls", 23], ["White Sox", 45]];
```

Ovo se jos naziva i <dfn>visedimenzionalni niz</dfn>.

# --instructions--

Napravite ugnjezdeni niz pod nazivom `myArray`.

# --hints--

`myArray` treba da sadrzi barem jedan niz ugnjezden unutar drugog niza.

```js
assert(Array.isArray(myArray) && myArray.some(Array.isArray));
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const myArray = [];
```

# --solutions--

```js
const myArray = [[1, 2, 3]];
```
