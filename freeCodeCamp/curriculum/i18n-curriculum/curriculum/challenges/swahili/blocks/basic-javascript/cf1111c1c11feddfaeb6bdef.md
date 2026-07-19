---
id: cf1111c1c11feddfaeb6bdef
title: Deljenje Jednog Broja Drugim Pomocu JavaScript-a
challengeType: 1
forumTopicId: 17566
dashedName: divide-one-number-by-another-with-javascript
---

# --description--

Mozemo i deliti jedan broj drugim.

JavaScript koristi simbol `/` za deljenje.

**Primer**

```js
const myVar = 16 / 2;
```

`myVar` sada ima vrednost `8`.
# --instructions--

Promenite `0` tako da `quotient` bude `2`.

# --hints--

Promenljiva `quotient` treba da bude jednaka 2.

```js
assert(quotient === 2);
```

Treba da koristite operator `/`.

```js
assert(/\d+\s*\/\s*\d+/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --seed-contents--

```js
const quotient = 66 / 0;
```

# --solutions--

```js
const quotient = 66 / 33;
```
