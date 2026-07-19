---
id: 66c4ef1cb275e86febc9fe2c
title: Vežba 113
challengeType: 22
dashedName: task-113
lang: en-US
---
<!-- Referenca audio zapisa:
Sarah: Trebalo bi da radi/prikaže se, ali ne prikazuje se jer proširenje za live server možda nije aktivno. -->

<!-- Audio Reference:
Sarah: Trebalo bi da se pojavi, ali ne prikazuje se jer možda nije pokrenata ekstenzija za live server. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`It should, but it's not BLANK because the live server extension might not be BLANK.`

## --blanks--

`displaying`

### --feedback--

Čin pokazivanja ili prikazivanje nečega. Ova reč se završava sa `-ing`.

---

`running`

### --feedback--

Pokazuje da je proširenje omogućeno i funkcionalno. Ova reč se završava sa `-ing`.

# --explanation--

Gerundium je vrsta glagola koja se završava sa `-ing` i funkcioniše kao imenica. U ovoj rečenici, `displaying` i `running` su gerundija koje označavaju delatnosti u toku. Na primer:

- `Updating the software is essential.` - Ovde, `Updating` je gerund koji određuje radnju.

U rečenici Sarah, `displaying` i `running` opisuju radnje vezane za proširenje živog servera i kako funkcioniše.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
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
      "filename": "B1_1-3.mp3",
      "startTime": 1,
      "startTimestamp": 12.62,
      "finishTimestamp": 16.66
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
      "finishTime": 2.62,
      "dialogue": {
        "text": "It should, but it's not displaying",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "startTime": 2.62,
      "finishTime": 5.04,
      "dialogue": {
        "text": "because the live server extension might not be running.",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 5.54
    }
  ]
}
```
