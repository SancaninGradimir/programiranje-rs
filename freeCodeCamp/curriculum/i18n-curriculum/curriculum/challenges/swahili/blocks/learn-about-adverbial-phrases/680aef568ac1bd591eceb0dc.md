---
id: 680aef568ac1bd591eceb0dc
title: Vežbanje la 98
challengeType: 22
dashedName: task-98
lang: en-US
---
<!-- (Audio) Riker: Oglasi su koštali više nego što smo mislili. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`The BLANK cost more than we thought they would.`

## --blanks--

`ads`

### --feedback--

Ovo je kratka forma za nešto što predstavlja poruku ili sadržaj kreiran za promociju proizvoda, usluge ili događaja. Koristite množinu.

# --explanation--

`ad` (skraćeni deo `advertisement`) je deo sadržaja napravljen da privuče ljude i podstakne ih da kupuju nešto, koriste uslugu ili preduzmu neki korak. Reklame se mogu videti na društvenim mrežama, sajtovima, televiziji, radiju i slično. Na primer:

- `They launched a new ad campaign for their latest product.` – To znači da je kompanija kreirala i podelila promotivni sadržaj kako bi povećala interesovanje za proizvod.

- `We saw a lot of online ads for the holiday sale.` – Ovo znači da je bilo mnogo promotivnih poruka o prodaji na veb sajtu ili u aplikaciji.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Riker",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_18-3.mp3",
      "startTime": 1,
      "startTimestamp": 30.7,
      "finishTimestamp": 32.46
    }
  },
  "commands": [
    {
      "character": "Riker",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Riker",
      "startTime": 1,
      "finishTime": 2.76,
      "dialogue": {
        "text": "The ads cost more than we thought they would.",
        "align": "center"
      }
    },
    {
      "character": "Riker",
      "opacity": 0,
      "startTime": 3.26
    }
  ]
}
```
