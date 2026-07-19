---
id: 685a9aaee82fca9effece4bd
title: Vežba 130
challengeType: 22
dashedName: task-130
lang: en-US
---
<!-- (Audio) Bob: Da, let's do to. To će nam pomoći da bolje upravljamo listom učesnika. Možeš li da sastaviš pozivnicu? -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`Yes, let's do that. It'll help us manage the BLANK list better. Can you draft the invitation?`

## --blanks--

`attendee`

### --feedback--

Ovo se odnosi na osobu koja je na događaju ili sastanku.

# --explanation--

`attendee` je osoba koja prisustvuje ili je na događaju, kao što su sastanak, seminar ili kongres/konferencija. Na primer:

`Each attendee received a welcome packet when they arrived.` – Ovo znači da je svako ko je došao na događaj dobio paket.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Bob",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_24-3.mp3",
      "startTime": 1,
      "startTimestamp": 33.78,
      "finishTimestamp": 39.42
    }
  },
  "commands": [
    {
      "character": "Bob",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Bob",
      "startTime": 1,
      "finishTime": 3.64,
      "dialogue": {
        "text": "Yes, let's do that. It'll help us manage",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "startTime": 3.64,
      "finishTime": 6.64,
      "dialogue": {
        "text": "the attendee list better. Can you draft the invitation?",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "opacity": 0,
      "startTime": 7.14
    }
  ]
}
```
