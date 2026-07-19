---
id: 616d47bc9eedc4bc7f621bec
title: Korak 10
challengeType: 0
dashedName: step-10
---

# --description--

Sledeće, unutar elementa `div`, dodajte drugi element od `div` i dodelite mu klasu za `marker`.

# --hints--

Tvoja nova karakteristika `div` treba da ima labelu za otvaranje.

```js
assert([...code.matchAll(/<div.*?>/gi)][1]);
```

Tvoja nova komponenta `div` treba da ima zatvarajući tag.

```js
assert([...code.matchAll(/<\/div\s*>/gi)][1]);
```

Trebalo bi da postavite u vaš novi element/komponentu za `div`, unutar `div` koji ima klasu objekata `container`.

```js
assert(document.querySelector('.container')?.children[0]?.localName === 'div');
```

Trebalo bi mu dati tvoju novu osobinu iz klase objekata `div` `marker`.

```js
const containerChildren = [...document.querySelector('.container')?.children];
assert(containerChildren.every(child => child.classList?.contains('marker')));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Markers</title>
    <link rel="stylesheet" href="styles.css">
  </head>
--fcc-editable-region--
  <body>
    <h1>CSS Color Markers</h1>
    <div class="container">
    </div>
  </body>
--fcc-editable-region--
</html>
```

```css
h1 {
  text-align: center;
}
```
