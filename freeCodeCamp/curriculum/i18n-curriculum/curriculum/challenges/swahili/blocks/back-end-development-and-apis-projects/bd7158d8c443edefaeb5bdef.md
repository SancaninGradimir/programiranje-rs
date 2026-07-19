---
id: bd7158d8c443edefaeb5bdef
title: Mikroservis vremenske oznake
challengeType: 4
forumTopicId: 301508
dashedName: timestamp-microservice
---

# --description--

Napravite full-stack JavaScript aplikaciju koja funkcionalno odgovara ovoj: <a href="https://timestamp-microservice.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://timestamp-microservice.freecodecamp.rocks</a>. Rad na ovom projektu će zahtevati pisanje vašeg koda koristeći jedan od sledećih načina:

-   Kopirajte <a href="https://github.com/freeCodeCamp/boilerplate-project-timestamp/"  target="_blank" rel="noopener noreferrer nofollow">ovaj GitHub repozitorijum</a> i završite svoj projekat lokalno na vašem računaru.
-   Koristite svoj omiljeni web okvir da biste završili projekat. Obavezno uključite sve fajlove iz našeg GitHub repozitorijuma.

**Napomena:** Menjanje vremenskih zona nije cilj ovog projekta, pa pretpostavite da će svi važeći datumi poslati biti analizirani pomoću `new Date()` kao GMT datumi.

# --hints--

Trebate da dostavite sopstveni projekat, ne URL sa primera.

```js
  assert(
    !/.*\/timestamp-microservice\.freecodecamp\.rocks/.test(code)
  );
```

Zahtev na `/api/:date?` sa važećim datumom treba da vrati JSON objekat sa ključem `unix` koji predstavlja Unix vremensku oznaku unetog datuma u milisekundama (tip Number)

```js
  const response = await fetch(code + '/api/2016-12-25');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert.equal(
    data.unix,
    1482624000000,
    'Should be a valid unix timestamp'
  );
```

Zahtev na `/api/:date?` sa važećim datumom treba da vrati JSON objekat sa ključem `utc` koji je niz karaktera unetog datuma u formatu: `Thu, 01 Jan 1970 00:00:00 GMT`

```js
  const response = await fetch(code + '/api/2016-12-25');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert.equal(
    data.utc,
    'Sun, 25 Dec 2016 00:00:00 GMT',
    'Should be a valid UTC date string'
  );
```

Zahtev na `/api/1451001600000` treba da vrati `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`

```js
  const response = await fetch(code + '/api/1451001600000');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert(
    data.unix === 1451001600000 &&
      data.utc === 'Fri, 25 Dec 2015 00:00:00 GMT'
  );
```

Vaš projekat treba da obrađuje datume koji se uspešno parsiraju pomoću `new Date(date_string)`

```js
  const response = await fetch(code + '/api/05 October 2011, GMT');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert(
    data.unix === 1317772800000 &&
      data.utc === 'Wed, 05 Oct 2011 00:00:00 GMT'
  );
```

Ako je niz karaktera datuma nevažeći, API vraća objekat u formatu `{ error : "Invalid Date" }`

```js
  const response = await fetch(code + '/api/this-is-not-a-date');
  if (response.ok) {
    const data = await response.json();
    assert.equal(data.error.toLowerCase(), 'invalid date');
  } else {
    const errorData = await response.json();
    assert(errorData.error.toLowerCase() === 'invalid date');
  }
```

Parametar datuma bez sadržaja treba da vrati trenutno vreme u JSON objektu sa ključem `unix`

```js
  const response = await fetch(code + '/api');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  var now = Date.now();
  assert.approximately(data.unix, now, 20000);
```

Parametar datuma bez sadržaja treba da vrati trenutno vreme u JSON objektu sa ključem `utc`

```js
  const response = await fetch(code + '/api');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  var now = Date.now();
  var serverTime = new Date(data.utc).getTime();
  assert.approximately(serverTime, now, 20000);
```
