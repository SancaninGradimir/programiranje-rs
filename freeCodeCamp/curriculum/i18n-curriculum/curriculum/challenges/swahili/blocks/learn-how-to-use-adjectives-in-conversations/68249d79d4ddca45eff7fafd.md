---
id: 68249d79d4ddca45eff7fafd
title: Vežba 144
challengeType: 19
dashedName: task-144
lang: en-US
---
<!-- (Audio) Jessica: Fantastično, James. Sve informacije u this ću staviti u izveštaj i razgovarati o tome sa timom sutra. Ova povratna informacija bi trebalo da nam pomogne da znamo šta dalje do. -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Jessica, šta planira da uradi sa ovim podacima?

## --answers--

Za sada ćemo zaboraviti i čekati više komentara.

### --feedback--

Jessica kaže da će organizovati i podeliti informacije, nije da je zaboravila.

---

Organizuj te informacije u izveštaj i razgovaraj o njima sa drugima.

---

Molimo korisnike da pokušaju ponovo pre nego što izvrše promene.

### --feedback--

Nije ništa rekao o ponovnom pokušaju ili korisničkim komentarima.

---

Pošalji direktno klijentu bez provere.

### --feedback--

Jessica planira da prvo razgovara sa svojim timom, a ne da ga pošalje direktno klijentu.

## --video-solution--

2

# --explanation--

Jessica kaže da će biti `put all this information into a report` i `talk about it with the team tomorrow`. Ovo pokazuje da organizuje detalje i razgovara sa svojim timom.

Takođe navodi komentare `should help`, što znači da će im pomoći u usmeravanju njihovih sledećih koraka.

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
      "filename": "B1_19-3.mp3",
      "startTime": 1,
      "startTimestamp": 86.16,
      "finishTimestamp": 93.52
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
      "finishTime": 6.0,
      "dialogue": {
        "text": "Fantastic, James. I'll put all this information into a report and talk about it with the team tomorrow.",
        "align": "center"
      }
    },
    {
      "character": "Jessica",
      "startTime": 6.26,
      "finishTime": 7.86,
      "dialogue": {
        "text": "This feedback should help us know what to do next.",
        "align": "center"
      }
    },
    {
      "character": "Jessica",
      "opacity": 0,
      "startTime": 8.86
    }
  ]
}
```
