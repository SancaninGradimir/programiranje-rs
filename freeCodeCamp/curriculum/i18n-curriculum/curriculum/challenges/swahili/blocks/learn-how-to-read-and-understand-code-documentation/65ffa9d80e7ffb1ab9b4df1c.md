---
id: 65ffa9d80e7ffb1ab9b4df1c
title: Vežba 11
challengeType: 22
dashedName: task-11
lang: en-US
---
<!-- (Audio) Sarah: Kada pronađete odeljak koji vam treba, trebalo bi da počnete čitanjem uvodnih pasusa radi get pregleda onoga što dokumentacija pokriva. -->

# --description--

Slušaj zvuk i dovrši rečenicu.

# --fillInTheBlank--

## --sentence--

`BLANK you've BLANK the section you need, you should start by reading the BLANK paragraphs to get an overview of what the documentation BLANK.`

## --blanks--

`Once`

### --feedback--

Pokazuje da sledeća akcija se dešava čim je prostor dostupan. Napiši ovu reč velikim slovom na početku.

---

`found`

### --feedback--

Koristi se ovde što znači pronalaženje ili lociranje potrebnog dela u dokumentu.

---

`introductory`

### --feedback--

Ovo se odnosi na uvodne stihove koji pružaju osnovno razumevanje tog dela.

---

`covers`

### --feedback--

Odnosi se na ono što dokumenti sadrže ili obrađuju u pogledu sadržaja.

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Sarah",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "7.2-1.mp3",
      "startTime": 1,
      "startTimestamp": 20.68,
      "finishTimestamp": 27.82
    }
  },
  "commands": [
    {
      "character": "Sarah",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sarah",
      "startTime": 1,
      "finishTime": 8.14,
      "dialogue": {
        "text": "Once you've found the section you need, you should start by reading the introductory paragraphs to get an overview of what the documentation covers.",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 8.64
    }
  ]
}
```
