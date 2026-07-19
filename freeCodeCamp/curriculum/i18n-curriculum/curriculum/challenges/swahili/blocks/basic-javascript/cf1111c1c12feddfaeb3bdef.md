---
id: cf1111c1c12feddfaeb3bdef
title: Koristite Uslovnu Logiku sa if Iskazima
challengeType: 1
forumTopicId: 18348
dashedName: use-conditional-logic-with-if-statements
---

# --description--

`if` iskazi se koriste za donoszenje odluka u kodu. Kljucna rec `if` govori JavaScript-u da izvrsi kod unutar viticastih zagrada pod odredjenim uslovima, definisanim u obicnim zagradama. Ti uslovi se zovu `Boolean` uslovi i mogu biti samo `true` ili `false`.

Kada se uslov evaluira kao `true`, program izvrsava iskaz unutar viticastih zagrada. Kada se boolean uslov evaluira kao `false`, iskaz unutar viticastih zagrada se nece izvrsiti.

**Pseudokod**

<blockquote>if (<i>uslov je tacan</i>) {<br>  <i>iskaz se izvrsava</i><br>}</blockquote>

**Primer**

```js
function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
```

`test(true)` vraca string `It was true`, a `test(false)` vraca string `It was false`.

Kada se `test` pozove sa vrednoscu `true`, `if` iskaz evaluira `myCondition` da vidi da li je `true` ili ne. Posto jeste, funkcija vraca `It was true`. Kada pozvamo `test` sa vrednoscu `false`, `myCondition` nije `true` i iskaz unutar viticastih zagrada se ne izvrsava, pa funkcija vraca `It was false`.

# --instructions--

Napravite `if` iskaz unutar funkcije koji vraca `Yes, that was true` ako je promenljiva `wasThatTrue` `true`, a `No, that was false` u suprotnom.

# --hints--

`trueOrFalse` treba da bude funkcija

```js
assert(typeof trueOrFalse === 'function');
```

`trueOrFalse(true)` treba da vrati string

```js
assert(typeof trueOrFalse(true) === 'string');
```

`trueOrFalse(false)` treba da vrati string

```js
assert(typeof trueOrFalse(false) === 'string');
```

`trueOrFalse(true)` treba da vrati string `Yes, that was true`

```js
assert(trueOrFalse(true) === 'Yes, that was true');
```

`trueOrFalse(false)` treba da vrati string `No, that was false`

```js
assert(trueOrFalse(false) === 'No, that was false');
```

# --seed--

## --seed-contents--

```js
function trueOrFalse(wasThatTrue) {
  // Only change code below this line



  // Only change code above this line

}
```

# --solutions--

```js
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
```
