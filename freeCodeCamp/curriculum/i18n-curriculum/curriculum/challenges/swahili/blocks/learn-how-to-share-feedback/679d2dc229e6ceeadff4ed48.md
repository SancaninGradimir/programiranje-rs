---
id: 679d2dc229e6ceeadff4ed48
title: Vežba 92
challengeType: 22
dashedName: task-92
lang: en-US
---
<!-- (Audio) James: Misliš li da treba ponovo da ažuriramo softver? Ako do, to bi moglo odložiti druge projekte. -->

# --instructions--

Poslušaj zvuk i dovrši rečenicu ispod.

# --fillInTheBlank--

## --sentence--

`Do you think we need to update the software again? If we BLANK, it might BLANK other projects.`

## --blanks--

`do`

### --feedback--

Ova reč se koristi za izbegavanje ponavljanja glagola `update` iz prethodne rečenice.

---

`delay`

### --feedback--

Ova reč znači odlaganje ili učinjavanje da nešto bude urađeno kasnije nego što je planirano.

# --explanation--

Umesto da kaže `If we update the software, it might delay other projects.`, James je skratio na `If we do`. Reč `do` se često koristi da bi se izbeglo ponavljanje glagola ili celokupnog izraza koji je korišćen u prethodnoj rečenici. Na primer:

`She wants to join the meeting, and if she does, she'll need the link.` - Umesto da kažete `if she joins the meeting`, možete koristiti `does` da ga promenite i na ovaj način možete izbeći ponavljanje.

`To delay` to znači da se nešto dešava kasnije nego što je planirano. Na primer:

`The flight was delayed due to bad weather.` - Ovo znači da je let odložen i nije pol उड़ाo na vrijeme.

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
      "startTimestamp": 26.86,
      "finishTimestamp": 31.46
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
      "finishTime": 2.88,
      "dialogue": {
        "text": "Do you think we need to update the software again?",
        "align": "center"
      }
    },
    {
      "character": "James",
      "startTime": 3.16,
      "finishTime": 5.6,
      "dialogue": {
        "text": "If we do, it might delay other projects.",
        "align": "center"
      }
    },
    {
      "character": "James",
      "opacity": 0,
      "startTime": 6.1
    }
  ]
}
```
