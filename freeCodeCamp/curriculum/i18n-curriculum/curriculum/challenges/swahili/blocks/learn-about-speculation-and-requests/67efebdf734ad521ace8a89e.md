---
id: 67efebdf734ad521ace8a89e
title: Vežba 57
challengeType: 22
dashedName: task-57
lang: en-US
---
<!-- (audio) Jake: Naravno, Jessica. Može biti nezaštićena ranjivost. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`Sure, Jessica. It could be an BLANK.`

## --blanks--

`unpatched vulnerability`

### --feedback--

Ovaj izraz od dve reči odnosi se na bezbednosnu ranjivost u sistemu koja nije popravljena ili ažurirana i koja može biti zloupotrebljena.

# --explanation--

`Unpatched` to znači da nešto nije ažurirano ili ispravljeno.

`Vulnerability` Odnosi se na ranjivost u sistemu koja može biti zloupotrebljena.

Takođe, `unpatched vulnerability` je sigurnosna ranjivost koja nije popravljena niti ažurirana. Hakeri mogu koristiti ovu ranjivost za napad na sistem. Na primer:

`We need to fix the unpatched vulnerability now.` - Tim zna za sigurnosni problem, ali još uvek nije popravljen.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Jake",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_17-2.mp3",
      "startTime": 1,
      "startTimestamp": 6.72,
      "finishTimestamp": 10.1
    }
  },
  "commands": [
    {
      "character": "Jake",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Jake",
      "startTime": 1,
      "finishTime": 4.38,
      "dialogue": {
        "text": "Sure, Jessica. It could be an unpatched vulnerability.",
        "align": "center"
      }
    },
    {
      "character": "Jake",
      "opacity": 0,
      "startTime": 4.88
    }
  ]
}
```
