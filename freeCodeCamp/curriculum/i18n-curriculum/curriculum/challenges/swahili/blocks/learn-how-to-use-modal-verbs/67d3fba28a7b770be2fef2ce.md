---
id: 67d3fba28a7b770be2fef2ce
title: Vežbanje 6
challengeType: 19
dashedName: task-6
lang: en-US
---
<!-- (Audio) Jessica: Zdravo Mark, moramo da pričamo o sigurnosnim protokolima for projektu za new. Postoji nekoliko stvari koje morate do da biste osigurali usklađenost. -->

<!-- SPEAKING -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Mark ne voli da razgovara sa Jessicom i želi da zna šta bi trebalo da uradi. Šta će reći?

## --answers--

`Sorry, Jessica. I'm too busy right now.`

### --audio-id--

EN415e8cd4

### --feedback--

Ovaj odgovor ne odgovara spremnosti Marka da govori.

---

`Sure, Jessica. What do I need to do?`

### --audio-id--

EN61f614de

## --video-solution--

2

# --explanation--

Tačan odgovor pokazuje da je Mark spreman da razgovara i želi da sazna potrebne korake.

`Sure, Jessica` pokazuje saglasnost sa spremnošću za razgovor.

`What do I need to do?` pokazuje da Mark traži uputstva, što odgovara izjavi Jessike o tome šta bi trebalo da uradi kako bi osigurao praćenje.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Jessica",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_14-1.mp3",
      "startTime": 1,
      "startTimestamp": 0,
      "finishTimestamp": 6.62
    }
  },
  "commands": [
    {
      "character": "Jessica",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Jessica",
      "startTime": 1,
      "finishTime": 4.74,
      "dialogue": {
        "text": "Hi, Mark. We need to talk about security protocols for the new project.",
        "align": "center"
      }
    },
    {
      "character": "Jessica",
      "startTime": 5.22,
      "finishTime": 7.62,
      "dialogue": {
        "text": "There are a few things you must do to ensure compliance.",
        "align": "center"
      }
    },
    {
      "character": "Jessica",
      "opacity": 0,
      "startTime": 8.12
    }
  ]
}
```
