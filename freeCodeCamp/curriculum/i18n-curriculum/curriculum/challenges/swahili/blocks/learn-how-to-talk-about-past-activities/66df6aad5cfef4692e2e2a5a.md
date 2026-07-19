---
id: 66df6aad5cfef4692e2e2a5a
title: Vežba 74
challengeType: 22
dashedName: task-74
lang: en-US
---
<!--
AUDIO REFERENCIJA:
Linda: Još ne, ali očekujem da ćemo početi da primamo detaljnije izveštaje as više korisnika navigira ažuriranim interfejsom.
-->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`Not yet, but I anticipate we'll start receiving more detailed reports BLANK BLANK BLANK BLANK the updated interface.`

## --blanks--

`as`

### --feedback--

Reč koja označava dve radnje koje se dešavaju istovremeno ili radnju koja zavisi od druge radnje.

---

`more`

### --feedback--

Termin koji označava najvišu vrednost ili najveći broj.

---

`users`

### --feedback--

Neno linalorejelea watu wanaotumia na kuvinjari kiolesura kilichosasishwa.

---

`navigate`

### --feedback--

Termin koji znači prolaziti ili navigirati kroz nešto, kao što je veb stranica ili aplikacija.

# --explanation--

`As` može da znači „dok“ ili „kada“, pokazujući da se jedna radnja odvija dok druga traje. Na primer:

- `As I was walking home, they called me.` - Walikupigia simu wakati ulipokuwa unarudi nyumbani.

- `You will get better at coding as you practice more.` - Oslabiće se ponekad ili često kada koristite više vežbanja.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Linda",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_3-2.mp3",
      "startTime": 1,
      "startTimestamp": 34.22,
      "finishTimestamp": 40.44
    }
  },
  "commands": [
    {
      "character": "Linda",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Linda",
      "startTime": 1,
      "finishTime": 4.82,
      "dialogue": {
        "text": "Not yet, but I anticipate we'll start receiving more detailed reports",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "startTime": 4.82,
      "finishTime": 7.22,
      "dialogue": {
        "text": "as more users navigate the updated interface.",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "opacity": 0,
      "startTime": 7.72
    }
  ]
}
```
