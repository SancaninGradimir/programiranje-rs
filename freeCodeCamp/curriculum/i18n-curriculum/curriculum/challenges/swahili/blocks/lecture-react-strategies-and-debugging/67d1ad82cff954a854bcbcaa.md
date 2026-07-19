---
id: 67d1ad82cff954a854bcbcaa
title: Šta je Prop Drilling?
challengeType: 19
dashedName: what-is-prop-drilling
---

# --description--

Prop drilling je veoma osnovan način za upravljanje stanjem u aplikacijama React. Izgleda lako, ali može brzo postati teško i veoma je teško ga proširiti.

Istražimo šta je prop drilling, zašto predstavlja problem i dobre alternative koje koristiti kako program raste.

Prop drilling je proces prosljeđivanja parametara od roditeljske komponente do ugnježdene detske komponente, čak i kada neke detske komponente ne zahtevaju te parametre.

Na primer, pretpostavimo da imaš tri komponente pod nazivom `Parent`, `Child` i `Grandchild`. Ako želiš da koristiš određene podatke u komponenti `Grandchild`, ali se ti podaci nalaze u komponenti `Parent`, moraš da ih proslediš iz komponente `Parent` u `Child`, a zatim iz `Child` u `Grandchild`.

Ako se podaci nalaze još više u hijerarhiji, možda će biti potrebno da se proslede i do komponente `Parent`.

Ovde, podaci koje želim da prikažem su niz znakova `Hello, Prop Drilling!`. Dodeljena je vrednost parametru `greeting` u korenskom delu `App`:

```jsx
import "./App.css";
import Parent from "./Parent";

function App() {
  const greeting = "Hello, Prop Drilling!";

  return <Parent greeting={greeting} />;
}

export default App;
```

Možete videti komponentu `Parent` koja takođe prima parametar `greeting` kao vrednost propp-a `greeting`. Ovde komponenta `Parent` ga prosleđuje unutar komponente `Child` kao vrednost drugog propp-a `greeting` u `Child`:

```jsx
import Child from "./Child";

const Parent = ({ greeting }) => {
  return <Child greeting={greeting} />;
};

export default Parent;
```

A ovako ih komponenta `Child` prosleđuje komponenti `Grandchild`:

```jsx
import Grandchild from "./Grandchild";

const Child = ({ greeting }) => {
  return <Grandchild greeting={greeting} />;
};

export default Child;
```

I na kraju, komponenta `Grandchild` prima pozdrav i koristi ga kao sadržaj elementa `h1`:

```jsx
const Grandchild = ({ greeting }) => {
  return <h1>{greeting}</h1>;
};

export default Grandchild;
```

U pretraživaču, videćete stranicu sa jednim elementom od `h1` sa tekstom `Hello, Prop Drilling!`.

U početku, prop drilling možda ne deluje kao veliki problem. Međutim, kako aplikacija raste, postaje sve teže razumeti kod, otklanjati greške i održavati ga.

Ako vam je potrebno da prosledite parametre, pokušajte sve postaviti na jednom roditeljskom mestu. Ovaj način skladištenja svih važnih podataka na jednom mestu naziva se "jedinstveni izvor istine".

Na primer, recimo da želite dodati novi `response` uz `greeting`, i da želite koristiti oba u sekciji `Grandchild`. Pošto je `greeting` već u sekciji `App`, preporučuje se da postavite i `response` tamo takođe, i proširite obe kroz lanac:

```jsx
function App() {
  const greeting = "Hello, Prop Drilling!";
  const response = "I'm not here to play!";

  return <Parent greeting={greeting} response={response} />;
}

const Parent = ({ greeting, response }) => {
  return <Child greeting={greeting} response={response} />;
};

const Child = ({ greeting, response }) => {
  return <Grandchild greeting={greeting} response={response} />;
};

const Grandchild = ({ greeting, response }) => {
  return (
    <>
      <h1>{greeting}</h1>
      <h2>{response}</h2>
    </>
  );
};

export default App;
```

U pretraživaču, videćete stranicu sa elementom `h1` sa tekstom `Hello, Prop Drilling!` i elementom `h2` sa tekstom `I'm not here to play!`.

Da biste izbegli prop drilling, posebno u velikim i složenim aplikacijama, razmislite o korišćenju Context API ili biblioteka za upravljanje stanjem kao što su Redux na Redux Toolkit, Zustand, Recoil, i drugih.

Saznajte više o ovim u narednim lekcijama.

# --questions--

## --text--

Da li prop se prenosi od roditelja do unuka?

## --answers--

Za definisanje prop-a unutar sekcije/dela unuka.

### --feedback--

Prop mora proći kroz deo deteta pre nego što stigne do unuka.

---

Prenoseći ga/je od roditelja ka detetu, a zatim od deteta ka unuku.

---

Korišćenjem hook-a `useEffect` da se dobije prop promenama.

### --feedback--

Prop mora da prođe kroz deo deteta pre nego što stigne do unuka.

---

Koristeći hook `useState` u sekciji unuka.

### --feedback--

Prop mora proći kroz deo deteta pre nego što stigne do unuka.

## --video-solution--

2

## --text--

Šta je Prop drilling u React?

## --answers--

Prosleđujte parametre direktno samo onim delovima koji ih zahtevaju.

### --feedback--

Dešava se kada parametri prolaze kroz mnogo nivoa bez razloga.

---

Korišćenjem konteksta za deljenje stanja između komponenti.

### --feedback--

Nastaje kada parametri prolaze kroz više nivoa bez razloga.

---

Prosleđivanje parametara od roditeljskog elementa do ugnježdenih detetovskih sekcija.

---

Kroz stanje komponente korišćenjem hookova.

### --feedback--

To se dešava kada parametri prolaze kroz mnogo nivoa bez razloga.

## --video-solution--

3

## --text--

Zašto prop drilling izgleda kao problem u velikim programima?

## --answers--

To olakšava upravljanje stanjem.

### --feedback--

Prosljeđivanje previše parametara kroz više delova može učiniti kod neurednim (ili komplikovanim).

---

Poboljšava performanse smanjenjem ponovnog prikaza.

### --feedback--

Prosleđivanje mnogo parametara kroz više delova može učiniti kod neurednim.

---

Čini kod teškim za čitanje, pronalaženje grešaka i održavanje.

---

Pruža biblioteku za upravljanje stanjem.

### --feedback--

Prosljeđivanje previše parametara kroz više mesta može učiniti kod nečitanim.

## --video-solution--

3