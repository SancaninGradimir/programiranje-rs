---
id: 67dbf936fe4d33ccbccae40d
title: Vežba 1
challengeType: 22
dashedName: task-1
lang: en-US
---
<!-- (Audio) Alice: Hej, Džejms. Žao mi je zbog prekida ranije. for -->

# --instructions--

Poslušaj zvuk i dovrši rečenicu ispod.

# --fillInTheBlank--

## --sentence--

`Hey, James. BLANK for the interruption earlier.`

## --blanks--

`Sorry`

### --feedback--

Ovo se koristi za izvinjenje zbog nečega što se desilo. Nemoj zaboraviti da napišeš veliko slovo na početku.

# --explanation--

`To be sorry for something` Koristi se kada tražite izvinjenje od nekoga za čin koji je mogao uzrokovati neprijatnost ili štetu. Primer:

`I'm sorry for being late to the meeting.` - Ovo znači da govornik žali što je kasnio i traži izvinjenje. Proverite da `being` jeste u formi `-ing` jer se nalazi odmah nakon `for` (prethodni glagol).

# --scene--

```json
{
  "setup": {
    "background": "interview-room2.png",
    "characters": [
      {
        "character": "Alice",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_15-1.mp3",
      "startTime": 1,
      "startTimestamp": 0,
      "finishTimestamp": 2.55
    }
  },
  "commands": [
    {
      "character": "Alice",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Alice",
      "startTime": 1,
      "finishTime": 3.55,
      "dialogue": {
        "text": "Hey, James. Sorry for the interruption earlier.",
        "align": "center"
      }
    },
    {
      "character": "Alice",
      "opacity": 0,
      "startTime": 4.05
    }
  ]
}
```
