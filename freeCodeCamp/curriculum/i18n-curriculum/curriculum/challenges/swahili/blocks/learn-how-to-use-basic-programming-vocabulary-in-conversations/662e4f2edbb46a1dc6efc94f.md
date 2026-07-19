---
id: 662e4f2edbb46a1dc6efc94f
title: Vežba 37
challengeType: 22
dashedName: task-37
lang: en-US
---
<!-- (Audio) Tom: Ne brini. Debagovanje je uobičajni izazov for programerima. -->

# --description--

`Common` Koristi se za opis stvari koje se dešavaju često ili što je uobičajeno među velikim brojem ljudi. Na primer, `Colds are a common illness during the winter.` To znači da je to uobičajen zdravstveni problem s kojim se mnogo ljudi susreće u ovom periodu godine.

`Challenge` Odnosi se na vežbu ili situaciju koja zahteva poseban napor za postizanje jer je teška. Na primer, `Learning to ride a bike was a big challenge for her at first.` Ova rečenica opisuje kako je učenje vožnje bicikla bilo izazovno na početku.

# --fillInTheBlank--

## --sentence--

`Don't worry. Debugging is a BLANK BLANK for programmers.`

## --blanks--

`common`

### --feedback--

Ovaj pridev opisuje nešto što se dešava često ili je uobičajeno unutar grupe.

---

`challenge`

### --feedback--

Ovo se odnosi na vežbu ili težak problem koji zahteva napor da bi se rešio ili savladao.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Tom",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "5.1-2.mp3",
      "startTime": 1,
      "startTimestamp": 5.02,
      "finishTimestamp": 8.18
    }
  },
  "commands": [
    {
      "character": "Tom",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Tom",
      "startTime": 1,
      "finishTime": 4.16,
      "dialogue": {
        "text": "Don't worry. Debugging is a common challenge for programmers.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 4.66
    }
  ]
}
```
