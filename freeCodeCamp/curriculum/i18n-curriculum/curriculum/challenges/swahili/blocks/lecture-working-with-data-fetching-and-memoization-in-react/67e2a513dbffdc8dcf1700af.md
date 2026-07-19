---
id: 67e2a513dbffdc8dcf1700af
title: Šta je hook `useOptimistic` i kako funkcioniše?
challengeType: 19
dashedName: what-is-the-useoptimistic-hook-and-how-does-it-work
---

# --description--

Novije verzije React-a uvele su serverske komponente i serverske akcije kako bi deo renderovanja i logike premestile na server.

Pored tih ažuriranja, React je dodao novi hook pod nazivom `useOptimistic` kako bi korisnički interfejs ostao responzivan dok se asinhrona akcija izvršava u pozadini.

Iako se često koristi za dohvaćanje podataka sa servera, nije ograničen samo na to. Ovaj *hook* je generalno važan za rukovanje operacijama async, osiguravajući da korisnički interfejs (UI) ostane glatok i interaktivan dok se akcija odvija.

Istražimo šta je hook za `useOptimistic` i kako pomaže u kreiranju UI-ja sa fluidnim animacijama koji su prilagodljivi uređaju.

Hook za `useOptimistic` pomaže u upravljanju "optimističkim ažuriranjima" u UI-u, tehnikom koja pruža trenutna ažuriranja UI-a na osnovu očekivanog ishoda akcije, kao što je čekanje odgovora sa servera.

Evo osnovne sintakse za hook `useOptimistic`:

```js
const [optimisticState, addOptimistic] = useOptimistic(actualState, updateFunction);
```

- `optimisticState` je privremeno stanje koje se odmah ažurira radi boljeg korisničkog iskustva.

- `addOptimistic` je funkcija koja primenjuje optimističko ažuriranje pre nego što se stvarno stanje promeni.

- `actualState` je stvarna vrednost stanja koja proističe iz akcije, kao što je dohvaćanje podataka sa servera.

- `updateFunction` je funkcija koja određuje kako treba ažurirati optimističko stanje kada se pozove.

Na prvi pogled može izgledati da je hook `useOptimistic` samo još jedan način za upravljanje stanjima učitavanja u React-u. Međutim, on pruža mnogo više od toga.

Stanje učitavanja kontrolera je kao što ćete videti spiner, poruku ili drugi indikator u korisničkom interfejsu dok se nešto dešava iza kulisa.

Međutim, hook za `useOptimistic` ažurira UI odmah u zavisnosti od očekivanih rezultata, čak i pre nego što izvršite poziv ka API. Ovaj hook vam daje priliku da prikažete indikator učitavanja ili poruku, da nežno rukujete potencijalnim greškama, i da prikažete trenutnu povratnu informaciju kako bi se UI osećao fluidno.

To će biti jasnije kada prođemo kroz primere koji pokazuju kako radi hook `useOptimistic`.

Ovo je akcija slična čuvanju sesije na serveru. Vraća sesiju nakon kašnjenja od 1 sekunde, kao što se može desiti za stvarni zahtev za API:

```js
export async function saveTask(task) {
  await new Promise((res) => setTimeout(res, 1000));

  return task;
}
```

Ovo je kod koji postavlja hook za `useOptimistic` za dohvaćanje i inicijalizaciju, zajedno sa funkcijom `handleSubmit` koja šalje ulaz za akciju:

```jsx
"use client";

import { useOptimistic } from "react";

export default function TaskList({ tasks, addTask }) {
  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    tasks,
    (state, newTask) => [...state, { text: newTask, pending: true }]
  );

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    addOptimisticTask(formData.get("task"));

    addTask(formData);
    e.target.reset();
  }

  return <>{/* UI */}</>;
}
```

U kodu, hook `useOptimistic` čuva privremenu listu vežbi koja se ažurira odmah kada dodate novu vežbu.

Mstari wa `(state, newTask) => [...state, { text: newTask, pending: true }]` osigurava da novo polje se prikazuje u stanju čekanja čak i pre nego što server potvrdi nešto što dolazi iz forme.

Kada se formular pošalje, funkcija `handleSubmit` uzima vežbu i dodaje "sa nadomagnjem" parametru `addOptimisticTask`. Zatim `addTask` se prosleđuje kao atribut koji šalje vežbu na server. Na kraju, formular se briše pozivanjem `e.target.reset()`.

Ovo je deo `TaskList`:

```jsx
"use client";
import { useOptimistic, startTransition } from "react";

export default function TaskList({ tasks, addTask }) {
  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    tasks,
    (state, newTask) => [...state, { text: newTask, pending: true }]
  );

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    startTransition(() => {
      addOptimisticTask(formData.get("task"));
    });

    addTask(formData);
    e.target.reset();
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h3 className="text-xl font-medium mb-3">Tasks</h3>

      <ul className="space-y-2 mb-4">
        {optimisticTasks.map((task, index) => (
          <li key={index} className="p-2 border-b">
            {task.text}
            {task.pending && (
              <small className="ml-2 text-gray-500 text-sm">
                Adding Task...
              </small>
            )}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          name="task"
          placeholder="Type in a task..."
          className="flex-1 p-2 border"
        />
        <button type="submit" className="bg-gray-200 px-3 py-2 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}
```

Ovde, prosleđujemo parametar `optimisticTask` da prikaže vežbu. Kada je `task.pending` na `true`, tekst za `Adding Task...` se prikazuje pored vežbe, potvrđujući da je vežba privremeno dodata pre nego što server potvrdi.

Ovde je deo `Task` koji upravlja stanjem forme. Poziva funkciju `saveTask` iz akcije kako bi moglo dodati vežbu, i priložiti novu vežbu kada je primi server:

```jsx
"use client";

import { useState } from "react";
import TaskList from "./TaskList";
import { saveTask } from "./actions";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  async function addTask(formData) {
    const newTaskText = formData.get("task");

    const savedTask = await saveTask(newTaskText);
    setTasks((prev) => [...prev, { text: savedTask, pending: false }]);
  }

  return <TaskList tasks={tasks} addTask={addTask} />;
}
```

Ovo osigurava glatka ažuriranja korisničkog interfejsa prikazivanjem trenutne povratne informacije umesto čekanja odgovora. Kada se vežba sačuva, atribut `pending` se uklanja, a lista poslednjih vežbi se ažurira odgovarajuće.

U interfejsu (UI), dešavaju se dve stvari koje ne bi trebalo da se dešavaju. Prvo, ne možete videti tekst `Adding Task...` jer se pojavljuje i nestaje veoma brzo. Drugo, postoji greška koja se javlja nakon dodavanja vežbe.

Postoje dve stvari koje moramo da uradimo kako bismo rešili te probleme.

Prvo, moramo preuzeti ``startTransition`` iz `React` i koristiti ga da pokrije liniju ``addOptimisticTask(formData.get('task'))``:

```js
startTransition(() => {
  addOptimisticTask(formData.get("task"));
});
```

Pili, moramo učiniti da tekst `Adding Task...` bude vidljiv na neko vreme pre nego što nestane.

Da bismo to uradili, možemo funkciju `addTask` prebaciti u stanje čekanja i simulirati kašnjenje od nekoliko sekundi pre nego što pokažemo da je vežba završena. `setTimeout()` je najbolja opcija za ovo:

```js
async function addTask(formData) {
  const newTaskText = formData.get("task");

  // Add an optimistic task with a pending state
  const tempTask = { id: Date.now(), text: newTaskText, pending: true };
  setTasks((prev) => [...prev, tempTask]);

  // Simulate a 3 seconds delay before marking the task as completed
  setTimeout(async () => {
    const savedTask = await saveTask(newTaskText);

    setTasks((prev) =>
      prev.map((task) =>
        task.id === tempTask.id
          ? { ...task, text: savedTask, pending: false }
          : task
      )
    );
  }, 3000);
}
```

I kada to učiniš, sve radi dobro.

# --questions--

## --text--

Šta je svrha hook-a `useOptimistic`?

## --answers--

Omogućava komponenti da dohvati podatke sa servera pre prikazivanja UI-ja.

### --feedback--

Ovaj Hook osigurava da UI prikaže očekivane promene pre nego što operacija async bude završena.

---

Pomaže u upravljanju optimističkim ažuriranjima tako što ažurira UI odmah dok čeka operaciju async, kao odgovor servera.

---

Omogućava direktno rukovanje greškama i vraćanje stanja za zahteve API koji su neuspešni u aplikacijama React.

### --feedback--

Ovaj hook osigurava da UI prikazuje očekivane promene pre završetka operacije async.

---

Poboljšava ažuriranja stanja kombinovanjem zajedno radi poboljšanja performansi.

### --feedback--

Ovaj Hook osigurava da UI prikaže očekivane promene pre nego što operacija async bude završena.

## --video-solution--

2

## --text--

Da li se kuka `useOptimistic` razlikuje u stanju učitavanja?

## --answers--

Stanje učitavanja prikazuje mrežnu strukturu korisničkog interfejsa dok čeka odgovor, dok `useOptimistic` ažurira korisnički interfejs odmah na osnovu očekivanih rezultata.

---

Stanje učitavanja menja podatke servera samo kada `useOptimistic` ažurira korisnički interfejs (UI) klijenta.

### --feedback--

Ažuriram korisnički interfejs pre nego što čak ni on ne zna za zahtjev.

---

Hook `useOptimistic` se koristi za obradu grešaka, dok je stanje učitavanja samo za prikazivanje spinnera.

### --feedback--

Moj ažurira UI prije nego što server čak sazna o zahtjevu.

---

Sve je u redu, ali `useOptimistic` vrši direktan pokušaj za neuspešne zahtjeve.

### --feedback--

Ažuriram UI čak i pre nego što znaju o zahtevu.

## --video-solution--

1

## --text--

`addOptimistic` šta radi u sintaksi hook-a `useOptimistic` ispod?

```js
const [optimisticState, addOptimistic] = useOptimistic(actualState, updateFunction);
```

## --answers--

Implementira preliminarno ažuriranje pre nego što se stvarni status promeni, pružajući glatko korisničko iskustvo.

---

Dobijanje stvarnog stanja sa servera i ažuriranje interfejsa korisnika (UI) odgovarajuće.

### --feedback--

Ova funkcija ažurira UI pre nego što se stvarni status promeni.

---

Izmenjuje stvarni i privremeni status nakon prijema odgovora sa servera.

### --feedback--

Ova funkcija ažurira UI pre nego što se stvarni status promeni.

---

Potvrđuje podatke servera pre primene ažuriranja za korisnički interfejs (UI).

### --feedback--

Ova funkcija ažurira UI pre nego što se stvarni status promeni.

## --video-solution--

1