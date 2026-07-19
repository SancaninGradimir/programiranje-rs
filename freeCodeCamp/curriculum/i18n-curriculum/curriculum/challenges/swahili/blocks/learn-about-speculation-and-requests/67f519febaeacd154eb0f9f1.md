---
id: 67f519febaeacd154eb0f9f1
title: Vežba 96
challengeType: 22
dashedName: task-96
lang: en-US
---
<!-- (audio) Jake: Za sada, let's sakupljajte više informacija i budite na straži. -->

# --instructions--

Slušajte zvuk i dovršite rečenicu ispod.

# --fillInTheBlank--

## --sentence--

`For now, let's gather more information and stay BLANK.`

## --blanks--

`vigilant`

### --feedback--

Ovo znači biti budan i pažljivo pratiti potencijalne opasnosti ili probleme.

# --explanation--

`Vigilant` To znači biti pažljiv i oprezan kako bi se otkrili potencijalni pretnje. Na primer:

- `The IT team is always vigilant when monitoring the network.` - IT tim mora biti pažljiv tokom proveravanja mreže.

- `You should be vigilant when clicking on unknown links in emails.` - Morate biti pažljivi i obratiti pažnju na sumnjive e-mail linkove.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Jake",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_17-2.mp3",
      "startTime": 1,
      "startTimestamp": 80.02,
      "finishTimestamp": 83.18
    }
  },
  "commands": [
    {
      "character": "Jake",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Jake",
      "startTime": 1,
      "finishTime": 4.16,
      "dialogue": {
        "text": "For now, let's gather more information and stay vigilant.",
        "align": "center"
      }
    },
    {
      "character": "Jake",
      "opacity": 0,
      "startTime": 4.66
    }
  ]
}
```
