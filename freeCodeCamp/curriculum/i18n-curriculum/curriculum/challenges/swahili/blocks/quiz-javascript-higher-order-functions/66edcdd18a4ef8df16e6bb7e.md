---
id: 66edcdd18a4ef8df16e6bb7e
title: Pokušao sam sa funkcionionim JavaScript fajlom za visoki most
challengeType: 8
dashedName: quiz-javascript-higher-order-functions
---

# --description--

Da biste položili kratki test, morate tačno odgovoriti na najmanje 18 od 20 pitanja koja su navedena ispod.

# --quizzes--

## --quiz--

### --question--

#### --text--

Koje od sledećih informacija o funkcionalnostima nadvišnog mosta JavaScript su tačne?

#### --distractors--

Funkcije višegrdišta mogu značajno povećati čitljivost i održivost koda omogućavanjem programskih funkcionalnih metoda.

---

Funkcije višegrade, kao što su map, filter i reduce, su moćna sredstva za upravljanje nizovima podataka, ali nisu ekskluzivni za funkcionalno programiranje.

---

Funkcije višeg nivoa mogu stvoriti poteškoće u razumevanju koda, ali takođe mogu rezultirati rešenjima sa većom ekspresivnošću i konciznošću.

#### --answer--

Sve funkcije u JavaScript, uključujući one koje ne pozivaju niti vraćaju druge funkcije, mogu se klasifikovati kao visoko-nivočne funkcije.

### --question--

#### --text--

Šta je industrijska funkcija u kontekstu visokonivojnih funkcija?

#### --distractors--

Funkcija koja kreira nove parametre.

---

Funkcija koja radi samo sa nizom znakova.

---

Funkcija koja direktno generiše komentare koda.

#### --answer--

Funkcija koja vraća novu funkciju na osnovu specifičnih parametara

### --question--

#### --text--

Nakon izvršavanja koda, koja će biti vrednost `forEachRes` i `mapRes`?

```js
const numbers = [1, 1, 1, 1, 1];
let sum = 0;
const forEachRes = numbers.forEach(num => {
  return (sum += num);
});
const mapRes = numbers.map(num => {
  return (sum += num);
});
```

#### --distractors--

`forEachRes` ni `undefined` na `mapRes` ni `[1,2,3,4,5]`

---

`forEachRes` ni `0` na `mapRes` ni `[1,2,3,4,5]`

---

`forEachRes` ni `5` na `mapRes` ni `[1,2,3,4,5]`

#### --answer--

`forEachRes` je `undefined` i `mapRes` je `[6,7,8,9,10]`

### --question--

#### --text--

Šta su rezultati ovog koda?

```js
[, undefined, 'a', 'b', { 20: 5 }].sort();
```

#### --distractors--

Elementi koji nisu pouzdani za sortiranje niza podataka, stoga je greška.

---

Poziv za vraćanje nije dostupan, stoga greška.

---

```js
[empty, 'a', 'b', undefined, { '20': 5 }]
```

#### --answer--

```js
[{ '20': 5 }, 'a', 'b', undefined, empty]
```

### --question--

#### --text--

Ili izaberete funkciju odgovora u JavaScript?

#### --distractors--

Funkcija koja se poziva jednom nakon izjave.

---

Funkcija koja se naziva u specifičnom kontekstu.

---

Funkcija koja vraća drugu funkciju.

#### --answer--

Funkcija koja se prosleđuje kao argument drugoj funkciji, kako bi bila izvršena logikom te funkcije.

### --question--

#### --text--

Šta su rezultati korišćenja `reduce()` u redovima podataka?

#### --distractors--

Istinitostna vrednost koja ukazuje da li postoje elementi koji zadovoljavaju uslov.

---

Redovi podataka sa svim atributima su smanjeni/filtrirani pomoću definisane funkcije okidača.

---

Reda vrednosti tačno ili netačno.

#### --answer--

Razlikuje se u zavisnosti od početne vrednosti akumulatora i impulsne funkcije.

### --question--

#### --text--

Putanja `sort()` šta radi ako nije dostupan komparator tokom sortiranja brojeva?

#### --distractors--

Popunjava prazan prostor sa `null`.

---

Obnavlja red specijalnih znakova.

---

Sleže redove u opadajućem redosledu.

#### --answer--

Raspoređuje sekvencu kao niz karaktera prema UTF-16 kodnim jedinicama.

### --question--

#### --text--

Koja je svrha putanje za `some()` u JavaScript?

#### --distractors--

Napravite novi red sa rezultatima funkcije primenjenom na svaki element.

---

Prolazak kroz red podataka bez izbacivanja rezultata.

---

Agregovati red podataka u jednu vrednost prema funkciji agregacije.

#### --answer--

Proveriti da li postoji bilo koji element u nizu koji prolazi definisani test.

### --question--

#### --text--

Koji je od sledećih validan primer serijskog spajanja?

#### --distractors--

```js
Math.random();
```

---

```js
array.push(1).pop();
```

---

```js
console.log('Hello');
```

#### --answer--

```js
str.toLowerCase().trim().replace(' ', '_');
```

### --question--

#### --text--

Šta je rezultat sledećeg koda?

```js
let numbers = [2, 4, 8, 10];

numbers.forEach(function(number) {
    console.log(number % 2);
});
```

#### --distractors--

`2 4 8 10`

---

`null null null null`

---

`1 2 4 5`

#### --answer--

`0 0 0 0`

### --question--

#### --text--

Koja je prednost serijskog povezivanja rute?

#### --distractors--

Poboljšava performanse smanjenjem vremena izvršavanja funkcija.

---

Uklanja potrebu za kratkoročnim parametrima, ali može povećati potrošnju memorije u nekim slučajevima.

---

Omogući upravljanje greškama i popravku grešaka sa većom lakoćom.

#### --answer--

Pruža jednostavnu sintaksu i čitljiv kod omogućavanjem više operacija u jednom izrazu.

### --question--

#### --text--

Kako možete sortirati listu stavki po specifičnim kriterijumima koristeći metodu `sort`?

#### --distractors--

Put za `sort` ne može da organizuje stvari.

---

Koristi putanju `reverse` nakon podešavanja.

---

Promeni stvar u niz slova i rasporedi ih.

#### --answer--

Koristite funkciju poređenja koja poredi vrednosti atributa.

### --question--

#### --text--

Kada se povezuju sekvencijalne rute, koja je uobičajena karakteristika za poboljšanje transparentnosti i ispravljanje grešaka?

#### --distractors--

Koristi nekoliko puteva u nizu.

---

Izbegavajte povezivanje putanja koje vraćaju samo osnovne vrednosti.

---

Koristi samo interne puteve.

#### --answer--

Podeli dugu sekvencu na mnogo koraka.

### --question--

#### --text--

Koji je gubitak koji se može desiti korišćenjem sekvencijalnog povezivanja više puteva u vašem kodu?

#### --distractors--

Neka se kod izvršava sporo.

---

Korišćenje komentara je onemogućeno.

---

Naterati fajl da bude veći.

#### --answer--

Može učiniti kod teži za pronalaženje grešaka.

### --question--

#### --text--

Koji način ćeš koristiti da proverićeš da li su svi elementi u nizu sekvenca slova?

#### --distractors--

`some()`

---

`everyInstance()`

---

`filter()`

#### --answer--

`every()`

### --question--

#### --text--

Koja će biti vrednost `originalArray` nakon izvršavanja sledećeg koda?

```js
const originalArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
const filteredArray = originalArray.filter(item => item.id > 1);
filteredArray[0].id = 4;
```

#### --distractors--

`[{ id: 1 }, { id: 2 }, { id: 3 }]`

---

`[{ id: 1 }]`

---

`[{ id: 4 }, { id: 2 }, { id: 3 }]`

#### --answer--

`[{ id: 1 }, { id: 4 }, { id: 3 }]`### --question--

#### --text--

Šta će biti vrednost za `shortWords` nakon izvršavanja sledećeg koda?

```js
const words = ['apple', 'banana', 'pear', 'kiwi'];
const shortWords = words.filter(word => word.length <= 5);
```

#### --distractors--

`[]`

---

`['pear', 'kiwi']`

---

`['apple', 'banana']`

#### --answer--

`['apple', 'pear', 'kiwi']`

### --question--

#### --text--

Koja je svrha pružanja početne vrednosti kao argumenta putem `reduce()`?

#### --distractors--

Postavljanje visine reda sa podacima.

---

Kontrolisati broj ponavljanja.

---

Specificirati tip vrednosti koji je vraćen od strane funkcije.

#### --answer--

Definisati početnu vrednost za kolektor.

### --question--

#### --text--

Da li putanja `map` može biti korišćena za stvari koje nisu red podataka?

#### --distractors--

Da, može se koristiti za sve.

---

Da, ali samo za stvari sa numeričkim karakteristikama.

---

Zavisi od verzije JavaScript.

#### --answer--

Ne, je specifično kreirano za red podataka.

### --question--

#### --text--

Koja je glavna svrha putanje `map` u JavaScript?

#### --distractors--

Preuređivanje redova i vraćanje novih redova uz održavanje originalnog rasporeda.

---

Filtrisanje elemenata iz niza i uklanjanje ili dodavanje elemenata u zavisnosti od uslova.

---

Pronaći specifičan element u nizu i vratiti njegovo predstavljanje zajedno sa elementom.

#### --answer--

Kreira novi red sa rezultatima poziva funkcije za svaki element u početnom redu.