---
id: 657ec6ac4de4eac8bab2f2a7
title: Vežba 39
challengeType: 22
dashedName: task-39
lang: en-US
---
<!-- (Audio) Linda: U redu, znači to je sastanak na biciklu. -->

# --description--

Reč `date` se može koristiti u različitim kontekstima. Iako često odnosi na romantični sastanak između dve osobe, takođe može značiti samo sastanak ili događaj koji je organizovan između prijatelja ili kolega sa posla. Na primer:

`Let's set a date for our next meeting.` – Ovde se `date` koristi u nekonvencionalnom, neromantičnom značenju i označava određivanje datuma sastanka.

# --fillInTheBlank--

## --sentence--

`Okay, it's a BLANK BLANK then.`

## --blanks--

`bike`

### --feedback--

Ova reč opisuje vrstu planirane aktivnosti i pokazuje da je u pitanju vožnja bicikla.

---

`date`

### --feedback--

Ova reč se odnosi na zakazan sastanak ili događaj.

# --scene--

```json
{
  "setup": {
    "background": "company1-reception.png",
    "characters": [
      {
        "character": "Linda",
        "position": {"x":50,"y":0,"z":1.4},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.2-2.mp3",
      "startTime": 1,
      "startTimestamp": 44.64,
      "finishTimestamp": 46.58
    }
  },
  "commands": [
    {
      "character": "Linda",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Linda",
      "startTime": 1,
      "finishTime": 2.94,
      "dialogue": {
        "text": "Okay, it's a bike date then.",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "opacity": 0,
      "startTime": 3.44
    }
  ]
}
```
