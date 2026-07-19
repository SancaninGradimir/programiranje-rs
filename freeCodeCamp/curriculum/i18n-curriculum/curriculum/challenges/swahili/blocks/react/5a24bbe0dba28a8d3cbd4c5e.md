---
id: 5a24bbe0dba28a8d3cbd4c5e
title: Dodaj komentare u JSX
challengeType: 6
forumTopicId: 301376
dashedName: add-comments-in-jsx
---

# --description--

JSX je sintaksa koja se prevodi u ispravan JavaScript. Ponekad ćeš, radi lakšeg čitanja, želeti da dodaš komentare u kod. Kao i mnogi programski jezici, JSX ima svoj način za to.

Da biste stavili komentare unutar JSX-a, koristite sintaksu `{/* */}` oko teksta komentara.

# --instructions--

Editor koda ima JSX element sličan onome koji si napravio u prethodnom izazovu. Dodaj komentar bilo gde unutar priloženog elementa `div`, bez menjanja postojećih elemenata od `h1` ili `p`.

# --hints--

Element za `JSX` mora da vrati element za `div`.

```js
assert(JSX.type === 'div');
```

Element `div` treba da sadrži oznaku `h1` kao prvi element.

```js
assert(JSX.props.children[0].type === 'h1');
```

Element `div` mora imati labelu `p` kao drugi element.

```js
assert(JSX.props.children[1].type === 'p');
```

Postojeći elementi za `h1` i `p` ne bi trebalo menjati.

```js
assert(
  JSX.props.children[0].props.children === 'This is a block of JSX' &&
    JSX.props.children[1].props.children === "Here's a subtitle"
);
```

Element za `JSX` treba da koristi važeću sintaksu komentara.

```js
assert(/<div>[\s\S]*{\s*\/\*[\s\S]*\*\/\s*}[\s\S]*<\/div>/.test(code));
```

# --seed--

## --seed-contents--

```jsx
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>This is a block of JSX</h1>
  { /* this is a JSX comment */ }
  <p>Here's a subtitle</p>
</div>);
```
