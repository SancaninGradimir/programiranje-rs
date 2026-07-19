---
id: 66ed8fc9f45ce3ece4053eae
title: Pokušaj sa CSS crtežima/grafikom
challengeType: 8
dashedName: quiz-css-animations
---

# --description--

Da biste položili kratki test, morate tačno odgovoriti na najmanje 18 od 20 pitanja koja su navedena ispod.

# --quizzes--

## --quiz--

### --question--

#### --text--

Svrha atributa `transform` u CSS jeste?

#### --distractors--

Menjajte izgled elementa.

---

Koristiti vizuelni prikaz teksta.

---

Postavite dimenzije elementa.

#### --answer--

Menja poziciju, veličinu i oblik elementa.

### --question--

#### --text--

Da li karakteristika CSS `animation-direction` utiče na crteže?

#### --distractors--

Objašnjava kako se crtež treba ponoviti.

---

Postavljam vremenski okvir za crteže.

---

Objašnjava brzinu crteža.

#### --answer--

Objašnjava kako se crteži treba igrati.

### --question--

#### --text--

Koja je karakteristika CSS koja uzrokuje da se crtež izvrši tri puta?

#### --distractors--

`animation-repeat: 3`

---

`animation-loop: 3`

---

`animation-delay: 3`

#### --answer--

`animation-iteration-count: 3`

### --question--

#### --text--

Koja je funkcija za period CSS koja čini da crteži rade konstantnom brzinom od početka do kraja?

#### --distractors--

`ease`

---

`ease-in`

---

`ease-in-out`

#### --answer--

`linear`

### --question--

#### --text--

Šta Kanun za `@keyframes` objašnjava u CSS?

#### --distractors--

Boje za mešavinu boja CSS.

---

Roze za ciklus CSS.

---

Merenja elementa.

#### --answer--

Koraci crteža za CSS.

### --question--

#### --text--

Svrha funkcije za `translateX()` u CSS je šta?

#### --distractors--

Promeni vidljivost elementa.

---

Promeni elementni ciklus.

---

Promeni poziciju vertikalnog elementa.

#### --answer--

Promeni poziciju elementa jednako.

### --question--

#### --text--

Ko od sljedećih NIJE problem koji može nastati sa crteža CSS?

#### --distractors--

Može uzrokovati neprijatnost ili štetu određenim korisnicima.

---

Korisnici mogu to smatrati uznemirujućim.

---

Prekomerna upotreba može uzrokovati loše performanse.

#### --answer--

Može poboljšati korisničko iskustvo.

### --question--

#### --text--

Gde je kanun za ata `@keyframes` postavljen?

#### --distractors--

Unutar elementa `body` datoteke HTML.

---

Unutar elementa `head` datoteke HTML.

---

Unutar definicije klase objekata CSS.

#### --answer--

Najviši mogući nivo, izvan bilo kojeg selektora za CSS.

### --question--

#### --text--

Koja je karakteristika CSS koja vam omogućava da pauzirate i nastavite crteže?

#### --distractors--

`animation-timing-function`

---

`animation-delay`

---

`animation-direction`

#### --answer--

`animation-play-state`

### --question--

#### --text--

Koja vrednost treba da se postavi za atribut `animation-name` u CSS?

#### --distractors--

Okviri po sekundama.

---

Vremenska funkcija za crteže.

---

Odlaganje pre početka grafike za sekunde.

#### --answer--

Ime crteža definisano sa `@keyframes`.

### --question--

#### --text--

Kako pravilo za `@keyframe` funkcioniše za nacrtovani element?

```css
@keyframes animation {
  0% {
    transform: translateX(-50px);
  }
  100% {
    transform: translateX(100px);
  }
}
```

#### --distractors--

Promeni komponentu za ugao od 90 stepeni u smeru kazaljke na satu.

---

Promeni boju elementa u plavu.

---

Promeni veličinu elementa u 50% od originalne veličine, a zatim u 100% od originalne veličine.

#### --answer--

Promeni element od -50px do 100px, u zavisnosti od početne pozicije.

### --question--

#### --text--

Koji je atribut CSS koji objašnjava kako crteži kreću tokom vremena?

#### --distractors--

`animation-delay`

---

`animation-fill-mode`

---

`animation-iteration-count`

#### --answer--

`animation-timing-function`

### --question--

#### --text--

Koje svojstvo CSS se koristi da pokaže da crteži bi trebalo da traju 5 sekundi za završetak?

#### --distractors--

```css
animation-name: 5s;
```

---

```css
animation-delay: 5s;
```

---

```css
animation-timing-function: 5s;
```

#### --answer--

```css
animation-duration: 5s;
```

### --question--

#### --text--

`50%` šta predstavlja u pravilu za CSS `@keyframe` sledeće?

```css
@keyframes animation {
  0% {
    transform: translateX(-50px);
  }
  50% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(100px);
  }
}
```

#### --distractors--

Mesto za početak crteža.

---

Mesto za kraj crteža.

---

Brzina crtanja.

#### --answer--

Mesto u sredini crteža.

### --question--

#### --text--

Šta će se desiti kada se atribut `transform: translateX(200px);` koristi?

#### --distractors--

Element će se premestiti za 200px ulevo.

---

Element će se pomeriti 200px dole.

---

Element će se okretati za 200 stepeni po časovnom smeru.

#### --answer--

Element će se pomeriti za 200px u desnu stranu.

### --question--

#### --text--

Kako će crteži raditi ako `animation-iteration-count` bude `infinite`?

#### --distractors--

Plesaj jednom, a onda stani.

---

Zaustaviće se nakon prvog ciklusa.

---

To će stajati nakon tri kruga.

#### --answer--

Biće ponovljeno neograničeno.

### --question--

#### --text--

Koji element od `@keyframes` pokazuje početno mesto za crteže?

#### --distractors--

`50%`

---

`25%`

---

`100%`

#### --answer--

`0%`

### --question--

#### --text--

Koje atribute se mogu postaviti koristeći kratki atribut od `animation` za CSS?

#### --distractors--

Samo ime za crteže.

---

Ime na sredini crteža.

---

Ime, vreme, i kašnjenje sa crtežima.

#### --answer--

Sva svojstva crteža.

### --question--

#### --text--

Koje svojstvo CSS se koristi za izvršavanje crteža definisanih pravilom umetnosti od `@keyframes`?

#### --distractors--

`animation-duration`

---

`apply`

---

`translate`

#### --answer--

`animation`

### --question--

#### --text--

Koja je funkcija CSS koja dozvoljava postavljanje kašnjenja pre nego što crteži počnu?

#### --distractors--

`animation-fill-mode`

---

`animation-timing-function`

---

`animation-iteration-count`

#### --answer--

`animation-delay`

## --quiz--

### --question--

#### --text--

Svojstvo od CSS `animation-delay`, šta radi?

#### --distractors--

Postavljam vremenski okvir za crteže.

---

Objašnjava funkciju vremena.

---

Opisuje pravac crteža.

#### --answer--

Odlaže početak crteža.

### --question--

#### --text--

Koja je karakteristika crteža koja objašnjava kako element treba da bude ukrašen pre i posle crteža?

#### --distractors--

`animation-delay`

---

`animation-direction`

---

`animation-iteration-count`

#### --answer--

`animation-fill-mode`

### --question--

#### --text--

Zašto crteži CSS treba koristiti umereno?

#### --distractors--

Mnoge grafike za CSS mogu uzrokovati pokvariti stilove i nestaljive stilove u različitim pregledačima.

---

Mnogi rezultati za CSS mogu uzrokovati nisko rangiranje ili potpun nedostatak u rezultatima pretraživača.

---

Mnoge šeme od CSS će uzrokovati da server odmah padne i povećati sigurnosne rizike.

#### --answer--

Previše dijagrama CSS može uzrokovati loše performanse i može biti remetljivo ili predstavljati problem za korisnike sa određenim potrebama pristupa.

### --question--

#### --text--

Koje svojstvo crteža određuje da li će biti prikazani ispred, iza ili razmenjeni?

#### --distractors--

`animation-fill-mode`

---

`animation-delay`

---

`animation-timing-function`

#### --answer--

`animation-direction`

### --question--

#### --text--

Koji je medijski upit CSS detektuje da li je korisnik tražio crteže ili male pokretne efekte?

#### --distractors--

`reduce-motion`

---

`min-motion-preference`

---

`motion-preferences`

#### --answer--

`prefers-reduced-motion`

### --question--

#### --text--

Koji atribut određuje koliko puta se ponavlja `animation`?

#### --distractors--

`animation-duration`

---

`animation-count`

---

`animation-delay`

#### --answer--

`animation-iteration-count`

### --question--

#### --text--

Koji je princip CSS koji se koristi za definisanje koraka i stilova crteža u različitim periodima?

#### --distractors--

`@style`

---

`@transition`

---

`@transform`

#### --answer--

`@keyframes`

### --question--

#### --text--

U okviru media upita `reduced‑motion`, koje promene koraka su prikazane?

#### --distractors--

`animation: none;`

---

`transition: remove;`

---

`animation-play-state: paused;`

#### --answer--

`transition: none;`

### --question--

#### --text--

Šta vam omogućava funkcija `animation-play-state`?

#### --distractors--

Koliko puta se crteži ponavljaju.

---

Postaviti rok za završetak crteža.

---

Kontrolisanje smjera crteža.

#### --answer--

Zaustavite i nastavite sa crtežima.

### --question--

#### --text--

Kakva je dobra funkcionalnost pri radu sa crtežima?

#### --distractors--

Koristi mnogo sjajnih boja i brzi pokreti da privuče pogled.

---

Izbegavajte testiranje dizajna na uređajima ili sa različitim veličinama ekrana.

---

Nacrtajte slike da traju što duže moguće ili da ih korisnici gledaju.

#### --answer--

Izbegavajte sadržaj koji treperi više od tri puta u sekundi kako biste sprečili epileptične napade ili nelagodu.

### --question--

#### --text--

Zašto se deklaracija `!important` koristi u pravilima CSS?

#### --distractors--

Sprečiti učitavanje drugih media queries.

---

Ograničavanje stilova za element prvog deteta.

---

Olako učiniti pronalaženje greške CSS.

#### --answer--

Osigurati da ova pravila imaju prioritet nad ostalim stilovima.

### --question--

#### --text--

`animation-iteration-count: 1 !important;` šta proveravate u CSS?

#### --distractors--

Crteži su zaustavljeni.

---

Crteži nastavljaju se bez kraja.

---

Uzorci menjaju smer svaki ciklus.

#### --answer--

Svaka ponovljena melodija se svira samo jednom.

### --question--

#### --text--

Koje svojstvo CSS se koristi za prikaz koliko vremena bi crtež trebalo da traje do završetka?

#### --distractors--

`animation-delay`

---

`animation-timing-function`

---

`animation-iteration-count`

#### --answer--

`animation-duration`

### --question--

#### --text--

Šta je ovo svojstvo koje nije deo kratkog svojstva za `animation`?

#### --distractors--

`animation-delay`

---

`animation-timing-function`

---

`animation-direction`

#### --answer--

`animation-transform`

### --question--

#### --text--

Pravilo za `@keyframes`, šta objašnjava?

#### --distractors--

Funkcija vremena crteža.

---

Podrazumevano stanje elementa.

---

Media queries za crteže.

#### --answer--

Serija stilova u različitim delovima crteža.

### --question--

#### --text--

Kako pravilo za `@keyframe` funkcioniše za nacrtovani element?

```css
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

#### --distractors--

Promeni veličinu elementa od 0% do 100%.

---

Promeni element od leve ka desnoj strani.

---

Promeni boju teksta u crnu.

#### --answer--

Element postaje vidljiv postepenim smanjenjem neprozirnosti.

### --question--

#### --text--

U pravilu važnog okvira, `100%` šta predstavlja?

#### --distractors--

Početak crteža.

---

Centralno mesto.

---

Funkcija za smanjenje brzine.

#### --answer--

Kraj crteža.

### --question--

#### --text--

Koja funkcija kontroliše brzinu `animation` tokom svog perioda?

#### --distractors--

`animation-duration`

---

`animation-delay`

---

`animation-iteration-count`

#### --answer--

`animation-timing-function`

### --question--

#### --text--

Šta programeri treba da uzmu u obzir kada implementiraju crteže kako bi održavali pristupačnost?

#### --distractors--

Morate da zavisite potpuno od JavaScript za sve crteže.

---

Dodavanje mnogo i snažnih ilustracija radi efekta.

---

Sastoji se samo od snažnih, brzih i iznenađujućih efekata.

#### --answer--

Upotreba suptilnih efekata, namerno, poštovanje preferencija i pružanje kontrole korisniku.

### --question--

#### --text--

Koja je tačna sintaksa za pomeranje elementa sa leve strane?

#### --distractors--

```css
@keyframes slide-in {
  0 { 
    transform: translate(-100%); 
  }
  100 { 
    transform: translate(0); 
  }
}
```

---

```css
@keyframes slide-in {
  from { 
    translateX(-100%); 
  }
  to { 
    translateX(0); 
  }
}
```

---

```css
@keyframes slide-in {
  start { 
    transform: moveX(-100%); 
  }
  end { 
    transform: moveX(0); 
  }
}
```

#### --answer--

```css
@keyframes slide-in {
  0% { 
    transform: translateX(-100%); 
  }
  100% { 
    transform: translateX(0); 
  }
}
```
