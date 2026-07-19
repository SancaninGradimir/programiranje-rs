---
id: 5f356ed6cf6eab5f15f5cfe6
title: Korak 20
challengeType: 0
dashedName: step-20
---

# --description--

Element `div` se koristi pre svega za namenu organizovanja strukture, za razliku od drugih elementa sadržaja koje ste do sada koristili. Dodajte element `div` unutar elementa `body`, a zatim premestite sve ostale elemente u novi `div`.

Unutar oznake otvaranja za `div`, dodaj atribut elementu `id` sa vrednošću `menu`.

# --hints--

Mehanizam za otvaranje `<div>` mora imati svojstvo elementa `id` postavljeno na `menu`.

```js
assert.strictEqual(document.querySelector('div')?.id, 'menu');
```

Trebalo bi da imaš oznaku za zatvaranje `</div>`.

```js
assert(code.match(/<\/div>/i));
```

Ne smete da promenite vaš deo `body` koji se nalazi. Uverite se da niste izbrisali oznaku za zatvaranje.

```js
assert.lengthOf(document.querySelectorAll('body'), 1);
```

Vaša komponenta za `div` treba biti postavljena unutar `body`.

```js
assert.equal(document.querySelector('div')?.parentElement?.tagName, 'BODY');
```

Trebalo bi da prebaciš sve ostale elemente unutar `div` novog.

```js
assert.lengthOf(document.querySelector('body > div#menu > main')?.children, 3);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cafe Menu</title>
    <link href="styles.css" rel="stylesheet"/>
  </head>
--fcc-editable-region--
  <body>
    <main>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
      <section>
        <h2>Coffee</h2>
      </section>
    </main>
  </body>
--fcc-editable-region--
</html>
```

```css
body {
  background-color: burlywood;
}

h1, h2, p {
  text-align: center;
}
```
