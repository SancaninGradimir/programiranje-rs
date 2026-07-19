---
id: afd15382cdfb22c9efe8b7de
title: Generativni sistem za pare DNA-a
challengeType: 26
dashedName: implement-a-dna-pair-generator
---

# --description--

U dvokraka heliks DNK, baze su uvek povezane: ako na jednom lancu postoji baza od <em>A</em>, na drugom lancu direktno ispred postoji baza od <em>T</em>, druga para je <em>C</em> i <em>G</em>.

U ovoj laboratoriji ćete napisati funkciju za uparivanje nedostajućih komplementarnih baza za ekstrahovani lanac DNA-a. Za svaki karakter u ekstrahovanoj sekvenci, pronađite par.

Na primer, za unos `ATCG`, vratite `[["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]]`

Osnova <em>A</em> je spajana sa osnovom <em>T</em>, osnova <em>T</em> je spajana sa osnovom <em>A</em>, <em>C</em> je spajana sa osnovom <em>G</em>, i konačno osnova <em>G</em> je spajana sa osnovom <em>C</em>.

**Cilj**: Popunite korisničke priče navedene ispod i prođite sve testove kako biste završili laboratoriju.

**Priče korisnika:**

1. Mora postojati funkcija `pairElement` koja prima niz znakova bilo koje dužine kao argument.
1. Funkcija `pairElement` treba da vrati dvodimenzionalni niz podataka, gde svaka pod-redica sadrži dva niza znakova: prvi niz je jedan element iz ulaza, a drugi niz je par elemenata.
1. Ako primi `A`, funkcija treba da se uporedi sa `T`.
1. Ako primi `T`, funkcija treba da se uporedi sa `A`.
1. Ako primi `C`, funkcija treba da se uporedi sa `G`.
1. Ako primi `G`, funkcija treba da se uporedi sa `C`.

# --hints--

Treba ti kreirati funkciju koja se zove `pairElement`.

```js
assert.isFunction(pairElement);
```

`pairElement` treba da primi samo jednu tačku.

```js
assert.lengthOf(pairElement, 1);
```

`pairElement("ATCGA")` treba da vrati `[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]`.

```js
assert.deepEqual(pairElement('ATCGA'), [
  ['A', 'T'],
  ['T', 'A'],
  ['C', 'G'],
  ['G', 'C'],
  ['A', 'T']
]);
```

`pairElement("TTGAG")` treba vratiti `[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]`.

```js
assert.deepEqual(pairElement('TTGAG'), [
  ['T', 'A'],
  ['T', 'A'],
  ['G', 'C'],
  ['A', 'T'],
  ['G', 'C']
]);
```

`pairElement("CTCTA")` trebalo bi da vrati `[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]`.

```js
assert.deepEqual(pairElement('CTCTA'), [
  ['C', 'G'],
  ['T', 'A'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'T']
]);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
var lookup = Object.create(null);
lookup.A = 'T';
lookup.T = 'A';
lookup.C = 'G';
lookup.G = 'C';

function pairElement(str) {
 return str.split('').map(function(p) {return [p, lookup[p]];});
}
```
