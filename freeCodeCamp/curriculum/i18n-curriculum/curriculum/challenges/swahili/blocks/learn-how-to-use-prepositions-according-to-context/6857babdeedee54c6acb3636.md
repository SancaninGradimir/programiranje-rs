---
id: 6857babdeedee54c6acb3636
title: Vežba 134
challengeType: 19
dashedName: task-134
lang: en-US
---
<!-- (Audio) Sarah: Ako krenete pravo niz this hodnik i skrenete levo na break područje, videćete ih sačuvane direktno preko from mašine za kafu. -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Gde su sada sačuvani monitori?

## --answers--

Kraj parking zone.

### --feedback--

Sarah nije spomenula parking područje.

---

Unutar IT sobe.

### --feedback--

Premeštene su iz unutrašnjosti IT sobe rano.

---

Sa strane stola za bezbednost.

### --feedback--

Nema objašnjenja o sigurnosnoj ladici.

---

Blizu mašine za kafu.

## --video-solution--

4

# --explanation--

Sara daje jasna uputstva koja se završavaju referencom: `the coffee machine`.

Objašnjava da, nakon što se prođe pravo kroz hodnik i skrene ulevo, monitori se mogu naći postavljeni nasuprot mašini za kafu, čime mašina za kafu postaje blagodetni i lako vidljiv orijentir za njihovo pronalaženje.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Sarah",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_22-3.mp3",
      "startTime": 1,
      "startTimestamp": 12.68,
      "finishTimestamp": 18.22
    }
  },
  "commands": [
    {
      "character": "Sarah",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sarah",
      "startTime": 1,
      "finishTime": 6.54,
      "dialogue": {
        "text": "If you head straight down this corridor and turn left at the break area, you'll see them stored right across from the coffee machine.",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 7.04
    }
  ]
}
```
