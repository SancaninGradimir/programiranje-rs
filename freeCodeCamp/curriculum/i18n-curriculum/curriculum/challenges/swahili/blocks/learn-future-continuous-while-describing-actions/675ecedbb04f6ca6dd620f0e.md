---
id: 675ecedbb04f6ca6dd620f0e
title: Lekcija 76
challengeType: 22
dashedName: task-76
lang: en-US
---
<!-- (Audio) Anna: Zdravo Brian, čula sam za ove napade tipa "Man-in-the-Middle". -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`Hi Brian, I've heard about these BLANK BLANK.`

## --blanks--

`Man-in-the-Middle`

### --feedback--

Ovo je vrsta sajber napada gde napadač tajno ulazi između dve osobe ili komunikacionih sistema. Napadač može da vidi, izmeni ili ukrade deljene informacije bez da bilo ko sumnja. Ovo je složena reč, zapamtite koristiti `-`. Prva slova prve i četvrte reči treba da budu velika.

---

`attacks`

### --feedback--

Ovaj reč u množini označava aktivnosti hakerima ili kriminalcima uništavanja računarskog sistema, krađe podataka ili uzrokovanja problema.

# --explanation--

`Man-in-the-Middle` (au `MITM`) je vrsta napada gde napadač tajno ulazi između dve osobe ili komunikacionih sistema. Napadač sluša ili modifikuje informacije koje se dele bez znanja bilo koga. Primer:

`A Man-in-the-Middle attack (MITM) happened when a hacker intercepted the data sent between a user's computer and their bank.` - Mdukuhu se pretvarao da je banka, blokirao informacije i ukrao korisničke lozinke. To mu je omogućilo pristup bankovnom računu bez znanja korisnika.

`Attacks` su aktivnosti hakera koje uključuju uništavanje računarskih sistema, krađu informacija ili uzrokovanje problema. Primer:

`The website was unavailable for hours because of a cyber attack that overloaded its server.` - Prikazuje da je majmun poslao previše lažnog saobraćaja na veb stranicu, što je uzrokovalo pad ili usporavanje. Ovo je onemogućilo stvarnim korisnicima pristup i uzrokovalo poremećaj.

# --scene--

```json
{
  "setup": {
    "background": "interview-room1.png",
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
      "filename": "B1_6-3.mp3",
      "startTime": 1,
      "startTimestamp": 0,
      "finishTimestamp": 2.8
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
      "finishTime": 3.8,
      "dialogue": {
        "text": "Hi, Brian. I've heard about these man in the middle attacks.",
        "align": "center"
      }
    },
    {
      "character": "Anna",
      "opacity": 0,
      "startTime": 4.3
    }
  ]
}
```
