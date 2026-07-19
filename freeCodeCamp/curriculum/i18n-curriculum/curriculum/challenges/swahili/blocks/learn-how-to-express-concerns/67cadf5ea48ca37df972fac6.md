---
id: 67cadf5ea48ca37df972fac6
title: Vežba 124
challengeType: 19
dashedName: task-124
lang: en-US
---
<!-- (Audio) Maria: Prvo, zaista im treba više podrške. -->

# --instructions--

Slušaj audio i odgovori na pitanje koje se nalazi dole.

# --questions--

## --text--

Šta Marija spominje kao najvažniji zahtev od tima?

## --answers--

Trebaju im više pomoći.

---

Žele duže trajanje poslednje.

### --feedback--

Maria mora da produži rok.

---

Želeće da smanje broj vežbi.

### --feedback--

Marija mora da smanji broj vežbi.

---

Traže više sastanaka.

### --feedback--

Marija ne treba dodatnih sastanaka.

## --video-solution--

1

# --explanation--

`First` Koristi se kada je potrebno da se aktivnosti navedu u redosledu važnosti ili vremena. U ovom slučaju, Marija spominje ono što tim treba, počevši od onoga što izgleda kao najvažniji zahtev (dobijanje više pomoći). Drugi primer:

`First, we should analyze the problem. Then, we can discuss solutions.` - To znači da analiziranje problema dolazi prije bilo čega drugog.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Maria",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_12-3.mp3",
      "startTime": 1,
      "startTimestamp": 25.26,
      "finishTimestamp": 26.92
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
      "finishTime": 2.66,
      "dialogue": {
        "text": "First, they really need more support.",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 3.16
    }
  ]
}
```
