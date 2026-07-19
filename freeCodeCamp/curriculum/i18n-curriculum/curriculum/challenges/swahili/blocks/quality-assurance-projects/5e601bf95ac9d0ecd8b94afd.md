---
id: 5e601bf95ac9d0ecd8b94afd
title: Rešivač Sudokua
challengeType: 4
forumTopicId: 462357
dashedName: sudoku-solver
---

# --description--

Jenga programu kamili ya JavaScript inayofanya kazi kama hii: <a href="https://sudoku-solver.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://sudoku-solver.freecodecamp.rocks/</a>. Rad na ovom projektu će uključivati pisanje vašeg koda koristeći jednu od sledećih metoda:

-   Kopirajte <a href="https://github.com/freecodecamp/boilerplate-project-sudoku-solver" target="_blank" rel="noopener noreferrer nofollow">hii repo ya GitHub</a> i dovršite svoj projekat unutar.
-   Koristite alat za izradu veb-sajtova koji želite da završite projekat. Uverite se da ste uključili sve fajlove iz našeg repozitorijuma GitHub.

# --instructions--

- Mantiq ya fumbo yote inaweza kuwekwa ndani ya `/controllers/sudoku-solver.js`
  - Kitendakazi cha `validate` kinapaswa kuchukua mfuatano wa herufi wa fumbo uliotolewa na kukagua kama una herufi halali 81 kwa ajili ya ingizo.
Check metode treba da proveravaju u odnosu na *trenutno* stanje table.
Funkcija `solve` treba da rešava bilo koju ispravnu Sudoku zagonetku, a ne samo test primere i njihova rešenja. Očekuje se da sami napišete logiku za rešavanje.
Sva logika API ruta može da se nalazi u `/routes/api.js`.
Pogledajte datoteku `puzzle-strings.js` u direktorijumu `/controllers` za primere zagonetki koje vaša aplikacija treba da rešava.
Da biste pokrenuli testove za ovaj izazov, postavite `NODE_ENV` na `test` (bez navodnika) u datoteci `.env`.
Da biste pokrenuli testove u konzoli, koristite komandu `npm run test`.

Napišite sledeće ispite u `tests/1_unit-tests.js`:

Logika treba da obrađuje ispravan string zagonetke od 81 karaktera.
Logika treba da obrađuje string zagonetke sa neispravnim karakterima (nisu `1-9` ili `.`).
Logika treba da obrađuje string zagonetke koji nema dužinu od 81 karaktera.
-   Mantiq inashughulikia kuweka halali kwa safu
-   Mantiq inashughulikia kuweka batili kwa safu
-   Mantiq inashughulikia kuweka halali kwa nguzo
-   Mantiq inashughulikia kuweka batili kwa nguzo
-   Mantiq inashughulikia kuweka halali kwa eneo (gridi 3x3)
-   Mantiq inashughulikia kuweka batili kwa eneo (gridi 3x3)
-   Mfuatano wa fumbo halali hupita mtatua
-   Mfuatano wa fumbo batili haupiti mtatua
-   Mtatua hurudisha suluhisho linalotarajiwa kwa fumbo lisilokamilika

Napišite sledeće ispite u `tests/2_functional-tests.js`

-   Rešavanje zagonetke sa validnom sekvencom zagonetke: POST zahtev za `/api/solve`
-   Rešavanje zagonetke sa nedostajućom sekvencom zagonetke: POST zahtev za `/api/solve`
-   Rešavanje zagonetke sa nevažećim karakterima: POST zahtev za `/api/solve`
-   Rešavanje zagonetke sa neispravnom dužinom: POST zahtev za `/api/solve`
-   Rešavanje neresolvabilne zagonetke: POST zahtev za `/api/solve`
-   Provera podešavanja zagonetke za sve delove: POST zahtev za `/api/check`
-   Provera podešavanja zagonetke sa jednim konfliktom dela: POST zahtev za `/api/check`
-   Provera podešavanja zagonetke sa više konflikata delova: POST zahtev za `/api/check`
-   Provera podešavanja zagonetke sa svim konfliktima delova: POST zahtev za `/api/check`
-   Provera podešavanja zagonetke sa nedostajućim potrebnim delovima: POST zahtev za `/api/check`
-   Provera podešavanja zagonetke sa nevažećim karakterima: POST zahtev za `/api/check`
-   Provera podešavanja zagonetke sa neispravnom dužinom: POST zahtev za `/api/check`
-   Provera podešavanja zagonetke sa nevažećim koordinatama podešavanja: POST zahtev za `/api/check`
-   Provera podešavanja zagonetke sa nevažećom vrednošću podešavanja: POST zahtev za `/api/check`

# --hints--

Možete poslati svoj projekat, nije neophodno da koristite primer URL.

```js
  const url = code;
  assert(!/.*\/sudoku-solver\.freecodecamp\.rocks/.test(code));
```

Možete `POST` `/api/solve` i podatke forme koji sadrže `puzzle`, koji će biti sekvenca karaktera koja uključuje brojeve (1-9) i tačke `.` za predstavljanje praznog mesta. Vraćeni objekat će imati svojstvo `solution` sa rešenom zagonetkom.

```js
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output =
    '769235418851496372432178956174569283395842761628713549283657194516924837947381625';
  const data = await fetch(code + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'solution');
  assert.equal(parsed.solution, output);
```

Ako zahtev za `/api/solve` ne sadrži polje `puzzle`, treba vratiti `{ error: 'Required field missing' }`.

```js
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Required field missing';
  const data = await fetch(code + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ notpuzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
```

Ako zagonetka poslata na `/api/solve` sadrži neispravne karaktere (nisu brojevi ili `.`), treba vratiti `{ error: 'Invalid characters in puzzle' }`.

```js
  const input =
    'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid characters in puzzle';
  const data = await fetch(code + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
```

Ako enigma prikazana za `/api/solve` ima dužinu veće ili manje od 81 slova, vraćena vrednost će biti `{ error: 'Expected puzzle to be 81 characters long' }`

```js
  const inputs = [
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.',
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6...'
  ];
  const output = 'Expected puzzle to be 81 characters long';
  for (const input of inputs) {
    const data = await fetch(code + '/api/solve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
```

Ako je zagonetka poslata na `/api/solve` nevažeća ili ne može biti rešena, vraćena vrednost će biti `{ error: 'Puzzle cannot be solved' }`

```js
  const input =
    '9.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Puzzle cannot be solved';
  const data = await fetch(code + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
```

Unaweza `POST` kwa `/api/check` nešto sa `puzzle`, `coordinate`, i `value` gde je `coordinate` slovo od A do I koje označava red, praćeno brojem 1-9 koji označava kolonu, a `value` je broj od 1 do 9.

```js
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '7';
  const data = await fetch(code + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isTrue(parsed.valid);
```

Vrednost return od `POST` do `/api/check` će biti objekat sa svojstvom/karakteristikom `valid`, koje je `true` ako broj može biti postavljen u koordinate koje pruža `false`, a ne ako ne može. Ako je false, objekat koji se vraća će takođe imati svojstvo `conflict`, koje je niz znakova sa sekvencom karaktera `"row"`, `"column"`, i/ili `"region"`, u zavisnosti od razloga nevažeće (invalidacije).

```js
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '1';
  const conflict = ['row', 'column'];
  const data = await fetch(code + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isFalse(parsed.valid);
  assert.property(parsed, 'conflict');
  assert.include(parsed.conflict, 'row');
  assert.include(parsed.conflict, 'column');
```

Ako `value` koji je poslat za `/api/check` već je postavljen u `puzzle` na `coordinate`, vraćena vrednost će biti objekat sa svojstvom `valid` koji ima `true` ako `value` nema koliziju.

```js
  const input =
  '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'C3';
  const value = '2';
  const data = await fetch(code + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isTrue(parsed.valid);
```

Ako upit poslat na `/api/check` sadrži ne-numeričke ili decimalne vrednosti, vraćena vrednost će biti `{ error: 'Invalid characters in puzzle' }`

```js
  const input =
    'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '1';
  const output = 'Invalid characters in puzzle';
  const data = await fetch(code + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
```

Ako je tekst poslat na `/api/check` dužine veće ili manje od 81 karaktera, vraćena vrednost će biti `{ error: 'Expected puzzle to be 81 characters long' }`

```js
  const inputs = [
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.',
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6...'
  ];
  const coordinate = 'A1';
  const value = '1';
  const output = 'Expected puzzle to be 81 characters long';
  for (const input of inputs) {
    const data = await fetch(code + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
```

Ako je nešto poslato na `/api/check` i nedostaje `puzzle`, `coordinate` ili `value`, vraćena vrednost će biti `{ error: 'Required field(s) missing' }`

```js
  const inputs = [
    {
      puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
      value: '1',
    },
    {
      puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
      coordinate: 'A1',
    },
    {
      coordinate: 'A1',
      value: '1'
    }
  ];
  for (const input of inputs) {
    const output = 'Required field(s) missing';
    const data = await fetch(code + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input)
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
```

Ako koordinata navedena za `api/check` ne ukazuje na validnu ćeliju mreže, vraćena vrednost će biti `{ error: 'Invalid coordinate'}`

```js
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid coordinate';
  const coordinates = ['A0', 'A10', 'J1', 'A', '1', 'XZ18'];
  const value = '7';
  for (const coordinate of coordinates) {
    const data = await fetch(code + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
```

Ako je `value` koji se predaje za `/api/check` nije broj između 1 i 9, vraćena vrednost će biti `{ error: 'Invalid value' }`

```js
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid value';
  const coordinate = 'A1';
  const values = ['0', '10', 'A'];
  for (const value of values) {
    const data = await fetch(code + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
```

Sva 12 ispita jedinice su završena i položena.

```js
  try {
    const response = await fetch(code + '/_api/get-tests');
    if (!response.ok) {
      throw Error(await response.text());
    }
    const getTests = await response.json();
    assert.isArray(getTests);
    const unitTests = getTests.filter((test) => {
      return !!test.context.match(/Unit\s*Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 12, 'At least 12 tests passed');
    unitTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Test in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

Sva 14 provera performansi je završena i uspešna.

```js
  try {
    const response = await fetch(code + '/_api/get-tests');
    if (!response.ok) {
      throw Error(await response.text());
    }
    const getTests = await response.json();
    assert.isArray(getTests);
    const functTests = getTests.filter((test) => {
      return !!test.context.match(/Functional\s*Tests/gi);
    });
    assert.isAtLeast(functTests.length, 14, 'At least 14 tests passed');
    functTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Test in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```
