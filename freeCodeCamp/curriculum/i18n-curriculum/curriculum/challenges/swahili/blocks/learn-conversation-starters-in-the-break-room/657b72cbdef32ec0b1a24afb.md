---
id: 657b72cbdef32ec0b1a24afb
title: Vežba od 30
challengeType: 19
dashedName: task-30
lang: en-US
---
<!-- (audio) Tom: Vau! Električno ili akustično? Sophie: Električno, for sigurno. -->

# --description--

Kada čujete o različitim vrstama gitara, mogu se pomenuti dve popularne vrste: `electric` i `acoustic`.

`Electric guitars` Normalno im je potreban uređaj koji se zove amplifikator kako bi se čuo glasniji zvuk, dok `acoustic guitars` mogu da se čuju bez dodatne opreme.

# --questions--

## --text--

Koja vrsta gitare koju Sophie preferira?

## --answers--

Elektronska gitara

---

Akustična gitara

### --feedback--

Sofija jasno pokazuje kakvu gitaru voli. Ona koju preferira zahteva pojačalo da bi zvučala glasanije.

## --video-solution--

1

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Tom",
        "position": { "x": 50, "y": 15, "z": 1.2 },
        "opacity": 0
      },
      {
        "character": "Sophie",
        "position": { "x": 50, "y": 0, "z": 1.4 },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "1.3-2.mp3",
      "startTime": 1,
      "startTimestamp": 15.4,
      "finishTimestamp": 19.52
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
      "startTime": 1.1,
      "finishTime": 3.1,
      "dialogue": {
        "text": "Wow! Electric or acoustic?",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 3.2
    },
    {
      "character": "Sophie",
      "opacity": 1,
      "startTime": 3.3
    },
    {
      "character": "Sophie",
      "startTime": 3.3,
      "finishTime": 5.12,
      "dialogue": {
        "text": "Electric, for sure.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 5.62
    }
  ]
}
```
