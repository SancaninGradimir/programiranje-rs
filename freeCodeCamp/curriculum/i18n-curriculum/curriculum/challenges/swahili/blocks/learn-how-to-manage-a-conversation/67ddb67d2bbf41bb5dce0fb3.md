---
id: 67ddb67d2bbf41bb5dce0fb3
title: Vežba 36
challengeType: 19
dashedName: task-36
lang: en-US
---
<!-- (Audio) James: Nema problema. Razgovaraćemo kasnije. -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Kakak conclusion možemo izvući iz odgovora Jemesa?

## --answers--

Mora prvo da reši problem.

### --feedback--

James govori nešto o drugom problemu.

---

Završava razgovor na prijateljski način.

---

Želi da zakazuje sastanak sada.

### --feedback--

Nema razgovora o planiranju bilo čega.

---

Traži više pomoći.

### --feedback--

James ne traži pomoć.

## --video-solution--

2

# --explanation--

U konverzaciji, često se izostavljaju reči kada je značenje jasno. U `Talk to you later`, izostavljen je termin `I'll` (skraćenica od `I will`). Cela rečenica bi bila `I'll talk to you later`. Ovaj tip izostavljanja reči je uobičajen u svakodnevnom razgovoru. Drug primer:

`See you tomorrow!` - Ovo je kratak način da se kaže `I'll see you tomorrow`.

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
      "startTimestamp": 44.74,
      "finishTimestamp": 46.5
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
      "finishTime": 2.76,
      "dialogue": {
        "text": "No problem. Talk to you later.",
        "align": "center"
      }
    },
    {
      "character": "James",
      "opacity": 0,
      "startTime": 3.26
    }
  ]
}
```
