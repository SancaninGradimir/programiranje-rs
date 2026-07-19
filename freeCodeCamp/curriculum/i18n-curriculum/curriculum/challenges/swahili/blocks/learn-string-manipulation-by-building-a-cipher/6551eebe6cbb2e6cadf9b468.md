---
id: 6551eebe6cbb2e6cadf9b468
title: Korak 2
challengeType: 20
dashedName: step-2
---

# --description--

Parametri mogu čuvati vrednosti različitih tipova podataka. Postavili ste vrednost celog broja, ali ako želite tekstualnu reprezentaciju (string), morate postaviti niz znakova. Niz znakova je sekvenca karaktera koja je obuhvaćena jednim ili dvostrukim navodnicima, ali ne možete početi niz sa jednim navodnikom i završiti ga sa dvostrukim navodnikom ili obrnuto:

```py
string_1 = "I am a string"
string_2 = 'I am also a string'
string_3 = 'This is not valid"
```

Izbrišite vaše parametre za `number` i njegovu vrednost. Zatim, deklarišite drugi parametar nazvan `text` i postavite vrednost niza karaktera `'Hello World'` u ovaj parametar.

# --hints--

Ne bi trebalo da imaš `number = 5` u svom kodu.

```js
const commentless_code = __helpers.python.removeComments(code);
assert.isFalse(/number\s*=\s*5/.test(commentless_code))
```

Trebalo bi da objavite parametar koji se zove `text`. Obratite pažnju na postavljanje imena parametra na početku linije.

```js
assert.match(code, /^text\s*=/m)
```

Treba da postavite vrednost nizu znakova `'Hello World'` u vašem parametru `text`. Zapamtite da koristite pojedinačne navodne ili dvostruke navodne oznake za obavijanje niza znakova i obratite pažnju na velika i mala slova.

```js
assert.match(code, /^text\s*=\s*("|')Hello World\1\s*(#.*)?$/m)
```

Vaš kod ima netačan sintaksa i/ili pogrešan ukazivač.

```js
({test: () => assert(true) })
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
number = 5
--fcc-editable-region--
```
