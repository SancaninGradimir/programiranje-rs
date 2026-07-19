---
id: 67eff3ae8cca9823edafadc6
title: Vežba 59
challengeType: 19
dashedName: task-59
lang: en-US
---
<!-- (audio) Jake: Da li ste proverili da li su svi sigurnosni ažurmani primenjeni? -->

# --instructions--

Slušaj audio odgovor na pitanje dole.

# --questions--

## --text--

O čemu Jake pita?

## --answers--

Da li su sva ažuriranja korišćena/primnjena?

---

Da li su izbačena nova ažuriranja bezbednosti?

### --feedback--

Jake pita da li postoje nova ažuriranja.

---

Ko je odgovoran za sigurnosne ažurmane?

### --feedback--

Jake pita o nekoj osobi.

---

Kako funkcionisanje sigurnosnih ažuriranja?

### --feedback--

Jake misli da Jessica zna za sigurnosne ažuriranje.

## --video-solution--

1

# --explanation--

Jake želi da zna da li je neko potvrdio da su sva ažuriranja instalirana.

Pitaj `Have you checked...?`, pitaj da li je Jessica nešto istražila.

Za `whether all security updates were applied` se pita da li su ažuriranja uspešno instalirana.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
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
      "filename": "B1_17-2.mp3",
      "startTime": 1,
      "startTimestamp": 10.52,
      "finishTimestamp": 13.02
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
      "finishTime": 3.5,
      "dialogue": {
        "text": "Have you checked whether all security updates were applied?",
        "align": "center"
      }
    },
    {
      "character": "Jake",
      "opacity": 0,
      "startTime": 4
    }
  ]
}
```
