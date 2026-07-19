---
id: 5a24bbe0dba28a8d3cbd4c5d
title: Kreiraj složen deo JSX-a
challengeType: 6
forumTopicId: 301382
dashedName: create-a-complex-jsx-element
---

# --description--

Poslednji izazov bio je jednostavan primer JSX-a, ali JSX može da predstavlja i HTML nešto kompleksnije.

Važno je znati o ugnježdjenom JSX-u da on mora da vrati samo jedan element.

Ova roditeljska komponenta obuhvataće sve ostale ugnježdene komponente.

Na primer, nekoliko JSX elemenata napisano kao braća bez roditeljskog elementa koji ih obuhvata neće biti obrađeno/renderovano.

Evo primera:

**JSX halali:**

```jsx
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

**Nevažeći JSX:**

```jsx
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

# --instructions--

Definišite novu konstantu `JSX` koja prikazuje `div`, a koja ima sledeće delove po redu:

`h1`, `p`, i neuređeni spisak koji sadrži tri stavke od `li`. Možete umetnuti bilo koji tekst koji želite u svaki odeljak.

**Napomena:** Kada prikazujete mnogo delova kao ovakvi, možete ih sve obuhvatiti običnim zagradama, ali nije nužno. Proverite takođe da ova preporuka koristi oznaku `div` za obuhvat svih child komponenti unutar jedne parent komponente. Ako uklonite `div`, JSX više neće biti interpretiran. Zapamtite ovo, jer će biti važno i kada vraćate JSX delove u delove React.

# --hints--

Konstanta `JSX` treba da vrati deo od `div`.

```js
assert(JSX.type === 'div');
```

`div` trebalo bi imati oznaku `h1` kao prvi deo.

```js
assert(JSX.props.children[0].type === 'h1');
```

`div` mora imati oznaku `p` kao drugi deo.

```js
assert(JSX.props.children[1].type === 'p');
```

`div` mora imati oznaku `ul` kao treći deo.

```js
assert(JSX.props.children[2].type === 'ul');
```

`ul` mora imati tri dijela od `li`.

```js
assert(
  JSX.props.children
    .filter((ele) => ele.type === 'ul')[0]
    .props.children.filter((ele) => ele.type === 'li').length === 3
);
```

# --seed--

## --seed-contents--

```jsx

```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>Hello JSX!</h1>
  <p>Some info</p>
  <ul>
    <li>An item</li>
    <li>Another item</li>
    <li>A third item</li>
  </ul>
</div>);
```
