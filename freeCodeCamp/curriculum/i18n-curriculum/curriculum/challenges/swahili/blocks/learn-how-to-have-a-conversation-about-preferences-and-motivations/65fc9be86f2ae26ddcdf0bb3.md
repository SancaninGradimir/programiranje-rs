---
id: 65fc9be86f2ae26ddcdf0bb3
title: Vežba 36
challengeType: 19
dashedName: task-36
lang: en-US
---


<!-- (Audio) Maria: "But do you know what else is great? Seeing the team's enthusiasm after solving these issues. When you see the team inspired, it can boost your motivation." -->

# --description--

Poslušajte Mariju i odgovorite na pitanje.

# --questions--

## --text--

Šta bi moglo da poveća njihovu motivaciju prema Mariji?

## --answers--

Imati veliki tim

### --feedback--

Razmislite o tome šta tačno čini tim motivisanijim, a ne samo o njegovoj veličini.

---

Kupumzika kwa muda mrefu

### --feedback--

Razmislite da li su pauze pomenute kao način za povećanje motivacije.

---

Videti motivisan tim.

---

Rešiti probleme brzo

### --feedback--

Razmislite da li Marija ističe brzinu rešavanja problema kao izvor motivacije.

## --video-solution--

3

# --scene--

```json
{
  "setup": {
    "background": "cafe.png",
    "characters": [
      {
        "character": "Maria",
        "position": {"x":50,"y":0,"z":1.5},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "4.1-1.mp3",
      "startTime": 1,
      "startTimestamp": 60.96,
      "finishTimestamp": 68.80
    }
  },
  "commands": [
    {
      "character": "Maria",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Maria",
      "startTime": 1,
      "finishTime": 5.7,
      "dialogue": {
        "text": "But do you know what else is great? Seeing the team's enthusiasm after solving these issues.",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "startTime": 6.16,
      "finishTime": 8.84,
      "dialogue": {
        "text": "When you see the team inspired, it can boost your motivation.",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 9.34
    }
  ]
}
```
