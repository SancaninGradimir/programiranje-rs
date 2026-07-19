---
id: 67b9becbb4fd3b0d7fc2411e
title: Vežba 65
challengeType: 22
dashedName: task-65
lang: en-US
---
<!-- (Audio) David: Čini se da bi to moglo dovesti do mnogo kašnjenja i nesporazuma. -->

# --instructions--

Poslušaj zvuk i dovrši rečenicu ispod.

# --fillInTheBlank--

## --sentence--

`It seems like it could lead to a lot of BLANK and BLANK.`

## --blanks--

`delays`

### --feedback--

Ovo se odnosi na stvari koje traju duže nego što je očekivano.

---

`miscommunication`

### --feedback--

Ovaj termin se odnosi na nesporazume uzrokovane nejasnim ili netačnim informacijama.

# --explanation--

David je bio zabrinut da rad od kuće, koji nije u realnom vremenu, može izazvati `delays` (odgovori i spor napredovanje) i `miscommunication` (nerazumevanje ljudi).

Pošto zaposleni rade u različito vrijeme, poruka može potrajati dugo da se odgovori, a nesporazum može nastati ako komunikacija nije jasna.

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
    "characters": [
      {
        "character": "David",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_11-2.mp3",
      "startTime": 1,
      "startTimestamp": 24.82,
      "finishTimestamp": 28.84
    }
  },
  "commands": [
    {
      "character": "David",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "David",
      "startTime": 1,
      "finishTime": 5.02,
      "dialogue": {
        "text": "It seems like it could lead to a lot of delays and miscommunication.",
        "align": "center"
      }
    },
    {
      "character": "David",
      "opacity": 0,
      "startTime": 5.52
    }
  ]
}
```
