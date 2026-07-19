---
id: 660684bfc24bf48cfaaf9cfa
title: Vežba 8
challengeType: 22
dashedName: task-8
lang: en-US
---
<!-- (Audio) Sophie: Hvala, pokušaću. -->

# --description--

`Give it a shot` znači pokušati da nešto uradi. To je kao reći `Try it`.

Na primer, ako je tvoj prijatelj neodlučan da se prijavi na programski kurs jer misli da bi mogao biti previše težak, možeš mu reći `Why not give it a shot? You might enjoy it more than you think.` da ga podstakne da pokuša da se prijavi na ovaj kurs.

# --fillInTheBlank--

## --sentence--

`Thanks, BLANK give it a BLANK.`

## --blanks--

`I'll`

### --feedback--

Ovo je sažetak od `I will`. Sophie pokazuje svoju odluku da isproba ono što je Brian predložio.

---

`shot`

### --feedback--

U ovom kontekstu, to znači pokušaj ili pokušavati nešto. Sophie kaže da će pokušati ono što je Brian predložio.

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Sophie",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "7.3-1.mp3",
      "startTime": 1,
      "startTimestamp": 24.86,
      "finishTimestamp": 26.28
    }
  },
  "commands": [
    {
      "character": "Sophie",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sophie",
      "startTime": 1,
      "finishTime": 2.42,
      "dialogue": {
        "text": "Thanks, I'll give it a shot.",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 2.92
    }
  ]
}
```
