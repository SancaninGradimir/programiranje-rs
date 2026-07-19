---
id: 5dfb5ecbeacea3f48c6300b1
title: Korak 23
challengeType: 0
dashedName: step-23
---

# --description--

Kipengele `li` se koristi za kreiranje stavke liste u uređeno ili neuređeno spisku.

Ovde je primer elemenata liste u neuređenu listu:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

Unutar elementa `ul`, uključite tri stavke liste da prikaže tri stvari koje mačke vole:

`catnip`

`laser pointers`

`lasagna`

# --hints--

Trebalo bi da imaš tri elementa `li`. Svaki element `li` treba da ima svoju oznaku za otvaranje i oznaku za zatvaranje.

```js
assert.lengthOf(document.querySelectorAll('li'),3)
assert.lengthOf(code.match(/<\/li\>/g),3);
```

Trebalo bi da imaš tri elementa sa tekstom `li`, `catnip`, `laser pointers` i `lasagna` u bilo kom redosledu. Možda si propustio neki tekst ili imaš greške u kucanju.

```js
assert.deepStrictEqual(
  [...document.querySelectorAll('li')]
    .map((item) => item.innerText.toLowerCase())
    .sort((a, b) => a.localeCompare(b)),
  ['catnip', 'lasagna', 'laser pointers']
);
```

Tri elementa za `li` treba da budu postavljeni između otvarajućeg i zatvarajućeg taga elementa `ul`.

```js
assert(
  [...document.querySelectorAll('li')].filter(
    (item) => item.parentNode.nodeName === 'UL'
  ).length === 3
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <section>
        <h2>Cat Photos</h2>
        <p>Everyone loves <a href="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg">cute cats</a> online!</p>
        <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
        <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
--fcc-editable-region--
        <ul>
          
        </ul>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```
