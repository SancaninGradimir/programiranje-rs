---
id: 66edc31c44f1b9c1d5c5ebca
title: Pokušaj snimka sekvence karakterâ iz JavaScript-a
challengeType: 8
dashedName: quiz-javascript-strings
---

# --description--

Da biste položili kratki test, morate tačno odgovoriti na najmanje 18 od 20 pitanja koja su navedena ispod.

# --quizzes--

## --quiz--

### --question--

#### --text--

Vrednost return putem `includes()` je?

#### --distractors--

Ako se podstring znakova pronađe unutar niza, ta funkcija vraća taj niz. Inače, vraća `undefined`.

---

Ako je podstring znakova pronađen unutar sekvence, ta funkcija vraća `true`. Inače, vraća prazan string.

---

Ako je mali deo sekvence karaktera pronađen unutar sekvence, ta funkcija vraća tu sekvencu. Inače, vraća `null`.

#### --answer--

Ako se podstring znakova pronađe unutar niza, ta metoda vraća `true`. Inače, vraća `false`.

### --question--

#### --text--

Koja opcija prikazuje unos vrednosti sekvence slova?

#### --distractors--

`"Hello, " + user + "!"`

---

`"Hello, $user!"`

---

`` `Zdravo, {user}!` ``

#### --answer--

`` `Zdravo, ${user}!` ``

### --question--

#### --text--

Da li je neko od ovih svojstvo za započinjanje novog reda (znak za novi red)?

#### --distractors--

`\newline`

---

`\new`

---

`\line`

#### --answer--

`\n`

### --question--

#### --text--

Koja informacija među ovim je tačna o sekvenci slova?

#### --distractors--

Niz karaktera je promenljiv i može se promeniti nakon kreiranja.

---

Niz znakova su neprimitivni tipovi podataka (non primitive data types).

---

Sekvenca slova može se kreirati koristeći samo jedan navodnik.

#### --answer--

Niz karaktera je nepromenljiv (immutable).

### --question--

#### --text--

Šta pokriva ASCII?

#### --distractors--

Američki standardni kod for Informacije o internetu

---

Napredni sistematski kod for Interna razmena

---

Automatski standardni kod for Interna informacija

#### --answer--

Američki standardni kod for Razmena informacija

### --question--

#### --text--

Koji metod među ovim uzima deo niza znakova i vraća novi niz?

#### --distractors--

`trim()`

---

`indexOf()`

---

`prompt()`

#### --answer--

`slice()`

### --question--

#### --text--

Svrha puta `prompt()` je li?

#### --distractors--

Prikazuje poruku u konzoli.

---

Prikazuje opreznu kutiju sa porukom.

---

Prikazuje okvir za potvrdu sa porukom.

#### --answer--

Prikazuje okvir za razgovor koji čeka unos korisnika.

### --question--

#### --text--

Koji je ispravan način da se dobije treći slovo sekvence karaktera?

#### --distractors--

```js
const developer = "Jessica";
developer[3];
```

---

```js
const developer = "Jessica";
developer[-1];
```

---

```js
const developer = "Jessica";
developer[0];
```

#### --answer--

```js
const developer = "Jessica";
developer[2];
```

### --question--

#### --text--

Kako dobiti ASCII vrednost prvog slova u nizu karaktera `"hello"`?

#### --distractors--

`"hello".charCode(0)`

---

`"hello".codeAt(0)`

---

`"hello".getCharIndex(0)`

#### --answer--

`"hello".charCodeAt(0)`

### --question--

#### --text--

Koja metoda se može koristiti za dobijanje karaktera koji odgovara ASCII vrednosti?

#### --distractors--

`toASCII()`

---

`toChar()`

---

`toCode()`

#### --answer--

`fromCharCode()`

### --question--

#### --text--

Koji primer između `indexOf` ćete napisati `-1` u konzoli?

#### --distractors--

```js
const organization = "freeCodeCamp";
console.log(organization.indexOf("e"));
```

---

```js
const organization = "freeCodeCamp";
console.log(organization.indexOf("f"));
```

---

```js
const organization = "freeCodeCamp";
console.log(organization.indexOf("C"));
```

#### --answer--

```js
const organization = "freeCodeCamp";
console.log(organization.indexOf("c"));
```

### --question--

#### --text--

Možete li proveriti da li niz znakova `"JavaScript"` sadrži `"Script"`?

#### --distractors--

`"JavaScript".has("Script")`

---

`"JavaScript".contains("Script")`

---

`"JavaScript".exists("Script")`

#### --answer--

`"JavaScript".includes("Script")`

### --question--

#### --text--

Koja od ovih uzima podstring iz niza znakova `"Script"` iz niza znakova `"JavaScript"`?

#### --distractors--

`"JavaScript".find(5)`

---

`"JavaScript".extract(4)`

---

`"JavaScript".cut(5)`

#### --answer--

`"JavaScript".slice(4)`

### --question--

#### --text--

Da li možete da promenite niz slova `"JavaScript"` u velika slova?

#### --distractors--

`"JavaScript".upper()`

---

`"JavaScript".toUpper()`

---

`"JavaScript".convertUpper()`

#### --answer--

`"JavaScript".toUpperCase()`

### --question--

#### --text--

Da li možete da promenite niz slova `"JavaScript"` u mala slova?

#### --distractors--

`"JavaScript".lower()`

---

`"JavaScript".toLower()`

---

`"JavaScript".convertLower()`

#### --answer--

`"JavaScript".toLowerCase()`

### --question--

#### --text--

Koja od ovoga će promeniti `"dogs"` u `"cats"` u nizu karaktera `"I love dogs"`.

#### --distractors--

`"I love dogs".slice("dogs", "cats")`

---

`"I love dogs".replaceWith("dogs", "cats")`

---

`"I love dogs".find("dogs", "cats")`

#### --answer--

`"I love dogs".replace("dogs", "cats")`

### --question--

#### --text--

Koji metod se koristi za ponavljanje niza slova određen broj puta?

#### --distractors--

`times()`

---

`repeatTimes()`

---

`repeatNumber()`

#### --answer--

`repeat()`

### --question--

#### --text--

Koji sledeći kod će vratiti: `"abc".repeat(3)`?

#### --distractors--

`"abcabc"`

---

`"abcabcabcabc"`

---

It will throw an error.

#### --answer--

`"abcabcabc"`

### --question--

#### --text--

Koji metod pronalazi prazne prostore u početku i na kraju niza znakova?

#### --distractors--

`strip()`

---

`removeWhitespace()`

---

`trimWhitespace()`

#### --answer--

`trim()`

### --question--

#### --text--

Koja je ispravna sintaksa za izbegavanje navodnika?

#### --distractors--

```js
"She said, ?"Hello!?""
```

---

```js
"She said, ."Hello!.""
```

---

```js
"She said, //"Hello!//""
```

#### --answer--

```js
"She said, \"Hello!\""
```
