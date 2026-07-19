---
id: 67aa23adedb02b11aaceda26
title: Vežba 8
challengeType: 19
dashedName: task-8
lang: en-US
---
<!-- (Audio) Anna: Iako je nameštaj važan, mnogi su spomenuli da im računari/kompjuterima treba nadogradnja. -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Šta je najvažnije, prema Anri?

## --answers--

Čisti računar.

---

Kupio/kupila sam novo nameštaj za kancelariju.

### --feedback--

Anna pristaje da je nameštaj važan, ali kaže da su mnogi ljudi spomenuli da im treba nešto drugo.

---

Dobiti najveću subvenciju za rad na daljinu.

### --feedback--

Anna govori o povećanju subvencija, već o tome kako ljudi žele da ih koriste.

---

Menjajte istraživačka pitanja.

### --feedback--

Anna nije spomenula ništa o istraživačkim pitanjima.

## --video-solution--

1

# --explanation--

`computer upgrade` To znači nadogradnju računara dodavanjem ili zamjenom komponenti kao što su veći RAM, brži procesor ili bolji ekran. Primer:

- `I need a computer upgrade to run the latest software.` - Sistem za zvučnike trenutno nema dovoljno snage, pa je potreban bolji.

- `After the computer upgrade, everything runs much faster.` - Performanse sistema su poboljšane nakon ažuriranja ili izmene komponenti.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Anna",
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
      "startTimestamp": 12.06,
      "finishTimestamp": 15.8
    }
  },
  "commands": [
    {
      "character": "Anna",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Anna",
      "startTime": 1,
      "finishTime": 4.74,
      "dialogue": {
        "text": "While furniture is important, many people mentioned that their computers need upgrades.",
        "align": "center"
      }
    },
    {
      "character": "Anna",
      "opacity": 0,
      "startTime": 5.24
    }
  ]
}
```
