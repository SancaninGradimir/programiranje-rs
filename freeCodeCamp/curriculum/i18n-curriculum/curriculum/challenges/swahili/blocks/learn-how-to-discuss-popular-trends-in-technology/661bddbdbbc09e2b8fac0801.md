---
id: 661bddbdbbc09e2b8fac0801
title: Lekcija 76
challengeType: 22
dashedName: task-76
lang: en-US
---
<!-- (Audio) Alice: Takođe se koristi for za verifikaciju identiteta na aerodromima i sigurnosnim objektima. -->

# --description--

Konektor `at` prikazuje lokaciju na mapi. Opisuje specifičnu oblast ili poziciju. Pomaže vam da razumete gde se nešto dešava ili gde se neko nalazi.

Primeri:

`We'll meet at the coffee shop.` (u ovoj rečenici, `at` se koristi za određivanje mesta gde će se održati sastanak - kafići).

`I'll be waiting for you at the bus stop.` (`at` Koristi se ovde da pokaže mesto gde će neko čekati – autobuska stanica).

Slušajte rečenice u praznim prostorima.

# --fillInTheBlank--

## --sentence--

`Also, it's used for identity verification BLANK airports and secure facilities.`

## --blanks--

`at`

### --feedback--

Konektor koji se koristi za pomoć u razumevanju gde je nešto locirano ili kada nastaje.

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Alice",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "4.2-4.mp3",
      "startTime": 1,
      "startTimestamp": 15.22,
      "finishTimestamp": 19.04
    }
  },
  "commands": [
    {
      "character": "Alice",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Alice",
      "startTime": 1,
      "finishTime": 4.82,
      "dialogue": {
        "text": "Also, it's used for identity verification at airports and secure facilities.",
        "align": "center"
      }
    },
    {
      "character": "Alice",
      "opacity": 0,
      "startTime": 5.32
    }
  ]
}
```
