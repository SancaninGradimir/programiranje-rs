---
id: 6914d94cee63aa7cbcafab2c
title: Vežba 2
challengeType: 22
dashedName: task-2
lang: es
---
<!-- (Audio) Mateo: Ja sam Mateo. Ja sam softverski inženjer. -->

# --description--

Mateo spominje svoje ime i zanimanje na španskom.

Ovde, glagol `ser` se koristi da pokaže svoj identitet i gramatiku.

# --instructions--

Slušaj audio i dovrši sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`BLANK Mateo. BLANK ingeniero de software.`

## --blanks--

`Soy`

### --feedback--

Ova glagolska forma potiče od glagola `ser` i koristi se za opisivanje ko ste vi ili šta radite.

---

`Soy`

### --feedback--

Ovaj glagolski oblik potiče od glagola `ser` i koristi se za opisivanje ko ste vi ili šta radite.

# --explanation--


`Soy` je glagol koji se koristi za opisivanje ko ste ili šta radite. Primer:

`Soy Mateo. Soy ingeniero de software.` - Ja sam Mateo. Ja sam softverski inženjer.

# --scene--

```json
{
  "setup": {
    "background": "company3-reception.png",
    "characters": [
      {
        "character": "Mateo",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_meet_mateo.mp3",
      "startTime": 1,
      "startTimestamp": 2.35,
      "finishTimestamp": 5.39
    }
  },
  "commands": [
    {
      "character": "Mateo",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Mateo",
      "startTime": 1,
      "finishTime": 1.82,
      "dialogue": {
        "text": "Soy Mateo.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "startTime": 2.5,
      "finishTime": 4.04,
      "dialogue": {
        "text": "Soy ingeniero de software.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 4.54
    }
  ]
}
```
