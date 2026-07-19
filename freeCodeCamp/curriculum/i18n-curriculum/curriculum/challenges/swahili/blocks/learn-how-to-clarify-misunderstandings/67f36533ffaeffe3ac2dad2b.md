---
id: 67f36533ffaeffe3ac2dad2b
title: Vežba 131
challengeType: 19
dashedName: task-131
lang: en-US
---
<!-- (Audio) Jessica: Oh, možda je u pitanju zabuna. Funkcija praćenja budžeta je planirana for za sledeće ažuriranje, a ne this ono. -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Jessica, šta objašnjava?

## --answers--

Postojao je problem sa rasporedom trenutnog ažuriranja.

### --feedback--

Jessica govori o vremenskom aspektu funkcije, a ne o samom rasporedu ažuriranja.

---

Funkcija za praćenje budžeta biće u nadolazećem ažuriranju, a ne u trenutnom.

---

Funkcija za praćenje budžeta je uklonjena u trenutnom ažuriranju.

### --feedback--

Jessica nije spomenula da je funkcija uklonjena.

---

Funkcija je uključena po grešci u ovo ažuriranje.

### --feedback--

Jessica rekla je da je funkcija uključena po grešci.

## --video-solution--

2

# --explanation--

Jessica kaže, `The budget tracking feature is planned for the next update`, objašnjavajući da funkcija nije uključena u trenutno ažuriranje, ali će biti dodata u sledeće.

Ovo uklanja zbunjenost o vremenu funkcije.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
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
      "filename": "B1_16-3.mp3",
      "startTime": 1,
      "startTimestamp": 60.98,
      "finishTimestamp": 65.76
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
      "finishTime": 2.32,
      "dialogue": {
        "text": "Oh, that might be a mix-up.",
        "align": "center"
      }
    },
    {
      "character": "Jessica",
      "startTime": 2.58,
      "finishTime": 5.78,
      "dialogue": {
        "text": "The budget tracking feature is planned for the next update, not this one.",
        "align": "center"
      }
    },
    {
      "character": "Jessica",
      "opacity": 0,
      "startTime": 6.28
    }
  ]
}
```
