---
id: 657fbde9a43e35ec1ebafe56
title: Vežba 77
challengeType: 19
dashedName: task-77
lang: en-US
---
<!-- (Audio) Sarah: Sljedećeg meseca je velika konvencija. Da li bi želeo/želela da dođeš? -->

# --description--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Izjava `Would you like to come?` šta otkriva u ovom kontekstu?

## --answers--

Ignorisati pozivnicu.

### --feedback--

Ovaj izraz ne znači reći "ne". Radi se o davanju pozivnice/poziva.

---

Dati poziv.

---

Pokazivanje zahvalnosti.

### --feedback--

Ovaj izraz ne znači "asante". Radi se o pozivanju nekog.

---

Tražiti informacije.

### --feedback--

Ovaj izraz nije pitanje za dobijanje informacija, već je poziv časti na događaj.

## --video-solution--

2

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Sarah",
        "position": {"x":50,"y":0,"z":1.4},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.2-4.mp3",
      "startTime": 1,
      "startTimestamp": 18.70,
      "finishTimestamp": 21.36
    }
  },
  "commands": [
    {
      "character": "Sarah",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sarah",
      "startTime": 1,
      "finishTime": 3.66,
      "dialogue": {
        "text": "There's a big convention next month. Would you like to come?",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 4.16
    }
  ]
}
```
