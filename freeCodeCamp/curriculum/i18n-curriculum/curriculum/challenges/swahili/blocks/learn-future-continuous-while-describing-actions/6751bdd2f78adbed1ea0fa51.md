---
id: 6751bdd2f78adbed1ea0fa51
title: Vežba 24
challengeType: 19
dashedName: task-24
lang: en-US
---
<!-- (Audio) Brian: Misliš li da ćemo morati da obavestimo korisnike o prekidu rada? -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Šta je briga Brajana?

## --answers--

Ukoliko korisnici treba da budu obavešteni za period neaktivnosti.

---

Ako period neaktivnosti nastavi da traje predugo.

### --feedback--

Brian pita za trajanje neaktivnog perioda.

---

Ako korisnici budu pogođeni tehničkim problemima.

### --feedback--

Brian nije spomenuo tehničke probleme u svojoj zabrinutosti.

---

Ako neaktivno vreme utiče na performanse servera.

### --feedback--

Brajanova briga nije o performansama servera.

## --video-solution--

1

# --explanation--

Brian pita da li bi trebalo obavestiti korisnike o periodu neaktivnosti, ukazujući da je njegova zabrinutost u vezi sa komunikacijom sa korisnicima, umesto dužine prekida rada, tehničkim problemima ili performansama servera.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Brian",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_6-1.mp3",
      "startTime": 1,
      "startTimestamp": 38.78,
      "finishTimestamp": 41.26
    }
  },
  "commands": [
    {
      "character": "Brian",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Brian",
      "startTime": 1,
      "finishTime": 3.48,
      "dialogue": {
        "text": "Do you think we'll need to update the users about the downtime?",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 3.98
    }
  ]
}
```
