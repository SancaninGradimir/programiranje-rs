---
id: 6629ce6bffd1efa9c6c57eaa
title: Vežba 1
challengeType: 22
dashedName: task-1
lang: en-US
---
<!-- (Audio) Brian: Hej, Sofije. Kako si? -->

# --description--

Izraz `how's it going?` je uobičajen način da se pita nekoga kako mu je ili šta se dešava u njegovom životu. Često se koristi kao prijateljski pozdrav.

Na primer, kada sretne starog prijatelja, možeš reći `Hey, how's it going? I haven't seen you for a while!` Ovo je uobičajen način da pitaš o njegovom životu. Ako želiš da pitaš o nečemu specifičnom, kao što je njegov novi posao, možeš reći `How's it going with your new job?`

# --fillInTheBlank--

## --sentence--

`Hey, Sophie. BLANK it BLANK?`

## --blanks--

`How's`

### --feedback--

Ova skraćenica se često koristi u neformalnim pozdravima. Napišite veliko slovo za prvu reč.

---

`going`

### --feedback--

Ova reč popunjava uobičajen, neformalni pozdrav koji pita za opšte stanje osobe.

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Brian",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "5.1-1.mp3",
      "startTime": 1,
      "startTimestamp": 0,
      "finishTimestamp": 2.08
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
      "finishTime": 3.08,
      "dialogue": {
        "text": "Hey, Sophie. How's it going?",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 3.58
    }
  ]
}
```
