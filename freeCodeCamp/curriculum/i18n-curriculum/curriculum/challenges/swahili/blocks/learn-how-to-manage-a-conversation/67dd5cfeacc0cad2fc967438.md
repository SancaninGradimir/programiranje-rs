---
id: 67dd5cfeacc0cad2fc967438
title: Vežba 16
challengeType: 19
dashedName: task-16
lang: en-US
---
<!-- (Audio) James: Inače, da li smo odlučili za rok for prve faze? -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

James anataka kujua nini?

## --answers--

Kama walikubaliana kuhusu tarehe ya mwisho ya awamu ya kwanza.

---

Kama mradi umefutwa.

### --feedback--

James hakutaja kufuta mradi.

---

Alice je ta koja je odgovorna za prvu fazu.

### --feedback--

James haulizi kuhusu majukumu.

---

Kama timu imekamilisha awamu ya mwisho.

### --feedback--

James hasemi kuhusu awamu ya mwisho.

## --video-solution--

1

# --explanation--

`By the way` Koristi se za uvođenje nove, ali povezane teme u razgovoru. Često spominje nešto što je govornik tek primetio ili želi da potvrdi. Na primer:

`By the way, have you seen the updated report?` – Hii huanzisha swali jipya linalohusiana na kile kilichokuwa kinajadiliwa tayari.

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
