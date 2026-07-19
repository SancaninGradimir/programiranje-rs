---
id: 66cc1deb1f04647f2aabee2b
title: Korak 15
challengeType: 1
dashedName: step-15
---

# --description--

Kada pogledate u konzoli, videćete vrednost `Infinity`. `Infinity` je posebna vrednost u JavaScript koja predstavlja broj veći od bilo kog drugog broja.

Deljenje sa nulom nije validna operacija u matematici.

Da biste obradili ovaj jedinstveni slučaj, trebalo bi da ispravite svoju funkciju od `calculateQuotient` umesto toga osiguravanjem da je `num2` nula.

Ako je tako, funkcija treba da vrati niz karaktera `"Error: Division by zero"`. Inače, treba da vrati rezultat deljenja `num1` sa `num2`.

# --hints--

Vaša funkcija za `calculateQuotient` treba da vrati string `"Error: Division by zero"` ako je `num2` nula.

```js
assert.strictEqual(calculateQuotient(10, 0), 'Error: Division by zero');
assert.strictEqual(calculateQuotient(3, 0), 'Error: Division by zero');
```

Tvoja funkcija za `calculateQuotient` treba da vrati rezultat deljenja `num1` sa `num2` ako `num2` nije nula.

```js
assert.strictEqual(calculateQuotient(10, 2), 5);
assert.strictEqual(calculateQuotient(3, 3), 1);
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
--fcc-editable-region--
  return num1 / num2;
--fcc-editable-region--
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));
```
