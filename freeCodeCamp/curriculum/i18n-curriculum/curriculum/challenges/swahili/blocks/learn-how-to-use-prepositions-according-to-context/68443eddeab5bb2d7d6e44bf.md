---
id: 68443eddeab5bb2d7d6e44bf
title: Vežba 45
challengeType: 22
dashedName: task-45
lang: en-US
---
<!-- (Audio) Bob: Na kraju, gde bismo trebali [set] u [break] sobi? -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`Last, where should we BLANK the BLANK?`

## --blanks--

`set up`

### --feedback--

Ovaj izraz od dve reči znači organizovati ili pripremiti nešto za upotrebu.

---

`break room`

### --feedback--

Ovaj dvoredični izraz odnosi se na mesto gde zaposleni mogu da odmore od posla.

# --explanation--

`Set up` to znači pripremati ili organizovati nešto za upotrebu. Na primer:

`We need to set up the new computers before the meeting.` – Ovo znači pripremiti ih.

`Break room` je oblast u kancelariji gde ljudi odmaraju, jedu ili se opuštaju. Na primer:

`Let's meet in the break room after lunch.` – Ovo se tiče prostora koji je namenjen za odmor.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Bob",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_22-1.mp3",
      "startTime": 1,
      "startTimestamp": 61.04,
      "finishTimestamp": 63.6
    }
  },
  "commands": [
    {
      "character": "Bob",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Bob",
      "startTime": 1,
      "finishTime": 3.56,
      "dialogue": {
        "text": "Last, where should we set up the break room?",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "opacity": 0,
      "startTime": 4.06
    }
  ]
}
```
