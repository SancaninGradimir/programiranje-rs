---
id: 67efd8debbd3992137adbf7f
title: Vežba 91
challengeType: 22
dashedName: task-91
lang: en-US
---
<!-- (Audio) Brian: Kako vam sve ide sa vaše strane? -->

# --instructions--

Poslušaj zvuk i dovrši rečenicu ispod.

# --fillInTheBlank--

## --sentence--

`How's everything going on your BLANK?`

## --blanks--

`end`

### --feedback--

Vođeno sa `on your`, ovo se tiče stanja, strane ili mesta nekoga.

# --explanation--

`On your end` Koristi se za ukazivanje na stanje neke osobe ili događaj koji joj se dešava, najčešće u razgovoru ili profesionalnom kontekstu. Primer:

`Let me know if you need any help on your end.` – Ovo znači da govornik želi znati da li neko drugi treba pomoć sa poslom ili u vezi sa njegovom situacijom.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Brian",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_15-3.mp3",
      "startTime": 1,
      "startTimestamp": 5.56,
      "finishTimestamp": 7.28
    }
  },
  "commands": [
    {
      "character": "Brian",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Brian",
      "startTime": 1,
      "finishTime": 2.72,
      "dialogue": {
        "text": "How's everything going on your end?",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 3.22
    }
  ]
}
```
