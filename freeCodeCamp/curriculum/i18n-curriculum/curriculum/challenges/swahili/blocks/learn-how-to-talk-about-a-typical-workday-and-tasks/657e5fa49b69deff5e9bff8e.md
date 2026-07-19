---
id: 657e5fa49b69deff5e9bff8e
title: Vežba 105
challengeType: 22
dashedName: task-105
lang: en-US
---
<!-- (audio) James: Apsolutno. Ako primetite bilo kakve sigurnosne proboje ili incidente, morate ih odmah da prijavite. -->

# --description--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`Absolutely. If you see any security breaches or incidents, you BLANK report them BLANK.`

## --blanks--

`have to`

### --feedback--

Ove dve reči ukazuju na obavezu da se nešto učini.

---

`immediately`

### --feedback--

Ova reč znači odmah, bez kašnjenja.

# --scene--

```json
{
  "setup": {
    "background": "interview-room2.png",
    "characters": [
      {
        "character": "James",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "2.1-4.mp3",
      "startTime": 1,
      "startTimestamp": 43.56,
      "finishTimestamp": 49.64
    }
  },
  "commands": [
    {
      "character": "James",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "James",
      "startTime": 1,
      "finishTime": 7.08,
      "dialogue": {
        "text": "Absolutely. If you see any security breaches or incidents, you have to report them immediately.",
        "align": "center"
      }
    },
    {
      "character": "James",
      "opacity": 0,
      "startTime": 7.58
    }
  ]
}
```
