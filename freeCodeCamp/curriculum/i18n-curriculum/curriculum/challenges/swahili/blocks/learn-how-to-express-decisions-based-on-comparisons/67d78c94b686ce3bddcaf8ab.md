---
id: 67d78c94b686ce3bddcaf8ab
title: Vežba 117
challengeType: 22
dashedName: task-117
lang: en-US
---

<!-- (Audio) Brian: It could save us time and resources. What about timelines? Which option is faster? -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`It could BLANK and resources. What about BLANK? Which option is faster?`

## --blanks--

`save us time`

### --feedback--

Ovaj izraz od tri reči znači smanjiti vreme potrebno za završetak zadatka.

---

`timelines`

### --feedback--

Ova reč u množini odnosi se na rasporede ili rokove za završetak projekta.

# --explanation--

`Save us time` znači smanjiti vreme potrebno za završetak nečega i učiniti proces efikasnijim. Na primer:

`Using automation tools can save us time on repetitive tasks.` – To znači da alati za automatizaciju pomažu da se ponavljajući zadaci završe brže.

`Timelines` se odnose na rasporede ili rokove koji pokazuju kada različite faze projekta treba da budu završene. Na primer:

`We need to adjust our timelines to finish the project on schedule.` – To znači da treba da prilagodimo rokove kako bismo završili projekat na vreme.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Brian",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_13-3.mp3",
      "startTime": 1,
      "startTimestamp": 32.34,
      "finishTimestamp": 37.52
    }
  },
  "commands": [
    {
      "character": "Brian",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Brian",
      "startTime": 1,
      "finishTime": 6.18,
      "dialogue": {
        "text": "It could save us time and resources. What about timelines? Which option is faster?",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 6.68
    }
  ]
}
```
