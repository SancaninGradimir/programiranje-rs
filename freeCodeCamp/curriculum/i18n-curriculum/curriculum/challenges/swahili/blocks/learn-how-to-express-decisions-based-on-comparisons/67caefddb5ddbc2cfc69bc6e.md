---
id: 67caefddb5ddbc2cfc69bc6e
title: Vežba 38
challengeType: 22
dashedName: task-38
lang: en-US
---
<!-- (audio) Jake: Ne baš. SafeGuard je više fokusiran na bezbednost, pa možda ne može lako da se integriše sa as sa drugim platformama. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`Not really. SafeGuard is BLANK security, so it might not integrate as easily with other platforms.`

## --blanks--

`more focused on`

### --feedback--

Ova tri reči zajedno znače da SafeGuard stavlja naglasak na bezbednost ili joj daje više pažnje, u poređenju sa drugim funkcionalnostima.

# --explanation--

`More focused on` Koristi se za prikaz nečega ili osobe na koju je posvećena veća pažnja. Primer:

`This software is more focused on performance than on design.` - Ovo znači da je ova aplikacija napravljena pre svega za odlične performanse, a ne nužno i za privlačan dizajn.

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
      "filename": "B1_13-1.mp3",
      "startTime": 1,
      "startTimestamp": 56.88,
      "finishTimestamp": 62.58
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
      "finishTime": 6.7,
      "dialogue": {
        "text": "Not really. Safeguard is more focused on security, so it might not integrate as easily with other platforms.",
        "align": "center"
      }
    },
    {
      "character": "Jake",
      "opacity": 0,
      "startTime": 7.2
    }
  ]
}
```
