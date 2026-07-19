---
id: 5eb3e4af7d0e7b760b46cedc
title: Unija skupova
challengeType: 1
forumTopicId: 385319
dashedName: set-consolidation
---

# --description--

Ako postoje dva skupa stvari i ako je bilo šta u bilo kom od ta dva skupa, onda rezultat korišćenjem *unije* za te skupove je skup skupova koji imaju:

<ul>
  <li>Dve ulazne skupine ako nema ništa zajedničkog između te dve skupe stavki/objekata.</li>
  <li>Jedna skupina koja je unija tih dve ulazne skupine ako dele nešto zajedničko.</li>
</ul>

Ako postoji setova N elemenata gde je N > 2, rezultat je ekvivalentno ponovnom menjanju svih kombinacija od dva skupa po njihovom uniji sve dok više unija između parova skupova nije moguće. Ako je N &lt; 2, onda unija nema smisla i unos može biti vraćen takav kakav jeste.

Evo primera:

**Primer 1:**

Ako dve skupa `{A,B}` i `{C,D}`, onda nema zajedničkih elemenata između ova dva skupa, a rezultat je jednak ulazu.

**Primer 2:**

Ako postoje dva skupa `{A,B}` i `{B,D}`, postoji zajednički element `B` između tih skupova, a rezultat je jedan skup `{B,D,A}`. (Napomena da redosled elemenata u skupu nije bitan: `{A,B,D}` је исто као `{B,D,A}` и `{D,A,B}`, i sl.).

**Primer 3:**

Ako tri seta `{A,B}` i `{C,D}` i `{D,B}`, onda nema zajedničkog elementa između seta `{A,B}` i `{C,D}`, ali setovi `{A,B}` i `{D,B}` dele povezujući element koji proizvodi rezultate `{B,D,A}`. Analiziranjem ovih rezultata i preostalog seta, `{C,D}`, oni dele element i time se spajaju u konačni rezultat jednog seta `{A,B,C,D}`

**Primer 4:**

Unija pet skupova:

`{H,I,K}`, `{A,B}`, `{C,D}`, `{D,B}`, i `{F,G,H}`

Dva seta:

`{A, C, B, D}`, i `{G, F, I, H, K}`

# --instructions--

Napišite funkciju koja prima niz sekvenci karaktera kao argument. Svaka sekvenca karaktera predstavlja skup, a karakteri predstavljaju elemente tog skupa. Funkcija treba da vrati niz nizova podataka koji sadrže povezane skupove. Napomena: Svaki skup mora biti sortiran.

# --hints--

`setConsolidation` Trebalo bi da bude funkcija.

```js
assert(typeof setConsolidation === 'function');
```

`setConsolidation(["AB", "CD"])` Trebalo bi da vrati red podataka.

```js
assert(Array.isArray(setConsolidation(['AB', 'CD'])));
```

`setConsolidation(["AB", "CD"])` trebalo bi vratiti `[["C", "D"], ["A", "B"]]`.

```js
assert.deepEqual(setConsolidation(['AB', 'CD']), [
  ['C', 'D'],
  ['A', 'B']
]);
```

`setConsolidation(["AB", "BD"])` trebalo bi da vrati `[["A", "B", "D"]]`.

```js
assert.deepEqual(setConsolidation(['AB', 'BD']), [['A', 'B', 'D']]);
```

`setConsolidation(["AB", "CD", "DB"])` trebalo bi vratiti `[["A", "B", "C", "D"]]`.

```js
assert.deepEqual(setConsolidation(['AB', 'CD', 'DB']), [['A', 'B', 'C', 'D']]);
```

`setConsolidation(["HIK", "AB", "CD", "DB", "FGH"])` trebalo bi da vrati `[["F", "G", "H", "I", "K"], ["A", "B", "C", "D"]]`.

```js
assert.deepEqual(setConsolidation(['HIK', 'AB', 'CD', 'DB', 'FGH']), [
  ['F', 'G', 'H', 'I', 'K'],
  ['A', 'B', 'C', 'D']
]);
```

# --seed--

## --seed-contents--

```js
function setConsolidation(sets) {

}
```

# --solutions--

```js
function setConsolidation(sets) {
  function addAll(l1, l2) {
    l2.forEach(function(e) {
      if (l1.indexOf(e) == -1) l1.push(e);
    });
  }

  function consolidate(sets) {
    var r = [];
    for (var i = 0; i < sets.length; i++) {
      var s = sets[i];
      {
        var new_r = [];
        new_r.push(s);
        for (var j = 0; j < r.length; j++) {
          var x = r[j];
          {
            if (
              !(function(c1, c2) {
                for (var i = 0; i < c1.length; i++) {
                  if (c2.indexOf(c1[i]) >= 0) return false;
                }
                return true;
              })(s, x)
            ) {
              (function(l1, l2) {
                addAll(l1, l2);
              })(s, x);
            } else {
              new_r.push(x);
            }
          }
        }
        r = new_r;
      }
    }
    return r;
  }

  function consolidateR(sets) {
    if (sets.length < 2) return sets;
    var r = [];
    r.push(sets[0]);
    {
      var arr1 = consolidateR(sets.slice(1, sets.length));
      for (var i = 0; i < arr1.length; i++) {
        var x = arr1[i];
        {
          if (
            !(function(c1, c2) {
              for (var i = 0; i < c1.length; i++) {
                if (c2.indexOf(c1[i]) >= 0) return false;
              }
              return true;
            })(r[0], x)
          ) {
            (function(l1, l2) {
              return l1.push.apply(l1, l2);
            })(r[0], x);
          } else {
            r.push(x);
          }
        }
      }
    }
    return r;
  }

  function hashSetList(set) {
    var r = [];
    for (var i = 0; i < set.length; i++) {
      r.push([]);
      for (var j = 0; j < set[i].length; j++)
        (function(s, e) {
          if (s.indexOf(e) == -1) {
            s.push(e);
            return true;
          } else {
            return false;
          }
        })(r[i], set[i].charAt(j));
    }
    return r;
  }

  var h1 = consolidate(hashSetList(sets)).map(function(e) {
    e.sort();
    return e;
  });
  return h1;
}
```
