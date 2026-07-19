---
id: bd7188d8c242eddfaeb5bd13
title: Prikaži podatke na termičkoj mapi
challengeType: 3
forumTopicId: 301466
dashedName: visualize-data-with-a-heat-map
---

# --description--
**Cilj:** Izgradite program koji radi kao ovo: <a href="https://heat-map.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://heat-map.freecodecamp.rocks</a>.

Završi korisničke priče ispod i prođi kroz sve specifikacije. Koristi bilo koju biblioteku ili API koja ti je potrebna. Pruži svoj stil.

Možete koristiti HTML, JavaScript, CSS, sa D3 bibliotekom za crtanje SVG. Potrebne komponente za DOM pretražuju se tokom svakog testa. Ako koristite sistem prednje funkcije (kao što je Vue), rezultati testa mogu biti netačni za dinamički sadržaj. Očekujemo da ćemo ovo uskoro podržati, ali ovi sistemi trenutno nisu podržani za D3 projekte.

**Korisnička priča #1:** Moja mapa toplote treba da ima naslov sa odgovarajućim `id="title"`.

**Korisnička priča #2:** Moja mapa toplote treba da ima opis sa odgovarajućim `id="description"`.

**Korisnička priča #3:** Moja mapa toplote treba da ima x-osu sa odgovarajućim `id="x-axis"`.

**Korisnička priča #4:** Moja mapa toplote treba da ima y-osu sa odgovarajućim `id="y-axis"`.

**Priča korisnika #5:** Moja mapa toplote bi trebalo da ima komponente sa `rect` koje imaju `class="cell"` i predstavljaju podatke.

**Priča korisnika #6:** Trebalo bi da postoji najmanje 4 različite boje za popunjavanje ćelija.

**Priča korisnika #7:** Svaka ćelija će imati atribute za `data-month`, `data-year`, `data-temp` sa njihovim vrednostima za `month`, `year`, i `temperature` koji odgovaraju.

**Priča korisnika #8:** `data-month`, `data-year` za svaku ćeliju treba da bude unutar opsega podataka.

**Priča korisnika #9:** Moja mapa toplote treba da ima ćelije koje odgovaraju odgovarajućem mesecu na Y-osi.

**Priča korisnika #10:** Moja mapa toplote treba da ima ćelije koje odgovaraju relevantnoj godini na x-osi.

**Priča korisnika #11:** Moja mapa toplote treba da ima više oznaka na Y-osi sa punim nazivima meseci.

**Priča korisnika #12:** Moja toplinska karta treba da ima mnogo oznaka markera na X osi sa godinama između 1754 i 2015.

**Korisnička priča #13:** Moja mapa toplote treba da ima legendu sa odgovarajućim `id="legend"`.

**Priča korisnika #14:** Moja oznaka bi trebalo da ima elemente `rect`.

**Priča korisnika #15:** Elementi `rect` na etiketi treba da koriste najmanje četiri različite boje popunjavanja.

**Priča korisnika #16:** Mogu da pomerim miša preko područja i vidim privremeni tooltip sa `id="tooltip"` koji prikazuje više informacija o tom području.

**Priča korisnika #17:** Moj privremeni podsetnik mora imati atribut `data-year` koji odgovara `data-year` iz radnog područja.

Evo skupa podataka koji će vam trebati za završetak ovog projekta: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json`

Možete izgraditi svoj projekat koristeći <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">koristeći ovaj CodePen šablon</a> i klikom na `Save` da kreirate svoj Pen. Ili možete koristiti ovu CDN vezu da pokrenete demo u bilo kom okruženju koje preferirate: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Kada završiš, pošalji URL svog funkcionalnog projekta sa svim uspešno položenim testovima.

# --solutions--

```js
// solution required
```
