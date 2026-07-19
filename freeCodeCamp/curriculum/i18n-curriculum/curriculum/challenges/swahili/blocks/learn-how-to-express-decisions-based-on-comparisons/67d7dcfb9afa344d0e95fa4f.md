---
id: 67d7dcfb9afa344d0e95fa4f
title: Vežba 122
challengeType: 22
dashedName: task-122
lang: en-US
---

<!-- (Audio) Sarah: However, outsourcing can lead to communication issues, which might delay the project. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`However, outsourcing can BLANK communication issues, which might BLANK the project.`

## --blanks--

`lead to`

### --feedback--

Ovaj izraz od dve reči znači izazvati ili dovesti do toga da se nešto dogodi.

---

`delay`

### --feedback--

To znači učiniti da nešto traje duže nego što je očekivano.

# --explanation--

`Lead to` znači prouzrokovati da se nešto dogodi ili dovesti do određenog ishoda. Na primer:

`Poor planning can lead to missed deadlines.` – To znači da loše planiranje može dovesti do propuštanja rokova.

`Delay` znači učiniti da nešto traje duže nego što je očekivano ili odložiti ga. Na primer:

`The software release was delayed due to unexpected bugs.` – To znači da je objavljivanje softvera odloženo zbog neočekivanih grešaka.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
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
      "filename": "B1_13-3.mp3",
      "startTime": 1,
      "startTimestamp": 46.98,
      "finishTimestamp": 51.34
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
      "finishTime": 5.36,
      "dialogue": {
        "text": "However, outsourcing can lead to communication issues which might delay the project.",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 5.86
    }
  ]
}
```
