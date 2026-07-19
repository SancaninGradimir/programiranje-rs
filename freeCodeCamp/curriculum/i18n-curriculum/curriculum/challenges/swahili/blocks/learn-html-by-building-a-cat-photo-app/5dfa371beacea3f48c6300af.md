---
id: 5dfa371beacea3f48c6300af
title: Korak 21
challengeType: 0
dashedName: step-21
---

# --description--

Kada dodajete element zaglavlja niže sekcije na stranici, to znači da kreirate novu podsekciju.

Nakon elementa `h2` drugog od `section`, dodajte komponentu `h3` sa ovim tekstovima:

`Things cats love:`

# --hints--

Drugi element `section` izgleda da mu nedostaje ili nema ni otvarajuću i zatvarajuću oznaku za oba.

```js
assert(
  document.querySelectorAll('main > section')[1] &&
    code.match(/\<\/section>/g).length == 2
);
```

Element `h3` mora biti iznad zatvornog taga drugog elementa `section`.

```js
assert(
  document.querySelectorAll('main > section')[1].lastElementChild.nodeName ===
    'H3'
);
```

Vaš element `h3` treba da ima zatvarajući tag. Zatvarajući tagovi su `/` odmah nakon karaktera `<`.

```js
assert.lengthOf(code.match(/<\/h3>/g), 1);
```

Element ``h3`` koji se nalazi iznad zatvarajuće oznake drugog elementa ``section`` treba da sadrži tekst ``Things cats love:``. Obavezno uključite tačku na kraju teksta.

```js
assert(
  document
    .querySelectorAll('main > section')[1]
    .lastElementChild.innerText.toLowerCase()
    .replace(/\s+/g, ' ') === 'things cats love:'
);
```

Element `h2` sa tekstom `Cat Lists` treba da bude iznad poslednjeg elementa `h3` koji je postavljen unutar poslednjeg elementa `section`. Možda ste slučajno izbrisali element `h2`.

```js
const secondSectionLastElemNode = document.querySelectorAll('main > section')[1]
  .lastElementChild;
assert(
  secondSectionLastElemNode.nodeName === 'H3' &&
    secondSectionLastElemNode.previousElementSibling.innerText
      .toLowerCase()
      .replace(/\s+/g, ' ') === 'cat lists'
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
--fcc-editable-region--
      <section>
        <h2>Cat Lists</h2>
        
      </section>
--fcc-editable-region--
    </main>
  </body>
</html>
```
