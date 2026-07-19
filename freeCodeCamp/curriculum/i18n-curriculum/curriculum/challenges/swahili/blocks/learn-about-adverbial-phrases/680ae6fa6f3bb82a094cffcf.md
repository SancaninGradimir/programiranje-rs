---
id: 680ae6fa6f3bb82a094cffcf
title: Vežba 91
challengeType: 19
dashedName: task-91
lang: en-US
---
<!-- (Audio) Riker: Velika Britanija i Nemačka su pokazale najveći napredak, čak i veći nego što smo očekivali. -->

<!-- SPEAKING -->

# --instructions--

Slušajte audio snimak i odgovorite na pitanje koje je navedeno ispod.

# --questions--

## --text--

Šta bi Marija mogla da kaže kako bi pokazala da je srećno iznenađena rezultatima?

## --answers--

`That's impressive.`

### --audio-id--

EN70c3200b

---

`Maybe we should lower our expectations.`

### --audio-id--

EN342dc19a

### --feedback--

Ovo pokazuje nedostatak samopouzdanja, a ne uzbuđenje oko rezultata.

## --video-solution--

1

# --explanation--

`Impressive` znači da je nešto vrijedno pažnje, pohvale ili poštovanja jer je vrlo lijepo, veliko ili prikladno na izuzetnom nivou. Na primjer:

`Your presentation was really impressive! It covered everything clearly and confidently.` – To znači da su nastupi bili visokog kvaliteta i ostavili ljude sa snažnim pozitivnim osećanjima.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Riker",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_18-3.mp3",
      "startTime": 1,
      "startTimestamp": 18.42,
      "finishTimestamp": 23.1
    }
  },
  "commands": [
    {
      "character": "Riker",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Riker",
      "startTime": 1,
      "finishTime": 3.32,
      "dialogue": {
        "text": "The UK and Germany saw the most improvement,",
        "align": "center"
      }
    },
    {
      "character": "Riker",
      "startTime": 3.72,
      "finishTime": 5.68,
      "dialogue": {
        "text": "even more than we expected.",
        "align": "center"
      }
    },
    {
      "character": "Riker",
      "opacity": 0,
      "startTime": 6.18
    }
  ]
}
```
