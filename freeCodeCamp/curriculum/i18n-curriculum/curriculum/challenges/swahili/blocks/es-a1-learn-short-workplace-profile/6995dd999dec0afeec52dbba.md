---
id: 6995dd999dec0afeec52dbba
title: Vežba 13
challengeType: 22
dashedName: task-13
lang: es
---
<!-- (Audio) Luna: Radi u kancelariji u Medellínu. -->

# --description--

Reč `oficina` znači "kancelarija".

Luna koristi ovu reč da odgovori na pitanje Sebastijana.

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`Trabaja en la BLANK de Medellín.`

## --blanks--

`oficina`

### --feedback--

Ova reč govori o mestu gde ljudi rade.

# --explanation--

Luna kaže da Carlos `trabaja en la oficina de Medellín`.

To znači da radi u kancelariji u Medellínu.

Treba da napišete reč `oficina` ili dovršite rečenicu.

# --scene--

```json
{
  "setup": {
    "background": "interview-room2.png",
    "characters": [
      {
        "character": "Sebastián",
        "position": {
          "x": -25,
          "y": 21,
          "z": 1.5
        },
        "opacity": 1
      },
      {
        "character": "Luna",
        "position": {
          "x": 125,
          "y": 21,
          "z": 1.6
        },
        "opacity": 1
      },
      {
        "character": "Carlos",
        "position": {
          "x": 125,
          "y": 10,
          "z": 1.2
        },
        "opacity": 1
      }
    ],
    "audio": {
      "filename": "ES_A1_basti_asks_luna_about_carlos_dialogue.mp3",
      "startTime": 1,
      "startTimestamp": 10.95,
      "finishTimestamp": 13.66
    },
    "alwaysShowDialogue": false
  },
  "commands": [
    {
      "character": "Sebastián",
      "position": {
        "x": 22,
        "y": 21,
        "z": 1.5
      },
      "startTime": 0
    },
    {
      "character": "Luna",
      "position": {
        "x": 46,
        "y": 21,
        "z": 1.6
      },
      "startTime": 0.5
    },
    {
      "character": "Carlos",
      "position": {
        "x": 81,
        "y": 10,
        "z": 1.2
      },
      "startTime": 0.7
    },
    {
      "character": "Luna",
      "startTime": 1,
      "finishTime": 3.71,
      "dialogue": {
        "text": "Trabaja en la oficina de Medellín.",
        "align": "left"
      }
    },
    {
      "character": "Carlos",
      "position": {
        "x": 125,
        "y": 10,
        "z": 1.2
      },
      "startTime": 4.21
    },
    {
      "character": "Luna",
      "position": {
        "x": 125,
        "y": 21,
        "z": 1.6
      },
      "startTime": 4.71
    },
    {
      "character": "Sebastián",
      "position": {
        "x": -25,
        "y": 21,
        "z": 1.5
      },
      "startTime": 4.91
    }
  ]
}
```
