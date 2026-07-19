---
id: ae9defd7acaf69703ab432ea
title: Najmanđi broj koji se deli sa svima
challengeType: 1
forumTopicId: 16075
dashedName: smallest-common-multiple
---

# --description--

Pronađi najmanji broj koji je deljiv sa datih kriterijuma, i takođe sa svim uzastopnim brojevima koji se nalaze u sekvenci brojeva između tih parametara.

Red brojeva će imati dva broja koja ne moraju biti u numeričkom redosledu.

Na primer, ako dobijete brojeve 1 i 3, pronađite najmanji broj koji je deljiv sa 1 i 3, a takođe i svim brojevima u opsegu od 1 do 3. Odgovor ovde će biti 6.

# --hints--

`smallestCommons([1, 5])` Trebalo bi da vrati broj.

```js
assert.deepEqual(typeof smallestCommons([1, 5]), 'number');
```

`smallestCommons([1, 5])` trebalo bi da vrati 60.

```js
assert.deepEqual(smallestCommons([1, 5]), 60);
```

`smallestCommons([5, 1])` trebalo bi da vrati 60.

```js
assert.deepEqual(smallestCommons([5, 1]), 60);
```

`smallestCommons([2, 10])` treba da vrati 2520.

```js
assert.deepEqual(smallestCommons([2, 10]), 2520);
```

`smallestCommons([1, 13])` Trebalo bi da vrati 360360.

```js
assert.deepEqual(smallestCommons([1, 13]), 360360);
```

`smallestCommons([23, 18])` treba da vrati 6056820.

```js
assert.deepEqual(smallestCommons([23, 18]), 6056820);
```

# --seed--

## --seed-contents--

```js
function smallestCommons(arr) {
  return arr;
}

smallestCommons([1,5]);
```

# --solutions--

```js
function gcd(a, b) {
    while (b !== 0) {
        a = [b, b = a % b][0];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr.sort(function(a,b) {return a-b;});
  var rng = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    rng.push(i);
  }
  return rng.reduce(lcm);
}
```
