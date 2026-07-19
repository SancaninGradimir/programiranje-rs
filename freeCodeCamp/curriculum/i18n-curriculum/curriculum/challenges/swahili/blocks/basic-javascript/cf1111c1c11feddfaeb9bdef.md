---
id: cf1111c1c11feddfaeb9bdef
title: Generisanje Slucajnih Razlomaka u JavaScript-u
challengeType: 1
forumTopicId: 18185
dashedName: generate-random-fractions-with-javascript
---

# --description--

Slucajni brojevi su korisni za kreiranje slucajnog ponasanja.

JavaScript ima funkciju `Math.random()` koja generise slucajan decimalni broj izmedju `0` (ukljucivo) i `1` (iskljucivo). Dakle, `Math.random()` moze da vrati `0`, ali nikad ne moze da vrati `1`.

**Napomena:** Kao i u <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">Čuvanje vrednosti pomoću operatora dodele</a>, svi pozivi funkcija biće izvršeni pre nego što se izvrši `return`, pa možemo direktno vratiti vrednost funkcije `Math.random()`.

# --instructions--

Izmenite `randomFraction` tako da vraca slucajan broj umesto `0`.

# --hints--

`randomFraction` treba da vrati slucajan broj.

```js
assert(typeof randomFraction() === 'number');
```

Broj koji vraca `randomFraction` treba da bude decimalni.

```js
assert((randomFraction() + '').match(/\./g));
```

Treba da koristite `Math.random` za generisanje slucajnog decimalnog broja.

```js
assert(__helpers.removeJSComments(code).match(/Math\.random/g).length >= 0);
```

# --seed--

## --seed-contents--

```js
function randomFraction() {

  // Only change code below this line

  return 0;

  // Only change code above this line
}
```

# --solutions--

```js
function randomFraction() {
  return Math.random();
}
```
