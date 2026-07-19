---
id: cf1111c1c11feddfaeb4bdef
title: Oduzimanje Jednog Broja od Drugog Pomocu JavaScript-a
challengeType: 1
forumTopicId: 18314
dashedName: subtract-one-number-from-another-with-javascript
---

# --description--

Mozemo i oduzimati jedan broj od drugog.

JavaScript koristi simbol `-` za oduzimanje.

**Primer**

```js
const myVar = 12 - 6;
```

`myVar` ce imati vrednost `6`.
# --instructions--

Promenite `0` tako da razlika bude `12`.

# --hints--

Promenljiva `difference` treba da bude jednaka `12`.

```js
assert(difference === 12);
```

Treba da oduzmete samo jedan broj od `45`.

```js
assert(/difference=45-33;?/.test(__helpers.removeWhiteSpace(__helpers.removeJSComments(code))));
```

# --seed--

## --seed-contents--

```js
const difference = 45 - 0;
```

# --solutions--

```js
const difference = 45 - 33;
```
