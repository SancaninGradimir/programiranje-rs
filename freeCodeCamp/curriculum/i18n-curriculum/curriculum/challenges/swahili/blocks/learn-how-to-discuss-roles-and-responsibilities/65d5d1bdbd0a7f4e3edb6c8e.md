---
id: 65d5d1bdbd0a7f4e3edb6c8e
title: Vežba 35
challengeType: 19
dashedName: task-35
lang: en-US
---
<!-- (Audio) Tom: Hej, da li si ikada radio sa Anom from HR? -->

# --description--

Slušaj zvuk i odgovori na pitanje.

# --questions--

## --text--

Šta Tom pita?

## --answers--

Da li Anna radi u HR-u?

### --feedback--

Pitanje Toma se odnosi na to da li je ta osoba ikada radila sa Annom, a ne o njenoj ulozi.

---

Da li je Alice ikada imala iskustvo rada sa Anom?

---

Da li volite da radite u HR-u?

### --feedback--

Pitanje se tiče prethodnog iskustva sa Annom, a ne ličnih osećanja o radu u HR-u.

---

Da li je Anna ikada radila?

### --feedback--

Fokus Toma pitanja je iskustvo slušaoca sa Anom, a ne istorija njenog rada.

## --video-solution--

2

# --scene--

```json
{
  "setup": {
    "background": "company1-reception.png",
    "characters": [
      {
        "character": "Tom",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.3-2.mp3",
      "startTime": 1,
      "startTimestamp": 0.00,
      "finishTimestamp": 2.88
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
      "finishTime": 3.88,
      "dialogue": {
        "text": "Hey, have you ever worked with Anna from HR?",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 4.38
    }
  ]
}
```
