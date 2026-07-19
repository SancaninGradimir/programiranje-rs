---
id: 67dd5baa84d2fcc56c09dce3
title: Vežba 15
challengeType: 22
dashedName: task-15
lang: en-US
---
<!-- (Audio) James: Još nešto, da li smo odlučili o roku for prvu fazu? -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`By the way, did we BLANK on the deadline for the first BLANK?`

## --blanks--

`decide`

### --feedback--

Hii inamaanisha kufanya uchaguzi au kufikia uamuzi kuhusu jambo fulani.

---

`phase`

### --feedback--

Ovo se tiče određenog koraka, ili dela procesa, ili projekta.

# --explanation--

`To decide` to znači izabrati nešto nakon razmišljanja. Na primer:

`We need to decide which tools to use for the project.` – Ovo znači odabir alata nakon razmatranja opcija.

`phase` se odnosi na jedan deo ili korak u većem procesu. Na primer:

`We just finished the testing phase of the software.` – To znači da je faza testiranja softvera završena.

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
      "startTimestamp": 17.36,
      "finishTimestamp": 20.64
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
      "finishTime": 4.28,
      "dialogue": {
        "text": "By the way, did we decide on the deadline for the first phase?",
        "align": "center"
      }
    },
    {
      "character": "James",
      "opacity": 0,
      "startTime": 4.78
    }
  ]
}
```
