---
id: 683d4ae3cbcc8c94e78aade1
title: Vežba 19
challengeType: 19
dashedName: task-19
lang: en-US
---
<!-- (Audio) Bob: Tačno. Nalazi se na zadnjem delu, pored izlaza za hitnu evakuaciju. -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Šta Bob objašnjava?

## --answers--

Hitni izlaz je zatvoren.

### --feedback--

Bob hasemi mlango umefungwa - anataja tu mahali pake.

---

Kwamba mlango wa nyuma unahitaji kufungwa upya.

### --feedback--

Bob nije spomenuo ništa o zaključavanju ili da zadnja vrata zahtevaju popravke.

---

Da serversku sobu treba očistiti.

### --feedback--

U Bobovoj izjavi nema razgovora o čistoći.

---

Nešto je blizu hitnih izlaznih vrata.

## --video-solution--

4

# --explanation--

Bob kaže, `Exactly. It's in the back, next to the emergency exit`. Ovo znači da potvrđuje lokaciju stvari - veoma blizu izlaznih vrata.

Hakuzungumzii kuhusu matengenezo, usafi, au matatizo.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Bob",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_22-1.mp3",
      "startTime": 1,
      "startTimestamp": 16.4,
      "finishTimestamp": 19.72
    }
  },
  "commands": [
    {
      "character": "Bob",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Bob",
      "startTime": 1,
      "finishTime": 4.32,
      "dialogue": {
        "text": "Exactly. It's in the back, next to the emergency exit.",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "opacity": 0,
      "startTime": 4.82
    }
  ]
}
```
