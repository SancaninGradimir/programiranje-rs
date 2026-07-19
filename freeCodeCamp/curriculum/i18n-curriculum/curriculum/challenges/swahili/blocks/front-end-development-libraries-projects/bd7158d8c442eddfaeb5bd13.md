---
id: bd7158d8c442eddfaeb5bd13
title: Napravi mašinu za nasumične citate
challengeType: 3
forumTopicId: 301374
dashedName: build-a-random-quote-machine
---

# --description--
**Napomena:** **React 18 ima poznate probleme sa specifikacijama ovog projekta (videti [issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922))**

**Cilj:** Izgradi program koji radi kao ovo: <a href="https://random-quote-machine.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://random-quote-machine.freecodecamp.rocks/</a>.

Dovršite korisničke priče ispod i prođite sve testove. Koristite bilo koju biblioteku ili API što vam je potrebno. Dostavite svoj stil.

Možete koristiti bilo koju kombinaciju HTML-a, JavaScript-a, CSS-a, Bootstrap-a, SASS-a, React-a, Redux-a i jQuery-ja da završite ovaj projekat. Preporučuje se korišćenje *front-end* okvira (kao što je React) jer je ovaj deo namenjen učenju *front-end* okvira. Druge tehnologije koje nisu navedene iznad nisu preporučene i koristite ih na sopstveni rizik. Planiramo da podržimo i druge *front-end* okvire kao što su Angular i Vue, ali oni trenutno nisu podržani. Prihvatićemo i pokušati da ispravimo sve prijavljene greške koje koriste preporučene tehnologije za ovaj projekat. Srećno sa kodiranjem!

**Priča korisnika #1:** Vidim pokrivajući element sa `id="quote-box"` koji odgovara.

**Priča korisnika #2:** Unutar `#quote-box`, vidim element koji odgovara `id="text"`.

**Priča korisnika #3:** Unutar `#quote-box`, vidim element sa `id="author"` koji odgovara.

**Priča korisnika #4:** Unutar `#quote-box`, vidim klikabilan element sa `id="new-quote"` koji odgovara.

**Priča korisnika #5:** Unutar `#quote-box`, vidim klikabilni element od `a` koji odgovara za `id="tweet-quote"`.

**Priča korisnika #6:** Prilikom prvog učitavanja, moja mašina za citate prikazuje nasumičan citat u polju sa `id="text"`.

**Priča korisnika #7:** Prilikom prvog učitavanja, moja mašina za citate prikazuje nasumičnog autora cita u elementu sa `id="author"`.

**User Story #8:** Kada se dugme `#new-quote` klikne, moja mašina za citate treba da dobije novi citat i prikaže ga u sekciji `#text`.

**Priča korisnika #9:** Moj uređaj za citate treba da dobije novog autora cita kada se dugme `#new-quote` klikne i prikaže ga u polju `#author`.

**Priča korisnika #10:** Mogu poslati trenutni citat na Twitter klikom na funkciju `#tweet-quote` `a`. Ova funkcija od `a` treba da uključuje metodu za `"twitter.com/intent/tweet"` u svojstvo `href` kako bi poslala trenutni citat.

**Priča korisnika #11:** Pokrivni element `#quote-box` treba da bude centralizovan i uravnotežen. Molimo vas pokrenite merenja sa nivoom zumiranja pregledača od 100% i stranicom proširenom na punu veličinu.

Možete izgraditi svoj projekat sa <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel="noopener noreferrer nofollow"> koristeći ovaj CodePen šablon </a> i klikom na `Save` da kreirate svoj pen. Ako preferirate da koristite druga okruženje, onda postavite tag `<script>` unutar tela vaše datoteke `index.html`: `<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>`

Kada završiš, dostavi URL svog radnog projekta koji prolazi sve testove.

**Napomena:** Twitter ne dozvoljava ugrađivanje linkova unutar `iframe`-a. Pokušajte da koristite atribut `target="_blank"` ili `target="_top"` u elementu `#tweet-quote` ako vaš tweet ne učitava. `target="_top"` će promeniti trenutnu karticu, pa obavezno sačuvajte svoj rad.

# --solutions--

```js
// solution required
```
