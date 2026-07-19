---
id: 5dfa30b9eacea3f48c6300ad
title: Korak 17
challengeType: 0
dashedName: step-17
---

# --description--

Prethodno ste koristili funkciju sidra za pretvaranje teksta u hiperveze. Drugi tipovi sadržaja takođe se mogu pretvoriti u hiperveze tako što ih obuhvatite unutar anchor oznaka.

Ovo je primer kako da se slika konvertuje u link:

```html
<a href="example-link">
  <img src="image-link.jpg" alt="A photo of a cat.">
</a>
```

Promeni sliku u komponentu obavijajući je sa ključnim elementima komponente. Koristi `https://freecatphotoapp.com` kao vrijednost atributa `href` sidra.

# --hints--

Trebalo bi da imaš element sa vrednošću `img` koji je `src` od `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`. Možda si slučajno obrisao/la.

```js
assert.equal(
  document.querySelector('img')?.getAttribute('src'),
      'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
);
```

Vaš element sidra (`a`) bi trebalo da ima etiketu za otvaranje. Etikete za otvaranje imaju ovu sintaksu: `<elementName>`.

```js
assert.isAtLeast(document.querySelectorAll('a').length, 3);
```

Nedostaje zatvarajući tag (`a`) nakon slike.

```js
assert.lengthOf(document.querySelectorAll('a'), 3);
```

Tvoj anker element (`a`) treba da ima zatvarajući tag. Zatvarajući tagovi imaju `/` odmah nakon karaktera `<`.

```js
assert.isAtLeast(code.match(/<\/a>/g)?.length, 3);
```

Treba vam dodati samo jednu oznaku zatvaranja sidra (`a`). Molimo vas da obrišete sve dodatne unose.

```js
assert.lengthOf(code.match(/<\/a>/g), 3);
```

Vaš anker element (`a`) nema atribut `href`. Proverite da li postoji razmak nakon imena otvarajućeg taga i/ili da li postoji razmak pre svih imena atributa.

```js
assert.isTrue(document.querySelectorAll('a')[2]?.hasAttribute('href'));
```

Tvoj anker element (`a`) treba da se poveže sa `https://freecatphotoapp.com`. Ostavili ste URL ili postoje greške u pravopisu.

```js
assert.equal(
  document.querySelectorAll('a')[2]?.getAttribute('href').trim(),
    'https://freecatphotoapp.com'
);
```

Tvoj element za `img` treba biti postavljen unutar ankora elementa (`a`). Celokupan element `img` treba biti unutar otvarajućih i zatvarajućih tagova ankora elementa (`a`).

```js
assert.equal(document.querySelector('img')?.parentNode.nodeName, 'A');
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
