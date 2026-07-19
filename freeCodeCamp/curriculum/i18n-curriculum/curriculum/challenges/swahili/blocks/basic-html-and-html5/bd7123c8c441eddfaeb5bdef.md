---
id: bd7123c8c441eddfaeb5bdef
title: Pozdrav HTML Elementima
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gpt2'
forumTopicId: 18276
dashedName: say-hello-to-html-elements
---

# --description--

Dobrodosli u freeCodeCamp HTML coding izazove. Oni ce vas voditi korak po korak kroz web razvoj.

Prvo cete poceti tako sto cete napraviti jednostavnu web stranicu koristeci HTML. Kod mozete menjati u editoru koda koji je ugraden na ovu web stranicu.

Vidite li kod u svom editoru koji kaze `<h1>Hello</h1>`? To je HTML element.

Vecina HTML elemenata ima otvarajuci i zatvarajuci tag.

Otvarajuci tag izgleda ovako:

```html
<h1>
```

Zatvarajuci tag izgleda ovako:

```html
</h1>
```

Jedina razlika izmedju otvarajuceg i zatvarajuceg taga je kosa crta posle leve uglaste zagrade u zatvarajucem tagu.

Svaki izazov ima testove koje mozete pokrenuti u bilo kom trenutku klikom na dugme "Run tests". Kada prodete sve testove, bicete pozvani da posaljete resenje i predete na sledeci izazov.

# --instructions--

Da biste prosli test u ovom izazovu, promenite tekst svog `h1` elementa u `Hello World`.

# --hints--

Vas `h1` element treba da sadrzi tekst `Hello World`.

```js
assert.match(document.querySelector('h1').textContent,/hello(\s)+world/gi);
```

# --seed--

## --seed-contents--

```html
<h1>Hello</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
```
