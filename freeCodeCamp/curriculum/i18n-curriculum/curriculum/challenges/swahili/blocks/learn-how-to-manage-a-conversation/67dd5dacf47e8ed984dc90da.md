---
id: 67dd5dacf47e8ed984dc90da
title: Vežba 17
challengeType: 19
dashedName: task-17
lang: en-US
---
<!-- (Audio) James: Inostalo, da li smo odlučili o roku for za prvu fazu? -->

<!-- SPEAKING -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Može li Alice kratko da odgovori da nema odluke o roku u ovom trenutku?

## --answers--

`Not yet.`

### --audio-id--

EN6acf22f8

---

`We're still looking for it.`

### --audio-id--

EN391abad4

### --feedback--

Ovo nema veze sa pitanjem o postavljanju krajnjeg roka.

## --video-solution--

1

# --explanation--

`Not yet` je kratak i prirodan način da se kaže da nešto nije dogodilo ili završeno do sada, ali bi moglo se desiti kasnije. Primer:

- **Meneja:** `Have you sent the email?` - Hapa, mtu anauliza kuhusu barua pepe ambayo inapaswa kutumwa.

- **Mfanyakazi:** `Not yet.` – Hii ina maana barua pepe haijatumwa, lakini mtu bado anapanga kuituma.

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
