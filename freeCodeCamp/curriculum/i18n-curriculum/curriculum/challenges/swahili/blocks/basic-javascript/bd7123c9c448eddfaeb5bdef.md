---
id: bd7123c9c448eddfaeb5bdef
title: Pronadjite Duzinu Stringa
challengeType: 1
forumTopicId: 18182
dashedName: find-the-length-of-a-string
---

# --description--

Duzinu `String` vrednosti mozete dobiti tako sto napisete `.length` iza string promenljive ili iza samog string literala.

```js
console.log("Alan Peter".length);
```

U konzoli ce biti prikazana vrednost `10`. Obratite paznju da se i razmak izmedju "Alan" i "Peter" racuna.

Na primer, ako napravimo promenljivu `const firstName = "Ada"`, duzinu stringa `Ada` mozemo dobiti pomocu svojstva `firstName.length`.

# --instructions--

Koristite svojstvo `.length` da postavite `lastNameLength` na broj karaktera u `lastName`.

# --hints--

Ne treba da menjate deklaracije promenljivih u delu `// Setup`.

```js
assert(
  __helpers.removeJSComments(code).match(/let lastNameLength = 0;/) &&
    __helpers.removeJSComments(code).match(/const lastName = "Lovelace";/)
);
```

`lastNameLength` treba da bude jednako osam.

```js
assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8);
```

Treba da uzmete duzinu od `lastName` koristeci `.length`, ovako: `lastName.length`.

```js
assert(__helpers.removeJSComments(code).match(/=\s*lastName\.length/g) && !__helpers.removeJSComments(code).match(/lastName\s*=\s*8/));
```

# --seed--

## --seed-contents--

```js
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName;
```

# --solutions--

```js
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
```
