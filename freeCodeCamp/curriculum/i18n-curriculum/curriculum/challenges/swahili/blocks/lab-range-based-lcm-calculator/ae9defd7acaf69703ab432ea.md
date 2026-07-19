---
id: ae9defd7acaf69703ab432ea
title: Kalkulator za najmanji zajednički sadržalnik (LCM) koji zavisi od reda brojeva
challengeType: 26
dashedName: implement-a-range-based-lcm-calculator
---

# --description--

U ovoj laboratoriji, kreiraćete funkciju koja prima niz podataka sa dva broja i vraća najmanji zajednički sadržalj (NZS) tih dva broja i svih brojeva između njih.

**Cilj**: Popunite priče korisnika ispod i prođite sve testove kako biste završili ovaj rad.

**Priče korisnika:**

1. Trebalo bi da postoji funkcija `smallestCommons` koja prima niz od dve brojeve kao argumente.
1. Funkcija `smallestCommons` treba da vrati najmanji zajednički broj koji je deljiv sa oba broja, zajedno sa svim uzastopnim brojevima u opsegu između njih.
1. Funkcija treba da obradi ulaz gde ta dva broja nisu u numeričkom redosledu.

# --hints--

Trebalo bi da imaš funkciju `smallestCommons`.

```js
assert.isFunction(smallestCommons);
```

`smallestCommons([1, 5])` Trebalo bi da vrati broj.

```js
assert.isNumber(smallestCommons([1, 5]));
```

`smallestCommons([1, 5])` trebalo bi da vrati `60`.

```js
assert.strictEqual(smallestCommons([1, 5]), 60);
```

`smallestCommons([5, 1])` treba da vrati `60`.

```js
assert.strictEqual(smallestCommons([5, 1]), 60);
```

`smallestCommons([2, 10])` treba da vrati `2520`.

```js
assert.strictEqual(smallestCommons([2, 10]), 2520);
```

`smallestCommons([1, 13])` treba da vrati `360360`.

```js
assert.strictEqual(smallestCommons([1, 13]), 360360);
```

`smallestCommons([23, 18])` trebalo bi da vrati `6056820`.

```js
assert.strictEqual(smallestCommons([23, 18]), 6056820);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function smallestCommons(arr) {
  let [min, max] = arr.sort((a, b) => a - b);

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  let multiple = min;

  for (let i = min + 1; i <= max; i++) {
    multiple = lcm(multiple, i);
  }

  return multiple;
}
```
