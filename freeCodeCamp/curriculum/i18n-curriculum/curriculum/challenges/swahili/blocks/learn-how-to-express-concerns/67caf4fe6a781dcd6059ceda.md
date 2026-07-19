---
id: 67caf4fe6a781dcd6059ceda
title: Vežba 131
challengeType: 22
dashedName: task-131
lang: en-US
---
<!-- (Audio) Maria: Bilo bi korisno da imamo redovnije provere/kontakte if -->

# --instructions--

Slušaj audio i dovrši sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`It'd be BLANK if we had more BLANK check-ins.`

## --blanks--

`helpful`

### --feedback--

Ovo znači pružanje pomoći ili olakšavanje nečega.

---  

`regular`

### --feedback--

Ovo znači da se dešava često ili u fiksnim intervalima.

# --explanation--

`Helpful` to znači pružiti pomoć ili nešto olakšati. Na primer:

`It was helpful to have clear instructions before starting the task.` - Ovo znači da su uputstva učinila vežbu lakom za završetak.

`Regular` To znači da se dešava redovno ili u zadatim intervalima. Na primer:

`We have regular meetings every Monday.` - Ovo znači da se sastanci održavaju redovno ponedeljkom.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Maria",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_12-3.mp3",
      "startTime": 1,
      "startTimestamp": 40.42,
      "finishTimestamp": 42.58
    }
  },
  "commands": [
    {
      "character": "Maria",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Maria",
      "startTime": 1,
      "finishTime": 3.16,
      "dialogue": {
        "text": "It'd be helpful if we had more regular check-ins.",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 3.66
    }
  ]
}
```
