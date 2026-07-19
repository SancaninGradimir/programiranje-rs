---
id: 67d83cac8f7ced9c5df81df9
title: Vežba 144
challengeType: 22
dashedName: task-144
lang: en-US
---
<!-- (audio) Lisa: Ovo će nam pomoći da razumemo opseg proboja i šta je možda ukradeno. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`This will help us understand the extent of the breach and what they BLANK BLANK.`

## --blanks--

`might`

### --feedback--

Ovaj modalni glagol ukazuje na mogućnost ili nesigurnost u vezi sa prošlim događajem.

---

`have taken`

### --feedback--

Ovaj glagol je vrsta `Past Perfect`, koji se koristi za razgovaranje o nečemu što je moglo da se dogodi u prošlosti. Koristi dve reči.

# --explanation--  

`Might` Otkriva mogućnost.

`Have taken` je vrsta `Past Perfect` od `take`, koji se koristi za razgovor o prošlim ili potencijalnim događajima. Na primer:

`The attacker might have taken sensitive files.` - Nije sigurno, ali postoji mogućnost.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Lisa",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_14-3.mp3",
      "startTime": 1,
      "startTimestamp": 53.8,
      "finishTimestamp": 57.7
    }
  },
  "commands": [
    {
      "character": "Lisa",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Lisa",
      "startTime": 1,
      "finishTime": 4.9,
      "dialogue": {
        "text": "This will help us understand the extent of the breach and what they might have taken.",
        "align": "center"
      }
    },
    {
      "character": "Lisa",
      "opacity": 0,
      "startTime": 5.4
    }
  ]
}
```
