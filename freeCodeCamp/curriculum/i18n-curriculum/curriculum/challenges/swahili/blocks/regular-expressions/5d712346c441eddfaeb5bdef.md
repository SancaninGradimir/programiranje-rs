---
id: 5d712346c441eddfaeb5bdef
title: Pronađi sve brojeve
challengeType: 1
forumTopicId: 18181
dashedName: match-all-numbers
---

# --description--

Naučio si prečice za uobičajene klase znakova kao što su slova i brojevi. Još jedan čest obrazac je pronalaženje samo cifara.

Prečica za pronalaženje cifara je `\d`, malim slovom `d`. To je isto što i klasa znakova `[0-9]`, koja pronalazi bilo koju pojedinačnu cifru od nule do devet.

# --instructions--

Upotrebi prečicu `\d` da izbrojiš koliko se cifara nalazi u naslovima filmova. Brojevi napisani rečima („šest“ umesto 6) ne računaju se.

# --hints--

Standardni način unosa bi trebalo da koristi prečicu karaktera za pronalaženje cifara

```js
assert(/\\d/.test(numRegex.source));
```

Vaša uobičajena izjava treba da koristi globalnu zastavicu.

```js
assert(numRegex.global);
```

Regularni izraz treba da pronađe 1 cifru u nizu `9`.

```js
assert('9'.match(numRegex).length == 1);
```

Regularni izraz treba da pronađe 2 cifre u nizu `Catch 22`.

```js
assert('Catch 22'.match(numRegex).length == 2);
```

Regularni izraz treba da pronađe 3 cifre u nizu `101 Dalmatians`.

```js
assert('101 Dalmatians'.match(numRegex).length == 3);
```

Regularni izraz treba da pronađe 0 cifara u nizu `One, Two, Three`.

```js
assert('One, Two, Three'.match(numRegex) == null);
```

Regularni izraz treba da pronađe 2 cifre u nizu `21 Jump Street`.

```js
assert('21 Jump Street'.match(numRegex).length == 2);
```

Vaše uobičajeno ime treba da sadrži cifru 4 u sekvenci `2001: A Space Odyssey`.

```js
assert('2001: A Space Odyssey'.match(numRegex).length == 4);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
```
