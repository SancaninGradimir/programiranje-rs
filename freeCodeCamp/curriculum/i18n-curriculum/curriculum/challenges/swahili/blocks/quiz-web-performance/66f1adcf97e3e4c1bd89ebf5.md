---
id: 66f1adcf97e3e4c1bd89ebf5
title: Kratak test performansi mreže
challengeType: 8
dashedName: quiz-web-performance
---

# --description--

Da biste položili kratki test, morate tačno odgovoriti na najmanje 18 od 20 pitanja koja su navedena ispod.

# --quizzes--

## --quiz--

### --question--

#### --text--

Koja je glavna razlika između stvarnih performansi i prikazanih performansi u razvoju mreže?

#### --distractors--

Stvarna performansa zavisi od broja zahteva za HTTP koje šalje pretraživač, dok zapažena performansa zavisi od brzine prikazivanja CSS.

---

Stvarni učinak se tiče samo vremena učitavanja, dok se percipirani učinak odnosi na vidljive elemente kao što su grafici i indikatori učitavanja.

---

Stvarni učinak obuhvata samo vreme obrade na strani servera, dok je vidljivi učinak samo sa strane klijenta.

#### --answer--

Stvarna performansa je koliko brzo se sadržaj učitava, dok je vidljiva performansa kako korisnici *osećaju* da stranica brzo učitava.

### --question--

#### --text--

Koji metrika najbolje pokazuje kako se sadržaj brzo pojavljuje na veb stranici?

#### --distractors--

Vreme do interaktivnosti (TTI)

---

Vreme učitavanja stranice (PLT)

---

Last Contentful Paint (LCP)

#### --answer--

First Contentful Paint (FCP)

### --question--

#### --text--

Koji od sledećih nije način za smanjenje vremena učitavanja stranice?

#### --distractors--

Unapređenje materijala za medije.

---

Koristi keš memoriju pretraživača.

---

Smanjite veličinu i optimizujte fajlove.

#### --answer--

Koristiti samo JPEG fajlove.

### --question--

#### --text--

"Time to usable" šta je?

#### --distractors--

Vreme je od trenutka kada korisnik traži stranicu do trenutka kada može da interaktuje sa formularom na toj stranici.

---

Treba vreme da se sve slike i crteži pripreme za upotrebu.

---

Ovo je vreme potrebno za učitavanje svih CSS i crteža od JavaScript na ekran.

#### --answer--

To je period koji počinje kada korisnik podnese zahtev za stranicu, sve dok ne bude u stanju da sa njom smisleno interaguje.

### --question--

#### --text--

First Contentful Paint (FCP) šta meri?

#### --distractors--

Ukupno vreme za učitavanje svih fajlova JavaScript na stranicu.

---

Kašnjenje pre nego što korisnik može da interaguje sa bilo kojim elementima na stranici.

---

Vreme koje je potrebno za potpuno učitavanje svih tabela stilova i korišćenje ih.

#### --answer--

Vreme potrebnog za prikaz prvog dela teksta ili slike.

### --question--

#### --text--

Koji od sledećih nije alat koji se često koristi za merenje performansi?

#### --distractors--

Chrome DevTools

---

Svetionik

---

WebPageTest

#### --answer--

WebMeasure

### --question--

#### --text--

Za šta se koriste Performance Web API-ji?

#### --distractors--

Koristi se za testiranje performansi crteža CSS samo.

---

Koristi se za ubrzanje performansi web stranice direktno.

---

Pruža detaljnu tabelu pokazatelja performansi za korisnika.

#### --answer--

Dozvoljavam programeru da prati efikasnost učitavanja i odgovor web stranice direktno iz koda.

### --question--

#### --text--

Koja strategija može efikasno poboljšati vidljive performanse?

#### --distractors--

Korišćenjem velike slike za poboljšanje ukupnog vizuelnog kvaliteta.

---

Učitati stilove CSS na kraju ili dati prioritet prikazivanju sadržaja.

---

Učitati sve skripte unapred kako bi se osiguralo da su spremne kada su potrebne.

#### --answer--

Prikazivanje strukture učitavanja kada su sadržaji dostupni.

### --question--

#### --text--

Koja od sledećih stavki se tiče vremena koje zahtev prolazi između klijenta i servera?

#### --distractors--

renderovanje

---

INP

---

CDN

#### --answer--

Задинскост

### --question--

#### --text--

Da li CSS utiče na performanse stranice?

#### --distractors--

Sistem sprečava izvršavanje nepotrebnih JavaScript.

---

Smanjuje veličinu fajlova sa fotografijama.

---

Poboljšava učitavanje slika korišćenjem lazy loading-a.

#### --answer--

Ubrzanje analize HTML.

### --question--

#### --text--

Koji od sledećih pokazuje vreme kada glavni niti su blokirani teškim radom JavaScript?

#### --distractors--

Izvorni redosled

---

Bounce rate

---

WebPageTest

#### --answer--

Ukupno vreme blokiranja

### --question--

#### --text--

Kada merite Interaction to Next Paint (INP), šta se meri?

#### --distractors--

Vreme potrebno za učitavanje stranice sa svim stilovima i slikama nakon interakcije korisnika.

---

Kašnjenje između interakcije korisnika i sposobnosti pregledača za beleženje unosa podataka korisnika.

---

Vreme između izvršavanja JavaScript u pretraživaču za ponovno prikazivanje sadržaja stranice.

#### --answer--

Vreme između interakcije korisnika i pregledača, uz odgovor prikazivanjem sledećeg kadra.

### --question--

#### --text--

Koji od sledećih API-ja vam daje vremenske mjerenje sa visokom preciznošću (u milisekundama) za merenje vremena učitavanja različitih delova vaše veb stranice?

#### --distractors--

`performance.delay()`

---

`performance.previous()`

---

`performance.next()`

#### --answer--

`performance.now()`

### --question--

#### --text--

Koja od sledećih API-ja vam daje pregled svakog koraka učitavanja stranice, od DNS upita do `DOMContentLoaded`?

#### --distractors--

Vremenski okvir dozvole API

---

Performansni tekst API

---

Izvršiti vremensko određivanje API

#### --answer--

Merjenje performansi API

### --question--

#### --text--

Koji od sljedećih prati događaje performansi, kao što su promjene rasporeda, dugotrajni zadaci i interakcija korisnika?

#### --distractors--

```js
const observer = new PermitObserve((list) => {  
  list.getEntries().forEach((entry) => {  
    console.log(`Long task detected: ${entry.duration}ms`);  
  });  
});  

observer.observe({ type: "longtask", buffered: true });
```

---

```js
const observer = new PerformObserver((list) => {  
  list.getEntries().forEach((entry) => {  
    console.log(`Long task detected: ${entry.duration}ms`);  
  });  
});  

observer.observe({ type: "longtask", buffered: true });
```

---

```js
const observer = new PermitObserver((list) => {  
  list.getEntries().forEach((entry) => {  
    console.log(`Long task detected: ${entry.duration}ms`);  
  });  
});  

observer.observe({ type: "longtask", buffered: true });
```

#### --answer--

```js
const observer = new PerformanceObserver((list) => {  
  list.getEntries().forEach((entry) => {  
    console.log(`Long task detected: ${entry.duration}ms`);  
  });  
});  

observer.observe({ type: "longtask", buffered: true });
```

### --question--

#### --text--

Kako lazy loading slika poboljšava performanse stranice?

#### --distractors--

Osigurava da se sve slike učitaju odmah za bolje korisničko iskustvo.

---

Smanjuje veličinu fajlova slika kako bi se ubrzalo učitavanje.

---

Učitavaju se slike unapred kako bi se sprečilo bilo kakvo kašnjenje pri učitavanju.

#### --answer--

Odlaže učitavanje nepotrebnih slika dok ne dođu u vidokrug.

### --question--

#### --text--

Šta je *code splitting*?

#### --distractors--

To uključuje razdvajanje vašeg koda React u module koji obavljaju samo kritične funkcije.

---

Uključuje razdvajanje vašeg koda od HTML u samo nebitne funkcionalne module.

---

Uključuje razdvajanje vašeg koda CSS u module koji obavljaju kritične i nekritične funkcije.

#### --answer--

Uključuje podelu vašeg koda od JavaScript u module koji obavljaju kritične i nekritične funkcije.

### --question--

#### --text--

Koja je od sledećih metoda ispravan način za učitavanje slika sa lazy load-om?

#### --distractors--

```html
<img src="placeholder.jpg" lazy="loading">
```

---

```html
<img src="placeholder.jpg" load="lazy">
```

---

```html
<img src="placeholder.jpg" lazy="load">
```

#### --answer--

```html
<img src="placeholder.jpg" loading="lazy">
```

### --question--

#### --text--

Koja od sljedećih NIJE način za poboljšanje INP-a?

#### --distractors--

Smanjite opterećenje glavnih niti deljenjem dugotrajnih zadataka JavaScript.

---

Poboljšanje hendlera događaja.

---

Kašnjenje ili učitavanje teških lenjih resursa.

#### --answer--

Koristite slike samo u JPEG formatu za PNG.

### --question--

#### --text--

Zašto je energetska efikasnost važan aspekt performansi mreže?

#### --distractors--

Poboljšajte ukupnu vizuelnu privlačnost web stranice.

---

Smanjuje broj JavaScript koji se koristi na web stranici.

---

Smanjuje broj fajlova za CSS koji su potrebni i omogućava da vaš CSS radi brže.

#### --answer--

Smanjuje opterećenje uređaja, štedi energiju i poboljšava održivost.