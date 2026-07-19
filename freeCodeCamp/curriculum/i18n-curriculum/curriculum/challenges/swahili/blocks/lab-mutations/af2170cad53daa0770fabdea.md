---
id: af2170cad53daa0770fabdea
title: Implementiraj algoritam promena
challengeType: 26
dashedName: implement-the-mutations-algorithm
---

# --description--

**Cilj:** Popunite korisničke priče ispod i prođite sve testove kako biste završili laboratorijum.

**Priče korisnika:**

1. Funkciju nazvanu `mutation` koja prima niz podataka kao svoj argument.
1. `mutation` bi trebalo da vrati `true` ako niz slova u prvom elementu niza podataka sadrži sva slova sekvence slova iz drugog elementa niza podataka, i `false` inače. Primer:
    - `mutation(["hello", "Hello"])` bi trebalo da vrati `true` jer sva slova u sekvenci slova iz drugog su u prvom, bez obzira na veličinu (velika ili mala slova).
    - `mutation(["hello", "hey"])` bi trebalo da vrati `false` jer sekvenca slova `hello` nema `y`.
    - `mutation(["Alien", "line"])` bi trebalo da vrati `true` jer sva slova u `line` su u `Alien`.

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

`mutation(["hello", "neo"])` trebalo bi da vrati `false`.

```js
assert.isFalse(mutation(['hello', 'neo']));
```

`mutation(["voodoo", "no"])` trebalo bi da vrati `false`.

```js
assert.isFalse(mutation(['voodoo', 'no']));
```

`mutation(["ate", "date"])` trebalo bi da vrati `false`.

```js
assert.isFalse(mutation(['ate', 'date']));
```

`mutation(["Tiger", "Zebra"])` treba da vrati `false`.

```js
assert.isFalse(mutation(['Tiger', 'Zebra']));
```

`mutation(["Noel", "Ole"])` treba vratiti `true`.

```js
assert.isTrue(mutation(['Noel', 'Ole']));
```

# --seed--

## --seed-contents--

```js
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
