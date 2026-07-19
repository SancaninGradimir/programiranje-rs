---
id: 67ddafcebec26b8e5f46745b
title: Vežba 31
challengeType: 22
dashedName: task-31
lang: en-US
---

<!-- (Audio) James: Anything else we should discuss before our next meeting? -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`Anything BLANK we should discuss before our next meeting?`

## --blanks--

`else`

### --feedback--

Da li ovo znači zajedno sa nečim drugim, ili je drugačije od onoga što je već navedeno/spomenuto.

# --explanation--

`Else` katika usemi wa kihesabu `anything else` hutumika kuuliza kama kuna kitu kingine zaidi ya kile kilichosemwa au kufanywa tayari. Kwa mfano:

`Would you like anything else with your order?` - Hapa, unauliza kama mtu mwingine anataka kitu zaidi ya kile alichokiomba tayari.

# --scene--

```json
{
  "setup": {
    "background": "interview-room2.png",
    "characters": [
      {
        "character": "James",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_15-1.mp3",
      "startTime": 1,
      "startTimestamp": 39.22,
      "finishTimestamp": 42.22
    }
  },
  "commands": [
    {
      "character": "James",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "James",
      "startTime": 1,
      "finishTime": 4,
      "dialogue": {
        "text": "Anything else we should discuss before our next meeting?",
        "align": "center"
      }
    },
    {
      "character": "James",
      "opacity": 0,
      "startTime": 4.5
    }
  ]
}
```
