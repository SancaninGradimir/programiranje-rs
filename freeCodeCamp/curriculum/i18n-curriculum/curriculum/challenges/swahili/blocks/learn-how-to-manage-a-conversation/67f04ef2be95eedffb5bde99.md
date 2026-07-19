---
id: 67f04ef2be95eedffb5bde99
title: Vežba 103
challengeType: 22
dashedName: task-103
lang: en-US
---
<!-- (Audio) Brian: Da li nešto else usporava? -->

# --instructions--

Poslušaj zvuk i dovrši rečenicu ispod.

# --fillInTheBlank--

## --sentence--

`Is there anything else BLANK you down?`

## --blanks--

`slowing`

### --feedback--

Nakon `down`, ovo znači da nešto treba da se desi ili da prođe sporije nego obično. Koristite obrazac `-ing`.

# --explanation--

`To slow down` to znači smanjiti brzinu ili učiniti da nešto se dešava sporije. U kontekstu posla ili projekta, može značiti bilo šta što usporava napredak. Na primer:

`Traffic is slowing down the delivery.` – Ovo znači da odlazak traje duže zbog saobraćnog gužvovanja.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Brian",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_15-3.mp3",
      "startTime": 1,
      "startTimestamp": 23.16,
      "finishTimestamp": 25.38
    }
  },
  "commands": [
    {
      "character": "Brian",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Brian",
      "startTime": 1,
      "finishTime": 3.22,
      "dialogue": {
        "text": "Is there anything else slowing you down?",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 3.72
    }
  ]
}
```
