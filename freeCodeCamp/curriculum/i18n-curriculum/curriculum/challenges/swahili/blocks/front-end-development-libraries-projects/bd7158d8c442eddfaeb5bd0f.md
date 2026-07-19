---
id: bd7158d8c442eddfaeb5bd0f
title: Izgradi sat od 25 + 5
challengeType: 3
forumTopicId: 301373
dashedName: build-a-25--5-clock
---

# --description--

**Napomena:** **React 18 ima poznate probleme sa specifikacijama ovog projekta (pogledajte [issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922))**

**Cilj:** Napravi program koji radi ovako: <a href="https://25--5-clock.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://25--5-clock.freecodecamp.rocks</a>.

Dopunite korisničke priče ispod i pokrijte sve specifikacije. Koristite bilo koju biblioteku ili API koja vam je potrebna. Pružite svoj stil.

Možete koristiti bilo koju kombinaciju HTML-a, JavaScript-a, CSS-a, Bootstrap-a, SASS-a, React-a, Redux-a i jQuery-ja da završite ovaj projekat. Preporučuje se korišćenje *front-end* okvira (kao što je React) jer se ovaj deo bavi učenjem *front-end* okvira. Ostale tehnologije koje nisu navedene iznad nisu preporučene i koristite ih na sopstveni rizik. Planiramo da podržimo i druge *front-end* okvire kao što su Angular i Vue, ali oni trenutno nisu podržani. Prihvatićemo i pokušati da ispravimo sve prijavljene greške koje koriste preporučene tehnologije za ovaj projekat. Uživajte u kodiranju!

**Priča korisnika #1:** Vidim polje sa `id="break-label"` koje uključuje niz slova (primer "Break Length").

**Priča korisnika #2:** Primećujem polje koje sadrži `id="session-label"` i koje uključuje niz slova (primer "Session Length").

**Priča korisnika #3:** Vidim dva klikabilna elementa sa identifajmerima koji odgovaraju: `id="break-decrement"` i `id="session-decrement"`.

**Priča korisnika #4:** Vidim dva klikabilna elementa sa odgovarajućim identifikatorima: `id="break-increment"` i `id="session-increment"`.

**Priča korisnika #5:** Vidim polje sa `id="break-length"`, koje podrazumevano (prilikom učitavanja) prikazuje vrednost 5.

**Priča korisnika #6:** Primećujem element sa `id="session-length"`, koji podrazumevano prikazuje vrednost 25.

**Priča korisnika #7:** Vidim element koji sadrži `id="timer-label"`, koji uključuje niz karaktera koji pokazuje da je sesija pokrenuta (npr. "Session").

**Priča korisnika #8:** Vidim polje sa `id="time-left"`. NAPOMENA: Ako je onemogućeno ili aktivno, vrednost u ovom polju mora se uvek prikazivati u formatu od `mm:ss` (tj. 25:00).

**Priča korisnika #9:** Viđem klikabilan element sa `id="start_stop"`.

**Priča korisnika #10:** Vidim klikabilan element sa `id="reset"`.

**Priča korisnika #11:** Kada kliknem na element sa ID-om `reset`, bilo koji pokrenuti tajmer bi trebalo da se zaustavi, vrednost unutar `id="break-length"` bi trebalo da se vrati na `5`, vrednost unutar `id="session-length"` bi trebalo da se vrati na 25, a element sa `id="time-left"` treba da se resetuje u njegovo podrazumevano stanje.

**Priča korisnika #12:** Kada kliknem na element sa identifikatorom `break-decrement`, vrednost unutar `id="break-length"` se smanjuje za vrednost od 1, i vidim ažuriranu vrednost.

**Priča korisnika #13:** Kada kliknem na element sa identifikatorom `break-increment`, vrednost unutar `id="break-length"` se povećava za 1 i vidim ažuriranu vrednost.

**Priča korisnika #14:** Kada kliknem na element sa identifikatorom `session-decrement`, vrednost unutar `id="session-length"` se smanjuje za vrednost od 1, i vidim ažuriranu vrednost.

**Story korisnika #15:** Kada kliknem na element sa ID-om `session-increment`, vrednost unutar `id="session-length"` se povećava za vrednost od 1, i vidim ažuriranu vrednost.

**Scenarijo korisnika #16:** Ne bi trebalo postaviti trajanje sesije ili pauze na &lt;= 0.

**Priča korisnika #17:** Trajanje sesije ili pauze ne bi trebalo da bude veće od 60.

**Priča korisnika #18:** Kada kliknem na element sa `id="start_stop"` prvi put, tajmer bi trebalo da počne od vrednosti koja je trenutno prikazana u `id="session-length"`, čak i ako je vrednost povećana ili smanjena u odnosu na početnu vrednost od 25.

**Priča korisnika #19:** Ako tajmer teče, element sa ID-om `time-left` bi trebalo da prikazuje preostalo vreme u formatu `mm:ss` ((smanjujući se za vrednost od 1 i ažurirajući prikaz svakih 1000ms)).

**Priča korisnika #20:** Ako tajmer nastavlja i kliknem na element sa `id="start_stop"`, brojanje unazad bi trebalo da se zaustavi.

**Priča korisnika #21:** Ako je tajmer pauziran i kliknem na element sa `id="start_stop"`, prebrojavanje bi trebalo da nastavi od mesta gde je pauzirano.

**Priča korisnika #22:** Kada preostalo vreme za sesiju dođe do nule (NAPOMENA: tajmer MORA da dostigne 00:00), i kada počne novi prebrojavanje, element sa identifikatorom `timer-label` treba da prikaže niz karaktera koji ukazuje da je pauza počela.

**Priča korisnika #23:** Kada brojač za sesiju dostigne nulu (NAPOMENA: tajmer MORA da dostigne 00:00), treba početi novi brojač pauze, počevši od trenutne vrednosti u elementu `id="break-length"`.

**Priča korisnika #24:** Kada dobrojava za pauzu stigne do nule (NAPOMENA: tajmer MORA da stigne do 00:00), i kada počinje nova dobrojava, element sa identifikatorom `timer-label` treba da prikaže niz slova koji ukazuje na početak sesije.

**Priča korisnika #25:** Kada prebrojavanje za pauzu stigne do nule (PODSETNIK: tajmer MORA dostignuti 00:00), novo prebrojavanje sesije bi trebalo da počne, brojeći nizasto od trenutno prikazane vrednosti u polju `id="session-length"`.

**Priča korisnika #26:** Kada dođe do brojanja nuli (PODSETNIK: tajmer MORA dostati 00:00), mora se pustiti audio koji ukazuje da je vreme isteklo. Ovo bi trebalo koristiti HTML5 oznaku `audio` i imati odgovarajuću `id="beep"`.

**Priča korisnika #27:** Audio funkcija sa `id="beep"` mora imati trajanje od 1 sekunde ili više.

**Priča korisnika #28:** Audio element sa ID-om `beep` treba da zaustavi reprodukciju i vrati se na početak kada korisnik klikne na element sa ID-om `reset`.

Možete izgraditi svoj projekat koristeći <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel="noopener noreferrer nofollow">, uz korišćenje ovog CodePen šablona</a> i klikom na `Save` da kreirate sopstveni pen. Ako više volite koristiti druga okruženja, onda umetnite oznaku/tag `<script>` unutar tela vaše datoteke `index.html`: `<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>`

Po završetku, pošalji URL tvog funkcionalnog projekta sa prolaskom svih testova.

# --solutions--

```js
// solution required
```
