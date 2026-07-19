---
id: 672bbeaa5afdc5a98d5ab8ff
title: Koja su primjeri umjetne/veštačke klase za područje?
challengeType: 19
dashedName: what-are-examples-of-location-pseudo-classes
---

# --interactive--

Pseudo-klase lokacije koriste se za stilizovanje veza i ciljanih elemenata unutar trenutnog dokumenta. Omogućavaju primenu stilova u zavisnosti od toga da li je veza posećena ili je element trenutno ciljan.

Mifano ya darasa la bandia la eneo ni:

- `:link`
- `:visited`
- `:any-link`
- `:local-link`
- `:target`

Pogledajmo detaljnije svaku od ovih pseudo-klasa.

Pseudo-klasa `:link` omogućava ti da ciljaš sve neposjećene veze na veb stranici. Možeš je koristiti za drugačije stilizovanje veza pre nego što ih korisnik poseti. Na primer, možeš sve neposjećene veze obojiti plavom ili glavnom bojom sajta:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<a target="_blank" href="https://www.example.com">Visit Example.com</a>
```

```css
a:link {
  color: magenta;
}
```

:::

U ovom slučaju, bilo koji link koji korisnik još nije kliknuo biće vidljiv u boji magenta. Kada korisnik klikne na link, stil ``:link`` više se neće koristiti, a pseudo-klasa ``:visited`` počinje da deluje. Pseudo-klasa ``:visited`` postaje aktivna nakon što korisnik klikne na link, pa ga možete koristiti za ciljanje linkova koje je korisnik već kliknuo.

Ovo je primer za promenu stanja kliknutog elementa na boju `purple`:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<a target="_blank" href="https://www.example.com">Visit Example.com</a>
```

```css
a:visited {
  color: purple;
}
```

:::

Pseudo-klasa `:visited` pomaže korisnicima da razlikuju posećene od neposjećenih veza.

Pseudo-klasa `:any-link` predstavlja kombinaciju pseudo-klasa `:link` i `:visited`. Zato odgovara svakom elementu sidra (`a`) koji ima atribut `href`, bez obzira na to da li je veza posećena ili ne.

Evo primera u kome pseudo-klasa `:any-link` menja boju veze u `crimson`:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<a target="_blank" href="https://www.example.com">Visit Example.com</a>
```

```css
a:any-link {
  color: crimson;
}
```

:::

Pseudo-klasa `:local-link` cilja veze koje vode ka istom dokumentu. Može biti korisna kada želiš da razlikuješ interne od eksternih veza. Trenutno nijedan pregledač ne podržava pseudo-klasu `:local-link`.

Sintetička klasa ``:target`` selektuje element koji odgovara ID-u trenutnog elementa `URL`, na primer, ``#section1``. Vrlo je važno za stranice sa internom navigacijom.

Ovde je primer HTML koji predstavlja navigaciju unutar stranice. CSS koristi pseudo-klasu `:target` za stilizovanje sekcije koja odgovara mestu gde je korisnik upućen:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<nav id="table-of-contents">
  <ul>
    <li><a href="#section1">Introduction</a></li>
    <li><a href="#section2">Features</a></li>
  </ul>
</nav>

<section id="section1">
  <h2>Introduction</h2>
  <p>This is the introduction section.</p>
</section>

<section id="section2">
  <h2>Features</h2>
  <p>This section describes the features.</p>
</section>
```

```css
section:target {
  background-color: green;
  border: 2px solid green;
  padding: 10px;
}
```

:::

Kada korisnik klikne na jedan od navigacionih linkova, pozadinska boja odgovarajućeg dela će se promeniti u zelenu.

# --questions--

## --text--

Šta je lažna klasa koja omogućava stilizovanje elementa koji odgovara ID-u trenutnog komada, kao što je URL, poput `#section1`?

## --answers--

`:hover`

### --feedback--

Zamislite kako možete istaknuti određeni deo prilikom navigacije kroz interne linkove na stranici.

---

`:focus`

### --feedback--

Razmislite kako možete istaknuti određeni deo dok pretražujete pomoću internih linkova stranice.

---

`:target`

---

`:checked`

### --feedback--

Zamislite kako možete istaknuti određeni deo prilikom navigacije kroz interne linkove na stranici.

## --video-solution--

3

## --text--

Gde se veštačka učionica koristi, posebno?

## --answers--

Kada dekorisać elemente u skladu sa njihovim vezama/povezanjima.

### --feedback--

Razmislite kako možete prilagoditi linkove i ciljane komponente na osnovu interakcije korisnika.

---

Prilikom primene stilova na osnovu toga da li je link kliknut ili element trenutno fokusiran.

---

Kada se prilagođavaju elementi u skladu sa svojstvima roditeljskog elementa.

### --feedback--

Razmislite kako možete stilizovati ciljane linkove i elemente na osnovu interakcije korisnika.

---

Prilikom izmene rasporeda web stranice putem direktnih promena.

### --feedback--

Razmisli kako možeš stilizovati veze i ciljane elemente u zavisnosti od interakcije korisnika.

## --video-solution--

2

## --text--

Koja je pseudo-klasa namenjena ciljanju veza koje vode ka istom dokumentu, ali trenutno nije podržana ni u jednom pregledaču?

## --answers--

`:any-link`

### --feedback--

Zamislite veštačku klasu dizajniranu da razlikuje unutrašnje i spoljašnje organe, iako još uvek nije podržana.

---

`:local-link`

---

`:visited`

### --feedback--

Zamislite veštačku strukturu namenjenu za razlikovanje unutrašnjih i spoljašnjih organa, iako još uvek nije potkrepljena.

---

`:target`

### --feedback--

Zamislite veštačku klasu koja je namenjena da razlikuje unutrašnje i spoljašnje karakteristike, iako još uvek nije podržana.

## --video-solution--

2