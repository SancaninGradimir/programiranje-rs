---
id: 5e601c0d5ac9d0ecd8b94afe
title: Prevodilac američkog i britanskog engleskog
challengeType: 4
forumTopicId: 462358
dashedName: american-british-translator
---

# --description--

Izgradite JavaScript full-stack aplikaciju koja funkcionalno odgovara ovom: <a href="https://american-british-translator.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://american-british-translator.freecodecamp.rocks/</a>. Rad na ovom projektu će zahtevati da napišete svoj kod koristeći jednu od sledećih metoda:

- Kopiraj <a href="https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/" target="_blank" rel="noopener noreferrer nofollow">ovaj repozitorijum od GitHub</a> i završi svoj projekat interno.
- Koristi omiljeni alat za izradu sajtova da završiš projekat. Proveri da si uključio sve fajlove iz našeg repozitorijuma GitHub.

# --instructions--

-   Mantiki yote inaweza kuwekwa ndani ya `/components/translator.js`
-   Kamilisha njia ya `/api/translate` katika `/routes/api.js`
-   Unda majaribio yote ya kitengo/utendaji katika `tests/1_unit-tests.js` na `tests/2_functional-tests.js`
-   Tazama mafaili ya JavaScript katika `/components` kwa herufi na maneno tofauti ambayo programu yako inapaswa kutafsiri
-   Ili kuendesha majaribio moja kwa moja, weka `NODE_ENV` kuwa `test` bila nukuu katika faili la `.env`
-   Ili kuendesha majaribio kwenye konsoli, tumia amri `npm run test`.

Napišite sledeće eksperimente u `tests/1_unit-tests.js`:

-   Tafsiri `Mangoes are my favorite fruit.` kuwa Kiingereza cha Uingereza
-   Tafsiri `I ate yogurt for breakfast.` kuwa Kiingereza cha Uingereza
-   Tafsiri `We had a party at my friend's condo.` kuwa Kiingereza cha Uingereza
-   Tafsiri `Can you toss this in the trashcan for me?` kuwa Kiingereza cha Uingereza
-   Tafsiri `The parking lot was full.` kuwa Kiingereza cha Uingereza
-   Tafsiri `Like a high tech Rube Goldberg machine.` kuwa Kiingereza cha Uingereza
-   Tafsiri `To play hooky means to skip class or work.` kuwa Kiingereza cha Uingereza
-   Tafsiri `No Mr. Bond, I expect you to die.` kuwa Kiingereza cha Uingereza
-   Tafsiri `Dr. Grosh will see you now.` kuwa Kiingereza cha Uingereza
-   Tafsiri `Lunch is at 12:15 today.` kuwa Kiingereza cha Uingereza
-   Tafsiri `We watched the footie match for a while.` kuwa Kiingereza cha Marekani
-   Tafsiri `Paracetamol takes up to an hour to work.` kuwa Kiingereza cha Marekani
-   Tafsiri `First, caramelise the onions.` kuwa Kiingereza cha Marekani
-   Tafsiri `I spent the bank holiday at the funfair.` kuwa Kiingereza cha Marekani
-   Tafsiri `I had a bicky then went to the chippy.` kuwa Kiingereza cha Marekani
-   Tafsiri `I've just got bits and bobs in my bum bag.` kuwa Kiingereza cha Marekani
-   Tafsiri `The car boot sale at Boxted Airfield was called off.` kuwa Kiingereza cha Marekani
-   Tafsiri `Have you met Mrs Kalyani?` kuwa Kiingereza cha Marekani
-   Tafsiri `Prof Joyner of King's College, London.` kuwa Kiingereza cha Marekani
-   Tafsiri `Tea time is usually around 4 or 4.30.` kuwa Kiingereza cha Marekani
-   Angazia tafsiri katika `Mangoes are my favorite fruit.`
-   Angazia tafsiri katika `I ate yogurt for breakfast.`
-   Angazia tafsiri katika `We watched the footie match for a while.`
-   Angazia tafsiri katika `Paracetamol takes up to an hour to work.`

Andika majaribio yafuatayo katika `tests/2_functional-tests.js`:

-   Prevod, tekstualno polje i oblast: ombi la POST kwa `/api/translate`
-   Prevod, tekstualno polje i neispravna lokacija: ombi la POST kwa `/api/translate`
-   Prevod i nedostajuće tekstualno polje: ombi la POST kwa `/api/translate`
-   Prevod i nedostajuće polje lokacije: ombi la POST kwa `/api/translate`
-   Prevod i prazan tekst: ombi la POST kwa `/api/translate`
-   Prevod i tekst koji ne zahteva prevod: ombi la POST kwa `/api/translate`

# --hints--

Unapaswa kutoa mradi wako mwenyewe, si URL ya mfano.

```js
  assert(
    !/.*\/american-british-translator\.freecodecamp\.rocks/.test(
      code
    )
  );
```

Unaweza `POST` kwa `/api/translate` ukiwa na mwili unaojumuisha `text` na maandishi ya kutafsiri na `locale` ikiwa ni `american-to-british` au `british-to-american`. Kitu kilichorejeshwa kinapaswa kujumuisha `text` na `translation` zilizo wasilishwa pamoja na maandishi yaliyotafsiriwa.

```js
  try {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const output = {
      text: 'Mangoes are my favorite fruit.',
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
    };
    let data = await fetch(code + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

Njia ya `/api/translate` inapaswa kushughulikia jinsi wakati unavyoandikwa katika Kiingereza cha Marekani na Uingereza. Kwa mfano, saa kumi na thelathini inaandikwa kama "10.30" katika Kiingereza cha Uingereza na "10:30" katika Kiingereza cha Marekani. Kipengele cha `span` kinapaswa kufunika mfuatano mzima wa wakati, yaani `<span class="highlight">10:30</span>`.

```js
  try {
    const text = 'Lunch is at 12:15 today.';
    const locale = 'american-to-british';
    const output = {
      text: text,
      translation: 'Lunch is at <span class="highlight">12.15</span> today.'
    };
    let data = await fetch(code + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

Metoda `/api/translate` takođe treba da obrađuje kako se titule/honorifikovi skraćuju u američkom i britanskom engleskom jeziku. Na primer, Doktor Wright se skraćuje u "Dr Wright" u britanskom engleskom i "Dr. Wright" u američkom engleskom. Pogledajte `/components/american-to-british-titles.js` za različite titule koje vaš program treba da obrađuje.

```js
  try {
    const text = 'Dr. Grosh will see you now.';
    const locale = 'american-to-british';
    const output = {
      text: text,
      translation: '<span class="highlight">Dr</span> Grosh will see you now.'
    };
    let data = await fetch(code + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

Zaokruži slova ili reči prevedene sa oznakama `<span class="highlight">...</span>` ili koje su u zelenoj boji.

```js
  try {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const output = {
      text: 'Mangoes are my favorite fruit.',
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
    };
    let data = await fetch(code + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

Ako nedostaje jedna ili više potrebnih komponenti, vratite `{ error: 'Required field(s) missing' }`.

```js
  try {
    const locale = 'american-to-british';
    let data = await fetch(code + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'Required field(s) missing');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

Ako je `text` prazno, vrati `{ error: 'No text to translate' }`

```js
  try {
    const locale = 'american-to-british';
    let data = await fetch(code + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: '', locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'No text to translate');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

Kama `locale` ne odgovara nijednom od navedenih dva područja, vratite `{ error: 'Invalid value for locale field' }`.

```js
  try {
    const text = "Ceci n'est pas une pipe";
    const locale = 'french-to-american';
    let data = await fetch(code + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'Invalid value for locale field');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

Ako `text` ne zahteva nikakav prevod, vrati `"Everything looks good to me!"` na vrednost `translation`.

```js
  try {
    const locale = 'british-to-american';
    const output = {
      text: 'SaintPeter and nhcarrigan give their regards!',
      translation: 'Everything looks good to me!'
    };
    let data = await fetch(code + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: output.text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
```

Sva 24 testa jedinice su završena i prošla.

```js
  try {
    const response = await fetch(code + '/_api/get-tests');
    if (!response.ok) {
      throw Error(await response.text());
    }
    const getTests = await response.json();
    assert.isArray(getTests);
    const unitTests = getTests.filter((test) => {
      return !!test.context.match(/Unit Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 24, 'At least 24 tests passed');
    unitTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
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

Svi šest testova performansi je završeno i uspešno prošlo.

```js
  try {
    const response = await fetch(code + '/_api/get-tests');
    if (!response.ok) {
      throw Error(await response.text());
    }
    const getTests = await response.json();
    assert.isArray(getTests);
    const functTests = getTests.filter((test) => {
      return !!test.context.match(/Functional Tests/gi);
    });
    assert.isAtLeast(functTests.length, 6, 'At least 6 tests passed');
    functTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
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
