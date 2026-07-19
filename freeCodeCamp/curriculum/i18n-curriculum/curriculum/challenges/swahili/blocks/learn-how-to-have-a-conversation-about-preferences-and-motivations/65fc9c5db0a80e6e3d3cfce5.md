---
id: 65fc9c5db0a80e6e3d3cfce5
title: Vežba 37
challengeType: 22
dashedName: task-37
lang: en-US
---
<!-- (Audio) Brian: Wow. Znate šta? Ovo je zaista motivacionan razgovor. Hvala vam for na podeljenju vaših misli. -->

# --description--

U ovom delu razgovora, Brajan govori o tome kako se osećao nakon razgovora i zahvaljuje Mariji što je podelila svoje mišljenje.

# --fillInTheBlank--

## --sentence--

`Yeah, wow. You know what? This was really a BLANK talk. Thanks for BLANK your thoughts.`

## --blanks--

`motivating`

### --feedback--

Ova reč znači nešto što ti daje snagu ili razlog za uraditi neku stvar. To je kao kada te čije reči nateraju da želiš da se više potrudiš.

---

`sharing`

### --feedback--

Ova reč znači dati nešto što posedujete drugima. To je kao kada kažeš nekome svoje misli ili osećanja.

# --scene--

```json
{
  "setup": {
    "background": "cafe.png",
    "characters": [
      {
        "character": "Brian",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "4.1-1.mp3",
      "startTime": 1,
      "startTimestamp": 70.38,
      "finishTimestamp": 76.10
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
      "finishTime": 6.72,
      "dialogue": {
        "text": "Yeah, wow. You know what? This was a really motivating talk. Thanks for sharing your thoughts.",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 7.22
    }
  ]
}
```
