---
id: 67ee802cf777fd1dcdeac13a
title: Vežba 19
challengeType: 19
dashedName: task-19
lang: en-US
---
<!-- (audio) Sophie: Nema problema. Takođe bi trebalo da zapamtite da koristite komentare u svom kodu. -->

# --instructions--

Slušaj audio odgovor na pitanje dole.

# --questions--

## --text--

Koje su to potrebe koje je Sofija pokazala?

## --answers--

Mark treba da obriše nepotrebne linije koda.

### --feedback--

Sophie nije pričala o brisanju koda.

---

Mark mora da potpuno prepravi svoj kod.

### --feedback--

Sophie nije predložila da se prepravi ceo kod.

---

Mark treba da izbegava korišćenje petlji.

### --feedback--

Sofija ne kaže ništa o izbegavanju petlji.

---

Mark treba da koristi komentare u svom kodu.

## --video-solution--

4

# --explanation--

`comment` su komentari u kodu koji pomažu da se objasni šta taj kod radi. Primer:

- `I added a comment to explain why this loop is necessary.` - Dodajte komentar koji objašnjava zašto je korišćena određena petlja.

- `You can use comments to leave notes about issues that need fixing later.` - Komentari se mogu dodati u kod kao podsetnici za stvari koje treba popraviti ili poboljšati.

Komentari pomažu drugima da razumeju kod i podsjećaju vas na važne detalje prilikom kasnijeg pregleda vašeg koda.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Sophie",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_17-1.mp3",
      "startTime": 1,
      "startTimestamp": 25.54,
      "finishTimestamp": 28.48
    }
  },
  "commands": [
    {
      "character": "Sophie",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sophie",
      "startTime": 1,
      "finishTime": 4.02,
      "dialogue": {
        "text": "No problem. You should also remember to use comments in your code.",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 4.52
    }
  ]
}
```
