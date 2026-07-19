---
id: 67329fbcfaf5ff5cdaa38a42
title: Šta je značenje ključne reči var, i zašto se više ne preporučuje da se koristi?
challengeType: 19
dashedName: what-is-the-var-keyword-and-why-is-it-no-longer-suggested-to-use-it
---

# --interactive--

Ključna reč ``var`` unutar `JavaScript` je jedan od ranih načina deklarisanja parametara. Bila je deo jezika otkako je uvedena i godinama ostala je glavni način za kreiranje parametara. Međutim, kako je `JavaScript` raslo i programeri stekli više iskustva sa tim jezikom, određene nedostatke korišćenja ``var`` primetili su, što je dovelo do uvođenja ``let`` i ``const`` 2015.

Kada deklarišete parametar za `var`, on ima opseg funkcije ili globalni opseg. To znači da ako deklarišete parametar unutar funkcije koristeći `var`, on je dostupan samo unutar te funkcije. Međutim, ako ga deklarišete izvan bilo koje funkcije, on postaje globalni parametar dostupan u celom vašem kodu. Ovo ponašanje može izazvati nepredvidive rezultate i učiniti vaš kod teškim za razumevanje.

Tatizo sa `var` je što vam omogućava da deklarišete isti parametar više puta bez generisanja greške. Ovo može uzrokovati slučajno brisanje i otežati proces pronalaženja grešaka (debugging).

:::interactive_editor

```js
var num = 5;
console.log(num); // 5

// This is allowed and doesn't throw an error
var num = 10;
console.log(num); // 10
```

:::

Najveći problem sa `var` je nedostatak blok opsega. Varijable deklarisane za `var` unutar bloka, kao što je deklaracija `if` ili petlja `for`, i dalje su dostupne izvan tog bloka.

:::interactive_editor

```js
if (true) {
  var num = 5;
}
console.log(num); // 5
```

:::

Ovo ponašanje može uzrokovati slučajno curenje parametara i učiniti da je vaš kod podložan greškama.

Zbog ovih problema, moderni razvoj JavaScript se udaljio od `var` i preferira `let` i `const`. Ove ključne reči pružaju blok opseg koji je u skladu sa načinom na koji opseg radi u mnogim programskim jezicima.

Takođe ne dozvoljava ponovno objavljivanje unutar istog opsega, kako bi pomoglo da se spreči slučajno brisanje.

Iako `var` je i dalje deo JavaScript i funkcioniše u svim pregledačima, generalno se savetuje korišćenje `let` i `const` u modernom razvoju JavaScript. Pruža jasna pravila opsega, pomaže u sprečavanju uobičajenih grešaka i čini ponašanje vašeg koda pouzdanijim.

# --questions--

## --text--

Koji je opseg parametra definisan za `var` izvan bilo koje funkcije?

## --answers--

Opseg bloka.

### --feedback--

Zamislite gde parametar `var` deklarisan van funkcije može biti dostupan.

---

Opseg funkcionalnosti.

### --feedback--

Razmislite gde parametr `var` deklarisan van funkcije može biti dostupan.

---

Međunarodni opseg.

---

Opseg modula.

### --feedback--

Razmislite gde parametar `var` deklarisan van funkcije može biti dostupan.

## --video-solution--

3

## --text--

Koji će biti rezultat sledećeg koda?

```js
var x = 10;

if (true) {
  var x = 20;
  console.log(x);
}

console.log(x);
```

## --answers--

```js
10
10
```

### --feedback--

Zapamtite da je `var` funkcionalsk ili globalni opseg i dozvoljava ponovno objavljivanje unutar istog opsega.

---

```js
20
20
```

---

```js
10
20
```

### --feedback--

Zapamtite da je `var` funkcionalan ili globalni opseg i dozvoljava ponovno objavljivanje unutar istog opsega.

---

```js
20
10
```

### --feedback--

Zapamtite da je `var` funkcionalno ili globalno opsež, i dozvoljava ponovno objavljivanje unutar istog opsega.

## --video-solution--

2

## --text--

Koja od sledećih nije razlog za izbegavanje korišćenja `var` u modernom JavaScript?

## --answers--

`var` Omogućava deklarisanje parametara u istom opsegu.

### --feedback--

Razmisli šta je istina o ponašanju ili pomoći `var`.

---

`var` Nije podržano u modernim pregledačima.

---

Parametri za `var` imaju funkcionalni opseg, a ne blok opseg.

### --feedback--

Zamisli koji je izjava tačna o karakteru ili pomoći za `var`.

---

Parametri `var` se podižu (hoisted).

### --feedback--

Koja je izjava koju zaista nosiš o ponašanju ili pomoći `var`.

## --video-solution--

2