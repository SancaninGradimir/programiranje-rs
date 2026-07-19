---
id: 6996cdf1f60cbc30eeeae1c9
title: Korak 12
challengeType: 1
dashedName: step-12
---

# --description--

Ako je uslov u `else if` istinit, podesi vrednost parametra `low` dodavanjem `1` na parametar `mid`.

Ovo će dodati pretragu na desnu stranu trenutnih područja pretraživanja u spisku, jer ako `value` je veće od `valueAtMiddle`, to znači da `value` mora biti na desnoj strani trenutnog područja pretraživanja.

# --hints--

Trebalo bi da popraviš parametar `low` u `mid + 1`.

```js
assert.match(__helpers.removeJSComments(String(binarySearch)), /low\s*=\s*mid\s*\+\s*1/);
```

# --seed--

## --seed-contents--

```js
function binarySearch(searchList, value) {
  let pathToTarget = [];
  let low = 0;
  let high = searchList.length - 1;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let valueAtMiddle = searchList[mid];
    pathToTarget.push(valueAtMiddle);
    
    if (value === valueAtMiddle) {
      return pathToTarget;
    } else if (value > valueAtMiddle) {
--fcc-editable-region--
      
--fcc-editable-region--     
    }
    break;
  }
  return [];
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 9], 4));
```
