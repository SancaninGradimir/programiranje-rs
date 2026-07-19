---
id: bd7158d8c443edefaeb5bd0f
title: Mikroservis meta-podataka fajla
challengeType: 4
forumTopicId: 301506
dashedName: file-metadata-microservice
---

# --description--

Napravite kompletnu JavaScript aplikaciju koja funkcionalno odgovara ovoj: <a href="https://file-metadata-microservice.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://file-metadata-microservice.freecodecamp.rocks</a>. Rad na ovom projektu će zahtevati pisanje vašeg koda koristeći jedan od sledećih načina:

-   Kopirajte <a href="https://github.com/freeCodeCamp/boilerplate-project-filemetadata/" target="_blank" rel="noopener noreferrer nofollow">ovaj GitHub repozitorijum</a> i završite svoj projekat lokalno.
-   Koristite svoj omiljeni web okvir da biste završili projekat. Obavezno uključite sve fajlove iz našeg GitHub repozitorijuma.

# --instructions--

**NAPOMENA:** Možete koristiti `multer` npm paket za obradu otpremanja fajlova.

# --hints--

Trebate da dostavite sopstveni projekat, ne URL sa primera.

```js
  assert(
    !/.*\/file-metadata-microservice\.freecodecamp\.rocks/.test(
      code
    )
  );
```

Možete poslati formular koji uključuje otpremanje fajlova.

```js
  const site = await fetch(code);
  const data = await site.text();
  const doc = new DOMParser().parseFromString(data, 'text/html');
  assert(doc.querySelector('input[type="file"]'));
```

Polje za unos fajla u formularu ima atribut `name` postavljen na `upfile`.

```js
  const site = await fetch(code);
  const data = await site.text();
  const doc = new DOMParser().parseFromString(data, 'text/html');
  assert(doc.querySelector('input[name="upfile"]'));
```

Kada pošaljete fajl, dobijate meta-podatke fajla `name`, `type` i `size` u bajtovima u JSON odgovoru.

```js
  const formData = new FormData();
  const fileData = await fetch(
    'https://cdn.freecodecamp.org/weather-icons/01d.png'
  );
  const file = await fileData.blob();
  formData.append('upfile', file, 'icon');
  const data = await fetch(code + '/api/fileanalyse', {
    method: 'POST',
    body: formData
  });
  const parsed = await data.json();
  assert.property(parsed, 'size');
  assert.equal(parsed.name, 'icon');
  assert.equal(parsed.type, 'image/png');
```
