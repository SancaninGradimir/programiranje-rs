---
id: 672bbec3b86dbdaa07a5a5be
title: Koji su primeri funkcionalnih pseudo-klasa?
challengeType: 19
dashedName: what-are-examples-of-functional-pseudo-classes
---

# --interactive--

Funkcionalne pseudo-klase omogućavaju izbor elemenata na osnovu složenijih uslova ili odnosa. Za razliku od običnih pseudo-klasa koje ciljaju elemente prema njihovom stanju, kao što su `:hover` ili `:focus`, funkcionalne pseudo-klase prihvataju argumente unutar zagrada, zbog čega se nazivaju „funkcionalne pseudo-klase“.

Mifano ya darasa la bandia la kitendakazi ni:

- `:is()`
- `:where()`
- `:has()`
- `:not()`

Pogledajmo detaljnije svaku od funkcionalnih pseudo-klasa kroz primere.

Pseudo-klasa `:is()` korisna je kada želiš da stilizuješ grupu elemenata koji dele neka, ali ne sva svojstva. Na primer, možda želiš da stilizuješ različite vrste dugmadi na svom sajtu, uključujući elemente `button`, veze stilizovane kao dugmad i elemente `input` tipa `submit` i `reset`. Evo primera. Bez funkcije `:is()` morao bi da napišeš složen selektor poput ovog:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<button>Example Button</button>
<a href="#" class="button">Link styled like a button</a>
<input type="submit" value="Submit" />
<input type="reset" value="Reset" />
```

```css
button,
a.button,
input[type='submit'],
input[type='reset'] {
  background-color: darkblue;
  color: white;
  border: 1px solid darkblue;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  margin: 5px;
  font-size: 16px;
  text-align: center;
}

button:hover,
a.button:hover,
input[type='submit']:hover,
input[type='reset']:hover {
  background-color: blue;
  border-color: blue;
}
```

:::

Pomoću funkcije `:is()` možeš napisati kraći i čitljiviji selektor, poput ovog:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<button>Example Button</button>
<a href="#" class="button">Link styled like a button</a>
<input type="submit" value="Submit" />
<input type="reset" value="Reset" />
```

```css
:is(button, a.button, input[type='submit'], input[type='reset']) {
  background-color: darkblue;
  color: white;
  border: 1px solid darkblue;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  margin: 5px;
  font-size: 16px;
  text-align: center;
}

:is(button, a.button, input[type='submit'], input[type='reset']):hover {
  background-color: blue;
  border-color: blue;
}
```

:::

Pseudo-klasa `:where()` radi slično kao `:is()`, ali ne povećava specifičnost selektora. Zbog toga je pogodna za primenu stilova bez uticaja na specifičnost drugih pravila.

Na primer, možete koristiti funkciju `:where()` da ponovo postavite `margin` i `padding` za elemente zaglavlja sekcije. Ovo osigurava da resetovanje ne utiče na specifične stilove koje možete koristiti kasnije. Evo primera toga:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<h1>Page Title</h1>
<h2>Subtitle</h2>
<h3>A point</h3>

<p>Example paragraph.</p>
<p>Example paragraph.</p>
<p>Example paragraph.</p>
```

```css
:where(h1, h2, h3) {
  margin: 0;
  padding: 0;
}
```

:::

Stilizovanje roditeljskog elementa na osnovu stanja njegove dece ranije je bilo izazovno, sve dok nije uvedena pseudo-klasa `:has()`. Ona omogućava primenu stilova na roditeljski element na osnovu prisustva ili stanja njegovih potomaka.

Na primer, sledeći CSS primeniće se samo na element `article` koji sadrži element `h2`:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<article>
  <h2>Subheading</h2>
  <p>Lorem ipsum dolor sit amet.</p>
</article>

<article>
  <h3>A point</h3>
  <p>Lorem ipsum dolor sit amet.</p>
  <p>Lorem ipsum dolor sit amet.</p>
</article>
```

```css
article:has(h2) {
  border: 2px solid hotpink;
}
```

:::

Pseudo-klasa `:not()` idealna je kada želiš da primeniš stilove na grupu elemenata, osim jednog ili više određenih elemenata. U sledećem CSS primeru, svako dugme koje nije primarno imaće sivu pozadinu:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<button class="primary">Primary Button</button>
<button class="secondary">Secondary Button</button>
<button class="danger">Another Secondary Button</button>
```

```css
button {
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  border: none;
  color: white;
}

button.primary {
  background-color: deepskyblue;
}

button:not(.primary) {
  background-color: grey;
}
```

:::

# --questions--

## --text--

Koji je to lažni kurs koji radi kao `:is()`, ali ne povećava nikakve veštine vaših birača?

## --answers--

`:not()`

### --feedback--

Ovaj veštački stil je dobar za korišćenje širokih, neupadljivih uzoraka.

---

`:has()`

### --feedback--

Ova veštačka klasa je dobra za korišćenje širokih, neinvazivnih stilova.

---

`:where()`

---

`:empty`

### --feedback--

Ova fiktivna klasa je dobra za korišćenje širokih, neinvazivnih stilova.

## --video-solution--

3

## --text--

Zar nijedan od ovih nije lažni profesionalni kurs?

## --answers--

`:is()`

### --feedback--

Pseudo-funkcionalna klasa koristi standardne zagrade i prima argumente unutar nje.

---

`:first-child`

---

`:has()`

### --feedback--

Funkcionalna klasa koristi standardne zagrade i prihvata deklaracije unutar sebe.

---

`:where()`

### --feedback--

Funkcionalne pseudo-klase koriste zagrade i prihvataju argumente unutar njih.

## --video-solution--

2

## --text--

Koja je pseudo-klasa najpogodnija kada želiš da stilizuješ grupu elemenata, izuzimajući jedan ili dva?

## --answers--

`:has()`

### --feedback--

Razmisli kako možeš da izuzmeš određene elemente iz stilizovanja.

---

`:is()`

### --feedback--

Razmisli kako možeš da izuzmeš određene elemente iz stilizovanja.

---

`:not()`

---

`:where()`

### --feedback--

Razmisli kako možeš da izuzmeš određene elemente iz stilizovanja.

## --video-solution--

3