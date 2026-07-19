---
id: bd7123c9c443eddfaeb5bdef
title: Deklarisanje JavaScript Promenljivih
challengeType: 1
forumTopicId: 17556
dashedName: declare-javascript-variables
---

# --description--

U racunarstvu, <dfn>podaci</dfn> su sve sto ima znacenje za racunar. JavaScript ima osam razlicitih tipova <dfn>podataka</dfn>: `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number` i `object`.

Na primer, racunar razlikuje brojeve, kao sto je `12`, i `strings`, kao sto su `"12"`, `"dog"` ili `"123 cats"`, koji predstavljaju nizove karaktera. Racunari mogu da rade matematicke operacije sa brojevima, ali ne i sa stringovima.

<dfn>Promenljive</dfn> omogucavaju racunaru da cuva i upravlja podacima na dinamican nacin. One koriste "etikete" za pokazivanje na podatke umesto samih podataka. Bilo koji od osam tipova podataka moze biti sacuvan u promenljivoj.

Promenljive su slicne promenljivama x i y koje koristite u matematici, sto znaci da su jednostavna imena za podatke na koje zelimo da se pozivamo. Racunarske promenljive se razlikuju od matematickih jer mogu cuvati razlicite vrednosti u razlicitim trenucima.

JavaScript-u kazemo da napravi ili <dfn>deklarise</dfn> promenljivu tako sto ispred imena stavimo kljucnu rec `var`, ovako:

```js
var ourName;
```

Ovo pravi promenljivu pod nazivom `ourName`. U JavaScript-u naredbe zavrsavamo tacka-zarezom. Imena promenljivih mogu da sadrze brojeve, slova i `$` ili `_`, ali ne smeju imati razmake niti pocinjati brojem.

# --instructions--

Koristite kljucnu rec `var` da napravite promenljivu pod nazivom `myName`.

**Pomoc**  
Pogledajte primer `ourName` iznad ako zapnete.

# --hints--

Treba da deklarisete `myName` kljucnom recju `var` i zavrsite izraz tacka-zarezom

```js
assert(/var\s+myName\s*;/.test(__helpers.removeJSComments(code)));
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
var myName;
```
