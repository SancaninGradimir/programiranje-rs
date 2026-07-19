---
id: 68c58aa8c9d2a2dfea45deb7
title: Vežba 7
challengeType: 19
dashedName: task-7
lang: es
---
<!-- (Audio) Elena: Vidimo se -->

# --description--

Elena ti govori zbogom, ali nada se da ćeš je videti opet.

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Da li je to nešto što Elena kaže/koristi, "vidimo se kasnije"?

## --answers--

`Hasta luego.`

---

`Adiós`

### --feedback--

Ovo je zbogom, ali je najkonačniji. Govornik koristi različite izraze.

---

`Chao`

### --feedback--

Ovo je takođe neformalan način da se kaže zbogom, ali nije onaj koji je u zvuku.

---

`¡Hola!`

### --feedback--

Ovo znači „Habari“, uobičajena pozdrava, ali nije ono što Elena kaže.

## --video-solution--

1

# --explanation--

`Hasta luego` Ovo je uobičajen način za oproštaj na španskom. Prevedeno je kao "Tutaonana baadaye".

Koristi se kada očekuješ da ćeš nekoga ponovo videti, ali ne mora nužno brzo. Na primer:

`Hasta luego, Marta.` – Vidimo se kasnije, Marta.

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
    "characters": [
      {
        "character": "Elena",
        "position": {
          "x": 50,
          "y": 25,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_greetings_in_the_morning.mp3",
      "startTime": 1,
      "startTimestamp": 5.68,
      "finishTimestamp": 6.64
    }
  },
  "commands": [
    {
      "character": "Elena",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Elena",
      "startTime": 1,
      "finishTime": 1.96,
      "dialogue": {
        "text": "Hasta luego.",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 2.46
    }
  ]
}
```
