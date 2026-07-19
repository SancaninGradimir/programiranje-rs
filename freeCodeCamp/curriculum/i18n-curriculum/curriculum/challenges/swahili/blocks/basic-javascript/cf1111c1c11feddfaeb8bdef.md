---
id: cf1111c1c11feddfaeb8bdef
title: Menjanje Podataka u Nizu Pomocu Indeksa
challengeType: 1
forumTopicId: 18241
dashedName: modify-array-data-with-indexes
---

# --description--

Za razliku od stringova, unosi u nizu su <dfn>promenljivi</dfn> i mogu slobodno da se menjaju, cak i ako je niz deklarisan pomocu `const`.

**Primer**

```js
const ourArray = [50, 40, 30];
ourArray[0] = 15;
```

`ourArray` sada ima vrednost `[15, 40, 30]`.

**Napomena:** Izmedju naziva niza i uglastih zagrada ne sme biti razmaka, kao u `array [0]`. Iako JavaScript moze da obradi ovo ispravno, to moze zbuniti druge programere koji citaju vas kod.

# --instructions--

Promenite podatke sacuvane na indeksu `0` niza `myArray` u vrednost `45`.

# --hints--

`myArray` sada treba da bude `[45, 64, 99]`.

```js
assert(
  (function () {
    if (
      typeof myArray != 'undefined' &&
      myArray[0] == 45 &&
      myArray[1] == 64 &&
      myArray[2] == 99
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

Treba da koristite ispravan indeks da promenite vrednost u `myArray`.

```js
assert(
  (function () {
    if (__helpers.removeJSComments(code).match(/myArray\[0\]\s*=\s*/g)) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --seed-contents--

```js
// Setup
const myArray = [18, 64, 99];

// Only change code below this line

```

# --solutions--

```js
const myArray = [18, 64, 99];
myArray[0] = 45;
```
