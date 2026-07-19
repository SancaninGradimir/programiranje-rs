---
id: 67adad520eb3ba05f8a1af1b
title: Vežba 33
challengeType: 19
dashedName: task-33
lang: en-US
---
<!-- (Audio) Bob: Pa možda bismo trebali da se fokusiramo na oba. Pronaći ravnotežu između udobnosti i tehnologije kako bismo osigurali da svako ima ono što mu treba. -->

<!-- SPEAKING -->

# --instructions--

Slušaj audio snimak i odgovori na pitanje koje je navedeno ispod.

# --questions--

## --text--

Šta bi Anna trebala da kaže ili pokaže da se slaže sa Bobom?

## --answers--

`I don't understand.`

### --audio-id--

ENd6da13d0

### --feedback--

Ova izjava pokazuje zbunjenost, ali Ana mora da pokaže da pristaje na ideju Boba.

---

`That makes sense.`

### --audio-id--

ENc50c4990

## --video-solution--

2

# --explanation--

`That makes sense` To je uobičajen način pokazivanja saglasnosti. Ljudi koriste ovu frazu u razgovorima kada pristanu ili razume predlog. Na primer:

- **Msanidi programu:** `We should optimize the code before adding new features to avoid performance issues.`

- **Menadžer:** `That makes sense. A slow app will frustrate users.` — To ima smisla. Spora aplikacija će frustrirati korisnike.

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
      "filename": "B1_11-1.mp3",
      "startTime": 1,
      "startTimestamp": 52,
      "finishTimestamp": 58.24
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
      "finishTime": 2.54,
      "dialogue": {
        "text": "So maybe we should focus on both.",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "startTime": 2.54,
      "finishTime": 7.24,
      "dialogue": {
        "text": "Find a balance between comfort and technology to ensure everyone has what they need.",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "opacity": 0,
      "startTime": 7.74
    }
  ]
}
```
