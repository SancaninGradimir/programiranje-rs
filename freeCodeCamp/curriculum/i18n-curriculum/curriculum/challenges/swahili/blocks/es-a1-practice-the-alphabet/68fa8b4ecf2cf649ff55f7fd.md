---
id: 68fa8b4ecf2cf649ff55f7fd
title: Vežba 2
challengeType: 19
dashedName: task-2
lang: es
---

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Koje je drugo slovo prikazano u ovom zvuku?

## --answers--

`b`

### --feedback--

Slovo `b` ima različite zvukove.

---

`x`

---

`z`

### --feedback--

Slovo `z` ima različite zvukove.

---

`m`

### --feedback--

Slova `m` imaju različite zvukove.

## --video-solution--

2

# --explanation--

Ovo su tri slova koja se izgovaraju u zvuku: `b`, `x`, `z`.

Herufi `x` je drugi. Zbog toga, `x` je tačan odgovor.

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
      "filename": "ES_A1_alphabet_practice.mp3",
      "startTime": 1,
      "startTimestamp": 8,
      "finishTimestamp": 12.96
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
      "finishTime": 1.67,
      "dialogue": {
        "text": "b",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 3.26,
      "finishTime": 4.05,
      "dialogue": {
        "text": "x",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 5.21,
      "finishTime": 5.96,
      "dialogue": {
        "text": "z",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 6.46
    }
  ]
}
```
