---
id: 695cc8f280fef0cc3bed02ca
title: Moduli ya path ni nini na inafanya kazi vipi?
challengeType: 19
dashedName: what-is-the-path-module-and-how-does-it-work
---

# --description--

Modul Node.js `path` omogućava vam da radite sa fajlovima i putanjama direktorijuma. Pruža nekoliko važnih načina za rukovanje i manipulisanje direktorijumima, uključujući spajanje, navigaciju i rešavanje putanja u različitim platformama i operativnim sistemima.

Kada koristite modul za `path`, ga možete dovesti (import) na ovaj način:

```js
const path = require("path");
```

Pogledajmo neke od metoda koje nudi modul `path` i kako oni funkcionišu.

Prvo treba da znaš za Node.js globalne promenljive `__filename` i `__dirname`, poznate i kao CommonJS promenljive. Nije ti potreban modul `path` da bi im pristupio, zbog čega se nazivaju globalnim promenljivama.

`__filename` predstavlja apsolutnu putanju do trenutne datoteke, a `__dirname` apsolutnu putanju do direktorijuma koji sadrži tu datoteku.

Na primer, imam datoteku `script.js` na kojoj trenutno radim. Evo šta ove dve promenljive vraćaju:

```js
console.log(__filename);
// /Users/user/Desktop/fCC/script-code/node/node-path/script.js

console.log(__dirname);
// /Users/user/Desktop/fCC/script-code/node/node-path
```

Takođe treba da znaš razliku između relativnih i apsolutnih putanja.

Relativna putanja pokazuje na datoteku ili fasciklu u odnosu na vaš trenutni radni direktorijum. Na primer, `./assets/src/text-files`.

Apsolutna putanja, s druge strane, daje punu adresu datoteke ili fascikle počevši od korena sistema, na primer `/Users/johndoe/projects/app/assets/src/text-files`.

Metod `basename()` vraća poslednji deo putanje, odnosno ime datoteke:

```js
console.log(path.basename(__filename)); // script.js
```

`dirname()` vraća naziv direktorijuma putanje:

```js
console.log(path.dirname(__dirname)); // node-path
```

`extname()` Vraća nastavak trenutne datoteke:

```js
console.log(path.extname(__filename)); // .js
```

Takođe možete specificirati različite fajlove radi vraćanja njegove ekstenzije:

```js
console.log(path.extname('text-files/text1.txt')); // .txt
```

Njia ya `join()` uzima sve dijelove putanja koje mu date i spaja ih u jednu čistu, izglavljenu putanju.

Ovo može biti korisno ako želite da spojite povezane fajlove iz različitih direktorijuma kako biste mogli da radite sa njima zajedno:

```js
const joinedPath = path.join("src", "assets", "text-files");
console.log(joinedPath); // src/assets/text-files
```

Windows koristi backslash za razdvajanje direktorijuma, pa će rezultat biti `src\assets\text-files`.

Osim toga, metoda za `join()` uklanja loške fleke i višak:

```js
const wrongPath = path.join("/src//", "assets", "text-files");
console.log(wrongPath); // /src/assets/text-files
```

Njia ya `resolve()` pretvara niz komponenti putanje u apsolutnu putanju. Kreće se iz vašeg trenutnog radnog direktorijuma i rezultat je apsolutna putanja koja označava stvarni položaj na uređaju:

```js
const absolutePath = path.resolve("assets", "src", "text-files");
console.log(absolutePath);
// /Users/user/Desktop/fCC/script-code/node/node-path/assets/src/text-files
```

Razlika između `join()` i `resolve()` je u tome što `join()` stvara relativni put, dok `resolve()` vraća apsolutni put.

Na kraju, postoje načini za `parse()` i `format()`.

`parse()` uzima direktorijum ili fajl i vraća nešto što je sastavljeno od delova, kao što su sistemski koren, njegov put (direktorijum), poddirektorijum/komponenta, i ime fajla:

```js
const parsedFile = path.parse(__filename);

console.log(parsedFile);
/*
{
 root: '/',
 dir: '/Users/user/Desktop/fCC/script-code/node/node-path',
 base: 'script.js',
 ext: '.js',
 name: 'script'
}
*/
```

`format()`, sa druge strane, stvara putanju od nečega što ima direktorijum, ime i ekstenziju:

```js
const formattedDirectory = path.format({
  dir: "/users/johndoe/docs",
  name: "file",
  ext: ".txt",
});

console.log(formattedDirectory); // /users/johndoe/docs/file.txt
```

# --questions--

## --text--

Koja je razlika između `path.dirname()` i `path.extname()` u Node.js?

## --answers--

`dirname()` uklanja ekstenziju datoteke, dok `extname()` uklanja naziv direktorijuma.

### --feedback--

Makini ni ipi inayoshughulikia saraka na ipi inayoshughulikia viendelezi vya faili.

---

`dirname()` vraća punu putanju do datoteke, dok `extname()` vraća naziv direktorijuma.

### --feedback--

Makini je ipi koja obrađuje direktorijume i ipi koja obrađuje ekstenzije fajlova.

---

`dirname()` vraća naziv direktorijuma putanje, dok `extname()` vraća ekstenziju datoteke.

---

`dirname()` i `extname()` oba vraćaju istu vrednost, ali u različitim formatima.

### --feedback--

Makini je ono što obrađuje direktorijume i ono što obrađuje ekstenzije fajlova.

## --video-solution--

3

## --text--

Koji je način ``path`` koji kreira punu putanju fajla iz objekta sa parametrima direktorijuma, imena i ekstenzije?

## --answers--

`path.parse()`

### --feedback--

Razmisli šta je suprotno od `parse()`.

---

`path.format()`

---

`path.resolve()`

### --feedback--

Razmisli šta je suprotno od `parse()`.

---

`path.join()`

### --feedback--

Šta je suprotno od `parse()`.

## --video-solution--

2

## --text--

Međunarodni standardi za Node.js `__filename` i `__dirname`, šta obezbeđuju pristup?

## --answers--

Puni put trenutne datoteke i direktorijuma koji sadrži tu datoteku.

---

Ime trenutnog modula i njegova zavisnost.

### --feedback--

Razmislite o parametrima koji vam daju pune putanje do fajlova i direktorijuma direktno bez korišćenja Path modula.

---

Putanja do instalacionog direktorijuma Node.js.

### --feedback--

Razmislite o kojim parametrima dobijate pune putanje do fajlova i direktorijuma direktno, bez korišćenja path modula.

---

URL mrežnog servera koji se koristi uz njegovo ime domaćina.

### --feedback--

Razmislite o tome koji parametri vam daju pune putanje do fajlova i direktorijuma direktno bez korišćenja path modula.

## --video-solution--

1