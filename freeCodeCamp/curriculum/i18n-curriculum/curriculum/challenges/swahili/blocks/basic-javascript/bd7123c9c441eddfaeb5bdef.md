---
id: bd7123c9c441eddfaeb5bdef
title: Razumevanje Boolean Vrednosti
challengeType: 1
forumTopicId: 301176
dashedName: understanding-boolean-values
---

# --description--

Jos jedan tip podataka je <dfn>boolean vrednost</dfn>. Boolean moze imati samo jednu od dve vrednosti: `true` ili `false`. U osnovi, to je kao mali prekidac, gde je `true` ukljuceno, a `false` iskljuceno. Ta dva stanja su medjusobno iskljuciva.

**Napomena:** Boolean vrednosti se nikada ne pisu pod navodnicima. Stringovi `"true"` i `"false"` nisu boolean vrednosti i nemaju posebno znacenje u JavaScript-u.

# --instructions--

Izmenite funkciju `welcomeToBooleans` tako da vraca `true` umesto `false`.

# --hints--

Funkcija `welcomeToBooleans()` treba da vrati boolean vrednost (`true` ili `false`).

```js
assert(typeof welcomeToBooleans() === 'boolean');
```

`welcomeToBooleans()` treba da vrati `true`.

```js
assert(welcomeToBooleans() === true);
```

# --seed--

## --seed-contents--

```js
function welcomeToBooleans() {
  // Only change code below this line

  return false; // Change this line

  // Only change code above this line
}
```

# --solutions--

```js
function welcomeToBooleans() {
  return true; // Change this line
}
```
