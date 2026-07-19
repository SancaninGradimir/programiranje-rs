---
id: 699b58c5abecfda9dc81c4ec
title: Korak 3
challengeType: 1
dashedName: step-3
---

# --description--

Za sada predmet `profile` ima samo tri karakteristike. Ali bilo bi dobro imati još nekoliko karakteristika.

Dodajte atribut nazvan `mood` na objekt/element za `profile`. Njegova vrednost treba da bude `null`.

# --hints--

Vaš predmet sa `profile` mora imati svojstvo od `mood`.

```js
assert.property(profile, "mood");
```

Tvoja vrednost `mood` bi trebalo da bude `null`.

```js
assert.isNull(profile?.mood);
```

# --seed--

## --seed-contents--

```ts
const profile = {
  username: "codeLearner",
  age: 25,
  isLoggedIn: false,
--fcc-editable-region--
  
--fcc-editable-region--
}

console.log(profile);
```
