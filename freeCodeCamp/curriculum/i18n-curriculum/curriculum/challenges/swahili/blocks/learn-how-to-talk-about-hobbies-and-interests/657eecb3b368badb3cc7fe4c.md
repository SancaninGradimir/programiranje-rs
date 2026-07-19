---
id: 657eecb3b368badb3cc7fe4c
title: Vežba 61
challengeType: 22
dashedName: task-61
lang: en-US
---
<!-- (Audio) Sarah: Posećujem barem jednu konferenciju svake godine. To je najbolji trenutak godine for me. -->

# --description--

`At least` Koristi se kada želite da kažete vrlo malu količinu ili da je broj nečega jednak ili dovoljan. To je kao da kažete "nije manje od ove količine". Na primer:

`I study English for at least 30 minutes every day.` - To znači da koristiš 30 minuta ili više za čitanje engleskog svakog dana, ali nikada manje od 30 minuta.

# --fillInTheBlank--

## --sentence--

`I go to BLANK one convention every year. It's the best moment of the year for me.`

## --blanks--

`at least`

### --feedback--

Ovi dva termina čine matematički izraz koji pokazuje minimalnu vrednost.

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
      "startTimestamp": 30.46,
      "finishTimestamp": 34.22
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
      "finishTime": 4.76,
      "dialogue": {
        "text": "I go to at least one convention every year. It's the best moment of the year for me.",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 5.26
    }
  ]
}
```
