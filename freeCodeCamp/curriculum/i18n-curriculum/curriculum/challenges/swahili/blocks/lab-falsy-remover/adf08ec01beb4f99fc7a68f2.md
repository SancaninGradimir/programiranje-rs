---
id: adf08ec01beb4f99fc7a68f2
title: Izvršiti funkciju za uklanjanje lažnih vrednosti
challengeType: 26
dashedName: implement-a-falsy-remover
---

# --description--

U ovoj laboratoriji ćete kreirati funkciju koja uklanja sve lažne vrednosti iz skupa podataka.

Vrednost laži u JavaScript je `false`, `null`, `0`, `""`, `undefined`, i `NaN`.

**Cilj**: Popunite priče korisnika ispod i prođite sve testove kako biste završili ovaj rad.

**Priče korisnika:**

1. Trebalo bi da postoji funkcija `bouncer` koja prima red podataka kao argument.
1. Funkcija `bouncer` treba da vrati novi red sa istim elementima kao i red dostavljen kao argument, ali uklonjenim lažnim vrednostima (false).
1. Funkcija `bouncer` ne sme da modifikuje red dostavljen kao argument.

Napomena: Pokušajte da konvertujete svaku vrednost u tačno ili nije tačno.

# --hints--

Trebalo bi da imaš funkciju `bouncer`.

```js
assert.isFunction(bouncer);
```

`bouncer([7, "ate", "", false, 9])` bi trebalo da vrati `[7, "ate", 9]`.

```js
assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
```

`bouncer(["a", "b", "c"])` treba da vrati `["a", "b", "c"]`.

```js
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
```

`bouncer([false, null, 0, NaN, undefined, ""])` trebalo bi da vrati `[]`.

```js
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
```

`bouncer([null, NaN, 1, 2, undefined])` treba da vrati `[1, 2]`.

```js
assert.deepEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2]);
```

Funkcija `bouncer` ne sme menjati red koji je dostavljen kao argument.

```js
const arr = ['a', false, 0, 'Naomi'];
bouncer(arr);
assert.deepEqual(arr, ['a', false, 0, 'Naomi']);
```

`bouncer([])` trebalo bi da vrati `[]`.

```js  
assert.deepEqual(bouncer([]), []);  
```  

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function bouncer(arr) {
  return arr.filter(e => e);
}
```
