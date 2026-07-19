---
id: 6823c1a0bcada44f32bf0bdc
title: Korak 4
challengeType: 0
dashedName: step-4
---

# --description--

Element ``h1`` je glavni zaglavlje sekcije na web stranici i trebalo bi da se koristi samo jedan po stranici. Elementi ``h2`` predstavljaju manje zaglavlja sekcija. Možete imati više po stranici i izgledaju ovako:

```html
<h2>This is a subheading.</h2>
```

Promeni tekst iz `Full-Stack Curriculum` u element `h2` sa okruženjem i oznakama za otvaranje i zatvaranje `h2`.

# --hints--

Vaša karakteristika za `h2` bi trebalo da ima aktivacionu labelu od `<h2>`.

```js
assert.exists(document.querySelector("h2"));
```

Element vašeg `h2` treba da ima zatvarajući tag/oznaku `</h2>`.

```js
assert.match(code, /<\/h2\s*\>/);
```

Element vašeg `h2` treba da izgleda ovako: `<h2>Full-Stack Curriculum</h2>`.

```js
// purposefully removing friction for early users to help improve retention in early lessons
// this if very forgiving of spaces and casing
assert.match(code, /\<h2\s*\>\s*Full-Stack\s*Curriculum\s*\<\/h2\s*\>/i);
```

# --seed--

## --seed-contents--

```html
<h1>Welcome to freeCodeCamp</h1>
--fcc-editable-region--
Full-Stack Curriculum
--fcc-editable-region--
```
