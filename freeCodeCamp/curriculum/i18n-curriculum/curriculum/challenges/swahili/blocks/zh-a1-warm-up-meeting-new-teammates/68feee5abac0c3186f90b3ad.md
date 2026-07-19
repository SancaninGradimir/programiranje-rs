---
id: 68feee5abac0c3186f90b3ad
title: Vežba 9
challengeType: 19
dashedName: task-9
lang: zh-CN
---
<!-- (Audio) Wang Hua: 名字 (míng zi) -->

# --instructions--

Slušajte audio i odgovorite na pitanje koje je navedeno ispod.

# --questions--

## --text--

Koji izbor daje tačan Pinyin za ono što govori Wang Hua?

## --answers--

`míng zi`

---

`mǐng zi`

### --feedback--

Izgovor prvog sloga ne odgovara onome što čujete u zvuku.

---

`mín zi`

### --feedback--

Kraj prve sloga nije ono što on govori.

---

`míng zhī`

### --feedback--

Početak druge slogove je drugačiji od onoga što čujete u zvuku.

## --video-solution--

1

# --explanation--

Wang Hua kaže `míng zi`. Prvi slog ima nazalno završavanje `ing` i uzlazni akcent. Drugi slog je pun slog sa slabijim akcentom, izgovara se blago.

# --scene--

```json
{
  "setup": {
    "background": "company1-breakroom.png",
    "characters": [
      {
        "character": "Wang Hua",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ZH_A1_greetings_and_introductions_warm_up.mp3",
      "startTime": 1,
      "startTimestamp": 31.51,
      "finishTimestamp": 32.34
    }
  },
  "commands": [
    {
      "character": "Wang Hua",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Wang Hua",
      "startTime": 1,
      "finishTime": 1.83,
      "dialogue": {
        "text": "名字 (míng zi)",
        "align": "center"
      }
    },
    {
      "character": "Wang Hua",
      "opacity": 0,
      "startTime": 2.33
    }
  ]
}
```
