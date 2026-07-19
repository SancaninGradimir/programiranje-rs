---
id: 5dfa30b9eacea3f48c6300ad
title: Korak 17
challengeType: 0
dashedName: step-17
---

# --description--

U prethodnim koracima koristili ste funkciju sidra da pretvorite tekst u hiperlink. Drugi tipovi sadržaja takođe mogu biti konvertovani u link postavljanjem unutar anchor oznaka.

Evo primera kako da se slika konvertuje u link:

```html
<a href="example-link">
  <img src="image-link.jpg" alt="A photo of a cat.">
</a>
```

Promeni sliku u komponentu okružujući je sa ključnim atributima komponente. Koristi `https://freecatphotoapp.com` kao vrednost atributa `href` ankora.

# --hints--

Trebalo bi da imaš element sa vrednošću `img` koji je `src` od `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`. Možda si ga slučajno izbrisao/la.

```js
assert(
  document.querySelector('img') &&
    document.querySelector('img').getAttribute('src') ===
      'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
);
```

Vaš anker element (`a`) treba da ima otvarajući tag. Otvoreći tagovi imaju ovu sintaksu: `<elementName>`.

```js
assert(document.querySelectorAll('a').length >= 2);
```

Nema trake za spajanje (`a`) nakon slike.

```js
assert.lengthOf(document.querySelectorAll('a'), 3);
```

Vaš ankorni element (`a`) treba da ima zatvarajući tag. Zatvarajući tagovi se nalaze `/` odmah nakon slova/karaktera `<`.

```js
assert(code.match(/<\/a>/g).length >= 2);
```

Treba da dodate samo jednu zatvarajuću oznaku sidra/anchor-a (`a`). Molimo vas da obrišete sve ostale unose.

```js
assert.lengthOf(code.match(/<\/a>/g), 3);
```

Jangkirni element (`a`) nema svojstvo `href`. Proverite da li postoji razmak nakon imena otvarajuće oznake i/ili da li postoji razmak pre svih imena svojstava.

```js
assert(document.querySelector('a').hasAttribute('href'));
```

Tvoj jangkorni element (`a`) mora se povezati sa `https://freecatphotoapp.com`. Možda ste zaboravili URL ili postoje greške u pravopisu.

```js
assert(
  document.querySelectorAll('a')[1].getAttribute('href') ===
    'https://freecatphotoapp.com'
);
```

Anker element ne (`a`) nema atribut `href`. Proverite da li postoji razmak nakon imena otvaranja i/ili da li postoji razmak pre svih imena atributa.

```js
assert.isTrue(document.querySelectorAll('a')[2]?.hasAttribute('href'));
```

Tvoj anker element (`a`) treba da se poveže sa `https://freecatphotoapp.com`. Možda ste zaboravili URL ili postoje pravopisne greške.

```js
assert.equal(
  document.querySelectorAll('a')[2]?.getAttribute('href').trim(),
    'https://freecatphotoapp.com'
);
```

Tvoj element `img` treba da bude postavljen unutar jangernog elementa (`a`). Ceo element `img` treba da bude unutar otvarajućih i zatvarajućih tagova jangernog elementa (`a`).

```js
assert(document.querySelector('img').parentNode.nodeName === 'A');
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <h2>Cat Photos</h2>
      <p>Everyone loves <a href="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg">cute cats</a> online!</p>
      <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
--fcc-editable-region--
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
--fcc-editable-region--
    </main>
  </body>
</html>
```
