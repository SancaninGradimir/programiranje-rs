---
id: 680a3cf5ca047daf5e8ecff5
title: Vežba 66
challengeType: 22
dashedName: task-66
lang: en-US
---
<!-- (Audio) Sophie: Na ovaj način, možemo bolje razumeti granice pre nego što ga u potpunosti lansiramo. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`This way, we can understand the limits better BLANK we launch it fully.`

## --blanks--

`before`

### --feedback--

Ovo se koristi da pokaže da se nešto događa ranije nego nešto drugo.

# --explanation--

`Before` koristi se da pokaže da jedna akcija dešava ranije od druge. Na primer:

- `Please save your work before you close the program.` – To znači da je potrebno da se sačuvanje izvrši ranije, pre zatvaranja programa.

- `He always checks his code carefully before submitting it.` – Ovo znači da se provera obavlja prvo, pre akcije predaje.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Sophie",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_18-2.mp3",
      "startTime": 1,
      "startTimestamp": 40.52,
      "finishTimestamp": 43.78
    }
  },
  "commands": [
    {
      "character": "Sophie",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sophie",
      "startTime": 1,
      "finishTime": 3.06,
      "dialogue": {
        "text": "This way, we can understand the limits better",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "startTime": 3.06,
      "finishTime": 4.26,
      "dialogue": {
        "text": "before we launch it fully.",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 4.76
    }
  ]
}
```
