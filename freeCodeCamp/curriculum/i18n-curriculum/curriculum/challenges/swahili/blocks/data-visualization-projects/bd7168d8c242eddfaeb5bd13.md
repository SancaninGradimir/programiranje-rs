---
id: bd7168d8c242eddfaeb5bd13
title: Prikaži podatke pomoću linijskog grafikona
challengeType: 3
forumTopicId: 301464
dashedName: visualize-data-with-a-bar-chart
---

# --description--
**Cilj:** Napravite program koji je funkcionalno sličan ovom: <a href="https://bar-chart.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://bar-chart.freecodecamp.rocks</a>.

Dopuni priče korisnika ispod i prođi sve testove. Koristi bilo koju biblioteku ili API koja ti zatreba. Pruži svoj lični stil.

Možete koristiti HTML, JavaScript, CSS, u D3 biblioteci za prikaz SVG-a. Grafici zahtevaju da se osa kreira korišćenjem D3 ose svojstva (axis property), koje automatski generiše oznake (ticks) duž ose. Ove oznake su neophodne za ispravno funkcionisanje grafikona u D3 jer se njihove pozicije koriste za određivanje poravnanja elemenata na grafikonu. Informacije o kreiranju osa ćete pronaći na <https://d3js.org/d3-axis>. Potrebni komponenti za DOM traže se tokom svakog grafikona. Ako koristite sistem prednje funkcije (frontend function system) (npr. Vue), rezultati grafikona mogu biti netačni za dinamički sadržaj. Očekujemo da ćemo ovo uskoro moći podržati, ali ovi sistemi trenutno nisu podržani za projekte u D3-u.

**Korisnička priča #1:** Moj grafikon treba da ima naslov sa odgovarajućim `id="title"`.

**Priča korisnika #2:** Moj grafikon bi trebalo da ima funkciju za `g` na odgovarajućoj x-osi sa `id="x-axis"`.

**Priča korisnika #3:** Moj chat bi trebalo da ima element sa `g` za Y-osu sa odgovarajućim `id="y-axis"`.

**Korisnička priča #4:** Obe ose treba da imaju više oznaka sa odgovarajućom `class="tick"`.

**Priča korisnika #5:** Moj grafikon bi trebalo da ima element `rect` za svaku tačku podataka sa `class="bar"` koja prikazuje te podatke.

**Priča korisnika #6:** Svaki `.bar` mora imati atribute `data-date` i `data-gdp` sa vrednostima `date` i `GDP`.

**Priča korisnika #7:** Atributi za `.bar` za elemente od `data-date` treba da odgovaraju strukturi dostavljenih podataka.

**Priča korisnika #8:** Atributi za `.bar` za komponente `data-gdp` bi trebalo da odgovaraju strukturi dostavljenih podataka.

**Priča korisnika #9:** Svaki element od `.bar` ima dužinu koja tačno predstavlja `GDP` i odgovara podacima.

**Priča korisnika #10:** Svojstvo `data-date` i njegov element `.bar` treba da bude povezano sa odgovarajućom vrednošću na x-osi.

**Priča korisnika #11:** Svojstvo `data-gdp` i njegov atribut/element `.bar` treba da bude povezano sa odgovarajućom vrednošću na y-osi.

**User Story #12:** Mogu preći mišem preko područja i videti privremeni tooltip sa `id="tooltip"` koji prikazuje više informacija o tom području.

**Priča korisnika #13:** Moj privremeni savet mora imati svojstvo `data-date` koje odgovara `data-date` aktivnog područja.

Ovo je set podataka koji će vam trebati da završite ovaj projekat: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json`

Možete izgraditi svoj projekat koristeći ovaj CodePen šablon<a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">kutumia kiolezo hiki cha CodePen</a> i klikom `Save` da kreirate sopstveni „pen“. Ili možete koristiti ovaj CDN link za pokretanje testova u bilo kom okruženju koje preferirate: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

Kada završiš, pošalji URL svog funkcionalnog projekta sa svim uspešno položenim testovima.

# --solutions--

```js
// solution required
```
