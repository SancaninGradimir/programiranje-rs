---
id: 657e1fd7b5ffaebc0ff4bd9f
title: Vežba 26
challengeType: 19
dashedName: task-26
lang: en-US
---

<!-- (audio) Tom: Thanks for sharing, Sophie. I want to get more organized and your tips are a great help to me. -->

# --description--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Zašto Tom hvali Sofiju?

## --answers--

Za program upravljanja vremenom.

### --feedback--

Tom hvali Sofiju komplimentima, a ne davanjem programa.

---

Zato što dobija napomene od Sofije koje su mu/joj pomoć.

---

Za pozivanje na ručak.

### --feedback--

Zahvaljujem mu/јој na savetu, ne za poziv na ručak.

---

Da pomognem sa projektom.

### --feedback--

Hvala na Tomu je vezano za napomene o planiranju, a ne za pomoć za određeni projekat.

## --video-solution--

2

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Tom",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "2.1-1.mp3",
      "startTime": 1,
      "startTimestamp": 58.29,
      "finishTimestamp": 63.00
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
      "finishTime": 5.71,
      "dialogue": {
        "text": "Thanks for sharing, Sophie. I want to get more organized and your tips are a great help to me.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 6.21
    }
  ]
}
```
