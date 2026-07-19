---
id: 662347b1bb7b3cdfcccffa57
title: Vežbanje od 50
challengeType: 22
dashedName: task-50
lang: en-US
---

<!-- (Audio) Brian: Sophie, čuo sam da radiš na popravljanju greške u modulu za autentifikaciju korisnika. Da li ti treba pomoć? -->

# --description--

`Heard` je prošlo vreme glagola `to hear`, koji znači dobiti informaciju o nečemu putem sluha ili biti obavešten o nečemu. Na primer, `I heard the news yesterday` znači da si dobio informaciju o vestima prethodnog dana.

`authentication module` u kontekstu programiranja je deo sistema odgovoran za proveru identiteta korisnika. Često se koristi u sistemima za prijavljivanje (login). Na primer, `The authentication module checks the username and password` znači da proverava korisničke podatke.

# --fillInTheBlank--

## --sentence--

`Sophie, I BLANK you're working on BLANK that bug in the user BLANK module. Need any help?`

## --blanks--

`heard`

### --feedback--

To je prošlo vreme glagola `to hear`, koje pokazuje da je Brian dobio informaciju o Sophienom zadatku.

---

`fixing`

### --feedback--

Radi se o procesu popravljanja ili rešavanja greške u aplikaciji.

---

`authentication`

### --feedback--

Odnosi se na proces potvrde identiteta korisnika u modulu aplikacije.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Brian",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "9.1-3.mp3",
      "startTime": 1,
      "startTimestamp": 0,
      "finishTimestamp": 5.66
    }
  },
  "commands": [
    {
      "character": "Brian",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Brian",
      "startTime": 1,
      "finishTime": 3.84,
      "dialogue": {
        "text": "Sophie, I heard you're working on fixing that bug",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "startTime": 3.84,
      "finishTime": 6.66,
      "dialogue": {
        "text": "in the user authentication module. Need any help?",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 7.16
    }
  ]
}
```
