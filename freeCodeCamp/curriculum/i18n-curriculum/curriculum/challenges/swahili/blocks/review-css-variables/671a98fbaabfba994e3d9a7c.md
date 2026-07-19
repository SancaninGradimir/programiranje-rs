---
id: 671a98fbaabfba994e3d9a7c
title: Provera CSS parametara
challengeType: 31
dashedName: review-css-variables
---

# --interactive--

## Specifične karakteristike za CSS (parametri CSS)

- **Definicija**: Specifični atributi za CSS, poznati takođe kao parametri CSS, su elementi definisani od strane autora CSS koji sadrže specifične vrednosti koje se ponovo koriste u celom dokumentu. To je moćna karakteristika koja omogućava stilovima da budu efikasniji, lakši za održavanje i fleksibilniji. Specifični atributi su posebno korisni pri kreiranju prilagodljivih struktura tema. Možete definisati set atributa za različite teme:

```css
:root {
  --bg-color: white;
  --text-color: black;
}

.dark-theme {
  --bg-color: #333;
  --text-color: white;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

## Zakon o `@property`

- **Definicija**: Pravilo za `@property` je moćna funkcija od CSS koja omogućava programeru da definiše specifična svojstva radi većeg kontrole nad njihovim ponašanjem, uključujući kako se menjaju sa animacijom i njihovim početnim vrednostima.

```css
@property --property-name {
  syntax: '<type>';
  inherits: true | false;
  initial-value: <value>;
}
```

- **`--property-name`**: Ovo je ime specifičnog svojstva koje definišete. Kao i sva specifična svojstva, mora početi sa dve lančane oznake.
**`syntax`**: Ovo definiše tip svojstva, koje mogu biti stvari kao što su `<color>`, `<length>`, `<number>`, `<percentage>`, ili složeniji tipovi.
- **`inherits`**: Ovo objašnjava da li svojstvo treba da nasledi svoju vrednost od roditeljskog elementa.
- **`initial-value`**: Ovo postavlja podrazumevanu vrednost svojstva.
- **Primer gradijenta boje korišćenjem `@property`**: Ovaj primer kreira gradijent boje koji se menja blagom animacijom kada se element klikne.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="gradient-box"></div>
```

```css
@property --gradient-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

.gradient-box {
  width: 100px;
  height: 100px;
  background: linear-gradient(var(--gradient-angle), red, blue);
  transition: --gradient-angle 0.5s;
}

.gradient-box:hover {
  --gradient-angle: 90deg;
}
```

:::

- **Alternativni put**: Kada koristite specifičan atribut, možete pružiti vrednost alternativnog puta koristeći funkciju `var()`, kao što radite sa uobičajenim atributima:

```css
.button {
  background-color: var(--main-color, #3498db);
}
```

# --assignment--

Proverite temu i koncepte parametara za CSS.