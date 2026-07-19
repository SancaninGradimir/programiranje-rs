---
id: 672bccae6e556cd81cef6af2
title: Je, Margin Collapsing ni Nini, na Inafanya Kazi Vipi?
challengeType: 19
dashedName: what-is-margin-collapsing
---

# --interactive--

Collapsing margina je osnovni CSS koncept koji često zbunjuje početnike u veb razvoju.

Ova karakteristika nastaje kada vertikalne ivice susednih elemenata interaguju, stvarajući samo jednu ivicu koja je jednaka najvećoj od dve te ivice.

Razumevanje collapsing margina je važno za pravilnu kontrolu razmaka i rasporeda u veb dizajnu. Zato hajde da pogledamo kako funkcioniše i istražimo neke uobičajene situacije u kojima se javlja.

U CSS-u, kada se dve vertikalne margine dodirnu, one se spajaju. To znači da se umesto sabiranja primenjuje veća margina, koja određuje razmak između elemenata. Ovo ponašanje važi samo za vertikalne margine (gornju i donju), a ne za horizontalne (levu i desnu). Evo primera koji objašnjava ovaj koncept:

:::interactive_editor

```html
<style>
  .box1 {
    margin-bottom: 20px;
    background-color: lightblue;
  }
  .box2 {
    margin-top: 30px;
    background-color: lightgreen;
  }
</style>

<div class="box1">Box 1</div>
<div class="box2">Box 2</div>
```

:::

U ovom primeru, možete pretpostaviti da je ukupni prostor između `.box1` i `.box2` od 50 piksela (20 piksela plus 30). Međutim, zbog kolaps margina, stvarni prostor će biti od 30 piksela, što je veći razmak između ta dva.

Kao što smo videli u prethodnom primeru, margine susednih elemenata se spajaju. To je najjednostavniji slučaj collapsing margina. Pogledajmo još neke situacije u kojima može doći do njihovog spajanja.

Margine se takođe mogu spojiti između roditeljskog elementa i njegovog prvog ili poslednjeg deteta. Ako nema ivice, unutrašnjeg razmaka, sadržaja u liniji ili razmaka koji ih razdvaja, njihove margine će se spojiti.

:::interactive_editor

```html
<style>
  .parent {
    margin-top: 40px;
    background-color: lightyellow;
  }
  .child {
    margin-top: 30px;
    background-color: lightpink;
  }
</style>

<div class="parent">
  <div class="child">Child element</div>
</div>
```

:::

U ovom slučaju, možete pretpostaviti da dete ima prostor od 70 piksela odozgo (pikseli 40 plus 30). Međutim, ivice se sudaraju sa većom stranom od 40 piksela, i ona je korišćena.

Ako element nema sadržaj, unutrašnji razmak ili ivicu, njegove gornja i donja margina mogu se spojiti u jednu marginu.

:::interactive_editor

```html
<style>
  .empty-block {
    margin-top: 20px;
    margin-bottom: 10px;
    height: 0;
  }
  .next-block {
    background-color: lightgray;
  }
</style>

<div class="empty-block"></div>
<div class="next-block">Next block</div>
```

:::

U ovom primeru, gornja i donja margina elementa `empty-block` spajaju se u jednu marginu od 20 piksela, odnosno veću od te dve vrednosti.

Evo primera kako sprečiti spajanje margina pomoću unutrašnjeg razmaka:

:::interactive_editor

```html
<style>
  .parent {
    margin-top: 40px;
    padding-top: 1px;
    background-color: lightyellow;
  }
  .child {
    margin-top: 30px;
    background-color: lightpink;
  }
</style>

<div class="parent">
  <div class="child">Child element</div>
</div>
```

:::

U ovom slučaju, unutrašnji prostor jednog piksela na roditelju sprečava koliziju ivica i stvara ukupni prostor od 71 piksela od vrha roditelja do vrha sadržaja deteta.

Razumeti kolaps margina je važno za pravilnu kontrolu rasporeda i razmaka u CSS. Iako ponekad može izazvati nepredvidive rezultate, radi se o karakteristici dizajniranoj da pruži bolji i stabilniji razmak u dokumentu. Znanjem kada se dešava kolaps margina i kako ga sprečiti kada je potrebno, možete kreirati očekivane i lako održive postavke u vašim web dizajnovima.

# --questions--

## --text--

U kom pravcu se događa kolizija sa obalom?

## --answers--

Samo granice jednakosti.

### --feedback--

Zamislite koje ivice (gore, dole, levo, desno) su pogođene ovim svojstvom.

---

Samo vertikalne ivice.

---

Profile za sve horizontalne i vertikalne rubove.

### --feedback--

Zamislite koje ivice (gore, dole, levo, desno) su utječene ovim svojstvom.

---

Obrici za elevaciju.

### --feedback--

Razmisli koje ivice (gore, dole, levo, desno) su pogođene ovom karakteristikom.

## --video-solution--

2

## --text--

Šta se dešava kada su dva susedna elementa različitih ivičnih vrednosti?

## --answers--

Kingo se generalizuje.

### --feedback--

Razmisli o kojoj je strani "pobedi" kada dođe do kolizije.

---

Mala strana se koristi.

### --feedback--

Zamislite koju stranu „pobedi“ kada dođe do sukoba.

---

Koristi se velika strana.

---

Koristi se prosek obe ivice.

### --feedback--

Zamisli koju stranu koja "pobedi" kada dođe do sudara/sukoba.

## --video-solution--

3

## --text--

Koje od sledećih NE SPREČAVA sudar uglom između roditelja i njihove prve dece?

## --answers--

Dodavanje `border` roditelju.

### --feedback--

Razmislite koji su faktori koji čine razdvajanje između roditelja i deteta.

---

Postaviti `padding-top: 1px;` za roditelja.

### --feedback--

Razmislite o kriterijumima koji određuju razmak između roditeljskog i detinjeg obala.

---

Koristi `display: inline-block;` za dete.

### --feedback--

Razmislite koji su kriterijumi koji formiraju razdvajanje između granica roditelja i deteta.

---

Da stavi `margin-top: 0;` za dete.

## --video-solution--

4