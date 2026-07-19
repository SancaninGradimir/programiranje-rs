---
id: 6732b28eeadda1158cdbff7b
title: Kako proveriti da li red podataka ima određenu vrednost?
challengeType: 19
dashedName: how-can-you-check-if-an-array-contains-a-certain-value
---

# --interactive--

U JavaScript, metoda `includes()` je jednostavan i efikasan način za proveru da li red podataka ima određenu vrednost. Ova metoda vraća vrednost tačno ili netačno: `true` ako red podataka sadrži pomenuti element, i `false` inače.

Metoda `includes()` je važna posebno kada treba brzo da se proveri postojanje elemenata u redovima podataka bez znanja njihove stvarne pozicije. Počnimo sa primerom kako koristiti metodu `includes()`:

:::interactive_editor

```js
let fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false
```

:::

U ovom primeru, imamo niz voća. Koristimo metodu `includes()` da proverimo da li `banana` postoji u nizu podataka. Vraća `true` jer `banana` zaista postoji. Zatim proveravamo `grape`, što vraća `false` jer nije u nizu podataka.

Metoda za `includes()` je osetljiva na mala i velika slova prilikom obrade niza znakova. To znači da su `Banana` sa velikim slovom B i `banana` sa svim malim slovima smatrani različitim vrednostima. Evo primera koji to pokazuje:

:::interactive_editor

```js
let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("Banana")); // false
```

:::

U ovom slučaju, `banana` (sve u malim slovima) nalazi se u redu podataka, ali `Banana` (sa velikom početnom slovom) nije prisutno, pa drugi poziv od `includes()` vraća `false`.

Funkcija `includes()` takođe može primiti drugi opcioni parametar koji opisuje početnu poziciju u nizu podataka od koje želite da počnete pretraživati. Ovo je korisno ako želite da proverite postojanje elementa u određenom delu niza podataka. Evo kako možete koristiti ovu funkciju:

:::interactive_editor

```js
let numbers = [10, 20, 30, 40, 50, 30, 60];
console.log(numbers.includes(30, 3)); // true
console.log(numbers.includes(30, 4)); // true
```

:::

Sa prvim pozivom od `console.log`, tražimo broj `30` počevši od modela `3`. U ovom slučaju, postoji broj `30` koji se pojavljuje nakon modela `3`, stoga putanja `includes()` vraća `true`.

Isto važi za drugi poziv od `console.log`. Tražimo broj `30` počevši od modela `4`. Pošto se broj `30` pojavljuje nakon tog modela, onda će vratiti `true`.

Važno je znati da `includes()` koristi striktno poređenje jednakosti (`===`), što znači da može razlikovati različite tipove. Na primer:

:::interactive_editor

```js
let mixedArray = [1, "2", 3, "4", 5];
console.log(mixedArray.includes(2));  // false
console.log(mixedArray.includes("2")); // true
```

:::

U ovom slučaju, broj `2` i niz slova `"2"` smatraju se različitim vrstama podataka. Stoga, prvi poziv `console.log` će vratiti `false`, dok drugi poziv `console.log` će vratiti `true`.

Metoda `includes()` je moćan alat za proveru postojanja elemenata u nizovima podataka. Lako je za korišćenje, efikasan je, i može vas spasiti od pisanja složenih petlji ili uslova za pretraživanje u nizovima podataka. Bilo da radite sa sekvencama slova, brojeva ili mešovitim tipovima podataka, `includes()` pruža jednostavan način da potvrdite da li vrednost postoji u vašem nizu podataka.

# --questions--

## --text--

Šta će biti rezultat sledećeg koda?

```js
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3, 3));
```

## --answers--

`true`

### --feedback--

Drugi parametar `includes()` opisuje početnu poziciju za pretraživanje.

---

`false`

---

`undefined`

### --feedback--

Drugi argument metode `includes()` određuje početnu poziciju za pretragu.

---

Ovo će nam otpasti kosu.

### --feedback--

Drugi parametar `includes()` opisuje početnu poziciju za pretraživanje.

## --video-solution--

2

## --text--

Šta će biti rezultat sledećeg koda?

```js
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.includes("C"));
```

## --answers--

`true`

### --feedback--

Zapamtite da `includes()` ima osetljivost na mala i velika slova prilikom obrade niza znakova.

---

`false`

---

`undefined`

### --feedback--

Zapamtite da `includes()` ima osetljivost na mala i velika slova prilikom obrade niza karaktera.

---

Ovo će nam otpasti kosu.

### --feedback--

Zapamtite da `includes()` ima osetljivost na mala i velika slova prilikom obrade niza znakova.

## --video-solution--

2

## --text--

Šta će biti rezultat sledećeg koda?

```js
let arr = [1, "2", 3, "4", 5];
console.log(arr.includes("3"));
```

## --answers--

`true`

### --feedback--

Putanja `includes()` koristi strogu jednakost (`===`) za poređenje.

---

`false`

---

`undefined`

### --feedback--

Putanja `includes()` koristi strogu jednakost (`===`) za poređenje.

---

Ovo će nam otpasti kosu.

### --feedback--

Način `includes()` koristi strogu jednakost (`===`) za poređenje.

## --video-solution--

2