---
id: 67c03f86bccfec0be6de656b
title: Vežba 113
challengeType: 19
dashedName: task-113
lang: en-US
---

<!-- (audio) Anna: I see your point, but flexibility might be better. Think about it. -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Šta Ana predstavlja/predaje?

## --answers--

Potpuno odbija mišljenje Boba i nije zadovoljan njegovom brigom.

### --feedback--

Ana je prihvatila argument Boba pre nego što iznese svoje mišljenje.

---

On razume Bobovu zabrinutost, ali i dalje veruje da je promena najbolja opcija.

---

Hafahamu wasiwasi wa Bob.

### --feedback--

Ana razume Bov argument.

---

Slaže se sa Bobom i menja svoje ideje.

### --feedback--

Anna se uopšte ne slaže sa Bobom.

## --video-solution--

2

# --explanation--

Anna koristi `I see your point, but` da pokaže da razume Bobovu zabrinutost, istovremeno dajući drugačije mišljenje.

Anaamini kwamba kubadilika ni suluhisho bora kuliko kubaki na kundi moja.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Anna",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_11-3.mp3",
      "startTime": 1,
      "startTimestamp": 31.78,
      "finishTimestamp": 34.88
    }
  },
  "commands": [
    {
      "character": "Anna",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Anna",
      "startTime": 1,
      "finishTime": 4.1,
      "dialogue": {
        "text": "I see your point, but flexibility might be better. Think about it.",
        "align": "center"
      }
    },
    {
      "character": "Anna",
      "opacity": 0,
      "startTime": 4.7
    }
  ]
}
```
