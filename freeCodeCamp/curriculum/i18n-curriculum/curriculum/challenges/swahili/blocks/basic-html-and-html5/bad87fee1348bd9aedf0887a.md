---
id: bad87fee1348bd9aedf0887a
title: Naslov Koriscenjem h2 Elementa
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gqf3'
forumTopicId: 18196
dashedName: headline-with-the-h2-element
---

# --description--

U narednih nekoliko lekcija, gradicemo HTML5 aplikaciju sa slikama macaka korak po korak.

`h2` element koji cete dodati u ovom koraku kreirace naslov drugog nivoa na stranici.

Ovaj element govori browseru o strukturi vaseg sajta. `h1` elementi se obicno koriste za glavne naslove, dok se `h2` elementi najcesce koriste za podnaslove. Postoje i `h3`, `h4`, `h5` i `h6` elementi za razlicite nivoe podnaslova.

# --instructions--

Dodajte `h2` tag sa tekstom "CatPhotoApp" da napravite drugi HTML element ispod vaseg `h1` elementa "Hello World".

# --hints--

Treba da napravite `h2` element.

```js
assert.lengthOf(document.querySelectorAll('h2'),1);
```

Vas `h2` element treba da ima zatvarajuci tag.

```js
assert.match(code,/<\/h2>/g);
assert.strictEqual(code.match(/<\/h2>/g).length,code.match(/<h2>/g).length);
```

Vas `h2` element treba da sadrzi tekst `CatPhotoApp`.

```js
assert.match(document.querySelector('h2').textContent,/cat(\s)?photo(\s)?app/gi);
```

Vas `h1` element treba da sadrzi tekst `Hello World`.

```js
assert.match(document.querySelector('h1').textContent,/hello(\s)+world/gi);
```

Vas `h1` element treba da bude pre vaseg `h2` elementa.

```js
assert.match(code,/<h1>\s*?.*?\s*?<\/h1>\s*<h2>\s*?.*?\s*?<\/h2>/gi);
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```
