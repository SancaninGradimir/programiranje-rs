---
id: 67c70abfeb7c6fb8cbd3fed7
title: Vežba 57
challengeType: 19
dashedName: task-57
lang: en-US
---
<!-- (Audio) Maria: Hej James, možemo li da pričamo o mom poslednjem sastanku sa Bobom? -->

# --instructions--

Slušaj audio i odgovori na pitanje koje se nalazi dole.

# --questions--

## --text--

Šta želi da razgovara sa Jamesom?

## --answers--

Raspored za Boba ove nedelje.

### --feedback--

Maria nije spomenula raspored Boba.

---

Njegov nedavni sastanak sa Bobom.

---

Krajnji rok za projekat je blizu.

### --feedback--

Maria nije spomenula poslednji put, već samo svoj sastanak sa Bobom.

---

Zahtev za budžet klijenta.

### --feedback--

Marija nije spomenula zahtev klijenta u ovoj rečenici.

## --video-solution--

2

# --explanation--

`Can we talk about...` Koristi se za pokretanje teme diskusije. To je način da se traži razgovor o važnoj temi. Na primer:

`Can we talk about the changes to the project timeline?` - Ovo znači da govornik želi da diskutuje o izmenama projektnog rasporeda.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Maria",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_12-2.mp3",
      "startTime": 1,
      "startTimestamp": 0,
      "finishTimestamp": 2.94
    }
  },
  "commands": [
    {
      "character": "Maria",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Maria",
      "startTime": 1,
      "finishTime": 3.94,
      "dialogue": {
        "text": "Hey James, can we talk about my latest meeting with Bob?",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 4.44
    }
  ]
}
```
