---
id: 678e5a7c4de8c4ccf4ed6ca9
title: Vežba 66
challengeType: 22
dashedName: task-66
lang: en-US
---
<!-- (audio) Jake: U redu, let se slažu da se ne slažu. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`Okay, let's BLANK to BLANK.`

## --blanks--

`agree`

### --feedback--

Ovaj termin znači imati isto mišljenje ili postići zajedničko razumevanje.

---

`disagree`

### --feedback--

Ova reč znači imati različita mišljenja ili neslaganje.

# --explanation--

`Agree` To znači slagati se ili imati isto mišljenje kao neko drugi. Na primer:

`We both agree that improving security is important.` - Ovo znači da deliš isto mišljenje o bezbednosti sa nekim drugim.

`Disagree` To znači imati različita mišljenja ili se ne slagati. Na primer:

`Jake and Maria disagree on which software to use.` - Ovo pokazuje da Jake i Maria imaju različita mišljenja o izboru programa.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
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
      "filename": "B1_9-2.mp3",
      "startTime": 1,
      "startTimestamp": 56.0,
      "finishTimestamp": 58.28
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
      "finishTime": 3.28,
      "dialogue": {
        "text": "Okay, let's agree to disagree.",
        "align": "center"
      }
    },
    {
      "character": "Jake",
      "opacity": 0,
      "startTime": 3.78
    }
  ]
}
```
