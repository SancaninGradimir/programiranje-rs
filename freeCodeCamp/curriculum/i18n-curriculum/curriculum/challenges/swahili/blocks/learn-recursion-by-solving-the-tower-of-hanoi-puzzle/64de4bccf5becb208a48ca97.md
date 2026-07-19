---
id: 64de4bccf5becb208a48ca97
title: Korak 13
challengeType: 20
dashedName: step-13
---

# --description--

U zagonetki Tower of Hanoi, možete identifikovati tri stubja u zavisnosti od njihove namene:

- Prva stuba je izvor, gde su svi diskovi postavljeni na početku igre.
- Druga stuba je podržavna stuba, i pomaže u pomeranju diskova ka ciljnoj stubi.
- Treća stuba je cilj, gde svi diskovi moraju biti postavljeni po redosledu na kraju igre.

Trenutno, funkcija za `move()` ne prima nikakve parametre. Izmenite deklaraciju funkcije tako da prima 4 parametra: `n`, `source`, `auxiliary`, i `target`. Zatim, prosledite `NUMBER_OF_DISKS` i niz slova `'A'`, `'B'`, i `'C'` kao argumente u pozivu vaše funkcije. Redosled je važan.

# --hints--

Vaša funkcija `move()` mora imati `n`, `source`, `auxiliary`, na `target` kao parametre. Red je važan.

```js
({ test: () => assert(runPython(`
      import inspect
      str(inspect.signature(move)) == '(n, source, auxiliary, target)'    
  `))
})
```

Treba da prođete kroz `NUMBER_OF_DISKS` i niz slova `'A'`, `'B'`, na `'C'` za `move()`. Redosled je važan.

```js
({test: () => assert.match(code, /^move\(\s*NUMBER_OF_DISKS\s*,\s*('|")A\1\s*,\s*('|")B\2\s*,\s*('|")C\3\s*\)/m)
})
```

# --seed--

## --seed-contents--

```py
NUMBER_OF_DISKS = 3
number_of_moves = 2**NUMBER_OF_DISKS - 1
rods = {
    'A': list(range(NUMBER_OF_DISKS, 0, -1)),
    'B': [],
    'C': []
}

--fcc-editable-region--
def move():
    print(rods)

move()
--fcc-editable-region--
```
