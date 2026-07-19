---
id: 663a47b234aefeabacb3cf75
title: Vežba 27
challengeType: 22
dashedName: task-27
lang: en-US
---
<!-- (Audio) Sophie: Naravno. Tom je visok momak sa prijateljskim osmehom. -->

# --description--

Još jedna jedinstvena osobina koju osoba može imati jeste njena visina. Može se reći, na primer, da je osoba `tall` ili `short`.
Osoba `tall` je neko ko je iznad proseka po visini. Nasprisna mu je osoba `short`, ova osoba koja je ispod proseka.

# --fillInTheBlank--

## --sentence--

`Sure. Tom is a BLANK guy with a friendly smile.`

## --blanks--

`tall`

### --feedback--

Iznad prosečne dužine.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Sophie",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "4.3-2.mp3",
      "startTime": 1,
      "startTimestamp": 15.12,
      "finishTimestamp": 17.74
    }
  },
  "commands": [
    {
      "character": "Sophie",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sophie",
      "startTime": 1,
      "finishTime": 3.62,
      "dialogue": {
        "text": "Sure. Tom is a tall guy with a friendly smile.",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 4.12
    }
  ]
}
```
