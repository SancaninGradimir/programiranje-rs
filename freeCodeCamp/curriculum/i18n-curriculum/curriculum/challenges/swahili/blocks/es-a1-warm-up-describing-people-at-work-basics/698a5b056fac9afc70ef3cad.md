---
id: 698a5b056fac9afc70ef3cad
title: Vežba 10
challengeType: 22
dashedName: task-10
lang: es
---
<!-- (Audio) Camila: Brazil, Kolumbija, Panama -->

# --description--

Pregledajmo neke zemlje koje ste naučili do sada.

| Država | Država (Ženski rod) | Država (Muški rod) |
| :--- | :--- | :--- |
| `Brasil` | `brasileña` | `brasileño` |
| `Colombia` | `colombiana` | `colombiano` |
| `México` | `mexicana` | `mexicano` |
| `Panamá` | `panameña` | `panameño` |
| `República Dominicana` | `dominicana` | `dominicano` |

U španskom jeziku, imena država su sopstvena imena i uvek počinju velikim slovom.

Zapamtite da država `brasileño`/`brasileña` na `panameño`/`panameña` koristi jedinstveno slovo `eñe` (`ñ`).

Camila poznaje neke od ovih zemalja. Da li ih možeš prepoznati?

# --instructions--

Slušajte zvukove i dovršite sekvencu ispod.

# --fillInTheBlank--

## --sentence--

`BLANK - Colombia - BLANK`

## --blanks--

`Brasil`

### --feedback--

Ova zemlja je najveća u Južnoj Americi i počinje velikim slovom.

---

`Panamá`

### --feedback--

Ova zemlja je poznata po svom slavnom vodotoku. Zapamtite da stavite tačku na poslednje slovo `a` i da prvi slovo napišete velikim slovom.

# --explanation--

Niz je `Brasil` - `Colombia` - `Panamá`.

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
      "startTimestamp": 20.9,
      "finishTimestamp": 25.4
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
      "finishTime": 1.96,
      "dialogue": {
        "text": "Brasil",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "startTime": 2.88,
      "finishTime": 3.79,
      "dialogue": {
        "text": "Colombia",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "startTime": 4.79,
      "finishTime": 5.5,
      "dialogue": {
        "text": "Panamá",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "opacity": 0,
      "startTime": 6
    }
  ]
}
```
