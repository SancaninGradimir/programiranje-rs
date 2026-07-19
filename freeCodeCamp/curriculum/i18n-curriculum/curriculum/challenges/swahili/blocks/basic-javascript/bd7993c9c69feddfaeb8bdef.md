---
id: bd7993c9c69feddfaeb8bdef
title: Sacuvajte Vise Vrednosti u Jednoj Promenljivoj Koristeci JavaScript Nizove
challengeType: 1
forumTopicId: 18309
dashedName: store-multiple-values-in-one-variable-using-javascript-arrays
---

# --description--

Koristeci JavaScript `array` promenljive, mozemo cuvati vise delova podataka na jednom mestu.

Deklaraciju niza zapocinjete otvorenom uglastom zagradom, zavrsavate zatvorenom uglastom zagradom i stavljate zarez izmedju svake stavke, ovako:

```js
const sandwich = ["peanut butter", "jelly", "bread"];
```

# --instructions--

Izmenite novi niz `myArray` tako da sadrzi string i broj (tim redosledom).

# --hints--

`myArray` treba da bude niz.

```js
assert(typeof myArray == 'object');
```

Prvi element u `myArray` treba da bude string.

```js
assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
```

Drugi element u `myArray` treba da bude broj.

```js
assert(typeof myArray[1] !== 'undefined' && typeof myArray[1] == 'number');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const myArray = [];
```

# --solutions--

```js
const myArray = ["The Answer", 42];
```
