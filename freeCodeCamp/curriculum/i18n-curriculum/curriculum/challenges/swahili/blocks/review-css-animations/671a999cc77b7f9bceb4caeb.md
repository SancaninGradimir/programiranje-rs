---
id: 671a999cc77b7f9bceb4caeb
title: Pregled CSS crteža
challengeType: 31
dashedName: review-css-animations
---

# --interactive--

## Temelji crteža za CSS

- **Opis**: Animacije CSS omogućavaju vam da lako kreirate dinamičke vizuelne efekte na veb stranicama bez potrebe za JavaScript ili složenim programima. Pruža način za glavno prebacivanje elemenata između različitih stilova tokom definisanog perioda.
- **Pravilo za `@keyframes`**: Ovo pravilo objašnjava korake i stilove animacija. Opisuje stilove koje element treba da ima u različitim vremenskim tačkama tokom animacije.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="box">Slide</div>
```

```css
.box {
  width: 120px;
  padding: 10px;
  background: #0077ff;
  color: white;
  animation: slide-in 1s ease-in-out;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
```

:::

- **Svojstvo `animation`**: Ovo je atribut kompresije koji se koristi za izvršavanje animacija.
- **`animation-name`**: Ovo opisuje ime funkcije `@keyframes` koja će biti korišćena.
- **`animation-duration`**: Ovo postavlja trajanje koje animacija treba da potroši za završetak.
- **`animation-timing-function`**: Ovo opisuje kako se animacija kreće tokom vremena (kao `ease`, `linear`, `ease-in-out`).
- **`animation-delay`**: Ovo opisuje odlaganje pre nego što animacija počne.
- **`animation-iteration-count`**: Ovo postavlja koliko puta animacija treba da se ponovi.
- **`animation-direction`**: Ovo određuje da li će se animacija igrati u smeru `normal`, za `reverse` ili `alternate`.
- **`animation-fill-mode`**: Ovo opisuje kako element treba da bude stilizovan pre i posle animacije.
- **`animation-play-state`**: Ovo vam omogućava da pauzirate i nastavite animaciju.

## Pristup medijskom upitu za `prefers-reduced-motion`

- **Media query za `prefers-reduced-motion`**: Jedan od glavnih pitanja pristupa vezano za vizuelne sadržaje je da može izazvati nelagodu ili čak štetu kod nekih korisnika. Osobe sa vestibularnim poremećajima ili osetljivom reakcijom na pokret mogu dobiti vrtoglavicu, mučninu ili glavobolju kada su izložene određenim vrstama kretanja na ekranu. Media query za `prefers-reduced-motion` omogućava web programerima da detektuju da li je korisnik tražio vizuelne sadržaje ili blage efekte pokreta na nivou sistema.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<button class="animated-element">Hover me</button>
```

```css
.animated-element {
  padding: 10px 16px;
  transition: transform 0.3s ease-in-out;
}

.animated-element:hover {
  transform: translateX(20px);
}

@media (prefers-reduced-motion: reduce) {
  .animated-element {
    transition: none;
  }
}
```

:::

# --assignment--

Pregledajte teme i koncepte za dijagrame CSS.