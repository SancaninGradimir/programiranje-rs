---
id: 672bbeb6eefd7ca9c003ea00
title: Koji su primeri pseudo-klasa za strukturu stabla?
challengeType: 19
dashedName: what-are-examples-of-tree-structural-pseudo-classes
---

# --interactive--

Pseudo-klasa za strukturu drveta omogućava vam da ciljate i stilizujete elemente na osnovu njihove pozicije unutar stabla dokumenta. Stablo dokumenta se odnosi na hijerarhijsku strukturu elemenata u dokumentu HTML.

Evo liste pseudo-klasa za strukturu stabla:

- `:root`
- `:empty`
- `:nth-child(n)`
- `:nth-last-child(n)`
- `:first-child`
- `:last-child`
- `:only-child`
- `:nth-of-type`
- `:first-of-type`
- `:last-of-type`
- `:only-of-type`

Detaljno analizirajmo svaku veštačku klasu strukture drveta, praćenu primerima.

Pseudo-klasa `:root` obično predstavlja korenski element `html`. Omogućava ti da ciljaš najviši nivo dokumenta kako bi primenio zajedničke stilove na ceo dokument.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<h1>Welcome to My Website</h1>
<p>This is a sample paragraph to demonstrate the :root pseudo-class.</p>
```

```css
:root {
  background: black;
  color: aliceblue;
}
```

:::

Pseudo-klasa `:root` se takođe često koristi za definisanje CSS promenljivih:

```css
:root {
  --main-font: 'Arial, sans-serif';
  --primary-color: blue; 
  --secondary-color: green; 
}
```

CSS promenljive omogućavaju čuvanje vrednosti i njihovo ponovno korišćenje u stilovima. Više o njima naučićeš kasnije.

Prazni elementi, odnosno elementi bez dece osim praznih razmaka, takođe su deo stabla dokumenta. Zato postoji pseudo-klasa `:empty` za ciljanje praznih elemenata. Na primer, ovaj HTML sadrži dve prazne stavke liste. Pomoću pseudo-klase `:empty` možeš ih stilizovati drugačije:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<ul>
  <li>Item 1</li>
  <li></li> <!-- This list is empty -->
  <li>Item 2</li>
  <li></li> <!-- Another empty list -->
  <li>Item 3</li>
</ul>
```

```css
:empty {
  background: black;
}
```

:::

Najveći broj aktivnosti za obavljanje sa praznim stavkama liste je možda da uopšte ne prikazuje:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<ul>
  <li>Item 1</li>
  <li></li> <!-- This list is empty -->
  <li>Item 2</li>
  <li></li> <!-- Another empty list -->
  <li>Item 3</li>
</ul>
```

```css
:empty {
  display: none;
}
```

:::

`:nth-child(n)` omogućava izbor elemenata prema njihovom položaju unutar roditelja, dok `:nth-last-child(n)` bira elemente brojeći od kraja. `n` može biti određeni broj ili vrednosti poput `odd` ili `even`. Ovo je posebno korisno za stilizovanje ćelija tabele na osnovu njihovog položaja.

Evo primera HTML tabele sa cenama voća. CSS koristi pseudo-klasu `:nth-child` da cilja ćelije tabele na neparnim i parnim pozicijama:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<table>
  <tr>
    <th>Item</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Apple</td>
    <td>$1.00</td>
  </tr>
  <tr>
    <td>Banana</td>
    <td>$0.50</td>
  </tr>
  <tr>
    <td>Orange</td>
    <td>$0.80</td>
  </tr>
</table>
```

```css
th,
td {
  border: 1px solid lightgray;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: orangered;
}

tr:nth-child(odd) {
  background-color: lightgreen;
}
```

:::

Lažne klase za `:first-child`, `:last-child`, i `:only-child` funkcionišu sa elementima unutar roditeljskog kontejnera ili celokupnog dokumenta.

- `:first-child` selektuje prvi element u roditeljskom elementu ili dokumentu.
- `:last-child` selektuje poslednji element u roditeljskom elementu ili dokumentu.
- `:only-child` selektuje jedini element u roditeljskom elementu ili dokumentu.

Korišćenjem pseudo klasa od `:first-child` i `:last-child`, će izabrati `Item 1` na `Item 3` u ovom primeru:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```css
li:first-child {
  background-color: orangered;
}

li:last-child {
  background-color: lightgreen;
}
```

:::

Ako imate više od jedne liste na stranici, morate biti specifičniji u izboru:

Da bih vam pokazao kako pseudo-klasa `:only-child` funkcioniše, evo primera HTML sa dve različite komponente od `div`. Korišćenje pseudo-klase `:only-child` osigurava da se element `div` sa samo jednim detetom izabere:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<div class="container">
  <div>This is the only item in this container.</div>
</div>

<div class="container">
  <div>This is one of two items in this container.</div>
  <div>Here is the second item.</div>
</div>
```

```css
.container div:only-child {
  border: 2px solid crimson;
  padding: 10px;
  background-color: lightblue;
}
```

:::

Pseudo-klase za `:first-of-type` i `:last-of-type` biraju prvo i poslednje pojavljivanje specifičnog tipa elementa unutar svog roditelja. Važno je za korišćenje jedinstvenih stilova za prvo ili poslednje pojavljivanje tog tipa elementa među njegovim braćama/sestrama.

U ovom primeru ispod, `:first-of-type` i `:last-of-type` se koriste za prvi element i poslednji element unutar elementa `section`:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />

<section>
  <h2>Introduction</h2>
  <p>This is the first paragraph in the first section</p>
  <p>This is the second paragraph in the first section</p>
</section>
<section>
  <h2>Details</h2>
  <p>This is the first paragraph in the second section.</p>
  <p>This is the second paragraph in the second section.</p>
</section>
```

```css
section p:first-of-type {
  background-color: lightgreen;
}

section p:last-of-type {
  background-color:lightblue;
}
```

:::

`:nth-of-type(n)` omogućava vam da izaberete specifičan element unutar svog roditelja, u zavisnosti od njegove pozicije među sestrima/braćama istog tipa. Na primer, u sledećem HTML, `:nth-of-type(2)` cilja na drugi element u kontejneru:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />

<div class="container">
  <p>First paragraph</p>
  <p>Second paragraph</p>
  <p>Third paragraph</p>
</div>
```

```css
p:nth-of-type(2) {
  color: red;
  font-weight: bold;
}
```

:::

`:only-of-type` Izabira element ako je jedinstven po svojoj vrsti unutar svog roditelja. Ovo može biti korisno za naglašavanje jedinstvenih predmeta ili osiguravanje da su drugačije dekorisani kada nisu deo grupe.

U ovom primeru ispod, postoje dva elementa za `div`, od kojih jedan ima samo jedan element. CSS se koristi samo za prvi kontejner:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />

<div class="container">
  <p>The only paragraph</p>
</div>

<div class="container">
  <p>The first paragraph</p>
  <p>The second paragraph</p>
</div>
```

```css
p:only-of-type {
  border: 4px solid green;
}
```

:::

# --questions--

## --text--

Šta je razlika između lažnih klasa `:first-of-type` i `:last-of-type`?

## --answers--

`:first-of-type` cilja na prvi element specifičnog tipa unutar svog roditelja, dok `:last-of-type` cilja poslednji element različitog tipa.

### --feedback--

Zamislite kako vam ove veštačke klase pomažu da stilizujete prvi i poslednji pojavljivanje određene oznake, kao što su `p` ili `h1`.

---

I `:first-of-type` i `:last-of-type` biraju prvo ili poslednje pojavljivanje određenog tipa elementa u odgovarajućem kontekstu dokumenta.

### --feedback--

Razmisli kako ti ove pseudo-klase mogu pomoći da stilizuješ prvo i poslednje pojavljivanje određenog elementa, poput `p` ili `h1`.

---

`:first-of-type` selektuje prvi događaj specifičnog tipa elementa unutar svog roditelja, dok `:last-of-type` selektuje poslednji događaj istog tipa elementa unutar svog roditelja.

---

`:last-of-type` koristi stilove za prvi i poslednji elementi unutar dokumenta, dok `:last-of-type` koristi stilove za sve elemente određene vrste.

### --feedback--

Zamislite kako ove veštačke klase vam pomažu da stilizujete prvo i poslednje pojavljivanje neke oznake, kao `p` ili `h1`.

## --video-solution--

3

## --text--

Šta je razlika između lažnih klasa od `:first-child` i `:last-child`?

## --answers--

`:first-child` cilja na prvi element unutar svog roditelja, dok `:last-child` cilja na poslednji element unutar drugog roditelja.

### --feedback--

Zamislite kako vam ove dve veštačke klase pomažu da stilizujete/strukturirate prvi i poslednji elementi unutar jednog roditeljskog kontejnera.

---

`:first-child` cilja na prvi element unutar svog roditeljskog elementa, dok `:last-child` cilja na poslednji element unutar istog roditelja.

---

`:first-child` cilja na prvi element specifičnog tipa unutar svog roditelja, dok `:last-child` cilja na poslednji element različitog tipa unutar svog roditelja.

### --feedback--

Zamislite kako vam ove dve veštačke klase pomažu da stilizujete prvi i poslednji element unutar jednog roditeljskog kontejnera.

---

`:first-child` selektuje prvi i poslednji element unutar roditelja, dok `:last-child` selektuje sve ostale elemente.

### --feedback--

Zamislite kako ova dva umjetna klase vam pomažu da obradite prvi i zadnji element unutar jednog roditeljskog kontejnera.

## --video-solution--

2

## --text--

Koji je lažni selektor koji vam omogućava da ciljate elemente koji nemaju potomke, uključujući i one koji sadrže samo prazan prostor?

## --answers--

`:empty`

---

`:first-child`

### --feedback--

Razmislite kako možete dekorisati elemente koji nemaju sadržaj.

---

`:last-child`

### --feedback--

Zamisli kako možeš da stilizuješ elemente koji nemaju sadržaj.

---

`:only-of-type`

### --feedback--

Zamisli kako možeš da ukrasiš elemente koji nemaju sadržaj.

## --video-solution--

1