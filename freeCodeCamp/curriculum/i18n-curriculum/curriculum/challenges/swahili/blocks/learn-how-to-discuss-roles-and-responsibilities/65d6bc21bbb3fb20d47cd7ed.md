---
id: 65d6bc21bbb3fb20d47cd7ed
title: Vežba 43
challengeType: 22
dashedName: task-43
lang: en-US
---
<!-- (Audio) Tom: Iskreno, ne znam je baš dobro. Koja joj je uloga? -->

# --description--

Pitanje `What's her role?` je način da se sazna za posao ili ulogu osobe u grupi ili projektu. `Role` znači deo ili posao koji osoba obavlja u određenoj situaciji. Na primer, ako je `role` osobe u školi nastavnik, to znači da je njen posao podučavanje učenika.

# --fillInTheBlank--

## --sentence--

`I don't really know her, to be honest. What's BLANK BLANK?`

## --blanks--

`her`

### --feedback--

Ova reč ukazuje da Tom govori o poslu ili delu žene u nekoj stvari.

---

`role`

### --feedback--

Ova reč znači posao ili poziciju koju osoba ima u određenoj situaciji.

# --scene--

```json
{
  "setup": {
    "background": "company1-reception.png",
    "characters": [
      {
        "character": "Tom",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.3-2.mp3",
      "startTime": 1,
      "startTimestamp": 15.98,
      "finishTimestamp": 18.96
    }
  },
  "commands": [
    {
      "character": "Tom",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Tom",
      "startTime": 1,
      "finishTime": 3.98,
      "dialogue": {
        "text": "I don't really know much about her to be honest. What's her role?",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 4.48
    }
  ]
}
```
