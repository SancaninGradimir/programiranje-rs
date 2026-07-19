---
id: 5efada803cbd2bbdab94e332
title: Korak 31
challengeType: 0
dashedName: step-31
---

# --description--

Unutar elementa za `figure` koji je dodat, postavite unutar elementa `img` koji ima svojstvo elementa `src` koje je postavljeno na `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`.

# --hints--

Vaš drugi `figure` element treba da ima početnu oznaku. Početne oznake imaju ovu sintaksu: `<elementName>`.

```js
assert.isAtLeast(document.querySelectorAll('figure').length, 2);
```

Vaš drugi element za `figure` treba da ima zatvarajući tag. Zatvarajući tagovi su `/` odmah nakon slova `<`.

```js
assert.isAtLeast(code.match(/<\/figure>/g)?.length, 2);
```

Drugi element ``figure`` treba da bude iznad zatvarajuće oznake drugog elementa ``section``. Postavili ste ga u pogrešnom redosledu.

```js
assert.equal(document.querySelectorAll('main > section')[1]?.lastElementChild.nodeName, 'FIGURE');
```

Trebalo bi da imaš element `img` kao treći, postavljen unutar elemenata `figure`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert.exists(
  catsImg
);
```

Treća slika treba da ima atribut elementa `src` postavljenog na `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert.equal(
    catsImg?.getAttribute('src')?.toLowerCase(), 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

Iako ste postavili atribut elementa `src` nove slike da bude URL tačan, savetuje se uvek okružiti vrednost atributa elementa navodnicima.

```js
assert.notMatch(code, /\<img\s+.+\s+src\s*=\s*https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/cats\.jpg/);
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
          
--fcc-editable-region--
        </figure>
      </section>
    </main>
  </body>
</html>
```
