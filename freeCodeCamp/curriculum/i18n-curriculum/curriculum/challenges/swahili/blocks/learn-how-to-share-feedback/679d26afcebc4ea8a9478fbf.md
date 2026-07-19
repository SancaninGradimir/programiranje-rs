---
id: 679d26afcebc4ea8a9478fbf
title: Vežba 91
challengeType: 19
dashedName: task-91
lang: en-US
---
<!-- (Audio) James: Apsolutno. Misliš li da moramo ponovo ažurirati softver? -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Da li je James siguran da moraju ispraviti verziju programa?

## --answers--

Nije sasvim tačno, jer pita za mišljenje Marije.

---

Da, već je odlučio da ažurira taj program.

### --feedback--

James pita Mariju o tome, pa je moguće da još uvek nije donela/donela odluku.

---

Da, već je započeo/la da ažurira tu aplikaciju.

### --feedback--

James pita da li treba da ažuriraju tu aplikaciju ili ne.

---

Naprotiv tome, on je siguran da ne bi trebalo da ažuriraju taj program.

### --feedback--

James se uopšte ne protivi toj ideji; zapravo pita za mišljenje Marije o tom pitanju.

## --video-solution--

1

# --explanation--

`To update` to znači menjanje ili poboljšanje programa izlaskom nove verzije. Ažuriranje može uključivati popravku grešaka, dodavanje novih funkcija ili poboljšanje performansi. Na primer:

`The company released an update to fix security vulnerabilities in the app.` - Ovo znači da je izbađena nova verzija ili rešava pitanja bezbednosti.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
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
      "filename": "B1_8-3.mp3",
      "startTime": 1,
      "startTimestamp": 25.8,
      "finishTimestamp": 28.74
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
      "finishTime": 4.34,
      "dialogue": {
        "text": "Absolutely. Do you think we need to update the software again?",
        "align": "center"
      }
    },
    {
      "character": "James",
      "opacity": 0,
      "startTime": 4.84
    }
  ]
}
```
