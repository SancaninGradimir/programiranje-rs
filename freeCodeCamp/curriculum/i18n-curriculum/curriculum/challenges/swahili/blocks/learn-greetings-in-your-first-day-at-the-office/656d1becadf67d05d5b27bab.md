---
id: 656d1becadf67d05d5b27bab
title: Lekcija 149
challengeType: 19
dashedName: task-149
lang: en-US
---
<!--
AUDIO REFERENCE:
Sophie: Hajde, Braian.
Brian: Ali je true. Ona je osoba kojoj trebaš/treba ti pomoć, idite kod if.
-->

# --description--

Kao što ste naučili o glagolu `he`, glagoli poput `she` koriste se za referisanje na žensku osobu. Pomaže da se izbegne ponavljanje reči u razgovoru. Pogledajte ovaj deo dijaloga:

- Sophie: `Oh, come on, Brian.`

- Brian: `But it's true. She's the person to go to if you need help.`

Ovde se `she` koristi kada Brian govori o Sophie. Umesto da ponavlja njeno ime, Brian koristi zamenicu `she` kako bi razgovor bio prirodniji i izbegao ponavljanje.

# --questions--

## --text--

U ovom razgovoru, koja reč Brian koristi da se odnosi na Sofiju bez ponavljanja njenog imena?

## --answers--

`he`

### --feedback--

`He` Koristi se za referisanje na muškarca.

---

`they`

### --feedback--

`They` je množina i koristi se za referisanje na više od jedne osobe.

---

`it`

### --feedback--

`It` Obično se koristi za predmete ili životinje.

---

`she`

## --video-solution--

4

# --scene--

```json
{
  "setup": {
    "background": "cafe.png",
    "characters": [
      {
        "character": "Sophie",
        "position": { "x": 25, "y": 0, "z": 1.3 },
        "opacity": 0
      },
      {
        "character": "Brian",
        "position": { "x": 75, "y": 15, "z": 1.2 },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "1.1-4.mp3",
      "startTime": 1,
      "startTimestamp": 22.6,
      "finishTimestamp": 28.16
    }
  },
  "commands": [
    {
      "character": "Sophie",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Brian",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sophie",
      "startTime": 1,
      "finishTime": 2.4,
      "dialogue": {
        "text": "Oh, come on, Brian.",
        "align": "left"
      }
    },
    {
      "character": "Brian",
      "startTime": 3.3,
      "finishTime": 6.35,
      "dialogue": {
        "text": "But it's true. She's the person to go to if you need help.",
        "align": "right"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 6.85
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 6.85
    }
  ]
}
```
