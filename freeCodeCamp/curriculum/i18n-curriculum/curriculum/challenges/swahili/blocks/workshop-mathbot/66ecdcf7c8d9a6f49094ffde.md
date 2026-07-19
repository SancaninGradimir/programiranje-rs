---
id: 66ecdcf7c8d9a6f49094ffde
title: Korak 13
challengeType: 1
dashedName: step-13
---

# --description--

U prethodnim lekcijama ste naučili da metoda `Math.round()` zaokružuje vrednost na najbliži ceo broj.

Evo nekoliko primera:

```js
Math.round(6.7); // 7
Math.round(3.2); // 3
```

Ovo se razlikuje od metoda `Math.floor()` i `Math.ceil()`, koje zaokružuju nadole i nagore na najbliži ceo broj, respektivno.

Kreirajte novu varijablu nazvanu `numRounded` i dodelite rezultat zaokruživanja broja `2.7`. Zatim, logujte vrednost `numRounded` u konzolu.

Ispod toga, kreirajte još jednu novu varijablu nazvanu `numRounded2` i dodelite rezultat zaokruživanja broja `11.2`. Zatim, logujte vrednost `numRounded2` u konzolu.

# --hints--

You should have a variable called `numRounded`.

```js
assert.isNotNull(numRounded);
```

You should assign the result of rounding the number `2.7` to the variable `numRounded`.

```js
assert.equal(numRounded, 3);
```

You should not hardcode the value of `3` for the variable `numRounded`. Make sure you are using the `Math.round()` method.

```js
assert.notMatch(code, /numRounded\s*=\s*3/);
```

You should log the value of `numRounded` to the console.

```js
assert.match(code, /console\.log\(\s*numRounded\s*\)/);
```

You should have a variable called `numRounded2`.

```js
assert.isNotNull(numRounded2);
```

You should assign the result of rounding the number `11.2` to the variable `numRounded2`.

```js
assert.equal(numRounded2, 11);
```

You should not hardcode the value of `11` for the variable `numRounded2`. Make sure you are using the `Math.round()` method.

```js
assert.notMatch(code, /numRounded2\s*=\s*11/);
```

You should log the value of `numRounded2` to the console.

```js
assert.match(code, /console\.log\(\s*numRounded2\s*\)/);
```

# --seed--

## --seed-contents--

```js
const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

console.log(greeting);

console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");

const randomNum = Math.random();
console.log(randomNum);

console.log("Now, generate a random number between two values.");

const min = 1;
const max = 100;

const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

console.log("The Math.floor() method rounds the value down to the nearest whole integer.");

const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

console.log("Now, generate a random integer between two values.");

const randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);

console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");

const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

console.log("The Math.round() method rounds the value to the nearest whole integer.");

--fcc-editable-region--

--fcc-editable-region--
```
