---
id: 66cc1ccfefdd727e18c2ab20
title: Korak 14
challengeType: 1
dashedName: step-14
---

# --description--

`calculateQuotient` Tvoje izgleda da radi dobro, ali postoji jedan slučaj koji još nisi pokušao/pokušala.

Dodaj `console.log` koja poziva funkciju `calculateQuotient` sa argumentima `3` i `0`.

Obavezno pogledajte pažljivo rezultate ovog poziva.

# --hints--

Trebalo bi da imaš `console.log` koji poziva funkciju `calculateQuotient` sa argumentima `3` i `0`.

```js
assert.match(code, /console\.log\s*\(\s*calculateQuotient\s*\(\s*3\s*,\s*0\s*\)\s*\)\s*;?/);
```

# --seed--

## --seed-contents--

```js
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));

function calculateQuotient(num1, num2) {
  return num1 / num2;
}

console.log(calculateQuotient(7, 11));
--fcc-editable-region--

--fcc-editable-region--
```
