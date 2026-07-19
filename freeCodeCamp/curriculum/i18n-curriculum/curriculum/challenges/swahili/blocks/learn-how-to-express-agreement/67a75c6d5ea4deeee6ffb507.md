---
id: 67a75c6d5ea4deeee6ffb507
title: Vežba 21
challengeType: 19
dashedName: task-21
lang: en-US
---
<!-- (Audio) Linda: Apsolutno. I takođe mogu da pripremim neke scenarije korisnika for testiranja, kako bismo osigurali glatko iskustvo korišćenja. -->

# --instructions--

Slušaj audio snimak i odgovori na pitanje koje je navedeno ispod.

# --questions--

## --text--

Šta je Linda daje da se radi?

## --answers--  

Pripremi korisnički profil za testiranje.

---  

Eksperimentalni korak.

### --feedback--  

Linda preporučuje sprovođenje eksperimenata; ona daje pun doprinos tome.

---  

Zamolite nekoga drugog da se bavi korisničkim testiranjima.

### --feedback--  

Linda prenosi tu vežbu nekom drugom.

---  

Ponovo kreirati/resetovati korisnički interfejs od početka.

### --feedback--  

Linda priča o redizajniranju interfejsa.

## --video-solution--  

1

# --explanation--  

Identifikujte ključne reči koje pokazuju šta Lina želi da uradi.

`I can also` – Ovo ukazuje na njegovu/njezinu spremnost za doprinos.

`Prepare some user scenarios for testing` – Ovo jasno objašnjava zadatak koji je potrebno izvršiti.

`Ensure a smooth user experience` – Ovo objašnjava zašto su testovi važni i jačaju njegovu posvećenost projektu.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Linda",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_10-1.mp3",
      "startTime": 1,
      "startTimestamp": 20.86,
      "finishTimestamp": 26.68
    }
  },
  "commands": [
    {
      "character": "Linda",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Linda",
      "startTime": 1,
      "finishTime": 6.82,
      "dialogue": {
        "text": "Absolutely. And I can also prepare some user scenarios for testing so we can ensure a smooth user experience.",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "opacity": 0,
      "startTime": 7.32
    }
  ]
}
```
