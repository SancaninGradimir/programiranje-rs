---
id: cf1111c1c12feddfaeb2bdef
title: Generisanje Slucajnih Celih Brojeva Unutar Opsega
challengeType: 1
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

Mozete generisati slucajan ceo broj u opsegu od nule do nekog broja. Takodje mozete izabrati drugacije minimalne vrednosti za taj opseg.

Postavljate minimalnu vrednost `min` i maksimalnu vrednost `max`.

Ova formula daje slucajan ceo broj u opsegu od `min` do `max`. Odvojite malo vremena da procitate i pokusate da razumete sta ovaj kod radi:

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

Napravite funkciju `randomRange` koja prima opseg `myMin` i `myMax` i vraca slucajan ceo broj koji je veci ili jednak `myMin`, a manji ili jednak `myMax`.

# --hints--

Najmanji slucajni broj koji `randomRange` moze da generiuse treba da bude jednak minimalnoj vrednosti, `myMin`.

```js
assert(
  (function () {
    if (typeof randomRange !== 'function') {
      return false;
    }

    var calcMin = 100;
    for (var i = 0; i < 100; i++) {
      var result = randomRange(5, 15);
      calcMin = Math.min(calcMin, result);
    }

    return calcMin === 5;
  })()
);
```

Najveci slucajni broj koji `randomRange` moze da generiuse treba da bude jednak maksimalnoj vrednosti, `myMax`.

```js
assert(
  (function () {
    if (typeof randomRange !== 'function') {
      return false;
    }

    var calcMax = -100;
    for (var i = 0; i < 100; i++) {
      var result = randomRange(5, 15);
      calcMax = Math.max(calcMax, result);
    }

    return calcMax === 15;
  })()
);
```

Slucajni broj koji generiuse `randomRange` treba da bude ceo broj, a ne decimalni.

```js
assert(randomRange(0, 1) % 1 === 0);
```

`randomRange` treba da koristi `myMax` i `myMin` i vraca slucajan broj unutar vaseg opsega.

```js
assert(
  (function () {
    if (
      __helpers.removeJSComments(code).match(/myMax/g).length > 1 &&
      __helpers.removeJSComments(code).match(/myMin/g).length > 2 &&
      __helpers.removeJSComments(code).match(/Math.floor/g) &&
      __helpers.removeJSComments(code).match(/Math.random/g)
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --seed-contents--

```js
function randomRange(myMin, myMax) {
  return 0;
}
```

# --solutions--

```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
```
