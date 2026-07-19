---
id: adf08ec01beb4f99fc7a68f2
title: Izbaci Falsy Vrednosti
challengeType: 1
forumTopicId: 16014
dashedName: falsy-bouncer
---

# --description--

Uklonite sve falsy vrednosti iz niza. Vratite novi niz; nemojte menjati originalni ulazni niz.

Falsy vrednosti u JavaScript-u su `false`, `null`, `0`, `""`, `undefined` i `NaN`.

Savet: Probajte da svaku vrednost konvertujete u true/false.

# --hints--

`bouncer([7, "ate", "", false, 9])` treba da vrati `[7, "ate", 9]`.

```js
assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
```

`bouncer(["a", "b", "c"])` treba da vrati `["a", "b", "c"]`.

```js
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
```

`bouncer([false, null, 0, NaN, undefined, ""])` treba da vrati `[]`.

```js
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
```

`bouncer([null, NaN, 1, 2, undefined])` treba da vrati `[1, 2]`.

```js
assert.deepEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2]);
```

Ne treba menjati `arr`.

```js
const arr = ['a', false, 0, 'Naomi'];
bouncer(arr);
assert.deepEqual(arr, ['a', false, 0, 'Naomi']);
```

# --seed--

## --seed-contents--

```js
function bouncer(arr) {
  return arr;
}

bouncer([7, 'ate', '', false, 9]);
```

# --solutions--

```js
function bouncer(arr) {
  return arr.filter(e => e);
}

bouncer([7, 'ate', '', false, 9]);
```
