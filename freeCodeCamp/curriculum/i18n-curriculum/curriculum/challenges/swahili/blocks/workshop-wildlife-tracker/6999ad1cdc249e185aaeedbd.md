---
id: 6999ad1cdc249e185aaeedbd
title: Korak 8
challengeType: 1
dashedName: step-8
---

# --description--

U ovom koraku, kreiraćete funkciju koja dodaje novu osobinu objektu.

Evo primera dodavanja atributa unutar funkcije:

```js
const cat = {
  species: "Cat"
};

const addColor = (pet, color) => {
  pet.color = color; // add new property using dot notation
  return pet; // return the updated object
}

console.log(addColor(cat, "White")); 
// {
//   species: 'Cat',
//   color: 'White'
// }
```

U ovom primeru, svojstvo `color` dodaje se objektu `cat`.

Sada kreiraj funkciju nazvanu `addHabitat`. Ta funkcija treba da uzme dva parametra: `animal` i `habitat`.

Unutar funkcije, dodaj novu osobinu nazvanu `habitat` objektu `animal`. Postavi njegovu vrednost jednaku parametru `habitat`.

Vrati ažurirano nešto za `animal`.

Nakon kreiranja funkcije, koristite `console.log` za pozivanje `addHabitat(tiger, "Rainforest")` ili vidite nešto od `tiger` ažurirano na konzoli.

# --hints--

Trebalo bi da kreirate funkciju nazvanu `addHabitat`.

```js
assert.isFunction(addHabitat);
```

Funkcija za `addHabitat` mora imati dva parametra: `animal` i `habitat`.

```js
const regex = __helpers.functionRegex('addHabitat', ['animal', 'habitat']);
assert.match(__helpers.removeJSComments(code), regex);
```

`addHabitat` trebalo bi koristiti dot notaciju da doda svojstvo za `habitat`.

```js
assert.match(code, /animal\.habitat\s*=\s*habitat/);
```

Funkcija `addHabitat` trebalo bi da vrati objekat `animal` koji je ažuriran.

```js
const testAnimal = { species: "Cat" };
const result = addHabitat(testAnimal, "Forest");
assert.strictEqual(result, testAnimal);
```

Treba da napišete `addHabitat(tiger, "Rainforest")` u konzolu.

```js
assert.match(
  code,
  /console\s*\.\s*log\s*\(\s*addHabitat\s*\(\s*tiger\s*,\s*["']Rainforest["']\s*\)\s*\)/
);
```

Pozvati `addHabitat(tiger, "Rainforest")` treba dodati atribut staništa za tigra.

```js
const updatedTiger = addHabitat(tiger, "Rainforest");

assert.deepEqual(updatedTiger, {
  species: "Tiger",
  age: 5,
  isEndangered: true,
  habitat: "Rainforest"
});
```

`addHabitat` trebalo bi da koristi parametre funkcije i radi sa bilo kojim objektom.

```js
const lion = { species: "Lion" };
const updatedLion = addHabitat(lion, "Savanna");

assert.strictEqual(updatedLion.habitat, "Savanna");
```

# --seed--

## --seed-contents--

```js
const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};

const getSpecies = (animal) => {
  return animal.species;
};

console.log(getSpecies(tiger));

const getAge = (animal) => {
  return animal.age;
};

console.log(getAge(tiger));

--fcc-editable-region--

--fcc-editable-region--
```
