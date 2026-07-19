---
id: 68ec6e8d0caee3afaaf142ef
title: Korak 8
challengeType: 0
dashedName: step-8
---

# --description--

Možete dodati više elemenata unutar elementa `div` kako biste zajedno organizovali relevantan sadržaj. Unutar elementa sa `class` od `card-container`, kreirajte još jedan element `div`. Ovo `div` će predstavljati prvu karticu knjige.

Dodaj atribut elementa ``class`` za ovaj novi element ``div``, i postavi vrednost atributa elementa ``class`` na ``card``.

# --hints--

Trebalo bi da imaš element sa `div` postavljen unutar elementa sa klasom objekta `card-container`.

```js
assert.exists(document.querySelector('.card-container div'));
```

Tvoja nova komponenta sa `div` treba da ima svojstvo komponente `class`.

```js
assert.isTrue(document.querySelector('.card-container div')?.hasAttribute('class'));
```

Tvoj novi element `div` mora imati atribut elementa `class` sa vrednošću `card`.

```js
assert.exists(document.querySelector('.card-container div.card'));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>XYZ Bookstore Page</title>
</head>

<body>
  <h1>XYZ Bookstore</h1>
  <p>Browse our collection of amazing books!</p>
  
  <div class="card-container">
--fcc-editable-region--
    
--fcc-editable-region--
  </div>
</body>

</html>
```
