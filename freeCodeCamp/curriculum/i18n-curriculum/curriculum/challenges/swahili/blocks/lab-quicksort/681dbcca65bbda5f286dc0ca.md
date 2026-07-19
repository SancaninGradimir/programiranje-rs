---
id: 681dbcca65bbda5f286dc0ca
title: Implementiraj algoritam Quicksort
challengeType: 27
dashedName: implement-the-quicksort-algorithm
---

# --description--

**Cilj:** Popunite korisničke priče ispod i prođite sve testove kako biste završili laboratoriju.

**Priče korisnika:**

Trebalo bi da definišete funkciju nazvanu `quick_sort` ili implementirate algoritmu quicksort.

1. Funkcija ``quick_sort`` treba da primi listu kompletnih brojeva kao ulaz i vrati novu listu ovih brojeva sortiranu od najmanjeg do najvećeg.

1. Da biste implementirali algoritam, morate:
   - Izaberite vrednost pivot-a iz elemenata ulazne liste (koristite prvi ili poslednji element liste).
   - Podelite ulaznu listu na tri podliste: jedna sa elementima manjim od pivot-a, jedna sa elementima jednaki pivot-u, i jedna sa elementima većim od pivot-a.
   - Pozovite rekurzivni poziv ``quick_sort`` za sortiranje podlista i spajanje sortirane podliste kako biste dobili konačnu sortiranu listu.

# --hints--

Trebalo bi da imaš funkciju nazvanu `quick_sort`.

```js
({ test: () => runPython(`assert _Node(_code).has_function("quick_sort")`) })
```

Tvoja funkcija za `quick_sort` treba da uzme jedan parametar.

```js
({ test: () => runPython(`
from inspect import signature
sig = signature(quick_sort)
assert len(sig.parameters) == 1
`) })
```

`quick_sort([])` Trebalo bi da vrati praznu listu.

```js
({ test: () => runPython(`assert quick_sort([]) == []`) })
```

Vaša funkcija od `quick_sort` ne bi trebalo da menja listu poslatu kao argument.

```js
({ test: () => runPython(`
_test_list = [20, 3, 14, 1, 5]
quick_sort(_test_list)
assert _test_list == [20, 3, 14, 1, 5]
`) })
```

`quick_sort([20, 3, 14, 1, 5])` bi trebalo da vrati `[1, 3, 5, 14, 20]`.

```js
({ test: () => runPython(`assert quick_sort([20, 3, 14, 1, 5]) == [1, 3, 5, 14, 20]`) })
```

`quick_sort([83, 4, 24, 2])` trebalo bi vratiti `[2, 4, 24, 83]`.

```js
({ test: () => runPython(`assert quick_sort([83, 4, 24, 2]) == [2, 4, 24, 83]`) })
```

`quick_sort([4, 42, 16, 23, 15, 8])` treba da vrati `[4, 8, 15, 16, 23, 42]`.

```js
({ test: () => runPython(`assert quick_sort([4, 42, 16, 23, 15, 8]) == [4, 8, 15, 16, 23, 42]`) })
```

`quick_sort([87, 11, 23, 18, 18, 23, 11, 56, 87, 56])` trebalo bi vratiti `[11, 11, 18, 18, 23, 23, 56, 56, 87, 87]`.

```js
({ test: () => runPython(`assert quick_sort([87, 11, 23, 18, 18, 23, 11, 56, 87, 56]) == [11, 11, 18, 18, 23, 23, 56, 56, 87, 87]`) })
```

Ne smeš da uvoziš bilo koji modul ili koristi ugrađene metode za sortiranje u svoj kod.

```js
({ test: () => runPython(`
    assert len(_Node(_code).find_imports()) == 0
    assert not _Node(_code).block_has_call("sort")
    assert not _Node(_code).block_has_call("sorted")
`)})
```

# --seed--

## --seed-contents--

```py

```

# --solutions--

```py
def quick_sort(numbers):
    if not numbers:
        return []
    pivot = numbers[0]
    lesser = []
    equal = []
    greater = []
    for number in numbers:
        if number < pivot:
            lesser.append(number)
        elif number > pivot:
            greater.append(number)
        else:
            equal.append(number)
    return quick_sort(lesser) + equal + quick_sort(greater)
```
