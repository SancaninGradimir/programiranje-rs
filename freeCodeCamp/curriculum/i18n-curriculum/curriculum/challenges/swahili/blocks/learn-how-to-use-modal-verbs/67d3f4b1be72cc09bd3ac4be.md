---
id: 67d3f4b1be72cc09bd3ac4be
title: Vežba 4
challengeType: 22
dashedName: task-4
lang: en-US
---
<!-- (Audio) Jessica: Postoji nekoliko stvari koje morate do da biste osigurali usklađenost. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`There are a few things you BLANK BLANK to ensure compliance.`

## --blanks--

`must`

### --feedback--

Ovaj modalni glagol izražava neophodnost ili obavezu.

---

`do`

### --feedback--

Ova sintaksa prati `must` da prikaže potrebnu akciju.

# --explanation--

`Must` je modalni glagol koji se koristi za pokazivanje neophodnosti ili obaveze. Primer:

- `You must wear a seatbelt while driving.` - Potrebno je.

- `We must submit the report by Friday.` - To je neophodno.

Modalni glagoli su uvek praćeni osnovnim oblicima glagola (bez `to`).

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Jessica",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_14-1.mp3",
      "startTime": 1,
      "startTimestamp": 4.02,
      "finishTimestamp": 6.62
    }
  },
  "commands": [
    {
      "character": "Jessica",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Jessica",
      "startTime": 1,
      "finishTime": 3.6,
      "dialogue": {
        "text": "There are a few things you must do to ensure compliance.",
        "align": "center"
      }
    },
    {
      "character": "Jessica",
      "opacity": 0,
      "startTime": 4.1
    }
  ]
}
```
