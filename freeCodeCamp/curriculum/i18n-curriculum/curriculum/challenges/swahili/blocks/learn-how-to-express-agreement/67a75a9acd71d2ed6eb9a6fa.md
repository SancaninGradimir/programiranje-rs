---
id: 67a75a9acd71d2ed6eb9a6fa
title: Vežba 20
challengeType: 22
dashedName: task-20
lang: en-US
---
<!-- (Audio) Linda: Apsolutno. I takođe mogu da pripremim neke korisničke scenarije for testiranja, kako bismo osigurali glatko korisničko iskustvo. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`Absolutely. And I can also prepare some BLANK for testing, so we can ensure a smooth user experience.`

## --blanks--

`user scenarios`

### --feedback--

Ovaj dvoredni izraz odnosi se na različite scenarije koji prikazuju način na koji osoba može da interaguje sa proizvodom.

# --explanation--

`User scenarios` Odnosi se na različite scenarije koji definišu kako korisnici interaguju sa proizvodom da bi postigli cilj. Pomaže timovima da testiraju i poboljšaju korisničko iskustvo. Na primer:

`We created user scenarios to see how customers navigate the checkout process.` – To znači da je tim sproveo testove različitih metoda koje korisnici koriste za završetak kupovine kako bi identifikovao bilo kakve probleme.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Linda",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_10-1.mp3",
      "startTime": 1,
      "startTimestamp": 20.86,
      "finishTimestamp": 26.68
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
      "finishTime": 6.82,
      "dialogue": {
        "text": "Absolutely. And I can also prepare some user scenarios for testing so we can ensure a smooth user experience.",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "opacity": 0,
      "startTime": 7.32
    }
  ]
}
```
