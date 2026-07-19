---
id: 67a9efcabf0dac0baa0ec536
title: Vežba 4
challengeType: 22
dashedName: task-4
lang: en-US
---
<!-- (Audio) Bob: Čini se da većina ljudi više voli koristiti for kancelarijski nameštaj. -->

# --instructions--

Poslušaj zvuk i dovrši rečenicu ispod.

# --fillInTheBlank--

## --sentence--

`It seems most people prefer using it for BLANK.`

## --blanks--

`office furniture`

### --feedback--

Razmislite o tome šta je ljudima potrebno za unapređenje radnog prostora kod kuće. Ovo uključuje stolove, stolice i police.

# --explanation--

`Office furniture` Radi se o stolovima, sedišta, policama i drugim predmetima koji se koriste u radnom prostoru.

U ovom razgovoru, Bob govori o tome kako zaposleni koriste svoj fond sredstava za rad na daljinu. Pošto je rad od kuće potreban dobar i odgovarajući aranžman, mnogi ljudi koriste taj paket da kupe kancelarijski nameštaj kao što su ergonomske stolice ili veliki radni sto.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Bob",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_11-1.mp3",
      "startTime": 1,
      "startTimestamp": 4.46,
      "finishTimestamp": 8
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
      "finishTime": 4.54,
      "dialogue": {
        "text": "It seems most people prefer using it for office furniture.",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "opacity": 0,
      "startTime": 5.04
    }
  ]
}
```
