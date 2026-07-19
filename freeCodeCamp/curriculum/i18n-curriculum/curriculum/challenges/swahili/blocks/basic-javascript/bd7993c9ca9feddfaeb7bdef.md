---
id: bd7993c9ca9feddfaeb7bdef
title: Podelite Jedan Decimalni Broj Drugim u JavaScript-u
challengeType: 1
forumTopicId: 18255
dashedName: divide-one-decimal-by-another-with-javascript
---

# --description--

Sada podelimo jedan decimalni broj drugim.

# --instructions--

Promenite `0.0` tako da `quotient` bude jednako `2.2`.

# --hints--

Promenljiva `quotient` treba da bude jednaka `2.2`

```js
assert(quotient === 2.2);
```

Treba da koristite operator `/` da podelite 4.4 sa 2

```js
assert(/4\.40*\s*\/\s*2\.*0*/.test(__helpers.removeJSComments(code)));
```

Promenljivoj sa kolicnikom treba dodeliti vrednost samo jednom

```js
assert(__helpers.removeJSComments(code).match(/quotient\s*=/g).length === 1);
```

# --seed--

## --seed-contents--

```js
const quotient = 0.0 / 2.0; // Change this line
```

# --solutions--

```js
const quotient = 4.4 / 2.0;
```
