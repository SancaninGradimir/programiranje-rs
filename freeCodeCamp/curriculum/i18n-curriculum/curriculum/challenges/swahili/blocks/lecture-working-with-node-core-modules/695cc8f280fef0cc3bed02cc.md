---
id: 695cc8f280fef0cc3bed02cc
title: Moduli ya stream ni nini na inafanya kazi vipi?
challengeType: 19
dashedName: what-is-the-stream-module-and-how-does-it-work
---

# --description--

Najnoviji osnovni modul za Node.js koji proučavamo je `stream`. Ovaj modul vam pomaže da efikasno rukujete podacima, posebno kada su podaci preveliki za čitanje odjednom, kao što je čitanje velike tekstualne datoteke ili preuzimanje velikog videa.

Umesto da čekaš da pročitaš ili napišeš sve podatke pre nego što uradiš bilo šta, streamovi obrađuju delove dolaznih podataka, kao što možeš da počneš gledati YouTube video pre nego što je celokupan video završen sa učitavanjem.

Postoje četiri glavna tipa streamova u Node.js: čitljivi (readable), upisivi (writable), dupleksni (duplex) i transform (transform):

- Readable stream-ovi omogućavaju čitanje podataka u delovima (na primer, čitanje velike datoteke).
- Writable stream-ovi omogućavaju upisivanje podataka u delovima (na primer, čuvanje datoteke).
- Duplex streams zinaweza kusoma na kuandika data.
- Transform stream-ovi su posebna vrsta duplex stream-a koja može da menja ili obrađuje podatke dok prolaze kroz nju.

Unaweza import madarasa ya stream unayohitaji kwa kuyafumbua kutoka moduli ya stream:

```js
const { Readable, Writable, Transform } = require("stream");
```

U većini slučajeva nema potrebe da praviš sopstvene klase stream-ova. Za uobičajeni rad sa datotekama, ugrađeni metodi poput `fs.createReadStream()` i `fs.createWriteStream()` obično su sve što ti je potrebno.

Ova dva metoda prihvataju putanju do datoteke za čitanje ili pisanje. To znači da će ti u većini slučajeva biti potrebni moduli `fs` i `path`.

Evo kako možete čitati podatke iz fajla, na primer iz fajla `input.txt`:

```js
const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");

// Readable stream
const readInputFileStream = fs.createReadStream(inputFilePath);
console.log(readInputFileStream);
```

Ovo i dalje neće uraditi ništa, jer moraš da koristiš događaje (events) stream-a da bi čitao podatke. Na primer, možeš da osluškuješ događaj `data` ovako:

```js
readInputFileStream.on("data", (chunk) => {
  console.log(`Received ${chunk.length} bytes of data`);
}); // Received 622 bytes of data
```

Takođe možeš da ispišeš deo podataka u konzolu:

```js
readInputFileStream.on("data", (chunk) => {
  console.log(`Received ${chunk.length} bytes of data`);
  console.log("Received data:", chunk);
});

/*
Received 622 bytes of data
Received data: <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 
20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 20 63 6f 6e
73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 69 63 69 6e 67 ... 572 more bytes>
*/
```

Pošto vraća bafer, možeš pozvati metod `toString()` da ga pretvoriš u čitljiv tekst:

```js
const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");

// Readable stream
const readInputFileStream = fs.createReadStream(inputFilePath);

readInputFileStream.on("data", (chunk) => {
  console.log(`Received ${chunk.length} bytes of data`);
  console.log("Received data:", chunk.toString());
});
/*
Received 622 bytes of data
Received data: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sint facilis
aliquid. Odio voluptatibus veniam saepe consectetur alias modi non fuga in,
tempore explicabo numquam maiores quod inventore quibusdam! Nam cumque repellat
facere voluptatem nulla aliquam atque ratione numquam ea aperiam porro ducimus
animi tempora laboriosam, labore quae voluptatum? Nam, hic quas dolore
repudiandae placeat eius! Voluptate reiciendis totam hic expedita tenetur. Nisi
ipsa ad facere optio sint debitis. Magni nostrum sit ipsa saepe suscipit facilis
eaque doloribus assumenda, minima fuga tempore, porro, debitis rem harum in
*/
```

Da biste implementirali writable stream, posebno kada čitate iz jednog fajla i pišete u drugi, morate prvo kreirati read stream, a zatim write stream:

```js
const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");

// Create the read stream first
const readInputFileStream = fs.createReadStream(inputFilePath);

// Create the write stream
const writeOutputFileStream = fs.createWriteStream(outputFilePath);
```

Zatim, koristi metod `.pipe()` za povezivanje *readable stream*-a i *writable stream*-a. Ovo omogućava Node.js da čita podatke iz izvora i piše ih na odredište, deo po deo:

```js
const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");

// Create the read stream first
const readInputFileStream = fs.createReadStream(inputFilePath);

// Create the write stream
const writeOutputFileStream = fs.createWriteStream(outputFilePath);

// Pipe the read stream to the write stream
readInputFileStream.pipe(writeOutputFileStream);
```

Kasnije možete pratiti događaje za `finish` i `error` na writable streamu da biste znali kada je striming završen ili da li postoji problem:

```js
const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");

// Create the read stream first
const readInputFileStream = fs.createReadStream(inputFilePath);

// Create the write stream
const writeOutputFileStream = fs.createWriteStream(outputFilePath);

readInputFileStream.pipe(writeOutputFileStream);

writeOutputFileStream.on("finish", () => {
  console.log("All data has been written to the file");
});

writeOutputFileStream.on("error", (err) => {
  console.error("Error writing to file:", err);
});
```

Događaj `finish` vam govori da je stream završen i da nema više podataka za pisanje, dok vas događaj greške pomaže da otkrijete probleme koji mogu nastati tokom zapisa, kao što su problemi sa dozvolom ili nedostajućim direktorijumima.

# --questions--

## --text--

Da li su ovo četiri glavna tipa streamova?

## --answers--

Streamovi za Request, Response, Event, i Error.

### --feedback--

Zamislite kako Node.js obrađuje čitanje, pisanje i modifikovanje podataka.

---

Streamovi za Readable, Editable, Duplex i Transform.

### --feedback--

Razmislite kako Node.js obrađuje čitanje, pisanje i modifikovanje podataka.

---

Streamovi za Podatke, Datoteke, HTTP, u Buffer.

### --feedback--

Zamislite kako Node.js obrađuje čitanje, pisanje i modifikovanje podataka.

---

Streamovi za Readable, Writable, Duplex i Transform.

## --video-solution--

4

## --text--

Šta omogućava implementaciju specifičnog streama koji je čitljiv i upisan/zapisiv?

## --answers--

Moduli `stream` koristeći Readable i Writable klase.

---

Moduli ya `http`.

### --feedback--

Razmisli o modulu koji pruža osnovne klase za kreiranje prilagođenih stream-ova.

---

Moduli `fs` koristeći `createReadStream()` i `createWriteStream()`.

### --feedback--

Zamislite kako Node.js obrađuje čitanje, pisanje i modifikovanje podataka.

---

Modul događaja.

### --feedback--

Zamislite kako Node.js obrađuje čitanje, pisanje i modifikovanje podataka.

## --video-solution--

1

## --text--

Koje događaje možeš koristiti na writable stream-u da saznaš kada je streaming završen ili kada je došlo do greške?

## --answers--

`end` na `close`.

### --feedback--

Fikiria matukio ya writable stream yanayoashiria kukamilika na kushindwa.

---

`finish` na `error`.

---

`start` na `stop`.

### --feedback--

Razmislite o događajima *writable stream*-a koji signaliziraju završetak i neuspeh.

---

`done` i `fail`.

### --feedback--

Razmislite o događajima *writable stream*-a koji signaliziraju završetak i neuspeh.

## --video-solution--

2