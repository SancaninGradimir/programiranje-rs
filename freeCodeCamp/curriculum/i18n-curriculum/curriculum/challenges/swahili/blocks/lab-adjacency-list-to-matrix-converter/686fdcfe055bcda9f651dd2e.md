---
id: 686fdcfe055bcda9f651dd2e
title: Jenga Konverter Liste susjednosti za Matricu susjednosti
challengeType: 27
dashedName: build-an-adjacency-list-to-matrix-converter
---

# --description--

U ovoj biblioteci, pravite funkciju koja konvertuje predstavljanje liste susjedstva grafa u matricu susjedstva. Lista susjedstva je rječnik gdje svaki ključ predstavlja čvor, a odgovarajuća vrijednost je lista čvorova sa kojima je čvor tog ključa povezan. Matrica susjedstva je dvodimenzionalni niz podataka gdje element na poziciji `[i][j]` je `1` ako postoji veza od čvora `i` ka čvoru `j`, i `0` inače.

Na primer, ukoliko se dostavi spisak susjedstva:

```py
{
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [2]
}
```

Odgovarajuća matrica susjedstva biće:

```py
[
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 0, 1],
    [0, 0, 1, 0]
]
```

**Cilj:** Popunite korisničke priče ispod i prođite sve testove kako biste završili ovaj laboratorijski rad.

**Priče korisnika:**

1. Treba definisati funkciju nazvanu `adjacency_list_to_matrix` koja konvertuje listu susedstva u matricu susedstva.
2. Funkcija treba da primi rečnik koji predstavlja listu susedstva neponderisanog grafa (bilo da je nedirekcijski ili direktni) kao svoj argument.
3. Funkcija treba da:
   - Konvertuje listu susedstva u matricu susedstva.
   - Ispisuje svaki red matrice susedstva.
   - Vraća matricu susedstva.

Na primer, `adjacency_list_to_matrix({0: [2], 1: [2, 3], 2: [0, 1, 3], 3: [1, 2]})` treba da ispisa:

```md
[0, 0, 1, 0]
[0, 0, 1, 1]
[1, 1, 0, 1]
[0, 1, 1, 0]
```

da vrati `[[0, 0, 1, 0], [0, 0, 1, 1], [1, 1, 0, 1], [0, 1, 1, 0]]`.


# --hints--

Treba da definišete funkciju nazvanu `adjacency_list_to_matrix`.

```js
({ 
    test: () => assert(runPython(`
    _Node(_code).has_function("adjacency_list_to_matrix")
    `)) 
})
```

Funkcija `adjacency_list_to_matrix` mora imati jedan parametar.

```js
({ test: () => assert(runPython(`
    import inspect 
    sig = inspect.signature(adjacency_list_to_matrix)
    len(sig.parameters) == 1
  `))
})
```

Funkcija mora da odredi tačan broj čvorova iz liste susjednosti.

```js
({ 
    test: () => runPython(`
        adj_list = {0: [1], 1: [0], 2: []}
        result = adjacency_list_to_matrix(adj_list)
        assert len(result) == 3
        assert len(result[0]) == 3
    `) 
})
```

Funkcija mora da postavi vrednosti matrice na `1` za postojeće konekcije sa preciznošću.

```js
({ 
    test: () => runPython(`
        adj_list = {0: [1], 1: [0]}
        result = adjacency_list_to_matrix(adj_list)
        assert result[0][1] == 1
        assert result[1][0] == 1
        assert result[0][0] == 0
        assert result[1][1] == 0
    `) 
})
```

Функција би требало да испише сваки ред матрице.

```js
({ 
    test: () => runPython(`
        import io
        import sys
        
        captured_output = io.StringIO()
        sys.stdout = captured_output
        
        adj_list = {0: [1], 1: []}
        adjacency_list_to_matrix(adj_list)
        
        sys.stdout = sys.__stdout__
        output = captured_output.getvalue()
        
        assert "[0, 1]" in output
        assert "[0, 0]" in output
    `) 
})
```

Funkcija mora da vrati matricu susednosti.

```js
({ 
    test: () => runPython(`
        adj_list = {0: [1], 1: []}
        result = adjacency_list_to_matrix(adj_list)
        assert result == [[0, 1], [0, 0]]
    `) 
})
```

Ako mu se pruži lista komšiluka `{0: [1, 2], 1: [2], 2: [0, 3], 3: [2]}`, funkcija bi trebalo da vrati `[[0, 1, 1, 0], [0, 0, 1, 0], [1, 0, 0, 1], [0, 0, 1, 0]]`.

```js
({ 
    test: () => runPython(`
        adj_list = {0: [1, 2], 1: [2], 2: [0, 3], 3: [2]}
        result = adjacency_list_to_matrix(adj_list)
        expected = [[0, 1, 1, 0], [0, 0, 1, 0], [1, 0, 0, 1], [0, 0, 1, 0]]
        assert result == expected
    `) 
})
```

Ako mu se pruži lista suseda `{0: [1], 1: [0]}`, funkcija treba da vrati `[[0, 1], [1, 0]]`.

```js
({ 
    test: () => runPython(`
        adj_list = {0: [1], 1: [0]}
        result = adjacency_list_to_matrix(adj_list)
        expected = [[0, 1], [1, 0]]
        assert result == expected
    `) 
})
```

Dato je popisa susjeda `{0: [], 1: [], 2: []}`, funkcija bi trebalo da vrati `[[0, 0, 0], [0, 0, 0], [0, 0, 0]]`.

```js
({ 
    test: () => runPython(`
        adj_list = {0: [], 1: [], 2: []}
        result = adjacency_list_to_matrix(adj_list)
        expected = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
        assert result == expected
    `) 
})
```

# --seed--

## --seed-contents--

```py

```

# --solutions--

```py
def adjacency_list_to_matrix(adj_list):
    n = len(adj_list)
    
    adj_matrix = [[0] * n for _ in range(n)]

    for src_node, neighbors in adj_list.items(): 
        for dest_node in neighbors:
            adj_matrix[src_node][dest_node] = 1

    for row in adj_matrix:
        print(row)

    return adj_matrix

adj_list = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [2]
}

matrix = adjacency_list_to_matrix(adj_list)
```
