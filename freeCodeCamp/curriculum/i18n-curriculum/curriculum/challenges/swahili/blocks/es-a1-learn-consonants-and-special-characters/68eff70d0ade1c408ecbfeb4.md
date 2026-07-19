---
id: 68eff70d0ade1c408ecbfeb4
title: Vežba 6
challengeType: 22
dashedName: task-6
lang: es
---
<!-- (Audio) Julieta: d -->

# --description--

Karakter `d` se naziva `de`.

Na početku reči ili nakon `l` ili `n`, njegov zvuk je oštriji, kao u reči `dos` ("dva"). Međutim, on je mekši između samoglasnika, kao u reči `idea` ("ideja").

Primer je `doctor` („doktori“).

# --instructions--

Slušajte zvuk i napišite slova u praznom prostoru ispod.

# --fillInTheBlank--

## --sentence--

`BLANK`

## --blanks--

`d`

### --feedback--

Ovo je četvrto slovo u alfabetu.

# --scene--

```json
{
  "setup": {
    "background": "living-room.png",
    "characters": [
      {
        "character": "Julieta",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_alphabet.mp3",
      "startTime": 1,
      "startTimestamp": 8.39,
      "finishTimestamp": 9.39
    }
  },
  "commands": [
    {
      "character": "Julieta",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Julieta",
      "startTime": 1,
      "finishTime": 2,
      "dialogue": {
        "text": "d",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 2.5
    }
  ]
}
```
