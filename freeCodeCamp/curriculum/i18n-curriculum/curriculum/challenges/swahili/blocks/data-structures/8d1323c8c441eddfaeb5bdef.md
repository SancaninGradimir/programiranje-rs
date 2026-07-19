---
id: 8d1323c8c441eddfaeb5bdef
title: Kreiraj klasu seta
challengeType: 1
forumTopicId: 301632
dashedName: create-a-set-class
---

# --description--
U ovom vežbanju, kreiraćemo klasu objekata nazvanu `Set` koja imitira apstraktnu strukturu podataka nazvanu "set". Set je kao niz podataka, ali ne može sadržati ponovljive vrednosti. Uobičajena upotreba seta je samo proveravanje prisutnosti elementa. Možemo videti kako ES6 entitet `Set` funkcioniše u primeru ispod:

```js
const set1 = new Set([1, 2, 3, 5, 5, 2, 0]);
console.log(set1);
// output: {1, 2, 3, 5, 0}
console.log(set1.has(1));
// output: true
console.log(set1.has(6));
// output: false
```

Prvo, kreiraćemo metodu `add` koja dodaje vrednost u naš skup uslovljen da ta vrednost već nije prisutna u skupu. Zatim ćemo kreirati metodu `remove` koja uklanja vrednost iz skupa ako ona već postoji. I na kraju, kreiraćemo metodu `size` koja vraća broj elemenata unutar skupa.

# --instructions--
Kreiraj metodu za `add` koja dodaje jedinstvenu vrednost u kolekciju setova i vraća `true` ako je vrednost uspešno dodata, a `false` inače.

Napravite metodu `remove` koja prima vrednost i proverava da li postoji u setu. Ako postoji, ova metoda bi trebalo da ga ukloni iz kolekcije seta i vrati `true`. Inače, bi trebalo da vrati `false`. Napravite metodu `size` koja vraća veličinu kolekcije seta.

# --hints--
Vaša klasa za `Set` mora imati metodu za `add`.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.add === 'function';
  })()
);
```

Tvoj put (ili: Tvoja ruta) `add` ne bi smega dodavati ponavljajuće vrednosti.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.add('a');
    var vals = test.values();
    return vals[0] === 'a' && vals[1] === 'b' && vals.length === 2;
  })()
);
```

Tvoja putanja za `add` treba da restaurira `true` kada je vrednost uspešno dodata.

```js
assert(
  (function () {
    var test = new Set();
    var result = test.add('a');
    return result != undefined && result === true;
  })()
);
```

Tvoj put/način za `add` treba da ponovo učita `false` kada se ponavljajuća vrednost dodaje.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    var result = test.add('a');
    return result != undefined && result === false;
  })()
);
```

Vaša klasa za `Set` mora da ima metodu od `remove`.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.remove === 'function';
  })()
);
```

Tvoj put za `remove` treba da ukloni samo stvari koje su dostupne u setu.

```js
assert.deepEqual(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('c');
    return test.values();
  })(),
  ['a', 'b']
);
```

Njia yako za `remove` treba da ukloni uklonjeni element iz skupa.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('a');
    var vals = test.values();
    return vals[0] === 'b' && vals.length === 1;
  })()
);
```

Vaša klasa za `Set` mora imati metodu od `size`.

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.size === 'function';
  })()
);
```

Metoda `size` treba da vrati broj elemenata u kolekciji.

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('a');
    return test.size() === 1;
  })()
);
```

# --seed--

## --seed-contents--

```js
class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line
  
  // Only change code above this line
}
```

# --solutions--

```js
class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.values(this.dictionary);
  }

  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }

    return false;
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }

  size() {
    return this.length;
  }
}
```
