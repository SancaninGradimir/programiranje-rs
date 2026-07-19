---
id: 672bc4ff5e7a4bbdee8ba013
title: Koje boje su navedene po imenu u CSS-u, i kada treba da se koriste?
challengeType: 19
dashedName: what-are-named-colors-in-css
---

# --interactive--

U CSS, boje imaju važnu ulogu u dizajniranju web stranica, poboljšanju čitljivosti, postavljanju raspoloženja i unapređenju korisničkog iskustva. Jedan jednostavan način za definisanje boja u CSS je korišćenjem imenovanih boja. Imenovane boje su unapred definisana imena boja koja prepoznaju pregledači. Evo primera korišćenja imenovane boje za paragraf element:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<p>This is a paragraph.</p>
```

```css
p {
  color: red;
}
```

:::

U ovom primeru koristimo imenovanu boju `red` za stilizovanje teksta u pasusu.

Boje navedene po imenu u CSS su kolekcija od 140 standardnih imena boja kao što su `red`, `blue`, `yellow`, `aqua`, `fuchsia`, `black`, itd. Ova imena su laka za upotrebu i čine vaš kod čitljivijim, a takođe opisuju sebe.

Boje navedene po imenu su važne za kreiranje brvih primera, jednostavnih struktura i poboljšanje čitljivosti koda. Evo još jednog primera korišćenja boja navedenih po imenu za selektor `h1`:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<h1>This is a heading</h1>
```

```css
h1 {
  color: navy;
  background-color: lightgray;
}
```

:::

U ovom primeru, tekst zaglavlja sekcije će biti obojen tamno plavom bojom, a pozadina će imati svetlo sivu boju. Čitljivost koda je poboljšana jer navedene boje pružaju brzo razumevanje nameravanog stila.

Imenovane boje u CSS-u su jednostavne za korišćenje, ali imaju ograničenja, jer postoji samo 140 dostupnih boja. Možda neće pružiti tačnu nijansu potrebnu za složenije dizajne.

Boje pomenute po imenu u CSS su dobar način za brzo i razumljivo korišćenje boja. Iako su važne za osnovne strukture, kreiranje primera i poboljšanje čitljivosti koda, njihov ograničen opseg čini ih neprikladnim za složene strukture koje zahtevaju preciznu kontrolu boja.

Da biste razumeli snagu i granice boja koje su nazvane, možete odlučiti kada je bolje koristiti ih umesto modela dubine boje kao što su RGB ili HSL, o čemu ćete naučiti u budućim časovima.

# --questions--

## --text--

Koja je glavna prednost korišćenja imenovanih boja u CSS-u?

## --answers--

Boje pomenute po imenu omogućavaju vam da kreirate mešavinu boja.

### --feedback--

Razmisli o jednostavnosti i čitljivosti imenovanih boja.

---

Boje navedene po imenu su jednostavne za pisanje i čine kod čitljivijim.

---

Nazivane boje pružaju širiji raspon izbora boja od heks kodova.

### --feedback--

Razmislite o jednostavnosti i čitljivosti boja koje su nazvane po imenu.

---

Imenovane boje su najprecizniji način za definisanje boja u web dizajnu.

### --feedback--

Razmislite o jednostavnosti i čitljivosti boja koje su navedene po imenu.

## --video-solution--

2

## --text--

U kojim okolnostima boje navedene po imenu možda nisu najbolji izbor?

## --answers--

Kada vam je potrebno kreirati brzi primer strukture/dizajna.

### --feedback--

Razmislite o granicama boja navedenih po imenu u najsloženijim strukturama.

---

Ako ima dizajn koji zahteva specifičnu nijansu ili dubinu boje.

---

Ako ima dizajn koji koristi samo primarne boje.

### --feedback--

Razmislite o granicama boja navedenih po imenu u najkompleksnijim dizajnovima.

---

Kada sarađujete sa drugima na jednostavnom projektu.

### --feedback--

Razmislite o granicama boja koje su po imenu navedene u najsloženijim strukturama.

## --video-solution--

2

## --text--

Koja od sljedećih je primjer boje pomenut po imenu u CSS?

## --answers--

`#ff5733`

### --feedback--

Boje pomenute po imenu su opisne reči, a ne brojevi.

---

`rgb(255, 99, 71)`

### --feedback--

Boje pomenute po nazivu su opisne reči, a ne brojevi.

---

`tomato`

---

`hsl(120, 100%, 50%)`

### --feedback--

Boje pomenute po imenu su opisne reči, a ne brojevi.

## --video-solution--

3