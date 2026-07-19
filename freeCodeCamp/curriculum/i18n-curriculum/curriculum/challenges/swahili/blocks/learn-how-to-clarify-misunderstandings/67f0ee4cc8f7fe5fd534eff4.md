---
id: 67f0ee4cc8f7fe5fd534eff4
title: Vežba 87
challengeType: 22
dashedName: task-87
lang: en-US
---
<!-- (Audio) Mark: Jeste, to zvuči dobro. Hvala for na tvojoj pomoći, Liso. Cenim to. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`Yeah, that BLANK. Thanks for your help, Lisa. I BLANK it.`

## --blanks--

`sounds good`

### --feedback--

Ova dvoslovna fraza koristi se za pokazivanje saglasnosti ili odobravanja ideje ili predloga. Prva reč se završava sa `-s`.

---

`appreciate`

### --feedback--

Ova reč znači zahvaljivanje za nešto. Pokazuje zahvalnost za pomoć, podršku ili nešto urađeno za tebe.

# --explanation--

`Sounds good` to znači da govornik pristaje ili odobrava ono što je rečeno. Na primer:

`Your idea sounds good.` – To znači da govornik misli da je ideja dobra i slaže se sa njom.

`I appreciate` je način da se kaže hvala ili pokaže zahvalnost. Na primer:

`I appreciate your help with the project.` – To znači da ste zahvalni za pomoć koju ste dobili.

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
      "filename": "B1_16-2.mp3",
      "startTime": 1,
      "startTimestamp": 65.9,
      "finishTimestamp": 69.1
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
      "finishTime": 4.2,
      "dialogue": {
        "text": "Yeah, that sounds good. Thanks for your help, Lisa. I appreciate it.",
        "align": "center"
      }
    },
    {
      "character": "Mark",
      "opacity": 0,
      "startTime": 4.7
    }
  ]
}
```
