---
id: cf1111c1c11feddfaeb1bdef
title: Iterirajte Uz JavaScript while Petlje
challengeType: 1
forumTopicId: 18220
dashedName: iterate-with-javascript-while-loops
---

# --description--

Isti kod mozete pokrenuti vise puta koristeci petlju.

Prvi tip petlje koji cemo nauciti zove se `while` petlja, jer se izvrsava dok je odredjeni uslov tacan i zaustavlja se kada taj uslov vise nije tacan.

```js
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

U gornjem primeru, `while` petlja ce se izvrsiti 5 puta i dodati brojeve od 0 do 4 u `ourArray`.

Hajde da napravimo while petlju koja ubacuje vrednosti u niz.

# --instructions--

Dodajte brojeve od 5 do 0 (ukljucivo), opadajucim redosledom, u `myArray` koristeci `while` petlju.

# --hints--

Za ovo treba da koristite `while` petlju.

```js
assert(__helpers.removeJSComments(code).match(/while/g));
```

`myArray` treba da bude jednako `[5, 4, 3, 2, 1, 0]`.

```js
assert.deepEqual(myArray, [5, 4, 3, 2, 1, 0]);
```

# --seed--

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
```
