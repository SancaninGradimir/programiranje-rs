---
id: 656ab31ebccec247fde7cee4
title: Vežba 64
challengeType: 22
dashedName: task-64
lang: en-US
---
<!--
AUDIO REFERENCE:
Tom: Odlično. Moj računar i tableta za crtanje su takođe super. 
-->

# --description--

`Awesome` je reč koju ljudi koriste kada nešto veoma vole. To je kao da kažete `Very good`. To je neformalni način pokazivanja interesovanja ili iznenađenja.

# --fillInTheBlank--

## --sentence--

`BLANK. My computer and drawing tablet are great, too.`

## --blanks--

`Awesome`

### --feedback--

Ova reč znači `very good` ili `I really like it`. Prvo slovo je napisano velikim slovom.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Tom",
        "position": { "x": 50, "y": 15, "z": 1.2 },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "1.1-2.mp3",
      "startTime": 1,
      "startTimestamp": 32.3,
      "finishTimestamp": 36
    }
  },
  "commands": [
    {
      "character": "Tom",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Tom",
      "startTime": 1,
      "finishTime": 4.25,
      "dialogue": {
        "text": "Awesome. My computer and drawing tablet are great, too.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 4.75
    }
  ]
}
```
