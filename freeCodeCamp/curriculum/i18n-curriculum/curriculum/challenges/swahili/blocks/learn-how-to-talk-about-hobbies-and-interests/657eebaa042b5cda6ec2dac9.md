---
id: 657eebaa042b5cda6ec2dac9
title: Vežba 59
challengeType: 22
dashedName: task-59
lang: en-US
---
<!-- (Audio) Sarah: Šališ se? -->

# --description--

`Are you kidding?` Koristi se za pokazivanje nedoverja, iznenađenja, ili ponekad da bi se potvrdilo da li neko samo smeje.

Ako ti prijatelj kaže da je video psa kako vozi na skejtbord ulicom, možeš biti iznenađen i reći `Are you kidding?` pitajući da li govori istinu ili samo se šali.

# --fillInTheBlank--

## --sentence--

`Are you BLANK?`

## --blanks--

`kidding`

### --feedback--

Ovaj glagol se koristi u govoru za izražavanje nedovjerenja ili iznenađenja kao odgovor na izjavu. Kinaishia kwa `-ing`.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Sarah",
        "position": {"x":50,"y":0,"z":1.4},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.2-3.mp3",
      "startTime": 1,
      "startTimestamp": 29.28,
      "finishTimestamp": 30.04
    }
  },
  "commands": [
    {
      "character": "Sarah",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sarah",
      "startTime": 1,
      "finishTime": 1.76,
      "dialogue": {
        "text": "Are you kidding?",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 2.26
    }
  ]
}
```
