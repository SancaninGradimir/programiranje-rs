---
id: bd7158d8c442eddfaeb5bd18
title: Izradi stranicu sa posvećenjem
challengeType: 14
saveSubmissionToDB: true
forumTopicId: 301147
dashedName: build-a-tribute-page
---

# --description--

**Cilj:** Izradi aplikaciju koja funkcionalno liči na <a href="https://tribute-page.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://tribute-page.freecodecamp.rocks</a>. **Ne kopiraj ovaj demo projekat**.

**Zahtevi korisnika:**

1. Tvoja stranica sa posvećenjem mora imati element `<main>` sa ID-om `main`, koji sadrži sve ostale elemente.
1. Moraš imati element sa ID-om `title`, koji sadrži niz karaktera (tj. tekst) opisujući temu stranice sa posvećenjem (npr. "Dr. Norman Borlaug").
1. Moraš imati element `<figure>` ili `<div>` sa ID-om `img-div`.
1. Unutar elementa `#img-div`, moraš imati element `<img>` sa ID-om `image`.
1. Unutar elementa `#img-div`, moraš imati element sa ID-om `img-caption` koji sadrži tekstualni opis slike prikazane u `#img-div`.
1. Moraš imati element sa ID-om `tribute-info`, koji sadrži tekstualne detalje opisujući temu stranice sa posvećenjem.
1. Moraš imati element `<a>` sa ID-om `tribute-link`, koji linkuje ka spoljnoj veb stranici i sadrži dodatne informacije o temi stranice sa posvećenjem. GRUPA: Moraš dodeliti atributu `target` na vrednost `_blank` kako bi se tvoj link otvorio u novoj karti (tabu).
1. Tvoja `#image` treba da koristi svojstva `max-width` i `height` kako bi se prilagodila širini svog roditeljskog elementa, bez prelaska preko svoje originalne veličine.
1. Tvoj element `<img>` treba da bude centriran unutar svog roditeljskog elementa.

Implementiraj sve zahtevane funkcionalnosti i prođi kroz sve testove ispod da bi završen ovaj projekat. Dodaj svoj stil. Uživaj u pisanju koda!

**Napomena:** Proveri da si dodao `<link rel="stylesheet" href="styles.css">` u svoj HTML kako bi povezao svoj stilski fajl i koristio svoj CSS.

# --hints--

Moraš imati element `<main>` sa ID-om `main`.

```js
const el = document.getElementById('main');
assert.isNotNull(el);
assert.strictEqual(el.tagName, 'MAIN');
```

Tvoji elementi `#img-div`, `#image`, `#img-caption`, `#tribute-info` i `#tribute-link` moraju biti potomci elementa `#main`.

```js
const el1 = document.querySelector('#main #img-div');
const el2 = document.querySelector('#main #image');
const el3 = document.querySelector('#main #img-caption');
const el4 = document.querySelector('#main #tribute-info');
const el5 = document.querySelector('#main #tribute-link');
assert.isNotNull(el1);
assert.isNotNull(el2);
assert.isNotNull(el3);
assert.isNotNull(el4);
assert.isNotNull(el5);
```

Moraš imati element sa ID-om `title`.

```js
const el = document.getElementById('title');
assert.isNotNull(el);
```

Tvoj `#title` ne sme biti prazan.

```js
const el = document.getElementById('title');
assert.isNotNull(el);
assert.isNotEmpty(el.innerText.trim());
```

Moraš imati element `<figure>` ili `<div>` sa ID-om `img-div`.

```js
const el = document.getElementById('img-div');
assert.isNotNull(el);
assert.isTrue(el.tagName === 'DIV' || el.tagName === 'FIGURE');
```

Moraš imati element `<img>` sa ID-om `image`.

```js
const el = document.getElementById('image');
assert.isNotNull(el);
assert.strictEqual(el.tagName, 'IMG');
```

Tvoj `#image` mora biti potomak `#img-div`.

```js
const el = document.querySelector('#img-div #image');
assert.isNotNull(el);
```

Moraš imati element `<figcaption>` ili `<div>` sa ID-om `img-caption`.

```js
const el = document.getElementById('img-caption');
assert.isNotNull(el);
assert.isTrue(el.tagName === 'DIV' || el.tagName === 'FIGCAPTION');
```

Tvoj `#img-caption` mora biti potomak `#img-div`.

```js
const el = document.querySelector('#img-div #img-caption');
assert.isNotNull(el);
```

Tvoj `#img-caption` ne sme biti prazan.

```js
const el = document.getElementById('img-caption');
assert.isNotNull(el);
assert.isNotEmpty(el.innerText);
```

Moraš imati element sa ID-om `tribute-info`.

```js
const el = document.getElementById('tribute-info');
assert.isNotNull(el);
```

Tvoj `#tribute-info` ne sme biti prazan.

```js
const el = document.getElementById('tribute-info');
assert.isNotNull(el);
assert.isNotEmpty(el.innerText);
```

Moraš imati element `<a>` sa ID-om `tribute-link`.

```js
const el = document.getElementById('tribute-link');
assert.isNotNull(el);
assert.strictEqual(el.tagName, 'A');
```

Tvoj `#tribute-link` mora imati atribut `href` i njegovu vrednost.

```js
const el = document.getElementById('tribute-link');
assert.isNotNull(el);
assert.isNotNull(el.href);
assert.isNotEmpty(el.href);
```

Tvoj `#tribute-link` mora imati atribut `target` podešen na `_blank`.

```js
const el = document.getElementById('tribute-link');
assert.isNotNull(el);
assert.strictEqual(el.target, '_blank');
```

Tvoj element `<img>` mora imati `display` postavljeno na `block`.

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('display');
assert.strictEqual(style, 'block');
```

Tvoja `#image` mora imati `max-width` podešen na `100%`.

```js
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const style = imgStyle?.getPropertyValue('max-width');
assert.strictEqual(style, '100%');
```

Tvoja `#image` mora imati `height` podešen na `auto`.

```js
// taken from the testable-projects repo
const img = document.getElementById('image');
const imgStyle = window.getComputedStyle(img);
const oldDisplayValue = imgStyle?.getPropertyValue('display');
const oldDisplayPriority = imgStyle?.getPropertyPriority('display');
img?.style.setProperty('display', 'none', 'important');
const heightValue = imgStyle?.getPropertyValue('height');
img?.style.setProperty('display', oldDisplayValue, oldDisplayPriority);
assert.strictEqual(heightValue, 'auto');
```

Tvoja `#image` mora biti centrirana unutar svog roditeljskog elementa.

```js
// taken from the testable-projects repo
const img = document.getElementById('image'),
  imgParent = img?.parentElement,
  imgLeft = img?.getBoundingClientRect().left,
  imgRight = img?.getBoundingClientRect().right,
  parentLeft = imgParent?.getBoundingClientRect().left,
  parentRight = imgParent?.getBoundingClientRect().right,
  leftMargin = imgLeft - parentLeft,
  rightMargin = parentRight - imgRight;
assert.isBelow(leftMargin - rightMargin, 6);
assert.isBelow(rightMargin - leftMargin, 6