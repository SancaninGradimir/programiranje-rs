---
id: 65a4f2c2d1bbdfbe82cb3fdd
title: Vežba 94
challengeType: 22
dashedName: task-94
lang: en-US
---
<!-- (Audio) Bob: Hej, Sara, do znaš šta me zaista uzbuđuje u tehnologiji? To su sve ti neverovatni gadžeti! -->

# --description--

`gadget` je mali alat ili uređaj, često pametan ili nov, koji obavlja neku funkciju ili pojednostavljuje nešto.

U tehnologiji, mali uređaji mogu uključivati stvari kao što su mobilni telefoni, moderne satove za ručnu upotrebu, ili bilo koji elektronski uređaj sa kreativnim i lepim dizajnom.

Na primer, `My new fitness tracker gadget helps me keep track of my steps and exercise.`

# --fillInTheBlank--

## --sentence--

`Hey, Sarah, do you know what really BLANK me excited about tech? It's all BLANK amazing BLANK!`

## --blanks--

`gets`

### --feedback--

Ova reč znači nešto što izaziva osećaj ili reakciju. Ovde se koristi za opisivanje onoga što Bob čini srećnim u vezi sa tehnologijom. Konjugovano je za treće lice množine.

---

`those`

### --feedback--

Ova reč se koristi za prikazivanje specifičnih stvari koje su pomenute, u ovom slučaju, manjih uređaja. To je množina od `that`.

---

`gadgets`

### --feedback--

Ova reč se odnosi na male elektronske uređaje ili alate koji su važni ili zanimljivi. Često se koristi za razgovor o fascinantnim tehnološkim predmetima. Nalazi se u množini.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Bob",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "4.1-4.mp3",
      "startTime": 1,
      "startTimestamp": 0.00,
      "finishTimestamp": 6.08
    }
  },
  "commands": [
    {
      "character": "Bob",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Bob",
      "startTime": 1,
      "finishTime": 7.08,
      "dialogue": {
        "text": "Hey, Sarah, do you know what really gets me excited about tech? It's all those amazing gadgets.",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "opacity": 0,
      "startTime": 7.58
    }
  ]
}
```
