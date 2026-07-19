---
id: 672bbe9171a5cca90f2edeea
title: Koje su primere veštačke klase akcije korisnika za karakteristiku/funkciju?
challengeType: 19
dashedName: what-are-examples-of-element-user-action-pseudo-classes
---

# --interactive--

Povratne informacije korisnika su važan element u dizajnu veb stranice. Na primer, važno je da korisnici dobiju vizuelne indikacije kada interaguju sa elementima na veb stranici, kao što je naleti na dugme ili klikatanje na link. Ove povratne informacije pomažu korisnicima da razumeju stanje interaktivnih elemenata, kao što je prikazivanje da li je link kliknut ili ne.

Darasa la bandia za radnji korisnika u CSS su specijalne reči koje mu omogućavaju da pruži ove komentare bez potrebe za JavaScript ili drugim programskim jezicima.

Ove pseudo-klase uključuju `:hover`, `:active`, `:focus`, i `:visited`, među ostalnim. One omogućavaju menjanje izgleda elemenata u zavisnosti od interakcije korisnika, poboljšavajući ukupno korisničko iskustvo.

Neka pregledamo neke veštačke klase korisničkog ponašanja koje imamo i da vidimo kako funkcionišu.

Pseudo-klasa `:active` primenjuje stilove kada korisnik aktivira element. Na primer, kada korisnik klikne na dugme ili vezu, pruža trenutnu vizuelnu povratnu informaciju koja pokazuje da je radnja prepoznata.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<a href="#">Example link</a>
```

```css
a:active {
  color: crimson;
}
```

:::

Pseudo-klasa za `:hover` se aktivira kada korisnik pređe mišem ili drugim pokazivačem preko elementa. Razvojari ga često koriste za kreiranje vizuelnog povratnog informacija za dugmiće, link ili bilo koji element koji treba da reaguje na pažnju korisnika. Evo dugmeta preko koje će korisnik preći mišem pre klika:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<button class="btn">Hover Over Me</button>
```

```css
.btn:hover {
  background-color: darkgreen;
  color: white;
  cursor: pointer;
}
```

:::

Pseudo-klasa `:focus` primenjuje stilove kada element dobije fokus, obično putem tastature ili kada korisnik klikne na polje za unos. Ovo nije važno samo zbog vizuelne povratne informacije već i zbog pristupačnosti, jer korisnicima koji koriste tastaturu olakšava da vide sa kojim elementom rade.

Evo primera polja za unos koje dobija fokus kada se klikne na njega ili kada se do njega dođe pomoću tastature:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <input type="text" />
</form>
```

```css
input:focus {
  outline: 2px solid darkgreen;
  border-radius: 4px;
}
```

:::

Pseudo-klasa `:visited` cilja veze koje je korisnik već posetio. To pomaže korisnicima da razlikuju posećene od neposjećenih stranica. Evo primera u kome se boja teksta veze menja u `cyan` nakon što je veza posećena:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<a href="https://www.example.com" target="_blank">Visit Example.com</a>
```

```css
a:visited {
  color: cyan;
}
```

:::

Pseudo-klasa `:checked` u CSS-u omogućava stilizovanje elemenata obrasca, kao što su polja za potvrdu i radio dugmad, kada su označeni. Ova pseudo-klasa je korisna za prilagođavanje njihovog izgleda i poboljšanje korisničkog iskustva, iako pregledači već imaju podrazumevane stilove.

Ovo je primer čekmarke za saglasnost sa uslovima na veb stranici.

**NAPOMENA**: Neki od CSS u ovom primeru koriste svojstva koja još nisu data za učenje. Ovo je da vam damo ideju kako kreirati prilagođeni padajući meni (ili okvir za izbor). Naučićete kako sve ovo funkcioniše na budućim časovima i radionicama.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <label>
  Agree <input class="checkbox" type="checkbox" />
  </label>
</form>
```

```css
.checkbox {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: all 0.25s ease;
  vertical-align: middle; 
}

.checkbox:hover {
  border-color: #888;
}

.checkbox:checked {
  background-color: #4caf50;
  border-color: #4caf50;
}

.checkbox:checked::after {
  content: "";
  position: absolute;
  left: 4px;
  top: 0px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox:focus {
  outline: 2px solid #90caf9;
  outline-offset: 2px;
}

```

:::

U ovom primeru, koristimo atribut `appearance` postavljen na `none` da ukloni osnovni stil koji je dostavljen od strane pretraživača za polja unosa u izbirnoj kutiji. Kada korisnik pregleda kutiju, imaće pozadinsku boju `green`.

Ostali primjeri umjetne klase akcije su:

- `:focus-within`: za postavljanje stilova elementu kada je ili bilo koji od njegovih potomaka fokusiran.
- `:enabled`: za ciljanje dugmadi forme ili drugih elemenata koji su trenutno aktivni.
- `:disabled`: za ciljanje dugmadi forme ili drugih deaktiviranih elemenata.
- `:target`: za postavljanje stilova elementu koji je ciljan delom URL (delom URL nakon oznake `#`).

# --questions--

## --text--

Šta vam veštačka klasa korisničkog ponašanja omogućava?

## --answers--

Omogućava crteže i izmene stila.

### --feedback--

Razmislite kako možete sarađivati sa korisnicima koristeći samo CSS.

---

Omogućava menjanje strukture DOM u realnom vremenu.

### --feedback--

Razmislite kako možete da sarađujete sa korisnicima koristeći CSS samo.

---

Dostavlja komentare korisniku bez zavisnosti od JavaScript.

---

Omogućava vam da postavite stil za poslednji element u listi.

### --feedback--

Razmislite kako možete sarađivati sa korisnicima koristeći samo CSS.

## --video-solution--

3

## --text--

Šta je lažna baza podataka ``:checked`` u `CSS` radi?

## --answers--

Izaberite element kada je onemogućen.

### --feedback--

Razmislite kako forme obrađuju izbor korisnika.

---

Izaberite element dok ga pregledavate.

### --feedback--

Razmislite kako forme obrađuju izbor korisnika.

---

Postavlja stilove za elemente kao što su polje za označavanje ili radio dugme koja su odabrana.

---

Primjenjuje stil za element kada primi fokus.

### --feedback--

Razmisli kako obrasci obrađuju korisničke izbore.

## --video-solution--

3

## --text--

Šta radi lažna klasa `:focus`?

## --answers--

Selektuje element kada ga mišem pređete.

### --feedback--

Zamislite kako korisnici navigiraju po obrascima koristeći tastaturu.

---

Postavlja se stil kada element dobije fokus, obično putem navigacije tastaturom ili klikom.

---

Izaberite polje nakon slanja forme.

### --feedback--

Razmislite kako korisnici navigiraju po formularima koristeći tastaturu.

---

Postavlja stil za element kada se isključuje.

### --feedback--

Razmislite kako korisnici navigiraju po formularima koristeći tastaturu.

## --video-solution--

2