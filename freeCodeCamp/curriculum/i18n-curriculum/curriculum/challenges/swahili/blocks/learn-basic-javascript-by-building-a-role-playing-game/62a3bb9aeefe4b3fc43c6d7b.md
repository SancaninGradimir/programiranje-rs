---
id: 62a3bb9aeefe4b3fc43c6d7b
title: Korak 17
challengeType: 0
dashedName: step-17
---

# --description--

`button1` je parametar koji neće dobiti novu vrednost. Ako parametru nije dodeljena nova vrednost, bolja je praksa koristiti glavni termin `const` umesto glavnog termina `let`. Ovo će obavestiti JavaScript da izbaci grešku ako slučajno pokušate dodeliti novu vrednost.

Promeni svoj parametar `button1` u glavni pojam `const`.

# --hints--

Vaš parametar za `button1` treba biti objavljen za `const`.

```js
assert.match(code, /const\s+button1/);
```

Vaš parametar za `button1` treba da zadrži vrednost vašeg atributa za `#button1`.

```js
assert.deepEqual(button1, document.querySelector("#button1"));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./styles.css">
    <title>RPG - Dragon Repeller</title>
  </head>
  <body>
    <div id="game">
      <div id="stats">
        <span class="stat">XP: <strong><span id="xpText">0</span></strong></span>
        <span class="stat">Health: <strong><span id="healthText">100</span></strong></span>
        <span class="stat">Gold: <strong><span id="goldText">50</span></strong></span>
      </div>
      <div id="controls">
        <button id="button1">Go to store</button>
        <button id="button2">Go to cave</button>
        <button id="button3">Fight dragon</button>
      </div>
      <div id="monsterStats"></div>
      <div id="text"></div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
```

```js
let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

--fcc-editable-region--
let button1 = document.querySelector("#button1");
--fcc-editable-region--
```
