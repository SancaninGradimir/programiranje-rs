---
id: 8d5123c8c441eddfaeb5bdef
title: Implementirajte bubble sort
challengeType: 1
forumTopicId: 301612
dashedName: implement-bubble-sort
---

# --description--

Ovo je prvi od nekoliko izazova o sortirnim algoritmima. Ako vam je dat nesortiran niz podataka, želimo da budemo u mogućnosti da vratimo sortiran niz. Pogledaćemo nekoliko različitih načina da to uradimo i naučiti neke razlike između ovih različitih pristupa. Iako mnogi savremeni jezici imaju ugrađene funkcije za sortiranje za ovakve operacije, i dalje je važno razumeti neke osnovne tehnike koje se koriste i naučiti kako se mogu implementirati.

Ovde ćemo pogledati bubble sort. Bubble sort počinje na početku nesortiranog niza i "podiže" nesortirane vrednosti ka kraju, prolazeći kroz niz sve dok ne bude potpuno sortiran. To se postiže upoređivanjem dva susedna elementa i njihovom zamenom ako su u netačnom redosledu. Ovaj postupak se ponavlja kroz niz sve dok više nema zamena, u kom trenutku je niz sortiran.

Ovaj pristup zahteva višestruko ponavljanje kroz niz i u prosečnom i u najgorem slučaju ima vremensku složenost kvadratnog reda (quadratic time complexity). Iako je jednostavan, obično nije efikasan u mnogim situacijama.

**Uputstva:** Napišite funkciju `bubbleSort` koja prima niz celih brojeva kao ulaz i vraća niz ovih celih brojeva sortiranih od najmanjeg do najvećeg.

# --hints--

`bubbleSort` treba da bude funkcija.

```js
assert.isFunction(bubbleSort);
```

`bubbleSort` treba da vrati sortiran niz (od najmanjeg do najvećeg).

```js
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
assert.isTrue(
  isSorted(
    bubbleSort([
      1,
      4,
      2,
      8,
      345,
      123,
      43,
      32,
      5643,
      63,
      123,
      43,
      2,
      55,
      1,
      234,
      92
    ])
  )
);
```

`bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` treba da vrati niz koji se ne menja osim redosleda.

```js
assert.sameMembers(
  bubbleSort([
    1,
    4,
    2,
    8,
    345,
    123,
    43,
    32,
    5643,
    63,
    123,
    43,
    2,
    55,
    1,
    234,
    92
  ]),
  [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
);
```

`bubbleSort` ne treba da koristi ugrađenu `.sort()` metodu.

```js
function isBuiltInSortUsed(){
  let sortUsed = false;
  const temp = Array.prototype.sort;
  Array.prototype.sort = () => sortUsed = true;
  try {
    bubbleSort([0, 1]);
  } finally {
    Array.prototype.sort = temp;
  }
  return sortUsed;
}
assert.isFalse(isBuiltInSortUsed());
```

# --seed--

## --seed-contents--

```js
function bubbleSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        let temp = array[j-1];
        array[j-1] =  array[j];
        array[j] = temp;
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }
  return array;
}
```
