---
id: 67fea5eff4f7ddccd1fe2bb9
title: Vežba 22
challengeType: 22
dashedName: task-22
lang: en-US
---
<!-- (Audio) Sarah: Takođe bismo mogli razmotriti sedmične ažuriranja for delovi projekta gde su promene manje učeste. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`We might also consider having BLANK updates for parts of the project where changes are less frequent.`

## --blanks--

`weekly`

### --feedback--

Ovo je o nečemu što se dešava jednom nedeljno.

# --explanation--

`Weekly` Koristi se za opis događaja koji se dešava samo jednom nedeljno. Pokazuje učestalost događaja ili akcije koja se dešava svake nedelje. Primer:

`The team has weekly meetings to discuss project progress.` – To znači da se sastanci održavaju svake nedelje.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Sarah",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_18-1.mp3",
      "startTime": 1,
      "startTimestamp": 44.62,
      "finishTimestamp": 49.14
    }
  },
  "commands": [
    {
      "character": "Sarah",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sarah",
      "startTime": 1,
      "finishTime": 3.2,
      "dialogue": {
        "text": "We might also consider having weekly updates",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "startTime": 3.2,
      "finishTime": 5.52,
      "dialogue": {
        "text": "for parts of the project where changes are less frequent.",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 6.02
    }
  ]
}
```
