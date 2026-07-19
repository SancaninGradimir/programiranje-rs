---
id: 663a4d6ec33accaf2ec7be49
title: Vežba 28
challengeType: 22
dashedName: task-28
lang: en-US
---
<!-- (Audio) Sophie: Naravno. Tom je visok momak sa prijateljskim osmehom. -->

# --description--

`smile` To je ono što se dešava kada podigneš uglove usana kako bi pokazao sreću. To je nešto što radiš sa svojim licem kad si srećan ili želiš da izgledaš dobro.

`Friendly` opisuje osobu koja je velikodušna, privlačna i sa kojom je lako razgovarati. Osoba sa prijateljskim osmehom čini druge da se osećaju dobro i srećno.

`A friendly smile` To je osmeh koji pokazuje da postaješ velikodušan i prijatan. Čini druge da se osećaju dobro i pokazuje da želiš prijateljstvo.

Slušaj razgovore i popuni praznine.

# --fillInTheBlank--

## --sentence--

`Sure. Tom is a tall guy with a BLANK BLANK.`

## --blanks--

`friendly`

### --feedback--

Ove osobine opisuju osobu koja je prijatna, sa kojom je lako razgovarati i koja je ugodna/prijateljski nastrojena.

---

`smile`

### --feedback--

Radnja koju izvodiš kada želiš da pokažeš sreću svojim usnama.

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
