---
id: 657fb5afeeba2de5d01dda0e
title: Vežba 81
challengeType: 19
dashedName: task-81
lang: en-US
---
<!-- (Audio) Tom: Hvala na pozivanju for, Sara. Cijenim to, ali nisam baš zainteresovan za naučanu fantastiku. -->

# --description--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Kako Tom reaguje na poziv Sare vezan za ugovor o naučnoj fantastici (sci-fi)?

## --answers--

Prihvata odmah.

### --feedback--

Tom ne prihvaća poziv. Spominje nedostatak interesa za nauku o dizajnu.

---

Odbija sa poštovanjem.

---

Pokazuje nedostatak interesa.

### --feedback--

Iako Tom pokazuje nedostatak interesa, njegov odgovor je više o odbijanju poziva sa poštovanjem nego samo pokazivanju nedostatka interesa.

---

Ignoriše pozivnicu.

### --feedback--

Tom prihvata poziv i odgovara, pa ga ne ignoriše.

## --video-solution--

2

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Tom",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.2-4.mp3",
      "startTime": 1,
      "startTimestamp": 22.06,
      "finishTimestamp": 26.54
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
      "finishTime": 5.48,
      "dialogue": {
        "text": "Thanks for the invite, Sarah. I appreciate it, but I'm not really into sci-fi.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 5.98
    }
  ]
}
```
