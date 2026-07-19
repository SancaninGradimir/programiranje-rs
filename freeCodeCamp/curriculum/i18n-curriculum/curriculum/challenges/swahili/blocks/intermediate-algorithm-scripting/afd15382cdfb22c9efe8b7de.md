---
id: afd15382cdfb22c9efe8b7de
title: Spajanje parova DNK-a
challengeType: 1
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

Parovi basa DNK se sastoje od parova baznih nukleotida. Parovi baza su predstavljeni slovima <em>AT</em> i <em>CG</em>, koji čine osnovne segmente dvostruke spirale DNK.

Sekvenca DNK nedostaje element za parovanje baza. Napišite funkciju koja uparuje nedostajuće bazne parove za dati niz DNK. Za svaki znak u datoj sekvenci znaka, pronađite odgovarajući bazni par znak. Vratite rezultat kao niz podataka sa dva elementa.

Na primer, za unos `GCG`, vrati `[["G", "C"], ["C","G"], ["G", "C"]]`

Karakter i njegov par spajaju se u niz podataka, a svi nizi se spajaju zajedno u jedan veliki niz.

# --hints--

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
function pairElement(str) {
  return str;
}

pairElement("GCG");
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
