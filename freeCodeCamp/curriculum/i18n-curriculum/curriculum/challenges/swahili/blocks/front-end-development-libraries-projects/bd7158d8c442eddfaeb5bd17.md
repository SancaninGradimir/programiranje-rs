---
id: bd7158d8c442eddfaeb5bd17
title: Izgradnja kalkulatora za JavaScript
challengeType: 3
forumTopicId: 301371
dashedName: build-a-javascript-calculator
---

# --description--
**Napomena:** **React 18 ima poznate probleme sa specifikacijama ovog projekta (videti [issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922))**

**Cilj:** Izradi program koji radi ovako: <a href="https://javascript-calculator.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://javascript-calculator.freecodecamp.rocks/</a>.

Dopunite korisničke priče ispod i pokrijte sve specifikacije. Koristite bilo koju biblioteku ili API koja vam je potrebna. Pružite svoj stil.

Možete koristiti bilo koju kombinaciju HTML-a, JavaScript-a, CSS-a, Bootstrap-a, SASS-a, React-a, Redux-a i jQuery-ja da završite ovaj projekat. Preporučuje se korišćenje *front-end* okvira (kao što je React) jer se ovaj deo bavi učenjem *front-end* okvira. Ostale tehnologije koje nisu navedene iznad nisu preporučene i koristite ih na sopstveni rizik. Planiramo da podržimo i druge *front-end* okvire kao što su Angular i Vue, ali oni trenutno nisu podržani. Prihvatićemo i pokušati da ispravimo sve prijavljene greške koje koriste preporučene tehnologije za ovaj projekat. Uživajte u kodiranju!

**Priča korisnika #1:** Moj kalkulator bi trebalo da ima klikabilni element sa `=` (znak jednakosti) i `id="equals"` koji odgovara.

**Priča korisnika #2:** Moj kalkulator treba da ima 10 klikabilnih elemenata, svaki sa brojem od 0 do 9, i sledeće odgovarajuće identifikatore: `id="zero"`, `id="one"`, `id="two"`, `id="three"`, `id="four"`, `id="five"`, `id="six"`, `id="seven"`, `id="eight"`, i `id="nine"`.

**Priča korisnika #3:** Moj kalkulator mora imati 4 klikabilna elementa, svaki sa jednim od četiri glavne matematičke operatore i sledećim odgovarajućim identifikatorima: `id="add"`, `id="subtract"`, `id="multiply"`, `id="divide"`.

**Priča korisnika #4:** Moj kalkulator bi trebalo da ima klikabilan element sa znakom `.` (decimalna tačka) i `id="decimal"` koji odgovara.

**Priča korisnika #5:** Moj kalkulator treba da ima klikabilan element sa `id="clear"`.

**Priča korisnika #6:** Moj kalkulator bi trebalo da ima funkciju koja prikazuje vrednost sa `id="display"` koja odgovara.

**User Story #7:** U bilo kojem trenutku, pritiskanje dugmeta `clear` briše vrednosti unosa i rezultata, te vraća kalkulator u početno stanje; 0 treba da se prikaže u polju sa identifikatorom `display`.

**Priča korisnika #8:** Kada unesem broj, trebalo bi da vidim svoj unos u polju sa identifikatorom `display`.

**Priča korisnika #9:** U bilo kom redosledu, trebalo bi mi da mogu da dodajem, oduzimam, množim i delim lanac brojeva bilo koje dužine, i kada kliknem `=`, ispravan rezultat treba da se prikaže u elementu sa ID-om `display`.

**Priča korisnika #10:** Prilikom unosa broja, moj kalkulator ne bi trebalo da dozvoljava broj koji počinje sa više nula.

**Priča korisnika #11:** Kada se klikne na decimalnu tačku, `.` treba dodati na rezultat vrednosti; `.` dve u jednoj brojkama ne preskaču se.

**Priča korisnika #12:** Trebalo bi da mogu da izvrše bilo koju operaciju (`+`, `-`, `*`, `/`) sa brojevima koji imaju decimalne tačke.

**Priča korisnika #13:** Ako se unesu dva ili više operatera uzastopno, izvršena operacija bi trebalo da bude poslednji definisani operater (osim negativnog znaka `-`). Na primer, ako se unese `5 + * 7 =`, rezultat bi trebalo da bude `35` (tj. `5 * 7`); ako se unese `5 * - 5 =`, rezultat bi trebalo da bude `-25` (tj. `5 * (-5)`).

**Priča korisnika #14:** Klikom na operater nakon `=` trebalo bi da se pokrene nova kalkulacija koja radi na osnovu rezultata prethodne evaluacije.

**Priča korisnika #15:** Moj kalkulator mora imati decimalnu preciznost kada je u pitanju zaokruživanje (Napomena da nema tačnog standarda, ali treba ga je sposoban da rukuje proračunima poput `2 / 7` sa preciznošću od najmanje 4 decimalna mesta).

**Napomena o logici kalkulatora:** Treba napomenuti da postoji dva glavna pristupa u vezi sa logikom unosa na kalkulatoru: <dfn>logika trenutnog izvršavanja</dfn> i <dfn>logika formule</dfn>. Naš primer koristi logiku formule i uzima u obzir prioritet redosleda operacija; trenutno izvršavanje to ne uzima u obzir. Oba su ova dva ispravna, ali molimo vas da znate da, zavisno od toga šta izaberete, vaš kalkulator može dati drugačije rezultate od naših za neke proračune (videti primer ispod). Vaši izračunati rezultati mogu biti potvrđeni drugim proizvodnim kalkulatorom; molimo vas da ovo ne smatrate greškom.

**PRIMER:** `3 + 5 x 6 - 2 / 4 =`

- **Logika za izvršavanje u realnom vremenu:** `11.5`
- **Logika formule/matematičkog izraza:** `32.5`

Možete izgraditi svoj projekat sa <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel="noopener noreferrer nofollow"> koristeći ovaj CodePen šablon </a> i klikom na `Save` da kreirate svoj pen. Ako preferirate da koristite druga okruženje, onda postavite tag `<script>` unutar tela vaše datoteke `index.html`: `<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>`

Kada dobijete zadatak, predajte URL za vaš funkcionalan projekat sa svim uspešno prošlim testovima.

# --solutions--

```js
// solution required
```
