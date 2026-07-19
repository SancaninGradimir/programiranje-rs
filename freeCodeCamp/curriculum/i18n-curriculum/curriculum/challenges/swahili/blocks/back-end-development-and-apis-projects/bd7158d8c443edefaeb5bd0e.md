---
id: bd7158d8c443edefaeb5bd0e
title: Mikroservis za skraćivanje URL-ova
challengeType: 4
forumTopicId: 301509
dashedName: url-shortener-microservice
---

# --description--

Napravite klijentski i serverski JavaScript program koji funkcionalno odgovara ovom: <a href="https://url-shortener-microservice.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://url-shortener-microservice.freecodecamp.rocks</a>. Rad na ovom projektu će zahtevati pisanje vašeg koda koristeći jedan od sledećih načina:

-   Kopirajte <a href="https://github.com/freeCodeCamp/boilerplate-project-urlshortener/" target="_blank" rel="noopener noreferrer nofollow">ovaj GitHub repozitorijum</a> i završite svoj projekat lokalno na vašem računaru.
-   Koristite svoj omiljeni web okvir da biste završili projekat. Obavezno uključite sve fajlove iz našeg GitHub repozitorijuma.

# --instructions--

**NAPOMENA:** Ne zaboravite da koristite middleware za parsiranje tela zahteva za obradu POST zahteva. Takođe, možete koristiti funkciju `dns.lookup(host, cb)` iz osnovnog `dns` modula za validaciju prosleđenog URL-a.

# --hints--

Trebate da dostavite sopstveni projekat, ne URL sa primera.

```js
  assert(
    !/.*\/url-shortener-microservice\.freecodecamp\.rocks/.test(
      code
    )
  );
```

Možete poslati URL na `/api/shorturl` pomoću POST metode i dobiti JSON odgovor sa parametrima `original_url` i `short_url`. Evo primera: `{ original_url : 'https://freeCodeCamp.org', short_url : 1}`

```js
  const url = code;
  const urlVariable = Date.now();
  const fullUrl = `${url}/?v=${urlVariable}`
  const res = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=${fullUrl}`
  });
  if (res.ok) {
    const { short_url, original_url } = await res.json();
    assert.isNotNull(short_url);
    assert.strictEqual(original_url, `${url}/?v=${urlVariable}`);
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
```

Kada posetite `/api/shorturl/<short_url>`, bićete preusmereni na pravi URL.

```js
  const url = code;
  const urlVariable = Date.now();
  const fullUrl = `${url}/?v=${urlVariable}`
  let shortenedUrlVariable;
  const postResponse = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=${fullUrl}`
  });
  if (postResponse.ok) {
    const { short_url } = await postResponse.json();
    shortenedUrlVariable = short_url;
  } else {
    throw new Error(`${postResponse.status} ${postResponse.statusText}`);
  }
  // Ensure a new URL is reached
  const getResponse = await fetch(
    url + '/api/shorturl/' + shortenedUrlVariable, {redirect:'follow'}
  );
  if (getResponse) {
    const { url } = getResponse; // status is always 200 for some reason
    assert.strictEqual(url,fullUrl);
  } else {
    throw new Error(`${getResponse.status} ${getResponse.statusText}`);
  }

  // No more auto follow
  const getManualResponse = await fetch(
    url + '/api/shorturl/' + shortenedUrlVariable, {redirect:'manual'}
  );
  if (getManualResponse) {
    const { status } = getManualResponse; // if a redirect happens, it won't reach the new resource
    assert.strictEqual(status,0);
  } else {
    throw new Error(`${getManualResponse.status} ${getManualResponse.statusText}`);
  }

```

Ako prosledite nevažeći URL koji ne prati ispravan format `http://www.example.com`, JSON odgovor će sadržati `{ error: 'invalid url' }`

```js
  const url = code;
  const res = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=ftp:/john-doe.invalidTLD`
  });
  if (res.ok) {
    const { error } = await res.json();
    assert.isNotNull(error);
    assert.strictEqual(error.toLowerCase(), 'invalid url');
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
```
