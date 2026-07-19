---
id: bd7123c9c444eddfaeb5bdef
title: Deklarisite String Promenljive
challengeType: 1
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

Ranije ste koristili sledeci kod da deklarisete promenljivu:

```js
var myName;
```

Ali mozete deklarisati i string promenljivu ovako:

```js
var myName = "your name";
```

`"your name"` se naziva <dfn>string literal</dfn>. String literal, odnosno string, je niz od nula ili vise karaktera zatvoren jednostrukim ili dvostrukim navodnicima.

# --instructions--

Napravite dve nove string promenljive: `myFirstName` i `myLastName`, i postavite njihove vrednosti na vase ime i prezime, redom.

# --hints--

`myFirstName` treba da bude string sa najmanje jednim karakterom.

```js
assert(
  (function () {
    if (
      typeof myFirstName !== 'undefined' &&
      typeof myFirstName === 'string' &&
      myFirstName.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

`myLastName` treba da bude string sa najmanje jednim karakterom.

```js
assert(
  (function () {
    if (
      typeof myLastName !== 'undefined' &&
      typeof myLastName === 'string' &&
      myLastName.length > 0
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

```

# --solutions--

```js
var myFirstName = "Alan";
var myLastName = "Turing";
```
