---
id: 65dabf5eb13aae9ff91c40a2
title: Vežba 108
challengeType: 22
dashedName: task-108
lang: en-US
---
<!-- (Audio) Sophie: I ne morate da tražite for skuplja rešenja for to. -->

# --description--

``search for`` znači tražiti nešto ili pokušati da se nešto dobije kroz istraživanje. Na primer, ``I need to search for my lost keys`` znači tražiti ključeve.

Reč `expensive` opisuje nešto što košta mnogo novca. Na primer, `That car is too expensive for me` znači da automobil košta mnogo novca.

`solution` je odgovor na problem ili način rešavanja problema.

`Doesn't/don't have to` Koristi se da pokaže da nema potrebe ili obaveze da se nešto uradi.

# --fillInTheBlank--

## --sentence--

`And you don't have to BLANK BLANK BLANK BLANK for that.`

## --blanks--

`search`

### --feedback--

Ova reč znači tražiti nešto pažljivo.

---

`for`

### --feedback--

Ovaj konektor se koristi zajedno sa `search` da bi prikazao šta pokušavate da pretražite.

---

`expensive`

### --feedback--

Ova reč opisuje nešto što košta mnogo novca.

---

`solutions`

### --feedback--

Ovo su odgovori ili načini rešavanja problema.

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Sophie",
        "position": {"x":50,"y":0,"z":1.4},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.3-5.mp3",
      "startTime": 1,
      "startTimestamp": 32.52,
      "finishTimestamp": 35.22
    }
  },
  "commands": [
    {
      "character": "Sophie",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sophie",
      "startTime": 1,
      "finishTime": 3.70,
      "dialogue": {
        "text": "And you don't have to search for expensive solutions for that.",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 4.20
    }
  ]
}
```
