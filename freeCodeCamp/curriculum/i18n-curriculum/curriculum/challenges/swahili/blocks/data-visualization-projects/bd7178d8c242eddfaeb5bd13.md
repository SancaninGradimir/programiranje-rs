---
id: bd7178d8c242eddfaeb5bd13
title: Prikažite podatke pomoću dijagrama raspršenosti
challengeType: 3
forumTopicId: 301467
dashedName: visualize-data-with-a-scatterplot-graph
---

# --description--
**Cilj:** Izgradite program koji radi na način sličan ovom: <a href="https://scatterplot-graph.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://scatterplot-graph.freecodecamp.rocks</a>.

Dopunite korisničke priče ispod i prođite sve testove. Koristite bilo koju biblioteku ili API što vam je potrebno. Pružite svoj stil.

Možete koristiti HTML, JavaScript, CSS, sa D3 SVG bibliotekom za prikaz. Grafici zahtevaju da se ose (axes) kreiraju korišćenjem D3 axis svojstva, koje automatski kreira oznake (ticks) duž ose. Ove oznake su neophodne za kreiranje D3 grafika jer se njihove pozicije koriste za određivanje odgovarajuće vrednosti elemenata na grafikonu. Informacije o tome kako kreirati ose ćete pronaći na <https://d3js.org/d3-axis>. Potrebni elementi DOM pronalaze se tokom svakog grafikona. Ako koristite front-end okvir (primer Vue), rezultati grafikona mogu biti netačni za dinamički sadržaj. Očekujemo da ćemo ovo uskoro podržati, ali ovi sistemi trenutno nisu podržani za D3 projekte.

**Priča korisnika #1:** Vidim element zaglavlja sa `id="title"` koji odgovara.

**Hadithi ya mtumiaji #2:** Naona mhimili wa x wenye `id="x-axis"` inayolingana.

**Hadithi ya mtumiaji #3:** Naona mhimili wa y wenye `id="y-axis"` inayolingana.

**Priča korisnika #4:** Vidim krugove/simbole, svaki sa klasom `dot`, koji predstavljaju crtene podatke.

**Priča korisnika #5:** Svaka krugasta oznaka mora imati svojstva `data-xvalue` i `data-yvalue` sa njihovim vrijednostima od `x` i `y` koje odgovaraju.

**Priča korisnika #6:** `data-xvalue` i `data-yvalue` bi trebali biti unutar raspona stvarnih podataka i u ispravnom formatu podataka. Za `data-xvalue`, prihvatljivi su puni brojevi (pune godine) ili stavke od `Date` za procenu merenja. Za `data-yvalue` (minute), koristite stavke od `Date`.

**Priča korisnika #7:** `data-xvalue` sa njegovom kružnom oznakom treba da odgovara odgovarajućoj sekciji/vrednosti na x-osi.

**Priča korisnika #8:** `data-yvalue` Sa njegovom kružnom oznakom, treba da odgovara delu/vrednosti koja se nalazi na Y osi.

**Priča korisnika #9:** Vidim mnogo oznaka koje ukazuju na y-osi sa vremenskim obrascem `%M:%S`.

**Priča korisnika #10:** Vidim mnogo oznaka koje označavaju na X-osi i koje prikazuju godinu.

**Priča korisnika #11:** Primećujem da je opseg oznaka na x-osi unutar stvarnog opsega podataka na x-osi.

**Priča korisnika #12:** Vidim da raspon oznaka Y-oseča je unutar raspona stvarnih podataka Y-oseča.

**Korisnička priča #13:** Vidim legendu sa opisnim tekstom koja ima `id="legend"`.

**Priča korisnika #14:** Mogu preći mišem preko područja i videti privremeni tooltip sa `id="tooltip"` koji prikazuje više informacija o tom području.

**Priča korisnika #15:** Moj privremeni savet mora imati atribut `data-year` koji odgovara `data-xvalue` radnog područja.

Ovo je skup podataka koji će vam zatrebati za završetak ovog projekta: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json`

Možete izgraditi svoj projekat sa <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">koristeći ovaj CodePen šablon</a> i klikom na `Save` da kreirate svoj Pen. Ili možete koristiti ovaj CDN link da pokrenete demonstraciju u bilo kom okruženju koje preferirate: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Kada završiš, pošalji URL svog funkcionalnog projekta sa svim uspešno položenim testovima.

# --solutions--

```js
// solution required
```
