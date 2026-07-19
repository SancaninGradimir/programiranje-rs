---
id: 66bbba46fff0ef451b701bcd
title: Vežba 103
challengeType: 19
dashedName: task-103
lang: en-US
---

<!-- Audio Reference:
Tom: Hey Sarah, do you have a moment? I'm struggling with these IDEs.
Sarah: Sure, I'm not busy. What's the problem? -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Da li je Sara spremna da razgovara sa Tomom?

## --answers--

Ne, on je zauzet i ne želi da zna o njegovim problemima.

### --feedback--

Sarah kaže da nema posla.

---

Da, on/ona je spreman/spremna i želi da zna šta je problem.

---

Ne, ne može da priča trenutno, ima svoje probleme.

### --feedback--

Sarah kaže da nema posla.

---

Da, ali samo na kratko vrijeme zato što ima svoje probleme.

### --feedback--

Sarah ne navodi vremensko ograničenje; samo kaže da trenutno nije zauzeta.

## --video-solution--

2

# --explanation--

Umesto da direktno kaže da je slobodna, Sarah koristi negativan oblik `I'm not busy` kako bi pokazala da ima vremena da pomogne.

Ovo je učtiv i indirektan način da se na engleskom jeziku pokaže dostupnost, koji se često koristi kako bi razgovor zvučao ljubaznije.

Njegova sledeća rečenica, `What's the problem?`, potvrđuje da je spreman da pomogne pozivanjem Toma da objasni problem.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Tom",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      },
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
      "filename": "B1_1-3.mp3",
      "startTime": 1,
      "startTimestamp": 0,
      "finishTimestamp": 6.5
    }
  },
  "commands": [
    {
      "character": "Tom",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Tom",
      "startTime": 1,
      "finishTime": 2.92,
      "dialogue": {
        "text": "Hey Sarah, do you have a moment?",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "startTime": 3.08,
      "finishTime": 5.14,
      "dialogue": {
        "text": "I'm struggling with these IDEs.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 5.34
    },
    {
      "character": "Sarah",
      "opacity": 1,
      "startTime": 5.34
    },
    {
      "character": "Sarah",
      "startTime": 5.54,
      "finishTime": 7.5,
      "dialogue": {
        "text": "Sure, I'm not busy. What's the problem?",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 8
    }
  ]
}
```
