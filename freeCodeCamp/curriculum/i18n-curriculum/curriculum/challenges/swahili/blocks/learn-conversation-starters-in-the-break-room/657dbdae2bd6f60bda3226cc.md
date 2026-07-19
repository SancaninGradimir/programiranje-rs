---
id: 657dbdae2bd6f60bda3226cc
title: Vežba 81
challengeType: 22
dashedName: task-81
lang: en-US
---
<!-- (audio) Tom: Reci mi o našim sastancima tima, Sofije. Da li se dešavaju svake nedelje? -->

# --description--

Ako želite znati koliko puta se nešto dešava, možete koristiti `every` praćen vremenskim periodom kao što su `day`, `week`, ili `year`.

Tokom razgovora, Tom pita koliko često se održavaju timski sastanci.

# --instructions--

Poslušaj zvuk i dovrši rečenicu ispod.

# --fillInTheBlank--

## --sentence--

`Tell me about our team meetings, Sophie. Do they happen BLANK week?`

## --blanks--

`every`

### --feedback--

Ova fraza se koristi za pitanje da li se sastanci održavaju svake nedelje.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Tom",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "1.3-4.mp3",
      "startTime": 1,
      "startTimestamp": 0.00,
      "finishTimestamp": 3.70
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
      "finishTime": 4.70,
      "dialogue": {
        "text": "Tell me about our team meetings, Sophie. Do they happen every week?",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 5.20
    }
  ]
}
```
