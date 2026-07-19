---
id: af2170cad53daa0770fabdea
title: Mutacije
challengeType: 1
forumTopicId: 16025
dashedName: mutations
---

# --description--

Vratite `true` ako string u prvom elementu niza sadrzi sva slova stringa iz drugog elementa niza.

Na primer, `["hello", "Hello"]` treba da vrati `true`, jer su sva slova drugog stringa prisutna u prvom, bez obzira na velika i mala slova.

Par `["hello", "hey"]` treba da vrati `false`, jer string `hello` ne sadrzi `y`.

Na kraju, `["Alien", "line"]` treba da vrati `true`, jer su sva slova iz `line` prisutna u `Alien`.

# --hints--

`mutation(["hello", "hey"])` treba da vrati `false`.

```js
assert.isFalse(mutation(['hello', 'hey']));
```

`mutation(["hello", "Hello"])` treba da vrati `true`.

```js
assert.isTrue(mutation(['hello', 'Hello']));
```

`mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])` treba da vrati `true`.

```js
assert.isTrue(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']));
```

`mutation(["Mary", "Army"])` treba da vrati `true`.

```js
assert.isTrue(mutation(['Mary', 'Army']));
```

`mutation(["Mary", "Aarmy"])` treba da vrati `true`.

```js
assert.isTrue(mutation(['Mary', 'Aarmy']));
```

`mutation(["Alien", "line"])` treba da vrati `true`.

```js
assert.isTrue(mutation(['Alien', 'line']));
```

`mutation(["floor", "for"])` treba da vrati `true`.

```js
assert.isTrue(mutation(['floor', 'for']));
```

`mutation(["hello", "neo"])` treba da vrati `false`.

```js
assert.isFalse(mutation(['hello', 'neo']));
```

`mutation(["voodoo", "no"])` treba da vrati `false`.

```js
assert.isFalse(mutation(['voodoo', 'no']));
```

`mutation(["ate", "date"])` treba da vrati `false`.

```js
assert.isFalse(mutation(['ate', 'date']));
```

`mutation(["Tiger", "Zebra"])` treba da vrati `false`.

```js
assert.isFalse(mutation(['Tiger', 'Zebra']));
```

`mutation(["Noel", "Ole"])` treba da vrati `true`.

```js
assert.isTrue(mutation(['Noel', 'Ole']));
```

# --seed--

## --seed-contents--

```js
function mutation(arr) {
  return arr;
}

mutation(['hello', 'hey']);
```

# --solutions--

```js
function mutation(arr) {
  let hash = Object.create(null);

  arr[0]
    .toLowerCase()
    .split('')
    .forEach(c => (hash[c] = true));

  return !arr[1]
    .toLowerCase()
    .split('')
    .filter(c => !hash[c]).length;
}

mutation(['hello', 'hey']);
```
