---
id: 67d3fccf15badf0cae314d1c
title: Vežba 7
challengeType: 22
dashedName: task-7
lang: en-US
---
<!-- (Audio) Mark: Naravno, Jessica. Šta do I need to do? -->

# --instructions--

Poslušaj zvuk i dovrši rečenicu ispod.

# --fillInTheBlank--

## --sentence--

`Sure, Jessica. What do I BLANK to BLANK?`

## --blanks--

`need`

### --feedback--

Ovaj glagol pokazuje potrebu, što znači da je potrebno nešto učiniti.

---

`do`

### --feedback--

Ovaj glagol je povezan sa `need` prilikom ispitivanja akcije.

# --explanation--

`Need to` Koristi se kada se pita za potrebne radnje. Praćen je osnovnim tipom glagola (`do`). Primer:

- `We need to do more testing before releasing the app.` - Morate testirati program pre lansiranja.

- `We need to do some updates to fix the bugs.` - Neophodno je da se popravi sistem kako bi se rešili problemi.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Mark",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_14-1.mp3",
      "startTime": 1,
      "startTimestamp": 7,
      "finishTimestamp": 9.08
    }
  },
  "commands": [
    {
      "character": "Mark",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Mark",
      "startTime": 1,
      "finishTime": 3.08,
      "dialogue": {
        "text": "Sure, Jessica. What do I need to do?",
        "align": "center"
      }
    },
    {
      "character": "Mark",
      "opacity": 0,
      "startTime": 3.58
    }
  ]
}
```
