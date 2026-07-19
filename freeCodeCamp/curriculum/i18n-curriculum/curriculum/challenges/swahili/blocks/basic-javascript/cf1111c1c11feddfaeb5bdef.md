---
id: cf1111c1c11feddfaeb5bdef
title: Iteracija Pomocu JavaScript for Petlji
challengeType: 1
forumTopicId: 18219
dashedName: iterate-with-javascript-for-loops
---

# --description--

Isti kod mozete izvrsavati vise puta koristeci petlju.

Najcesci tip petlje u JavaScript-u zove se `for` petlja, jer se izvrsava odredjeni broj puta.

For petlje se deklarisu sa tri opcionalna izraza odvojena tacka-zarezom:

`for (a; b; c)`, gde je `a` inicijalizacijski izraz, `b` izraz uslova, a `c` finalni izraz.

Inicijalizacijski izraz se izvrsava samo jednom, pre pocetka petlje. Obicno se koristi za deklarisanje i postavljanje promenljive petlje.

Izraz uslova se proverava na pocetku svake iteracije petlje i nastavlja se dok se evaluira kao `true`. Petlja ce prestati kada uslov postane `false` na pocetku iteracije. To znaci da ako uslov pocinje kao false, petlja se nece izvrsiti ni jednom.

Finalni izraz se izvrsava na kraju svake iteracije petlje, pre sledece provere uslova, i obicno sluzi za povecavanje ili smanjivanje indeksa petlje.

U sledecem primeru inicijalizujemo sa `i = 0` i iteriramo dok je nas uslov `i < 5` tacan. Uvecavamo `i` za `1` u svakoj iteraciji pomocu `i++` kao naseg finalnog izraza.

```js
const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

`ourArray` ce sada imati vrednost `[0, 1, 2, 3, 4]`.

# --instructions--

Koristite `for` petlju da ubacite vrednosti od 1 do 5 u `myArray`.

# --hints--

Za ovo treba da koristite `for` petlju.

```js
assert(/for\s*\([^)]+?\)/.test(__helpers.removeJSComments(code)));
```

`myArray` treba da bude jednako `[1, 2, 3, 4, 5]`.

```js
assert.deepEqual(myArray, [1, 2, 3, 4, 5]);
```

# --seed--

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}
```
