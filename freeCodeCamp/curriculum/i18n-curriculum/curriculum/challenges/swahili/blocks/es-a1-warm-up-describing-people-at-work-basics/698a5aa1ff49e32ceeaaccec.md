---
id: 698a5aa1ff49e32ceeaaccec
title: Vežbanje 6
challengeType: 22
dashedName: task-6
lang: es
---
<!-- (Audio) Camila: Broj telefona -->

# --description--

Sada Camila uči kako da kaže `número de teléfono` na španskom, što znači "broj telefona".

Primećujte da reč `número` ima akcent na slovu `u` i da reč `teléfono` ima akcent na drugom slovu `e`.

# --instructions--

Slušaj audio i napiši reč dole.

# --fillInTheBlank--

## --sentence--

`BLANK de BLANK`

## --blanks--

`Número`

### --feedback--

Ovo značenje znači "broj" na španski. Zapamti da staviš akcent na slovo `u` i da pišeš prvo slovo velikim slovom.

---

`teléfono`

### --feedback--

Ova reč znači "simu" na španskom. Zapamti da staviš akcent na drugi slovo `e`.

# --explanation--

`Número de teléfono` znači "broj telefona" na španski.

# --scene--

```json
{
  "setup": {
    "background": "company2-dining.png",
    "characters": [
      {
        "character": "Camila",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_warm_up_describing_people_at_work.mp3",
      "startTime": 1,
      "startTimestamp": 10.45,
      "finishTimestamp": 12.39
    }
  },
  "commands": [
    {
      "character": "Camila",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Camila",
      "startTime": 1,
      "finishTime": 2.94,
      "dialogue": {
        "text": "Número de teléfono",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "opacity": 0,
      "startTime": 3.44
    }
  ]
}
```
