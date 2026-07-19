---
id: 67ed38f77f1fbd02acdcf5ff
title: Vežba 53
challengeType: 22
dashedName: task-53
lang: en-US
---
<!-- (Audio) Lisa: Naravno, Mark. Šta se dešava? -->

# --instructions--

Poslušaj zvuk i dovrši rečenicu ispod.

# --fillInTheBlank--

## --sentence--

`Sure, Mark. What's BLANK?`

## --blanks--

`going on`

### --feedback--

Ova dvoslovna fraza se koristi za pitala o tome šta se dešava ili kakva je situacija. Prva reč završava se sa `-ing`.

# --explanation--

`What's going on?` To je uobičan način da pitaš nekoga šta se dešava, kakva je situacija, ili o nekom problemu ili incidentu. Primer:

`What's going on at the meeting?` – Osoba pita šta se dešava tokom sastanka.

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
      "filename": "B1_16-2.mp3",
      "startTime": 1,
      "startTimestamp": 7.62,
      "finishTimestamp": 9.1
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
      "finishTime": 2.48,
      "dialogue": {
        "text": "Sure, Mark. What's going on?",
        "align": "center"
      }
    },
    {
      "character": "Lisa",
      "opacity": 0,
      "startTime": 2.98
    }
  ]
}
```
