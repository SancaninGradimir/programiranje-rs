---
id: 68ad9821ee41baad9cb0fd4e
title: Kreiraj funkciju za razliku jednačine
challengeType: 26
dashedName: lab-symmetric-difference
---

# --description--

Uporedite dve redne podatke i vratite novi red sa svim elementima koji se nalaze samo u jednom od ova dva reda, ali ne u oba. Drugim rečima, vratite razliku između ta dva reda.

Primer:

- Red A: `["diamond", "stick", "apple"]`

- Red B: `["stick", "emerald", "bread"]`

Rezultati: `["diamond", "apple", "emerald", "bread"]`

**Cilj:** Popunite priče korisnika navedene ispod i položite sve testove kako biste završili ovaj laboratorijski rad.

**Priče korisnika:**

1. Tvoja funkcija `diffArray` mora da vrati red podataka.
2. Tvoja funkcija mora da primi dva argumenta, oba u obliku redova podataka.
3. Tvoja funkcija mora da koristi metodu `filter`.
4. Tvoja funkcija mora da vrati razliku u jednakosti ova dva reda.
5. Tvoja funkcija mora da vrati prazan red ako ne postoji razlika u jednakosti.


# --hints--

Trebalo bi da imaš funkciju nazvanu `diffArray`.

```js
assert.isFunction(diffArray);
```

Funkcija `diffArray` mora da koristi metodu `filter` za filtriranje stavki koje su prisutne u oba reda.

```js
assert(/\.filter\(/.test(diffArray.toString()));
```

`diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])` trebalo bi da vrati `["pink wool"]`.

```js
assert.deepEqual(diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
), ["pink wool"]);
```

`diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])` trebalo bi da vrati `["diorite", "pink wool"]`.

```js
assert.deepEqual(diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["andesite", "grass", "dirt", "dead shrub"]
), ["diorite", "pink wool"]);
```

`diffArray` Trebalo bi da vrati prazan red kada ga pozovu dva identična reda.

```js
assert.deepEqual(diffArray(
  ["andesite", "grass", "dirt", "dead shrub"],
  ["andesite", "grass", "dirt", "dead shrub"]
), []);
```

`diffArray(["pen", "book"], ["book", "pencil", "notebook"])` treba da vrati `["pen", "pencil", "notebook"]`.

```js
assert.deepEqual(diffArray(
  ["pen", "book"],
  ["book", "pencil", "notebook"]
), ["pen", "pencil", "notebook"]);
```

`diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"])` treba da vrati `["car", "train", "plane"]`.

```js
assert.deepEqual(diffArray(
  ["car", "bike", "bus"],
  ["bike", "train", "plane", "bus"]
), ["car", "train", "plane"]);
```

`diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"])` trebalo bi da vrati `["banana", "grape"]`.

```js
assert.deepEqual(diffArray(
  ["apple", "orange"],
  ["apple", "orange", "banana", "grape"]
), ["banana", "grape"]);
```

`diffArray([], ["apple", "banana"])` treba da vrati `["apple", "banana"]`.

```js
assert.deepEqual(diffArray(
  [],
  ["apple", "banana"]
), ["apple", "banana"]);
```

`diffArray(["apple", "banana"], [])` treba da vrati `["apple", "banana"]`.

```js
assert.deepEqual(diffArray(
  ["apple", "banana"],
  []
), ["apple", "banana"]);
```

`diffArray([], [])` trebalo bi da vrati `[]`.

```js
assert.deepEqual(diffArray(
  [], 
  []
), []);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function diffArray(arr1, arr2) {
  return arr1
    .filter(item => !arr2.includes(item))
    .concat(arr2.filter(item => !arr1.includes(item)));
}
```
