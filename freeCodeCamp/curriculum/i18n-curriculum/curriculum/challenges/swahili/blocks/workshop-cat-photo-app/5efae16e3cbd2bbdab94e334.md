---
id: 5efae16e3cbd2bbdab94e334
title: Step 33
challengeType: 0
dashedName: step-33
---

# --description--

Nakon poslednjeg elementa od `img`, dodaj element sa `figcaption` sa tekstom `Cats hate other cats.`

# --hints--

Vaša komponenta za `figcaption` mora imati oznaku za otvaranje. Oznake za otvaranje imaju sledeću sintaksu: `<elementName>`.

```js
assert.lengthOf(document.querySelectorAll('figcaption'), 2);
```

Vaš element za `figcaption` treba da ima zatvarajući label/tag. Zatvarajući tagovi su na `/` odmah nakon slova `<`.

```js
assert.lengthOf(code.match(/<\/figcaption\>/g), 2);
```

Nakon oznake zatvaranja drugog elementa od `figure`, treba da postoji element `section` iznad njega.

```js
assert.equal(document.querySelectorAll('main > section')[1]?.lastElementChild.nodeName, 'FIGURE');
```

Poslednji element od `img` treba biti smešten unutar elementa `figure`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert.equal(
    catsImg?.getAttribute('src')?.toLowerCase(), 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

Vaša komponenta od `figure` treba da ima oznaku za otvaranje. Oznake za otvaranje imaju sledeću sintaksu: `<elementName>`.

```js
assert.lengthOf(document.querySelectorAll('figure'), 2);
```

Vaš element ``figure`` treba da ima zatvarajući tag. Zatvarajući tagovi su ``/`` odmah nakon karaktera ``<``.

```js
assert.lengthOf(code.match(/<\/figure\>/g), 2);
```

Element `figcaption` mora biti smješten unutar elementa `figure`.

```js
assert.lengthOf(document.querySelectorAll('figure > figcaption'), 2);
```

Element `figcaption`, koji je postavljen unutar elementa `figure`, treba da bude ispod elementa `img`. Postavili ste element `img` i element `figcaption` u pogrešnom redosledu.

```js
assert.equal(
  document.querySelectorAll('figcaption')[1]?.previousElementSibling.nodeName,
    'IMG'
);
```

Element `figcaption` bi trebalo da ima tekst od `Cats hate other cats.`. Ostavili ste reč ili napravili je greške u pravopisu.

```js
assert.match(
  document
    .querySelectorAll('figcaption')[1]
    ?.innerText?.trim().replace(/\s+/g, ' ').toLowerCase(),
    /^Cats hate other cats\.?$/i
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
        <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Two tabby kittens sleeping together on a couch.">
--fcc-editable-region--
          
--fcc-editable-region--
        </figure>
      </section>
    </main>
  </body>
</html>
```
