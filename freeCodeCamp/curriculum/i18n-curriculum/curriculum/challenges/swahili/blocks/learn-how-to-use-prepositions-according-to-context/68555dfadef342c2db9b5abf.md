---
id: 68555dfadef342c2db9b5abf
title: Vežba 83
challengeType: 22
dashedName: task-83
lang: en-US
---
<!-- (Audio) David: Šta je sa testiranjem? Poslednje ažuriranje je predstavilo neke neočekivane izazove. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`What about testing? The last update BLANK some BLANK challenges.`

## --blanks--

`brought up`

### --feedback--

Ova dvoslovna fraza znači pokrenuti ili uzrokovati da nešto se pojavi ili postane problem. Prva reč je forma prošlog vremena za `bring`.

---

`unexpected`

### --feedback--

Ovaj termin znači događaj koji se desio i koji nije bio planiran ili predvidljiv. Završava sa `-ed`.

# --explanation--

`Brought up` znači izazvati pojavu nečega, posebno problema ili greške. Ovde, `brought` je forma prošlog vremena od `bring`. Na primer:

`The new feature brought up several bugs.` – Ovo znači da je element izazvao pojavu greške.

`Unexpected` opisuje događaj koji se dešava bez upozorenja ili plana. Na primer:

`We had an unexpected delay due to server issues.` – Hii inamaanisha kucheleweshwa hakukutabirika.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "David",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_22-2.mp3",
      "startTime": 1,
      "startTimestamp": 31.32,
      "finishTimestamp": 35.5
    }
  },
  "commands": [
    {
      "character": "David",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "David",
      "startTime": 1,
      "finishTime": 5.18,
      "dialogue": {
        "text": "What about testing? The last update brought up some unexpected challenges.",
        "align": "center"
      }
    },
    {
      "character": "David",
      "opacity": 0,
      "startTime": 5.68
    }
  ]
}
```
