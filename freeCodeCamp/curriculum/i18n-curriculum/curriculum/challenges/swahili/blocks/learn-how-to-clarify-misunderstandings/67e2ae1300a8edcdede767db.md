---
id: 67e2ae1300a8edcdede767db
title: Vežba 4
challengeType: 22
dashedName: task-4
lang: en-US
---
<!-- (Audio) Mark: Mogu li vas pitati o nekoliko njih? -->

# --instructions--

Poslušaj zvuk i dovrši rečenicu ispod.

# --fillInTheBlank--

## --sentence--

`Can I BLANK you BLANK a few of them?`

## --blanks--

`ask`

### --feedback--

Ova funkcija se koristi kada je potreban pristup informacijama ili dozvoli.

---

`about`

### --feedback--

Ovaj konektor povezuje srodne teme ili predmete.

# --explanation--

`Ask about` znači tražiti informacije vezane za određenu temu. Na primer:

`I asked about the new feature.` – Tražio si informacije o novoj funkcionalnosti.

`Can I ask you about...` je pristojan način za postavljanje pitanja kada vam treba informacija ili pomoć. Pokazuje da tražite dozvolu za razgovor o određenoj temi. Na primer:

`Can I ask you about the project deadline?` – Ovo znači da želite da razgovarate o roku i dobijete više detalja.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Mark",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_16-1.mp3",
      "startTime": 1,
      "startTimestamp": 5.58,
      "finishTimestamp": 7.08
    }
  },
  "commands": [
    {
      "character": "Mark",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Mark",
      "startTime": 1,
      "finishTime": 2.5,
      "dialogue": {
        "text": "Can I ask you about a few of them?",
        "align": "center"
      }
    },
    {
      "character": "Mark",
      "opacity": 0,
      "startTime": 3
    }
  ]
}
```
