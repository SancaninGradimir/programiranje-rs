---
id: 9d7123c8c441eeafaeb5bdef
title: Ukloni elemente iz niza podataka koristeći `slice` umesto `splice`
challengeType: 1
forumTopicId: 301236
dashedName: remove-elements-from-an-array-using-slice-instead-of-splice
---

# --description--

Kada sistem koristi nizove podataka, to je kada želite da obrišete elemente i sačuvate ono što ostaje u nizu. JavaScript pruža metod `splice` za to, koji prima argumente kao početnu poziciju brisanja elemenata, a zatim broj elemenata za brisanje. Ako drugi argument nije navedeno, podrazumevano je brisanje elemenata do kraja. Međutim, metoda `splice` menja originalni niz podataka koji se poziva. Evo primera:

```js
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
```

Ovde `splice` vraća sekvencu slova `London` i briše je iz liste gradova. `cities` će imati vrednost `["Chicago", "Delhi", "Islamabad", "Berlin"]`.

Kao što smo videli u prethodnom izazovu, metoda ``slice`` ne modifikuje originalni niz, već vraća novi niz koji se može sačuvati u varijablu. Zapamtite da metoda ``slice`` prima dva argumenta za početne i krajnje indekse izvlačenog dela (kraj je ekskluzivan), i vraća te elemente u novi niz. Korišćenje metode ``slice`` umesto ``splice`` pomaže u izbegavanju bilo kakvih sporednih efekata modifikovanja originalnog niza.

# --instructions--

Ponovo napišite funkciju `nonMutatingSplice` koristeći `slice` umesto `splice`. Trebalo bi da se ograniči red podataka `cities` koji je vraćen na dužinu od 3, i da se vrati samo novi red sa prvih tri elementa.

Nemojte menjati početni red/niz koji je prosleđen funkciji.

# --hints--

Tvoj kod bi trebalo da koristi metod `slice`.

```js
assert(__helpers.removeJSComments(code).match(/\.slice/g));
```

Vaš kod ne bi trebalo da koristi metodu `splice`.

```js
assert(!__helpers.removeJSComments(code).match(/\.?[\s\S]*?splice/g));
```

Ne smete da menjate početni red koji je poslat funkciji.

```js
assert(
  (function () {
    const _inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
    nonMutatingSplice(_inputCities);
    return (
      JSON.stringify(_inputCities) ===
      JSON.stringify(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])
    );
  })()
);
```

`nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])` treba da vrati `["Chicago", "Delhi", "Islamabad"]`.

```js
assert.deepEqual(
  nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]),
  ["Chicago", "Delhi", "Islamabad"]
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingSplice(cities) {

  return cities.splice(3);
}
```

# --solutions--

```js
function nonMutatingSplice(cities) {
  return cities.slice(0,3);
}
```
