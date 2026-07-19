---
id: 8d5823c8c441eddfaeb5bdef
title: Kreiraj strukturu podataka mape
challengeType: 1
forumTopicId: 301629
dashedName: create-a-map-data-structure
---

# --description--
Sledeći izazovi će se baviti mapama i haš tabelama. Mapa je struktura podataka koja čuva parove ključ-vrednost. U JavaScript, one su nam dostupne kao objekti. Mapa pruža brzi pristup sačuvanim elementima na osnovu vrednosti ključa i predstavlja veoma korisnu strukturu podataka.

# --instructions--
Hajde da počnemo sa vežbanjem kreiranja naše sopstvene mape. Jer elementi JavaScript pružaju strukturu mape efikasniju od svega što možemo napisati ovde, ovo je namenjeno više kao vežba učenja. Međutim, elementi JavaScript nam daju samo neke operacije. Da li želimo da definišemo specifičnu operaciju? Koristite element `Map` dostavljen ovde kao omotač za `object` od JavaScript. Kreirajte sledeći putanju i operacije na objektu Mapa:

<ul>
<li><code>add</code> prihvata par ključ-vrednost <code>ufunguo, </code> za dodavanje na mapu.</li>
<li><code>remove</code> prihvata ključ i uklanja par <code>ufunguo, </code> vrednost koja mu odgovara</li>
<li><code>get</code> prihvata <code>ufunguo</code> i vraća <code>vrednost</code> koja je sačuvana</li>
<li><code>has</code> prihvata <code>ufunguo</code> i vraća <dfn>true</dfn> ako postoji taj ključ, ili null/prazno <dfn>false</dfn> ako ne postoji.</li>
<li><code>values</code> vraća niz podataka svih vrednosti sadržanih u mapi</li>
<li><code>size</code> vraća broj stavki sadržanih u mapi</li>
<li><code>clear</code> briše celu mapu</li>
</ul>

# --hints--
Struktura podataka za `Map` mora da postoji.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    return typeof test == 'object';
  })()
);
```

Element `Map` mora imati sledeće putanje: `add`, `remove`, `get`, `has`, `values`, `clear`, i `size`.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    return (
      typeof test.add == 'function' &&
      typeof test.remove == 'function' &&
      typeof test.get == 'function' &&
      typeof test.has == 'function' &&
      typeof test.values == 'function' &&
      typeof test.clear == 'function' &&
      typeof test.size == 'function'
    );
  })()
);
```

Putanja za `add` treba da doda stvari na mapu.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add(5, 6);
    test.add(2, 3);
    test.add(2, 5);
    return test.size() == 2;
  })()
);
```

Put za `has` treba da vrati `true` za stavke dodate sa `false` za nedodate stavke.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('test', 'value');
    return test.has('test') && !test.has('false');
  })()
);
```

Metoda ``get`` mora da primi parametre kao ulaz i mora vratiti povezane vrednosti.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('abc', 'def');
    return test.get('abc') == 'def';
  })()
);
```

Metoda `values` treba da vrati sve vrednosti sačuvane u mapu kao sekvencu karaktera u nizu podataka.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('a', 'b');
    test.add('c', 'd');
    test.add('e', 'f');
    var vals = test.values();
    return (
      vals.indexOf('b') != -1 &&
      vals.indexOf('d') != -1 &&
      vals.indexOf('f') != -1
    );
  })()
);
```

Funkcija ``clear`` treba da obriše mapu, i funkcija ``size`` treba da vrati broj objekata koji se nalaze na mapi.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('b', 'b');
    test.add('c', 'd');
    test.remove('asdfas');
    var init = test.size();
    test.clear();
    return init == 2 && test.size() == 0;
  })()
);
```

# --seed--

## --seed-contents--

```js
var Map = function() {
  this.collection = {};
  // Only change code below this line
  
  // Only change code above this line
};
```

# --solutions--

```js
var Map = function() {
    this.collection = {};
    // Only change code below this line

    this.add = function(key,value) {
      this.collection[key] = value;
    }

    this.remove = function(key) {
      delete this.collection[key];
    }

    this.get = function(key) {
      return this.collection[key];
    }

    this.has = function(key) {
      return this.collection.hasOwnProperty(key)
    }

    this.values = function() {
      return Object.values(this.collection);
    }

    this.size = function() {
      return Object.keys(this.collection).length;
    }

    this.clear = function() {
      for(let item of Object.keys(this.collection)) {
        delete this.collection[item];
      }
    }
    // Only change code above this line
};
```
