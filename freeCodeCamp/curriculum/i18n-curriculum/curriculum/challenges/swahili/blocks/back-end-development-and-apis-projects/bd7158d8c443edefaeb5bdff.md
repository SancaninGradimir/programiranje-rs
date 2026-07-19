---
id: bd7158d8c443edefaeb5bdff
title: Mikroservis za parsiranje zaglavlja zahteva
challengeType: 4
forumTopicId: 301507
dashedName: request-header-parser-microservice
---

# --description--

Napravite full-stack JavaScript aplikaciju koja funkcionalno odgovara ovoj: <a href="https://request-header-parser-microservice.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://request-header-parser-microservice.freecodecamp.rocks/</a>. Rad na ovom projektu će zahtevati pisanje vašeg koda koristeći jedan od sledećih načina:

-   Kopirajte <a href="https://github.com/freeCodeCamp/boilerplate-project-headerparser/" target="_blank" rel="noopener noreferrer nofollow">ovaj GitHub repozitorijum</a> i završite svoj projekat lokalno.
-   Koristite svoj omiljeni web okvir da biste završili projekat. Obavezno uključite sve fajlove iz našeg GitHub repozitorijuma.

# --hints--

Trebate da dostavite sopstveni projekat, ne URL sa primera.

```js
  assert(
    !/.*\/request-header-parser-microservice\.freecodecamp\.rocks/.test(
      code
    )
  );
```

Zahtev na `/api/whoami` treba da vrati JSON objekat sa vašom IP adresom u ključu `ipaddress`.

```js
  const response = await fetch(code + '/api/whoami');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert(data.ipaddress && data.ipaddress.length > 0);
```

Zahtev na `/api/whoami` treba da vrati JSON objekat sa vašim preferiranim jezikom u ključu `language`.

```js
  const response = await fetch(code + '/api/whoami');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert(data.language && data.language.length > 0);
```

Zahtev na `/api/whoami` treba da vrati JSON objekat sa vašim softverom u ključu `software`.

```js
  const response = await fetch(code + '/api/whoami');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert(data.software && data.software.length > 0);
```
