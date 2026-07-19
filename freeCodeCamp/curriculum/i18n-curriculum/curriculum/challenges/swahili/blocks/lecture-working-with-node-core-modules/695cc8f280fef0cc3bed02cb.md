---
id: 695cc8f280fef0cc3bed02cb
title: Šta je modul process i kako funkcioniše?
challengeType: 19
dashedName: what-is-the-process-module-and-how-does-it-work
---

# --description--

`process` je jedan od najvažnijih glavnih modula za Node.js. Pruža vam pristup informacijama o tekućem procesu Node.js, i omogućava vam da ga kontrolišete dok je vaš program u izvršavanju.

Kada izvršite komandu kao `node script.js` u terminalu, Node.js pokreće proces, koji je kontinuiran primer programa Node koji izvršava fajl `script.js`. Ovaj proces ima svoju memoriju, svoje okruženje i kontekst izvršavanja.

Trenutni proces je globalno dostupan preko modula `process`, tako da ga nije potrebno uvoziti. Sve dok imate instaliran Node.js, možete ga koristiti bilo gde.

Modul `process` izlaže promenljive i metode koje ti omogućavaju da dobiješ informacije o trenutnom okruženju izvršavanja.

`process.env` pruža informacije o trenutnom okruženju u kojem se Node izvršava. Uvek vraća veliki objekat sa mnogo promenljivih, pa ovako možeš direktno da pristupiš nekim važnim informacijama:

```js
// Gets all environment variables available to the current Node.js process
console.log(process.env);

// Gets the current Node.js environment mode (like 'development' or 'production')
console.log(process.env.NODE_ENV); // development

// Gets the path of the shell program running the Node.js process
console.log(process.env.SHELL); // /bin/bash

// Gets the system PATH variable where executables are searched for
console.log(process.env.PATH); // /usr/local/bin:/usr/bin:/bin

// Gets the present working directory from where the process was started
console.log(process.env.PWD); // /Users/johndoe/projects/myapp

// Gets the username of the user running the current process
console.log(process.env.USER); // johndoe
```

`process.argv` omogućava vam da čitate argumente linije komandi:

```js
console.log(process.argv);
/*
script.js --watch
Hello world
[
  '/Users/user/.nvm/versions/node/v22.17.0/bin/node',
  '/Users/user/Desktop/fCC/script-code/node/node-process/script.js',
  '--watch'
]
*/
```

Putanja za `cwd()` prikazuje tekući radni direktorijum:

```js
console.log(process.cwd());
```

Događaji procesa su ključna karakteristika Node.js koja omogućava vašem programu da reaguje u kritičnim tačkama njegovog životnog ciklusa, kao što je pri pokretanju, susretu sa greškom ili primanju sistemskog signala.

Događaj `exit`, na primer, pokreće se neposredno pre nego što se Node.js proces završi:

```js
process.on("exit", (code) => {
  console.log(`Process exiting with code: ${code}`);
});

// Process exiting with code: 0
```

Događaj `uncaughtException` se pokreće kada greška nije uhvaćena u vašem kodu, što može pomoći da se spreči pad programa:

```js
process.on("uncaughtException", (err) => {
  console.error("Uncaught error:", err.message);
});
```

Na kraju, događaj `warning` se pokreće kada Node.js izda upozorenje procesa:

```js
process.on("warning", (warning) => {
  console.warn("Warning name:", warning.name);
  console.warn("Warning message:", warning.message);
});
```

Zatim možete koristiti metodu `emitWarning()` da pokrenete specifično upozorenje:

```js
// Example warning with the emitWarning() method
process.emitWarning('This is a custom warning message', 'CustomWarning');

/*
  Warning name: CustomWarning
  Warning message: This is a custom warning message
*/
```

# --questions--

## --text--

Šta radi put/način `process.emitWarning()`?

## --answers--

Zaustavlja proces kada se pojavi specifično upozorenje.

### --feedback--

Zamislite kako Node.js rukuje specifičnim upozorenjem putem događaja.

---

Izaziva poseban događaj upozorenja koji ga može obraditi primaoca upozorenja.

---

Piše grešku i odmah zaustavlja proces.

### --feedback--

Razmislite kako Node.js obrađuje specifično upozorenje kroz događaje.

---

Ponovo pokreće proces Node.js nakon prikazivanja upozorenja.

### --feedback--

Zamislite kako Node.js rukuje specifičnim upozorenjem putem događaja.

## --video-solution--

2

## --text--

Da li koristi procesni modul?

## --answers--

Da bih to direktno spomenuo/la, jer je međunarodna stvar.

---

Da biste ga omogućili u konfiguracionoj datoteci Node.js.

### --feedback--

Razmislite zašto možete dobiti proces bilo gde bez konfiguracije.

---

Ručno instaliranje korišćenjem npm-a pre spominjanja.

### --feedback--

Razmislite zašto možete dobiti proces bilo gde bez konfiguracije.

---

Za uvoz korišćenjem require('process') pre svake upotrebe.

### --feedback--

Razmislite zašto možete pronaći proces bilo gde bez konfiguracije.

## --video-solution--

1

## --text--

Za šta se procesni događaji koriste?

## --answers--

Postavljanje parametara okruženja za aplikaciju.

### --feedback--

Razmislite kako Node.js se odnosi na promene životnog ciklusa tokom izvršavanja.

---

Kreiranje novih procesa za paralelno izvršavanje.

### --feedback--

Razmislite kako Node.js se odnosi na promene životnog ciklusa tokom izvršavanja.

---

Slušati i reagovati tokom kritičnih faza životnog ciklusa, kao što su greške, kvarovi ili sistemski signali.

---

Upravljanje putanjama fajlova i prilogima u sistemu.

### --feedback--

Razmislite kako Node.js se odnosi na promene životnog ciklusa tokom izvršavanja.

## --video-solution--

3