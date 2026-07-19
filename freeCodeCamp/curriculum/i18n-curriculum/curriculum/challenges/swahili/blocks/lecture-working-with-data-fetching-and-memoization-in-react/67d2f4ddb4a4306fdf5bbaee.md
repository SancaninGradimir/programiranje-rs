---
id: 67d2f4ddb4a4306fdf5bbaee
title: Šta je Memoization, i kako funkcioniše Hook useMemo?
challengeType: 19
dashedName: what-is-memoization-and-how-does-the-usememo-hook-work
---

# --description--

Kako vaša React aplikacija raste, nepotrebna ponovna renderovanja i skupe kalkulacije mogu usporiti performanse, što dovodi do sporijeg ažuriranja korisničkog interfejsa i veće potrošnje resursa.

Ovo može biti problem posebno u aplikacijama koje imaju složeno upravljanje stanjem, velike liste, funkcije koje zahtevaju intenzivne proračune i mnogo sekcija sa jednim roditeljem.

Ovo omogućava poboljšanje vašeg programa React radi boljih performansi, smanjenjem redundantnih proračuna i osiguravanjem glatkijeg interfejsa.

React rešava ovaj problem procesom koji se zove memoizacija, metodom koja skladišti vrednosti i funkcije kako bi sprečila nepotrebne proračune, tako da je vaš program brz i prilagodljiv uređaju.

Za pojašnjenje, memoizacija je tehnika za poboljšanje performansi gde se rezultati pozivanja skupih funkcija skladište (memoriraju) na osnovu specifičnih argumenata. Kada se ponovo pruže isti argumenti, vraćaju se sačuvani rezultati umesto da se funkcija ponovno izvrši/izračuna.

Proces memoizacije odvija se na ovaj način:

- Sačuvajte rezultate poziva funkcije zajedno sa njenim ulaznim argumentima.

- Pre izvršavanja funkcije, proverite da li rezultati za trenutne argumente već postoje u skladištu.

- Ukoliko je dostupan, vratite sačuvane rezultate umesto ponovnog izvršavanja kalkulacija.

- Ako nije dostupan, izračunaj rezultat, sačuvaj ga u skladište, a zatim ga vrati.

Za poboljšanje iskustva programera (developer experience) uz memoizaciju, React nudi tri alata – `React.memo` (ili `memo`), `useMemo` na `useCallback`.

Kako možete da pogodite, `useMemo` i na `useCallback` su sve hookovi, ali `React.memo` je omotač komponente, deo višeslojnog mosta (HOC).

U sledećoj lekciji, videćemo kako hook-ovi za `useCallback` i `React.memo` funkcionišu.

`useMemo` omogućava vam da sačuvate izračunate vrednosti kada `useCallback` radi isto i za reference funkcija.

Ako se pitate šta su izračunate vrednosti i reference na funkcije, izračunate vrednosti se odnose na rezultate izvršavanja funkcije, dok su reference na funkcije pokazivači na funkcije – objekat funkcije u memoriji.

Pogledajmo kako da koristimo hook `useMemo` prvo. Ovo je osnovna sintaksa za hook `useMemo`:

```js
const memoizedValue = useMemo(
  function () {
    return computeExpensiveValue(a, b);
  },
  [a, b]
);
```

Potrebno je pokriti hak `useMemo` blizu funkcije.

Ovaj deo ``ExpensiveSquare`` primaće parametre za ``num``, koje će koristiti za izračunavanje kvadrata:

```jsx
function ExpensiveSquare({ num }) {
  function calculateSquare(n) {
    console.log("Calculating square...");
    return n * n;
  }

  const squared = calculateSquare(num);
  return (
    <p>
      Square of {num}: {squared}
    </p>
  );
}
export default ExpensiveSquare;
```

Ovo je deo `App` gde se koristi `ExpensiveSquare`:

```jsx
import { useState, useEffect } from "react";
import ExpensiveSquare from "./components/ExpensiveSquare";

function App() {
 const [timer, setTimer] = useState(0);
 const [num, setNum] = useState(0);

 useEffect(() => {
   const interval = setInterval(() => setTimer((c) => c + 1), 1000);
   return () => clearInterval(interval);
 }, []);

 return (
   <div>
     <h1>Timer: {timer} seconds gone</h1>
     <ExpensiveSquare num={num} />
     <button onClick={() => setNum((n) => n + 1)}>Increase Number</button>
   </div>
 );
}

export default App;
```

`timer` u `useEffect`, koji radi svake sekunde, izvršiće funkciju `calculateSquare` svaki put kada se pokrene, čak i ako ne dodaje vrednost stanja `num`.

Da bismo rešili ovaj problem, možemo koristiti hook `useMemo` za obavijanje poziva funkcije unutar njega i specificirati promenu `num` kao zavisnost:

```jsx
// import the useMemo hook
import { useMemo } from "react";

function ExpensiveSquare({ num }) {
  function calculateSquare(n) {
    console.log("Calculating square...");
    return n * n;
  }

  // const squared = calculateSquare(num);
  // Wrap the function call in useMemo instead
  const squared = useMemo(() => calculateSquare(num), [num]);

  return (
    <p>
      Square of {num}: {squared}
    </p>
  );
}

export default ExpensiveSquare;
```

Ovo osigurava da je funkcija sačuvana skladištenjem rezultata. Čak i ako deo `ExpensiveSquare` i dalje ponovo obrađuje svaki put kada se stanje roditelja `timer` ažurira, proračuni za `calculateSquare` će se izvršiti samo prilikom prvog prikaza i kada `num` promeni.

# --questions--

## --text--

Memoizacija šta je u React?

## --answers--

Metoda koja sačuvava vrednost i funkcionalnosti radi sprečavanja nepotrebnih proračuna.

---

Metoda koja omogućava upravljanje delimičnim ažuriranjima stanja radi sprečavanja nepotrebnih proračuna.

### --feedback--

Pomaže u poboljšanju performansi čuvanjem prethodno izračunatih rezultata.

---

Proces poređenja Virtual DOM sa DOM stvarnog.

### --feedback--

Pomaže u poboljšanju performansi čuvanjem prethodno izračunatih rezultata.

---

Način rukovanja sporednim efektima u funkcionalskim oblastima.

### --feedback--

Pomaže u poboljšanju performansi čuvanjem prethodno izračunatih rezultata.

## --video-solution--

1

## --text--

Koja je razlika između izračunatih vrednosti i referenci funkcija?

## --answers--

Izračunate vrednosti su funkcionalni elementi, dok su reference funkcija rezultati izvršenja.

### --feedback--

Moj je rezultat funkcije, drugi je samo indikator te funkcije.

---

Izračunate vrednosti su rezultati izvršavanja funkcije, dok su reference na funkcije funkcionalni objekti u memoriji.

---

Vrednosti izračunate i reference zaposlenika su iste.

### --feedback--

Ovo je rezultat funkcije, a drugo je samo indikator te funkcije.

---

Registrar za funkcije čuva izračunate vrednosti.

### --feedback--

Jedno su rezultati funkcije, a drugi samo indikatori te funkcije.

## --video-solution--

2

## --text--

Koja je od ovih alata koje React pruža za memoizaciju?

## --answers--

`React.memo`

### --feedback--

Alati za memoizaciju se fokusiraju na skladištenje vrednosti i funkcije, dok ova opcija rukuje nuspojavama.

---

`useMemo`

### --feedback--

Alati za memoizaciju fokusiraju se na skladištenje vrednosti i funkcija, dok ova opcija obrađuje sporedne efekte.

---

`useCallback`

### --feedback--

Alati za memoizaciju fokusiraju se na skladištenje vrednosti i funkcije, dok ova opcija obrađuje sporedne efekte.

---

`useEffect`

## --video-solution--

4