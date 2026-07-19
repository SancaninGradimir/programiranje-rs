---
id: 5efae16e3cbd2bbdab94e334
title: Korak 33
challengeType: 0
dashedName: step-33
---

# --description--

Nakon poslednjeg elementa `img`, dodaj element `figcaption` sa tekstom `Cats hate other cats.`

# --hints--

Tvoja komponenta `figcaption` mora imati otvorenu oznaku. Otvarajuće oznake imaju sledeću sintaksu: `<elementName>`.

```js
assert(document.querySelectorAll('figcaption').length === 2);
```

Vaš element za `figcaption` mora imati zatvarajući tag. Zatvarajući tagovi su `/` odmah nakon karaktera `<`.

```js
assert(code.match(/<\/figcaption\>/g).length === 2);
```

Nakon oznake zatvaranja drugog elementa od `figure`, treba da postoji element `section` iznad njega.

```js
assert.strictEqual(document.querySelectorAll('main > section')?.[1]?.lastElementChild?.nodeName, 'FIGURE');
```

Poslednji element od `img` treba da bude postavljen unutar elementa `figure`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

Tvoj element `figure` mora imati labelu za otvaranje. Labeli za otvaranje imaju sledeću sintaksu: `<elementName>`.

```js
assert(document.querySelectorAll('figure').length === 2);
```

Vaš element za `figure` treba da ima zatvarajući tag. Zatvarajući tagovi imaju `/` odmah nakon karaktera `<`.

```js
assert(code.match(/<\/figure\>/g).length === 2);
```

Element za `figcaption` treba biti postavljen unutar elementa `figure`.

```js
assert(document.querySelectorAll('figure > figcaption').length === 2);
```

Element `figcaption` koji je postavljen unutar elementa `figure` treba da bude ispod elementa `img`. Postavili ste element `img` i element `figcaption` u netačan redosled.

```js
assert(
  document.querySelectorAll('figcaption')[1].previousElementSibling.nodeName ===
    'IMG'
);
```

Element `figcaption` bi trebalo da ima tekst `Cats hate other cats.`. Izostavili ste reč ili napravili pravopisne greške.

```js
assert(
  document
    .querySelectorAll('figcaption')[1]
    .innerText.toLowerCase()
    .match(/Cats hate other cats\.?$/i)
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
        <ul>
          <li>catnip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
        </ul>
        <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
          <figcaption>Cats <em>love</em> lasagna.</figcaption>  
        </figure>
        <h3>Top 3 things cats hate:</h3>
        <ol>
          <li>flea treatment</li>
          <li>thunder</li>
          <li>other cats</li>
        </ol>
--fcc-editable-region--
        <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Two tabby kittens sleeping together on a couch.">

        </figure>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```
