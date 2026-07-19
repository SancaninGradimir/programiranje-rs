---
id: 594db4d0dedb4c06a2a4cefd
title: Babbageov problem
challengeType: 1
forumTopicId: 302229
dashedName: babbage-problem
---

# --description--

Charles Babbage je, razmišljajući unapred o vrstama problema koje bi njegov Analitički stroj mogao da rešava, dao sledeći primer:

<blockquote>
Koji je najmanji pozitivan ceo broj čiji se kvadrat završava ciframa 269696?
  <footer style='margin-left: 2em;'>Babbage, barua kwa Lord Bowden, 1837; angalia Hollingdale na Tootill, <i>Electronic Computers</i>, toleo la pili, 1970, uk. 125.</footer>
</blockquote>

Mislio je da odgovor može biti 99,736, čiji je kvadrat 9.947.269.696; ali nije mogao biti siguran.

Zadatak je da se otkrije da li je Babbage imao tačan odgovor.

# --instructions--

Implementiraj funkciju koja vraća najmanji ceo broj koji rešava Babbageov problem. Ako je Babbage bio u pravu, vrati Babbageov broj.

# --hints--

`babbage` Treba da bude funkcija.

```js
assert(typeof babbage === 'function');
```

`babbage(99736, 269696)` ne treba da vrati 99736 (postoji manje rešenje).

```js
const babbageAns = 99736;
const endDigits = 269696;
const answer = 25264;
assert.equal(babbage(babbageAns, endDigits), answer);
```

# --seed--

## --seed-contents--

```js
function babbage(babbageNum, endDigits) {

  return true;
}
```

# --solutions--

```js
function babbage(babbageAns, endDigits) {
  const babbageNum = Math.pow(babbageAns, 2);
  const babbageStartDigits = parseInt(babbageNum.toString().replace('269696', ''));
  let answer = 99736;

  // count down from this answer and save any sqrt int result. return lowest one
  for (let i = babbageStartDigits; i >= 0; i--) {
    const num = parseInt(i.toString().concat('269696'));
    const result = Math.sqrt(num);
    if (result === Math.floor(Math.sqrt(num))) {
      answer = result;
    }
  }

  return answer;
}
```
