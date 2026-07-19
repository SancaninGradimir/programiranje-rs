---
id: 686daa7ed79ceacd0b264e7e
title: Korak 3
challengeType: 0
dashedName: step-3
---

# --description--

Element `path` zahteva da mu se definiše oblik. Tek tada ulazi svojstvo elementa `d`. Koristi se za kreiranje sekvence komandnih slova i brojeva koji crtaju oblik.

Ova slova označavaju komande kao pomeranje, crtanje linije i zatvaranje, dok brojevi predstavljaju koordinaciju.

Postavi svojstvo elementa `d` na srcobranje `M12 21s-6-4.35-9.33-8.22C-.5 7.39 3.24 1 8.4 4.28 10.08 5.32 12 7.5 12 7.5s1.92-2.18 3.6-3.22C20.76 1 24.5 7.39 21.33 12.78 18 16.65 12 21 12 21z`.

# --hints--

Trebalo bi da imaš atribut elementa `d` na tvom elementu `path`.

```js
const path = document.querySelector('path');
const d = path.getAttribute('d');
assert.exists(d);
```

Trebalo bi da postavite atribut elementa `d` na `M12 21s-6-4.35-9.33-8.22C-.5 7.39 3.24 1 8.4 4.28 10.08 5.32 12 7.5 12 7.5s1.92-2.18 3.6-3.22C20.76 1 24.5 7.39 21.33 12.78 18 16.65 12 21 12 21z`

```js
const path = document.querySelector('path');
const d = path.getAttribute('d');
assert.strictEqual(
  d,
  'M12 21s-6-4.35-9.33-8.22C-.5 7.39 3.24 1 8.4 4.28 10.08 5.32 12 7.5 12 7.5s1.92-2.18 3.6-3.22C20.76 1 24.5 7.39 21.33 12.78 18 16.65 12 21 12 21z'
);
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
      <path
      --fcc-editable-region--
        
      --fcc-editable-region--
      ></path>
    </svg>
  </body>
</html>
```
