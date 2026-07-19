---
id: 5dfa371beacea3f48c6300af
title: Korak 21
challengeType: 0
dashedName: step-21
---

# --description--

Kada dodate element zaglavlja sekcije nižeg nivoa na stranici, to znači da započinjete novu podsekciju.

Nakon elementa `h2` drugog od `section`, dodajte element `h3` sa ovim tekstom:

`Things cats love:`

# --hints--

Drugi element `section` izgleda da nedostaje, ili nema ni oznaku za otvaranje, niti oznaku za zatvaranje.

```js
assert.exists(document.querySelectorAll('main > section')[1]);
assert.lengthOf(code.match(/\<\/section>/g), 2);
```

Trebalo bi da postoji element `h3` malo iznad oznake za zatvaranje elemenata `section` drugog.

```js
assert.equal(
  document.querySelectorAll('main > section')[1]?.lastElementChild.nodeName,
    'H3'
);
```

Vaš element za `h3` bi trebalo da ima zatvarajući tag. Zatvarajući tagovi imaju `/` odmah nakon karaktera `<`.

```js
assert.lengthOf(code.match(/<\/h3>/g), 1);
```

Element ``h3`` koji je malo iznad oznake zatvaranja elementa ``section`` drugog treba da ima tekst ``Things cats love:``. Osigurajte da uključite tačku na kraju teksta.

```js
assert.equal(
  document
    .querySelectorAll('main > section')[1]
    ?.lastElementChild.innerText?.trim().toLowerCase()
    .replace(/\s+/g, ' '), 'things cats love:'
);
```

Treba da postoji `h2` element sa tekstom `Cat Lists` iznad poslednjeg `h3` elementa koji se nalazi unutar poslednjeg `section` elementa. Možda si slučajno obrisao `h2` element.

```js
const secondSectionLastElemNode = document.querySelectorAll('main > section')[1]
  ?.lastElementChild;
assert.equal( secondSectionLastElemNode?.nodeName, 'H3');
assert.equal(
 secondSectionLastElemNode?.previousElementSibling.innerText?.trim()
      .toLowerCase()
      .replace(/\s+/g, ' '), 'cat lists'
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
--fcc-editable-region--
        
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```
