---
id: cf1111c1c12feddfaeb1bdef
title: Generisanje Slucajnih Celih Brojeva u JavaScript-u
challengeType: 1
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

Mozete generisati slucajne decimalne brojeve pomocu `Math.random()`, ali ponekad vam trebaju slucajni celi brojevi. Sledeci postupak ce vam dati slucajan ceo broj koji nije veci od `20`:

1. Koristite `Math.random()` da generisete slucajan decimalni broj.
2. Pomnozte taj slucajni decimalni broj sa `20`.
3. Koristite `Math.floor()` da zaokruzite taj broj nadole do najblizeg celog broja.

Impajte na umu da `Math.random()` nikada ne moze da vrati `1`, pa je nemoguce dobiti `20` jer zaokruzujete nadole sa `Math.floor()`. Ovaj postupak ce vam dati slucajan ceo broj u opsegu od `0` do `19`.

Ako sve to spojite, vas kod ce izgledati ovako:

```js
Math.floor(Math.random() * 20);
```

Pozivate `Math.random()`, mnozite rezultat sa 20, pa tu vrednost prosledjujete u `Math.floor()` da je zaokruzite nadole do najblizeg celog broja.

# --instructions--

Koristite ovaj pristup da generisete i vratite slucajan ceo broj u opsegu od `0` do `9`.

# --hints--

Rezultat `randomWholeNum` treba da bude ceo broj.

```js
assert(
  typeof randomWholeNum() === 'number' &&
    (function () {
      var r = randomWholeNum();
      return Math.floor(r) === r;
    })()
);
```

Treba da koristite `Math.random` za generisanje slucajnog broja.

```js
assert(__helpers.removeJSComments(code).match(/Math.random/g).length >= 1);
```

Treba da pomnozbite rezultat `Math.random` sa 10 da dobijete broj u opsegu od nula do devet.

```js
assert(
  __helpers.removeJSComments(code).match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) ||
    __helpers.removeJSComments(code).match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g)
);
```

Treba da koristite `Math.floor` da uklonite decimalni deo broja.

```js
assert(__helpers.removeJSComments(code).match(/Math.floor/g).length >= 1);
```

# --seed--

## --seed-contents--

```js
function randomWholeNum() {
  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```
