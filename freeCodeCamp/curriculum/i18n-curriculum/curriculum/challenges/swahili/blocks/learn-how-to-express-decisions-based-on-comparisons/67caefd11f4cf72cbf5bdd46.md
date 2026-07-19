---
id: 67caefd11f4cf72cbf5bdd46
title: Vežba 37
challengeType: 22
dashedName: task-37
lang: en-US
---
<!-- (audio) Jake: Nije baš. SafeGuard je više fokusiran na bezbednost, pa možda ne može da integrira as lako sa drugim platformama. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`BLANK. SafeGuard is more focused on security, so it might not integrate as easily with other platforms.`

## --blanks--

`Not really`

### --feedback--

Ovaj dvoredni izraz je uobičajen način da se kaže „ne“ ili „nikako“. Često se koristi kada želite da odbijete sa poštovanjem ili da date blag, indirektan odgovor. Prvi slovo prve reči je napisano velikim slovom.

# --explanation--

`Not really` se često koristi za davanje negativnog odgovora, ali sa mekšim tonom. Uobičajeniji je od samo kaženja `No`. Na primer:

- **Voditelj tima:** `Do you think this software is user-friendly?`

- **Student u obuci:** `Not really.` - To znači da nije baš lako za upotrebu, ali govornik možda nije potpuno siguran.

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
