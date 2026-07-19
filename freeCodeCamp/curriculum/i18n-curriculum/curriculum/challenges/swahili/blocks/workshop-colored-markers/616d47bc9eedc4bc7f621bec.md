---
id: 616d47bc9eedc4bc7f621bec
title: Korak 5
challengeType: 0
dashedName: step-5
---

# --description--

U sledećem elementu od `div`, dodaj drugi element sa `div` i dodeli mu klasu `marker`.

# --hints--

Tvoja nova karakteristika `div` treba da ima oznaku za otvaranje.

```js
assert.exists([...code.matchAll(/<div.*?>/gi)][1]);
```

Vaša nova funkcionalnost za `div` bi trebalo da ima zatvarajući tag.

```js
assert.exists([...code.matchAll(/<\/div\s*>/gi)][1]);
```

Trebalo bi da ga smestite unutar vašeg novog elementa `div`, unutar `div` koji ima klasu objekta `container`.

```js
assert.strictEqual(document.querySelector('.container')?.children[0]?.localName, 'div');
```

Treba da mu dodaš svoj novi atribut iz klase entiteta `div` i `marker`.

```js
const containerChildren = [...document.querySelector('.container')?.children];
assert.isNotEmpty(containerChildren)
containerChildren.forEach(child => assert.isTrue(child.classList?.contains('marker')));
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
  <body>
    <h1>CSS Color Markers</h1>
    <div class="container">
--fcc-editable-region--
      
--fcc-editable-region--
    </div>
  </body>
</html>
```

```css
h1 {
  text-align: center;
}
```
