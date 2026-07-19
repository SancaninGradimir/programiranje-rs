---
id: 679d3cfdaca2eb81f8d81cf7
title: Vežba 97
challengeType: 19
dashedName: task-97
lang: en-US
---
<!-- (Audio) Maria: Možete li da pogledate i saznate šta uzrokuje problem? -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Šta Marija traži od Džejmsa da uradi?

## --answers--

Popraviti problem odmah.

### --feedback--

Marija ne traži od Jemsa da popravi problem odmah.

---

Izvestite o problemu klijentu.

### --feedback--

Maria nije obavestila klijenta.

---

Istraživanje problema.

---

Trenutno ignorišem problem.

### --feedback--

Maria ne traži od Jamesa da ignoriše problem.

## --video-solution--

3

# --explanation--

`Can` Koristi se često za ljubazno traženje, molbu nekoga da nešto uradi na neformalan način. Primer:

`Can you send me the report by noon?` - Ovo je pristojan način da se nekome zatraži slanje izveštaja.

Tokom ovog razgovora, Marija traži od Jamesa da ispita problem.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
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
      "filename": "B1_8-3.mp3",
      "startTime": 1,
      "startTimestamp": 35.5,
      "finishTimestamp": 37.56
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
      "finishTime": 3.06,
      "dialogue": {
        "text": "Can you look into it and see what's causing the problem?",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 3.56
    }
  ]
}
```
