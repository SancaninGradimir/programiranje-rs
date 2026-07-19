---
id: 686daa7ed79ceacd0b264e7d
title: Korak 2
challengeType: 0
dashedName: step-2
---

# --description--

Trebalo bi da smestite unutar jedne komponente `path` u vašu komponentu `svg` kako biste prikazali sliku.

Kreiraj element za `path`.

# --hints--

Trebalo bi da imaš element `path` postavljen unutar tvog elementa `svg`.

```js
const path = document.querySelector('svg path');
assert.exists(path);
```

# --seed--

## --seed-contents--

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Heart Icon</title>
  </head>
  <body>
    <svg>
    --fcc-editable-region--
      
    --fcc-editable-region--
    </svg>
  </body>
</html>
```
