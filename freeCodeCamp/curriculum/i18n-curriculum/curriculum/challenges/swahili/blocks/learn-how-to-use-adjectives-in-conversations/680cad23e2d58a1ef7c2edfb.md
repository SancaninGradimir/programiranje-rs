---
id: 680cad23e2d58a1ef7c2edfb
title: Vežba 19
challengeType: 22
dashedName: task-19
lang: en-US
---

<!-- (Audio) Sarah: Those are the ones. But, we found something even better in your catalog, these high-capacity ones here. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`Those are the ones. But, we found something even better in your catalog, BLANK BLANK ones here.`

## --blanks--

`these`

### --feedback--

Ova reč se koristi za označavanje određenih stvari koje se nalaze blizu govornika.

---

`high-capacity`

### --feedback--

Ova složena reč znači nešto što može da rukuje velikom količinom posla, skladišta ili energije. Zapamtite da koristite `-`.

# --explanation--

`High-capacity` opisuje nešto što je napravljeno da može da obradi ili skladišti znatno veću količinu od standardnih verzija. Na primer:

`We installed high-capacity batteries in the new devices.` – To znači da baterije mogu da skladište više energije i da traju duže, što je važno za tehnološke uređaje.

# --scene--

```json
{
  "setup": {
    "background": "company3-reception.png",
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
      "filename": "B1_19-1.mp3",
      "startTime": 1,
      "startTimestamp": 27.3,
      "finishTimestamp": 32.68
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
      "finishTime": 6.38,
      "dialogue": {
        "text": "Those are the ones, but we found something even better in your catalog, these high capacity ones here.",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 6.88
    }
  ]
}
```
