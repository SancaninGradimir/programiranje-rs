---
id: 695fea6173bbffcaa3ffc36d
title: Vežba 10
challengeType: 19
dashedName: task-10
lang: es
---
<!-- (Audio) Esteban: Kako se zoveš? -->

# --description--

Postoje dva poznata načina da se pita ime nekoga na španskom.

Oba se koriste u svakodnevnom španskom i imaju isto značenje. Njihova razlika je samo u strukturi.

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Koji od sledećih pitanja **ličilo je** na ono što čujete u zvuku?

## --answers--

`¿Cuál es tu nombre?`

---

`¿Dónde vives?`

### --feedback--

Ovo pitanje pita gde neko živi.

---

`¿Cuál es tu apellido?`

### --feedback--

Ovo pita za ime plemena osobe.

---

`¿Tienes apodo?`

### --feedback--

Ovo pita da li osoba ima nadimak.

## --video-solution--

1

# --explanation--

Esteban kaže `¿Cómo te llamas?`. Ovo je jedan od najpoznatijih načina da se pita ime nekoga na španski. Drugo popularno pitanje sa istim značenjem je:

`¿Cuál es tu nombre?`

Oba pitanja se koriste u svakodnevnom španskom da bi se pitalo ime osobe. Razlika im je samo u strukturi:

- `¿Cómo te llamas?` koristi glagol `llamarse` (nazvan).
- `¿Cuál es tu nombre?` pita direktno za ime kao imenicu.

U ovom vežbanju, tačan odgovor je opcija koja traži ime osobe.

# --scene--

```json
{
  "setup": {
    "background": "interview-room1.png",
    "characters": [
      {
        "character": "Esteban",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_personal_details_just_questions.mp3",
      "startTime": 1,
      "startTimestamp": 43.02,
      "finishTimestamp": 44.53
    }
  },
  "commands": [
    {
      "character": "Esteban",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Esteban",
      "startTime": 1,
      "finishTime": 2.51,
      "dialogue": {
        "text": "¿Cómo te llamas?",
        "align": "center"
      }
    },
    {
      "character": "Esteban",
      "opacity": 0,
      "startTime": 2.61
    }
  ]
}
```
