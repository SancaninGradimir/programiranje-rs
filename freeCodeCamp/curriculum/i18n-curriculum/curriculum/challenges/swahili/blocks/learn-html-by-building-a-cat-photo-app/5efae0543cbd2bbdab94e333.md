---
id: 5efae0543cbd2bbdab94e333
title: Korak 32
challengeType: 0
dashedName: step-32
---

# --description--

Da biste poboljšali dostupnost slike koju ste dodali, dodajte svojstvo elementu `alt` sa tekstom:

`Two tabby kittens sleeping together on a couch.`

# --hints--

Vaš element ``figure`` treba da ima oznaku za otvaranje. Oznake za otvaranje imaju ovu sintaksu: ``<elementName>``.

```js
assert(document.querySelectorAll('figure').length === 2);
```

Vaš element za `figure` treba da ima zatvarajući tag. Zatvarajući tagovi imaju `/` odmah nakon karaktera `<`.

```js
assert(code.match(/<\/figure>/g).length === 2);
```

Element za `figure` bi trebalo da postoji odmah iznad zatvarajućeg taga poslednjeg elementa `section`.

```js
assert.strictEqual(document.querySelectorAll('main > section')?.[1]?.lastElementChild?.nodeName, 'FIGURE');
```

Komponenta `img` za Cats treba biti postavljena unutar komponente `figure`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert.exists(catsImg);
```

Treća slika treba da ima atribut elementa `src` postavljenog na `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert.strictEqual(
  catsImg?.src?.toLowerCase(), 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

Element `img` sa mačkama treba da ima atribut `alt` sa vrednošću `Two tabby kittens sleeping together on a couch.`

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert.match(catsImg?.getAttribute('alt')?.replace(/\s+/g, ' '), /^Two tabby kittens sleeping together on a couch..?$/i);
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
        <figure>
--fcc-editable-region--
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg">
--fcc-editable-region--
        </figure>
      </section>
    </main>
  </body>
</html>
```
