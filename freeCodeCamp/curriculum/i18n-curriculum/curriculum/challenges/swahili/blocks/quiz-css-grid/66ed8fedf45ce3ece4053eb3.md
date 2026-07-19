---
id: 66ed8fedf45ce3ece4053eb3
title: Pokušaj sa CSS Grid-om
challengeType: 8
dashedName: quiz-css-grid
---

# --description--

Da biste položili kratki test, morate tačno odgovoriti na najmanje 18 od 20 pitanja koja su navedena ispod.

# --quizzes--

## --quiz--

### --question--

#### --text--

CSS Šta je Grid?

#### --distractors--

Način korišćenja za prikazivanje tabela na internetu.

---

Način postavljanja slika u mozaičnom (tile) rasporedu.

---

Način za prikazivanje granica oko elemenata HTML.

#### --answer--

Dvostrano podešavanje za dokumente HTML.

### --question--

#### --text--

Koji je ispravan način/metoda među sledećim za kreiranje alata mrežne strukture (grid tool)?

#### --distractors--

`display: grid-area;`

---

`grid: grid-template;`

---

`grid-template: set;`

#### --answer--

`display: grid;`

### --question--

#### --text--

Šta radi karakteristika `grid-template-columns`?

#### --distractors--

Podešavate dve redne i tri kolone za mrežni alat.

---

Podesite sve redove mrežnog rasporeda da imaju fiksnu visinu.

---

Kreiraj alat za dvoredni mrežni raspored.

#### --answer--

Postavlja broj redova u mrežni raspored (grid layout).

### --question--

#### --text--

Šta radi atribut `grid-template-rows`?

#### --distractors--

Odredite veličinu i poziciju ćelije mreže u mrežnom rasporedu.

---

Generiše alat za kreiranje novih mrežnih linija.

---

Definišite veličinu podrazumevane linije u alatki za mrežu.

#### --answer--

Utvrdite broj i dužinu svake linije u mrežnom rasporedu.

### --question--

#### --text--

Funkcija `minmax()`, šta radi?

#### --distractors--

Prebacuje između prve i druge vrednosti, u zavisnosti od trenutne pozicije.

---

Izračunaj prosek dva unosa.

---

Postavlja minimalnu veličinu elementa za pregledač koji radi u režimu punog ekrana.

#### --answer--

Postavlja donju i gornju granicu linijom.

### --question--

#### --text--

Koje su kratke opise karakteristika za `column-gap` i `row-gap`?

#### --distractors--

`gap-column-row`

---

`gutters`

---

`grid-gap`

#### --answer--

`gap`

### --question--

#### --text--

Koja je razlika između otvorene mreže i potpuno otvorene mreže?

#### --distractors--

Otvorene mreže koriste svojstvo ya `grid-template-columns` dok potpuno otvorene mreže koriste svojstvo ya `grid-template-rows`.

---

Potpuno otvorene mreže koriste atribut `grid-template-columns` dok potpuno otvorene mreže koriste atribut `grid-template-rows`.

---

Otvorene mreže koriste svojstva `grid-template-columns` ili `grid-template-rows` za kreiranje redova kada se linije i kolone automatski kreiraju u potpuno otvorene mreže.

#### --answer--

Potpuno otvorene mreže koriste svojstva `grid-template-columns` ili `grid-template-rows` za kreiranje redova kada se redovi i kolone automatski kreiraju u otvorenim mrežama.

### --question--

#### --text--

Koji od sledećih elemenata predstavlja deo prostora unutar grid kontejnera?

#### --distractors--

`fractional`

---

`frac`

---

`f`

#### --answer--

`fr`

### --question--

#### --text--

Šta su mrežne linije?

#### --distractors--

Redovi i kolone.

---

Granice elementa mreže.

---

Linije gde se stvaraju redovi i mrežne linije.

#### --answer--

Linije koje svaki deo mreže počinje i završava.

### --question--

#### --text--

Šta svojstvo `grid-column` radi?

#### --distractors--

Dodaj novi mrežni element/komponentu kao dete korišćenog elementa.

---

Poravnajte tekst unutar ćelije mreže vertikalno.

---

Postavlja dva reda za alat mrežice.

#### --answer--

Indikuje segment mrežne linije na mestu gde treba da počne i završi.

### --question--

#### --text--

Možete li kreirati četiri reda iste širine?

#### --distractors--

`grid-template-columns: repeat(4);`

---

`grid-template-columns: repeat(1, 4);`

---

`grid-template-columns: repeat(1fr, 4);`

#### --answer--

`grid-template-columns: repeat(4, 1fr);`

### --question--

#### --text--

Šta radi atribut `grid-template-areas`?

#### --distractors--

Koristi se za određivanje mesta gde komad počinje na liniji u gridškom alatu.

---

Koristi se za stvaranje razmaka između putanja unutar uređaja.

---

Koristi se za ponavljanje dela u spisku ruta.

#### --answer--

Koristi se za imenovanje elemenata koje raspoređujete na mreži.

### --question--

#### --text--

Šta radi karakteristika `grid-auto-flow`?

#### --distractors--

Kontrolišite raspored prikazanih elemenata mreže.

---

Promenite poziciju između elemenata mreže.

---

Podesite element da se poravna na grid/mrežu direktno.

#### --answer--

Kontrolišite kako se elementi automatski ubacuju u mrežu/grid.

### --question--

#### --text--

Koji je tačan način korišćenja funkcije/svojstva za `grid-template-areas`?

#### --distractors--

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr; 
  grid-template-rows: auto 1fr auto; 
  grid-template-areas: set(
    "header header"
    "sidebar main"
    "footer footer" 
  );
  gap: 20px; 
}
```

---

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr; 
  grid-template-rows: auto 1fr auto; 
  grid-template-areas: apply(
    "header header"
    "sidebar main"
    "footer footer" 
  );
  gap: 20px; 
}
```

---

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr; 
  grid-template-rows: auto 1fr auto; 
  grid-template-areas: set-areas;
  gap: 20px; 
}
```

#### --answer--

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr; 
  grid-template-rows: auto 1fr auto; 
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer"; 
  gap: 20px; 
}
```

### --question--

#### --text--

Koji je ispravan način za rad sa svojstvom od `grid-auto-flow`?

#### --distractors--

```css
.social-icons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: none;
  grid-auto-columns: 1fr;
}
```

---

```css
.social-icons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: allow;
  grid-auto-columns: 1fr;
}
```

---

```css
.social-icons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: set;
  grid-auto-columns: 1fr;
}
```

#### --answer--

```css
.social-icons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
}
```

### --question--

#### --text--

Koji od sledećih nije važeći atribut mreže?

#### --distractors--

`gap`

---

`grid-column`

---

`grid-template-columns`

#### --answer--

`grid-set`

### --question--

#### --text--

Koji od ovih svojstava se može koristiti za centriranje elemenata unutar elementa mreže/grid-a?

#### --distractors--

`allow-items`

---

`set-items`

---

`center-items`

#### --answer--

`align-items`

### --question--

#### --text--

Koja vrednost među sledećim je pravilna za korišćenje sa atributom `grid-auto-columns`?

#### --distractors--

`grid-auto-columns: unset-grid;`

---

`grid-auto-columns: revert-grid;`

---

`grid-auto-columns: set-content(20%);`

#### --answer--

`grid-auto-columns: 1fr;`

### --question--

#### --text--

Šta su mrežne linije?

#### --distractors--

Redovi i kolone.

---

Linije koje možete animirati kretanjem elemenata mreže.

---

Linije koje svaki deo mreže počinje i završava.

#### --answer--

Razmak između dve susedne mreže linije.

### --question--

#### --text--

Koji je ispravan način za korišćenje funkcije `minmax()`?

#### --distractors--

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(apply);
}
```

---

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax();
}
```

---

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(set);
}
```

#### --answer--

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(150px, auto);
}
```

## --quiz--

### --question--

#### --text--

Da li možete postaviti delo mreže unutar rasporeda definisanog sa `grid-template-areas`?

#### --distractors--

Za direktno određivanje veličine i lokacije komada unutar mreže koristeći `grid-template-rows` i `grid-template-columns`.

---

Koristeći atribut `grid-area` i navođenje početnih i krajnjih pozicija za redove i kolone.

---

Postavljanjem `grid-area` i koordiniranjem jasnih pikselnih koordina.

#### --answer--

Podešavanjem imenovanog područja u atributu `grid-area` komada.

### --question--

#### --text--

Svojstvo `grid-auto-rows` šta kontroliše?

#### --distractors--

Dužina jasno definisanih linija.

---

Maksimalna širina redova grilje (ili mreže).

---

Razmaci između linija.

#### --answer--

Veličina linija formiranih nejasnim putem.

### --question--

#### --text--

Koja funkcija biste koristili da napravite da mrežni deo kruži oko mnogo linija?

#### --distractors--

`grid-row-span`

---

`row-span`

---

`span-rows`

#### --answer--

`grid-row`

### --question--

#### --text--

Šta definiše potpuno otvorenu mrežu?

#### --distractors--

Linije koje se generišu automatski da odgovaraju sadržaju.

---

Linije identifikovane od strane jedinice `fr`.

---

Linije dodate za `grid-auto-flow`.

#### --answer--

Linije koje su jasno definisane sa `grid-template-columns` ili `grid-template-rows`.

### --question--

#### --text--

Koja je vrednost `grid-auto-flow` da novi elementi popune red prvo?

#### --distractors--

`row`

---

`vertical`

---

`row dense`

#### --answer--

`column`

### --question--

#### --text--

Šta je svrha `grid-template-areas`?

#### --distractors--

Kreirati nevidljive linije direktno.

---

Menjajte jedinicu za `fr`.

---

Postavljanje vrednosti za `z-index`.

#### --answer--

Biti vizuelna mapa komponenti na imenovanim mrežnim oblastima.

### --question--

#### --text--

Kako se može napraviti komad mreže da počne sa reda 2 i završi na redu 4?

#### --distractors--

`grid-column: 2 / span 4;`

---

`grid-column: start 2 / end 4;`

---

`grid-column: from 2 to 4;`

#### --answer--

`grid-column: 2 / 4;`

### --question--

#### --text--

Učinak od `grid-template-columns: 1fr 2fr 1fr` je šta?

#### --distractors--

Napravite tri reda jednake širine.

---

Učinite srednji red tri puta širim nego ostali.

---

Naterujem sve redove da imaju širinu samo od `1fr`.

#### --answer--

Napravi tri reda gde je srednji red dvostruko širi od bočnih.

### --question--

#### --text--

Kako možete kreirati grid sa 3 reda koji imaju istu širinu kao razmak od `20px` između njih?

#### --distractors--

```css
.container {
  display: grid;
  grid-template: repeat(3, 1fr) / 20px;
} 
```

---

```css
.container {
  display: grid;
  grid: 1fr 1fr 1fr / gap 20px;
}
```

---

```css
.container {
  display: grid;
  grid-template-columns: 20px 1fr 1fr 1fr;
}
```

#### --answer--

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

### --question--

#### --text--

`repeat(3, minmax(100px, 1fr))` Šta stvara?

#### --distractors--

Tri reda koji ne mogu da padnu ispod `100px`.

---

Tri reda za `100px` stabilne.

---

Tri linije sa najvišom dužinom od `1fr`.

#### --answer--

Tri reda koji rastu proporcionalno, ali neće opadati ispod `100px`.

### --question--

#### --text--

Koje informacije o nejasnim mrežama su istinite?

#### --distractors--

Neprišćene mreže ne poštuju svojstvo `gap`.

---

Nedefinisana struktura mora biti definisana pomoću `grid-template-areas`.

---

Nejasna linija može se kreirati samo korišćenjem svojstva `grid-auto-flow`.

#### --answer--

Nedefinisane linije nastaju kada sadržaj ne odgovara jasno definisanim redovima.

### --question--

#### --text--

Šta karakteristika `place-items` radi u CSS mreži (Grid)?

#### --distractors--

Postavlja veličinu elemenata mrežice direktno u skladu sa dostupnim prostorom.

---

Kontrolišite podešavanja redova i linija mrežnog panela.

---

Prilagođava raspored elemenata mreže unutar kontejnera.

#### --answer--

To je metoda za poravnavanje elemenata mreže u linearnom pravcu i duž linije.

### --question--

#### --text--

CSS Kako ovo radi?

```css
.container {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```

#### --distractors--

Kreira redove za `150px` fiksne koje nadmašuju veličinu kontejnera.

---

Kreiraj redove koji imaju širinu od `1fr` samo bez obzira na sadržaj.

---

Kreirajte jedan red za svaki `150px` postojeće širine.

#### --answer--

Kreira dinamičke redove koji su najmanje `150px` i smanjuju se kada je prostor mali.

### --question--

#### --text--

Da li možete kreirati nepravilne postavke mreže?

#### --distractors--

Korišćenje jedinica `fr` samo.

---

Kada se kombinuju različite jedinice dužine u `grid-template-columns`.

---

Za postavljanje `grid-asymmetric: true`.

#### --answer--

Za određivanje različitih veličina za svaku liniju.

### --question--

#### --text--

`grid-column-start: 2` Šta radi sa delom mreže?

#### --distractors--

Neka deo kruži po redu 2.

---

Uklanjanje po pikselu 2.

---

Postavite počevši od druge vertikalne mrežne linije.

#### --answer--

Napraviću komadić da počne na drugom redu.

### --question--

#### --text--

Koji atribut biste koristili da kontrolišete ponašanje prelivanja u mrežnim linijama/gridu?

#### --distractors--

`grid-overflow`

---

`track-sizing`

---

`fit-content`

#### --answer--

`minmax()`

### --question--

#### --text--

Koji će biti rezultat sledećeg koda?

```css
.container {
  display: grid;
  grid-template-columns: 100px 1fr 2fr;
  grid-template-rows: auto 150px;
  gap: 10px;
}
```

#### --distractors--

Kontejner će biti u tri reda jednake širine, i dve linije, svaka dužine `150px`.

---

Kontejner će biti u tri reda, svi sa širinom `100px`, i dva poprečna reza (linije) dužine `150px`.

---

Kontejner će imati dvije linije, svaka sa dužinom od `1fr`.

#### --answer--

Kontejner će imati tri reda: 100px, `1fr` na `2fr` širina i dva reda: jedan auto i jedan sa visinom od `150px`.

### --question--

#### --text--

Možete li napraviti da deo mreže okruži sve postojeće linije?

#### --distractors--

`grid-row: full;`

---

`grid-row: auto / -1;`

---

`grid-row: 1 / span infinite;`

#### --answer--

`grid-row: 1 / -1;`

### --question--

#### --text--

Koja svojstvo kontroliše poravnanje elemenata mreže duž pravca linije?

#### --distractors--

`justify-items`

---

`place-items`

---

`align-content`

#### --answer--

`align-items`

### --question--

#### --text--

Kako možete osigurati da deo mreže ostane u prvom redu, bez obzira na promene grida/mreže?

#### --distractors--

`grid-column: fixed;`

---

`grid-column: first;`

---

`grid-lock: column;`

#### --answer--

`grid-column: 1;`