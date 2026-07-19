---
id: 6939b0e1fac80c2b4fdf8ded
title: Lekcija 17
challengeType: 22
dashedName: task-17
lang: es
---
<!-- (Audio) Basti: Piše se B-a-s-t-i. -->

# --description--

U ovoj vežbi, Basti izgovara svoj nadimak slovo po slovo.

# --instructions--

Slušajte zvuk i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`Se escribe BLANK a s BLANK BLANK.`

## --blanks--

`B`

### --feedback--

Ovo je prvo slovo koje Basti koristi da započne izgovaranje svog nadimka.

---

`t`

### --feedback--

Ovo slovo dolazi nakon 's' u 'Basti'.

---

`i`

### --feedback--

Ovo je poslednje slovo u "Basti". Slušaj zvuk samoglasnika na kraju.

# --explanation--

Basti izgovara svoj nadimak kao `B-a-s-t-i`.

# --scene--

```json
{
  "setup": {
    "background": "desk.png",
    "characters": [
      {
        "character": "Sebastián",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_basti_personal_details.mp3",
      "startTime": 1,
      "startTimestamp": 22.6,
      "finishTimestamp": 27.5
    }
  },
  "commands": [
    {
      "character": "Sebastián",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sebastián",
      "startTime": 1,
      "finishTime": 5.6,
      "dialogue": {
        "text": "Se escribe B-a-s-t-i.",
        "align": "center"
      }
    },
    {
      "character": "Sebastián",
      "opacity": 0,
      "startTime": 5.9
    }
  ]
}
```
