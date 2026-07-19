---
id: 66ed8ffcf45ce3ece4053eb5
title: Pokušaj za CSS skaliranje/izravnavanje (alignment)
challengeType: 8
dashedName: quiz-css-positioning
---

# --description--

Da biste položili kratki test, morate tačno odgovoriti na najmanje 18 od 20 pitanja koja su navedena ispod.

# --quizzes--

## --quiz--

### --question--

#### --text--

Nije ni jedna od sljedećih vrijednosti za atribut `position`?

#### --distractors--

`fixed`

---

`absolute`

---

`relative`

#### --answer--

`above`

### --question--

#### --text--

Koja je glavna svrha svojstva `float` u CSS?

#### --distractors--

Floats se koriste za uklanjanje elementa iz njegovog normalnog toka na stranici i postavljanje ga direktno u gornji desni deo web stranice.

---

Floats se koriste za uklanjanje elementa iz normalnog toka na stranici i postavljanje ga iznad njegovog kontejnera.

---

Floats se koriste da uklone element iz normalnog toka na stranici i postavi ga direktno u donji desni deo veb stranice.

#### --answer--

Floats se koriste za uklanjanje elementa iz normalnog toka na stranici i postavljanje ga sa lijeve ili desne strane njegovog kontejnera.

### --question--

#### --text--

Koji od sledećih primera uzrokuje da element kutije/kontejnera skače na lijevu stranu?

#### --distractors--

```css
.box {
  left: float;
  margin-right: 15px;
  width: 50px;
  height: 50px;
  background-color: black;
}
```

---

```css
.box {
  position: float-left;
  margin-right: 15px;
  width: 50px;
  height: 50px;
  background-color: black;
}
```

---

```css
.box {
  float: left-side;
  margin-right: 15px;
  width: 50px;
  height: 50px;
  background-color: black;
}
```

#### --answer--

```css
.box {
  float: left;
  margin-right: 15px;
  width: 50px;
  height: 50px;
  background-color: black;
}
```

### --question--

#### --text--

Funkcija svojstva `clear` je lipljiva?

#### --distractors--

Koristi se za određivanje da li je element potreban za premeštanje ispod stranice.

---

Koristi se za određivanje da li je element potrebno potpuno ukloniti sa stranice.

---

Koristi se za određivanje da li je potrebno zatvoriti element na stranici.

#### --answer--

Koristi se za određivanje da li je element potrebno premestiti ispod sadržaja koji će biti preskočen.

### --question--

#### --text--

Koje je svojstvo CSS koje se koristi za kontrolisanje vertikalnog rasporeda elemenata sa posebnim pozicioniranjem koji su na stranici?

#### --distractors--

`position`

---

`bg-green`

---

`float`

#### --answer--

`z-index`

### --question--

#### --text--

Koja je ispravna sintaksa za poređenje među sledećim?

#### --distractors--

```css
.relative {
  position: relative-position;
  top: 30px;
  left: 30px;
}
```

---

```css
.relative {
  relative-position: relative;
  top: 30px;
  left: 30px;
}
```

---

```css
.relative {
  relative: position;
  top: 30px;
  left: 30px;
}
```

#### --answer--

```css
.relative {
  position: relative;
  top: 30px;
  left: 30px;
}
```

### --question--

#### --text--

Koji je atribut CSS koji koristiš da zadržiš element na određenom mestu na stranici kako se ne bi pomerio prilikom skrolovanja?

#### --distractors--

`position: no-scroll;`

---

`position: relative;`

---

`display: block;`

#### --answer--

`position: fixed;`

### --question--

#### --text--

Šta apso-lutno mapiranje pozicije radi elementu?

#### --distractors--

Absolutno pozicioniranje se koristi za određivanje da li element treba biti premješten ispod sadržaja koji preskače tok.

---

Apsolutno pozicioniranje se koristi za postavljanje elementa unutar normalnog toka dokumenta.

---

Apsolutno poravnanje se koristi za kontrolu vertikalnog rasporeda elemenata sa specifičnim pozicioniranjem koji su na stranici.

#### --answer--

Apsolutno poravnanje omogućava uklanjanje elementa iz normalnog toka dokumenta, i omogućavanje da deluje nezavisno od drugih elemenata.

### --question--

#### --text--

Koje svojstvo među sledećim je važeće svojstvo koje možete koristiti za apsolutno poređenje?

#### --distractors--

`right`

---

`bottom`

---

`top`

#### --answer--

`side`

### --question--

#### --text--

Koja je glavna razlika između relativnog i apsolutnog poređenja?

#### --distractors--

Apsolutno pozicioniranje postavlja element na fiksnoj poziciji, dok relativno pozicioniranje uklanja element iz normalnog toka dokumenta.

---

Relativno usklađivanje postavlja element na trajno mesto, dok apsolutno usklađivanje uklanja element iz normalnog toka dokumenta.

---

Apsolutno upoređivanje ubacuje element u normalan tok dokumenta, dok relativno upoređivanje uklanja element iz normalnog toka dokumenta.

#### --answer--

Relativno poravnanje ubacuje element u normalni tok dokumenta, dok apsolutno poravnanje uklanja element iz normalnog toka dokumenta.

### --question--

#### --text--

Koji primer iz sledećih pokazuje kako postaviti kutiju u gornji levi ugao stranice?

#### --distractors--

```css
.box {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: coral;
  width: 50px;
  height: 50px;
}
```

---

```css
.box {
  position: absolute;
  top: 0;
  right: 0;
  background-color: coral;
  width: 50px;
  height: 50px;
}
```

---

```css
.box {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: coral;
  width: 50px;
  height: 50px;
}
```

#### --answer--

```css
.box {
  position: absolute;
  top: 0;
  left: 0;
  background-color: coral;
  width: 50px;
  height: 50px;
}
```

### --question--

#### --text--

Koja metoda poravnanja omogućava elementu da se pričvrsti samo za određenu poziciju kada skrolovanje stranice prođe pored nekog dela?

#### --distractors--

Poređenje float-a.

---

Fiksno poravnanje

---

Apsolutna korespondencija.

#### --answer--

Podudarnost za lepljivo/Sticky podudarnost.

### --question--

#### --text--

Kakav je tačan primer korišćenja *sticky* upoređivanja/matching-a?

#### --distractors--

```css
.box {
  sticky: position;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: red;
}
```

---

```css
.box {
  position: sticky-fixed;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: red;
}
```

---

```css
.box {
  position: sticky-top;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: red;
}
```

#### --answer--

```css
.box {
  position: sticky;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: red;
}
```

### --question--

#### --text--

Koja je razlika između sticky i fiksne sinkronizacije?

#### --distractors--

Sticky elementi se mogu koristiti samo u tabelarnom rasporedu, dok fiksni elementi mogu se koristiti u bilo kom tipu rasporeda od CSS.

---

Sticky elementi će ostati na istoj poziciji dok se fiksni elementi pričvršćuju za određeni deo, a zatim će se ponašati kao relativni elementi.

---

Fixed elementi će biti postavljeni na osnovu njihove uobičajene pozicije, dok se sticky elementi samo pričvršćuju za određenu sekciju i ponašaju kao relativni elementi.

#### --answer--

Fiksirani elementi će ostati na istom mestu na ekranu, dok će se „sticky“ elementi samo pričvršćivati za određeni deo, a zatim će delovati kao relativni elementi.

### --question--

#### --text--

Koja je poteškoća `clearfix` da reši kada radiš sa floatovima?

#### --distractors--

`clearfix` pomoglo da se reši problem elemenata koji su programirani za preskakanje, uklanjajući ih iz normalnog protoka dokumenta i postavljajući ih na fiksnu poziciju na stranici.

---

`clearfix` Pomaže da reši problem elemenata koji su postavljeni da preskoče, jer se ne prilagođavaju uređaju u rasporedu za telefone i tablete.

---

`clearfix` Pomaže u rešavanju problema elemenata koji su namenjeni za preskakanje ili nestajanje sa stranice.

#### --answer--

`clearfix` Pomoglo je u rešavanju problema spajanja i padanja elemenata koji skaču, kada su više takvih elemenata postavljena jedan pored drugog.

### --question--

#### --text--

Koji je tačan primer za korišćenje `clearfix` hak?

#### --distractors--

```css
.clearfix::before {
  position: fixed;
  top: 0;
  width: 100%;
  clear: both;
}
```

---

```css
.clearfix::after {
  position: relative;
  top: 30px;
  left: 30px;
  clear: all;
}
```

---

```css
.clearfix::before {
  top: 30px;
  clear: none;
}
```

#### --answer--

```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

### --question--

#### --text--

Šta je static?

#### --distractors--

Koristi se za uklanjanje elementa iz njegovog standardnog toka na stranici i postavljanje ga direktno u gornji desni deo web stranice.

---

Ovo vam omogućava da uklonite element iz standardnog toka dokumenta i da ga izolujete od drugih elemenata.

---

Ovo omogućava elementu da ostane fiksiran samo na određnoj poziciji kada skrolujete stranicu preko određenog dela.

#### --answer--

Ovo je standardan tok dokumenta. Elementi se postavljaju odozgo prema dole i od leve ka desnoj sekvencijalno.

### --question--

#### --text--

Koji od navedenih primera postavlja navigacionu traku (navbar) na vrh stranice koristeći fiksno pozicioniranje?

#### --distractors--

```css
.navbar {
  fixed: top;
  top: 0;
  width: 100%;
}
```

---

```css
.navbar {
  upper: fixed;
  width: 100%;
}
```

---

```css
.navbar {
  position: fixed-top;
  top: 0;
  width: 100%;
}
```

#### --answer--

```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}
```

### --question--

#### --text--

Koja od sledećih je validna vrednost atributa za `z-index`?

#### --distractors--

`12.0`

---

`none`

---

`up`

#### --answer--

`1`

### --question--

#### --text--

Koja od sljedećih je podrazumevana vrijednost svojstva `position`?

#### --distractors--

`inherit`

---

`initial`

---

`relative`

#### --answer--

`static`

## --quiz--

### --question--

#### --text--

Koja je vrednost `position` koja omogućava podešavanje položaja elementa za `top` i `left` dok ostaje unutar normalnog protoka dokumenta?

#### --distractors--

`position: absolute;`

---

`position: static;`

---

`position: fixed;`

#### --answer--

`position: relative;`

### --question--

#### --text--

Kako se funkcija sa `position: sticky;` ponaša u početku?

#### --distractors--

Radiće kao element od `fixed` do pozicije skrolovanja stranice kada se ona dostigne.

---

Izvlači se svaki put iz uobičajenog protoka dokumenata.

---

Deluje kao element `absolute` unutar svog roditeljskog elementa.

#### --answer--

Radi kao komponenta od `relative` do posebne tačke za pomeranje/skrolovanje stranice kada se ona dostigne.

### --question--

#### --text--

Koji od sljedećih primjera pokazuje ispravnu i efikasnu upotrebu atributa `z-index` za prikazivanje `.box-two` iznad `.box-one`?

#### --distractors--

```css
.box-one {
  position: static;
  z-index: 2;
}
.box-two {
  position: static;
  z-index: 1;
}
```

---

```css
.box-one {
  position: absolute;
  stack-order: 1;
}
.box-two {
  position: absolute;
  stack-order: 2;
}
```

---

```css
.box-one {
  float: left;
  z-index: 1;
}
.box-two {
  float: left;
  z-index: 2;
}
```

#### --answer--

```css
.box-one {
  position: absolute;
  z-index: 1;
}
.box-two {
  position: absolute;
  z-index: 2;
}
```

### --question--

#### --text--

Zašto se svojstvo `z-index` koristi u CSS?

#### --distractors--

Postavite nivo dodavanja stranica.

---

Kontrolisati konzistentnost jednakosti komponenti unutar promenljivog kontejnera.

---

Definiše razmak između sadržaja elementa i njegove granice.

#### --answer--

Podesite vertikalno poravnanje elemenata sa posebnim razmakom koji se sastaju.

### --question--

#### --text--

Kada koristiš `top: 10%;` za funkciju sa `position: fixed;`, `10%` se računa na osnovu čega?

#### --distractors--

Dužina samog elementa.

---

Dužina kontejnera njegovog/njegovoj roditelja.

---

Širina vidnog polja.

#### --answer--

Dužina vidljivog područja.

### --question--

#### --text--

Koji primer koda koristi atribut `z-index` za postavljanje elementa na vrh drugog sadržaja?

#### --distractors--

```css
.overlay {
  z-index: 5;
  background-color: black;
}
```

---

```css
.overlay {
  display: block;
  z-layer: 1;
  background-color: black;
}
```

---

```css
.overlay {
  float: left;
  z-index: 2;
  background-color: black;
}
```

#### --answer--

```css
.overlay {
  position: absolute;
  z-index: 10;
  background-color: black;
}
```

### --question--

#### --text--

Koja je svojstvo CSS koje se koristi za određivanje da li element treba da bude pomeren ispod elemenata koji su postavljeni za preskočenje?

#### --distractors--

`float`

---

`overflow`

---

`display`

#### --answer--

`clear`

### --question--

#### --text--

Gde ćemo postaviti element sa `position: relative;` i `bottom: 25px;`?

#### --distractors--

Pomerić će se za 25px dole od svoje uobičajene pozicije.

---

Preмести se 25px udesno od svoje normalne pozicije.

---

Postaviti na 25 piksela od dna vidljivog područja.

#### --answer--

Poplivaće 25px gore od svoje uobičajene pozicije.

### --question--

#### --text--

Svojstvo `z-index` da li će se odnositi samo na elemente koji imaju svojstvo CSS?

#### --distractors--

Vrednost `float` različita od `none`.

---

Vrednost `display` od `inline-block`.

---

Skup `background-color`.

#### --answer--

Vrednost `position` različito od `static`.

### --question--

#### --text--

Kakav će biti rezultat korišćenjem `float: right;` za logo u zaglavlju?

#### --distractors--

Logo će biti poravnat desno, ali će ostati u normalnom toku dokumenta, sprečavajući da drugi sadržaj obavija oko njega.

---

Nembo će biti uklonjen iz toka i postavljen sa desne strane cele površine pregledača, a ne u njegov kontejner.

---

Nembo će biti standardni blok element koji zauzima punu širinu zaglavlja i gura druge elemente ispod sebe.

#### --answer--

Nembo će biti izvučen iz svog normalnog toka i postavljen na desnu stranu njegovog kontejnera, sa drugim sadržajem oko njega.

### --question--

#### --text--

Koji je kod za CSS koji će postaviti element kada bude preklopljen preko vidljivog područja čim se pomeri?

#### --distractors--

```css
.header {
  position: fixed;
  top: 0;
}
```

---

```css
.header {
  position: relative;
  top: 0;
}
```

---

```css
.header {
  position: absolute;
  top: 0;
}
```

#### --answer--

```css
.header {
  position: sticky;
  top: 0;
}
```

### --question--

#### --text--

Koja je specifična svrha `clear: both;` u CSS?

#### --distractors--

Brisanje atributa `float` sa samog elementa, vraćanjem u normalan tok dokumenta.

---

Briše sve atribute za `clear` naslijeđene od roditelja, vraćajući normalno ponašanje skakanja.

---

Briše samo elemente koji su namenjeni za pomeranje u desnu stranu, dozvoljavajući elementima namenjenim za pomeranje u levu stranu da ostanu nepromenjene.

#### --answer--

Osigurava da je element postavljen ispod svih elemenata koje se raspoređuju/koji plivaju koji su vidljivi sa leve i desne strane pre njega.

### --question--

#### --text--

Za sledeći kod, `.child`, gde će biti postavljen?

```css
.parent {
  /* No position property set */
  height: 200px;
}
.child {
  position: absolute;
  top: 10px;
}
```

#### --distractors--

Postaviće se 10px od vrha elementa `.parent`, jer je poravnanje `absolute` uvek bazirano na direktnom roditelju.

---

Ostaje na svojoj uobičajenoj poziciji od static jer je vrednost `absolute` nije validna bez atributa `z-index`.

---

Biće postavljeno 10px od vrha prozora pretraživača, ostajući fiksirano čak i kada korisnik skroluje stranicu.

#### --answer--

Postaviće se 10px od vrha početnog kontejnera za unos, kao što je `<body>`, jer njegov roditelj nema specifičan prostor.

### --question--

#### --text--

Koja će promena imati sledeći kod za element `.box`?

```css
.box {
  position: absolute;
  top: 50px;
  left: 50px;
}
```

#### --distractors--

Element će ostati u svom normalnom toku, ali će biti pomeren za 50px od vrha i leve strane, što će gurati druge elemente dalje.

---

Element će biti trajno postavljen u vidljivo područje i ostaje 50px od vrha i 50px od leve strane, čak i kada se stranica skroluje.

---

Element će se postaviti u zavisnosti od svoje početne pozicije, pomerajući se za 50 piksela dole i 50 piksela desno bez izlaska iz protoka dokumenta.

#### --answer--

Element će biti uklonjen iz normalnog toka i postavljen 50px od vrha i 50px od leve strane svog roditeljskog elementa sa specifičnim najbližim položajem.

### --question--

#### --text--

Koji od vrednosti `position` potpuno uklanja element iz normalnog protoka dokumenta?

#### --distractors--

`position: static;`

---

`position: relative;`

---

`position: inherit;`

#### --answer--

`position: absolute;`

### --question--

#### --text--

Za elemente ``.parent`` i ``.child``, koji je kod `CSS` koji postavlja ``.child`` sa preciznošću od 20px od gornjeg levog ugla elementa ``.parent``?

#### --distractors--

```css
.parent {
  /* position: static; by default */
}
.child {
  position: absolute;
  top: 20px;
  left: 20px;
}
```

---

```css
.parent {
  position: relative;
}
.child {
  position: relative;
  top: 20px;
  left: 20px;
}
```

---

```css
.parent {
  position: relative;
}
.child {
  float: left;
  top: 20px;
  left: 20px;
}
```

#### --answer--

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 20px;
  left: 20px;
}
```

### --question--

#### --text--

Koja je razlika između `static` i `relative`?

#### --distractors--

Pazmanje od `static` uklanja element iz toka dokumenta, dok pazmanje od `relative` postavlja ga u tok.

---

Element sa `position: static;` može se prebaciti na parametre `top` i `left`, kada `position: relative;` ne može.

---

Poravnanje za `static` je za elemente na nivou bloka, dok poravnanje za `relative` je samo za inline elemente.

#### --answer--

Sve postavljaju element unutar normalnog toka dokumenta, ali `relative` dozvoljava elementu da se premesti daleko od svoje prvobitne pozicije.

### --question--

#### --text--

Koji je kod CSS koji čini da slika klizi ulevo, omogućavajući drugim sadržajima da se kreću oko nje?

#### --distractors--

```css
.image {
  position: absolute;
  left: 0;
}
```

---

```css
.image {
  display: inline-block;
}
```

---

```css
.image {
  text-align: left;
}
```

#### --answer--

```css
.image {
  float: left;
}
```

### --question--

#### --text--

Šta je razlika između `absolute` i `fixed`?

#### --distractors--

Podudarnost za `absolute` je bazirana na vidljivom području, dok je podudarnost za `fixed` bazirana na roditeljskom elementu sa posebnim statusom.

---

Podudarnost `absolute` ubacuje element unutar standardnog toka dokumenta, dok podudarnost `fixed` uklanja iz toka.

---

Sve je postavljeno u skladu sa vidljivim područjem, ali elementi `fixed` će se skrolovati sa stranicom kada elementi `absolute` neće se skrolovati.

#### --answer--

Usklađivanje za `absolute` je zasnovano na roditeljskom elementu sa specifičnom bliskom pozicijom, dok je usklađivanje `fixed` zasnovano na vidljivom području pregledača.

### --question--

#### --text--

Koje od vrednosti za `position` ubacuje element u normalan tok dokumenta i sprečava da parametri kao što su `top` i `left` utiču?

#### --distractors--

`position: relative;`

---

`position: absolute;`

---

`position: fixed;`

#### --answer--

`position: static;`