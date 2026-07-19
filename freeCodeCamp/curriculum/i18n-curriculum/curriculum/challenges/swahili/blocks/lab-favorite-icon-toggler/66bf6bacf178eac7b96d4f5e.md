---
id: 66bf6bacf178eac7b96d4f5e
title: Kreiraj dugme za menjanje ikone lajka
challengeType: 25
dashedName: build-a-favorite-icon-toggler
demoType: onClick
---

# --description--

U ovoj laboratoriji ćete koristiti događaje klika JavaScript da biste promenili izgled ikone za lajkovanje. Kada se ikona srca klikne, izgled srca se menja od praznog u popunjen, i obrnuto.

**Cilj:** Popunite korisničke priče navedene ispod i prođite sve testove da biste završili laboratoriju.

**Priče korisnika:**

1. Trebalo bi da imate neuređenu listu sa tri stavke.
2. Neuređena lista treba da ima klasu stavki `item-list`.
3. Tri stavke liste treba da imaju ime stavke praćeno elementom sa klasom `button` `favorite-icon`.
4. Element `button` treba da ima kod `&#9825;` na početku koji predstavlja prazno srce.
5. Kada se desi događaj klika na element `button` sa srcem, treba da dodate klasu stavki pod nazivom `filled` na klikovani element `button` ako još nije tu, i uklonite je ako jeste.
6. Trebalo bi da imate selektor klase koji cilja klasu stavki `filled` i postavlja neke svojstva za CSS.
7. Kada se desi događaj klika na element `button` sa srcem, ikona srca treba da se menja između `&#9825;` (prazno srce) i `&#10084;` (punjeno srce), u zavisnosti od njegovog trenutnog stanja.

**Napomena:** Uverite se da ste povezali vaš fajl za JavaScript na svoj HTML. (Primer `<script src="script.js"></script>`)

# --hints--

Treba vam neuređena lista.

```js
assert.exists(document.querySelector('ul'));
```

Vaša neorganizovana lista treba da sadrži 3 stavke.

```js
assert.lengthOf(document.querySelectorAll('ul li'), 3);
```

Tvoja neuređena lista treba da ima klasu objekata `item-list`.

```js
assert.exists(document.querySelector('ul.item-list'));
```

Svi stavovi na vašoj listi moraju imati naziv elementa/artikla.

```js
assert.exists(document.querySelector('ul li').textContent);
```

Vaš stav u listi mora imati element `button` koji ima klasu objekata `favorite-icon`.

```js
assert.exists(document.querySelector('ul li button.favorite-icon'));
```

Na početku, elementi za `button` treba da imaju kod `&#9825;` koji predstavlja prazno srce.

```js
const inputs = document.querySelectorAll('ul li button.favorite-icon');
assert.isNotEmpty(inputs);

for (let input of inputs) {
  assert.strictEqual(input.innerHTML.charCodeAt(0), 9825);
}
```

Trebalo bi da imate selector za `.filled` koji postavlja neke svojstva od CSS.

```js
const filled = new __helpers.CSSHelp(document).getStyle('.filled');
assert.exists(filled); 
assert.isNotEmpty([...filled]); 
```

Pri događaju klika na element sa `button`, i ako ima klasu `filled`, treba da uklonite klasu `filled` sa elementa `button` i promenite innerHTML elementa `button` u `&#9825;`.

```js
const buttonElements = document.querySelectorAll('.favorite-icon');
assert.isNotEmpty(buttonElements);

buttonElements.forEach(button => button.classList.add('filled'));

buttonElements.forEach(button => {
  button.dispatchEvent(new Event('click', { bubbles: true }));
  assert.isFalse(button.classList.contains('filled'));
  assert.equal(button.innerHTML.charCodeAt(0), 9825);
});
```

Kada dođe do događaja klika na element `button`, i ako nema klasu `filled`, treba dodati klasu `filled` na element `button` i promeniti `innerHTML` atribut/vrednost elementa `button` u `&#10084;`.

```js
const buttonElements = document.querySelectorAll('.favorite-icon');
assert.isNotEmpty(buttonElements);

buttonElements.forEach(button => button.classList.remove('filled'));

buttonElements.forEach(button => {
  button.dispatchEvent(new Event('click', { bubbles: true }));
  assert.isTrue(button.classList.contains('filled'));
  assert.equal(button.innerHTML.charCodeAt(0), 10084);
});
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Favorite Icon Toggler</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
  
  </body>
</html>
```

```css

```

```js

```

# --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Favorite Icon Toggle</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <h1>Art Supplies</h1>
    <ul class="item-list">
      <li>
        120 gm paper
        <button class="favorite-icon" id="favoriteIcon1">&#9825;</button>
      </li>
      <li>
        Watercolor set
        <button class="favorite-icon" id="favoriteIcon2">&#9825;</button>
      </li>
      <li>
        Lead pencil 6B
        <button class="favorite-icon" id="favoriteIcon3">&#9825;</button>
      </li>
    </ul>

    <script src="script.js"></script>
  </body>
</html>
```

```css
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 20px;
}

.item-list {
  list-style-type: none;
  padding: 0;
}

.item-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  width: 200px;
}

.favorite-icon {
  font-size: 1.25rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.filled {
  color: #d22b2b;
}
```

```js
document.addEventListener("DOMContentLoaded", () => {
  const favoriteIcons = document.querySelectorAll(".favorite-icon");

  favoriteIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      if (icon.classList.contains("filled")) {
        icon.classList.remove("filled");
        icon.innerHTML = "&#9825;"; // Empty heart
      } else {
        icon.classList.add("filled");
        icon.innerHTML = "&#10084;"; // Filled black heart
      }
    });
  });
});
```
