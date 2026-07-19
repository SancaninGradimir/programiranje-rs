---
id: 67acaebb95dabb0ee05500f7
title: Vežba 21
challengeType: 22
dashedName: task-21
lang: en-US
---

<!-- (Audio) Anna: If people are working with outdated computers, it can be a setback for productivity. -->

# --instructions--

Poslušaj zvuk i dovrši rečenicu ispod.

# --fillInTheBlank--

## --sentence--

`If people are working with outdated computers, it can be a BLANK for productivity.`

## --blanks--

`setback`

### --feedback--

Ova reč znači prepreka ili nešto što usporava napredak.

# --explanation--

`Setback` je nešto što usporava ili ometa napredak. Spori ili nepouzdani računari mogu produžiti trajanje zadataka i smanjiti efikasnost. Na primer:

- `The project faced a setback due to a critical bug.` — Projekat je pretrpeo zastoj zbog kritične greške.

- `Losing important data was a major setback for the team.` — Gubitak važnih podataka bio je veliki zastoj za tim.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Anna",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_11-1.mp3",
      "startTime": 1,
      "startTimestamp": 35.78,
      "finishTimestamp": 39.68
    }
  },
  "commands": [
    {
      "character": "Anna",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Anna",
      "startTime": 1,
      "finishTime": 4.9,
      "dialogue": {
        "text": "If people are working with outdated computers, it can be a setback for productivity.",
        "align": "center"
      }
    },
    {
      "character": "Anna",
      "opacity": 0,
      "startTime": 5.4
    }
  ]
}
```
