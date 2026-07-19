---
id: 618a0b2befb143baefab632b
title: Korak 32
challengeType: 0
dashedName: step-32
---

# --description--

Primećujte da su crvena i ciano boje veoma jarke kada su zajedno. Ovaj kontrast može poremetiti ako se previše koristi na veb stranici, a takođe može učiniti tekst teškim za čitanje ako je postavljen na pozadinu sa akcentnom bojom.

Najbolja praksa je izabrati jednu boju kao glavnu, i koristiti njenu akcentnu boju za naglašavanje kako bi se privukla pažnja na određeni sadržaj na stranici.

Prvo, u pravilu `h1`, koristi funkciju `rgb` da podesi `background-color` na ciano.

# --hints--

Ne smete da uklonite ili promenite atribut za `text-align` ili njegovu vrednost.

```js
assert.strictEqual(new __helpers.CSSHelp(document).getStyle('h1')?.textAlign, 'center');
```

Vaše pravilo za `h1` od CSS trebalo bi imati svojstvo `background-color` postavljeno na `rgb(0, 255, 255)`.

```js
assert.strictEqual(new __helpers.CSSHelp(document).getStyle('h1')?.backgroundColor, 'rgb(0, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Markers</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>CSS Color Markers</h1>
    <div class="container">
      <div class="marker one">
      </div>
      <div class="marker two">
      </div>
      <div class="marker three">
      </div>
    </div>
  </body>
</html>
```

```css
h1 {
  text-align: center;
--fcc-editable-region--
  
--fcc-editable-region--
}

.container {
  background-color: rgb(255, 255, 255);
  padding: 10px 0;
}

.marker {
  width: 200px;
  height: 25px;
  margin: 10px auto;
}

.one {
  background-color: rgb(255, 0, 0);
}

.two {
  background-color: rgb(0, 255, 255);
}

.three {
  background-color: rgb(0, 0, 0);
}

```
