---
id: 66193b1deee8db8cfe3bc5c1
title: Vežba 41
challengeType: 19
dashedName: task-41
lang: en-US
---
<!-- (Audio) Tom: Koja su još alati za saradnju? Alice: Pa, postoje alati za upravljanje projektima. Pomažu timovima da organizuju zadatke. Takođe, usluge skladištenja u oblaku olakšavaju deljenje i saradnju na dokumentima. -->

# --description--

Poslušaj zvuk i odgovori na pitanje.

# --questions--

## --text--

Je li to nešto vezano za saradnju što je Alice spomenula?

## --answers--

`Project management tools` i `cloud storage services`

---

`The internet` and `computer networks`

### --feedback--

Iako su ovo važni alati u današnjem svetu, nisu to alati koje spominje Alice.

---

`Screwdrivers` i `hammers`

### --feedback--

Ovo su ručni alati, a ne alati za saradnju.

---

`Chat apps` i `email`

### --feedback--

Ove se mogu smatrati alatima za saradnju u mrežnom okruženju, ali im Alice ne treba.

## --video-solution--

1

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Tom",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      },
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
      "filename": "4.2-2.mp3",
      "startTime": 1,
      "startTimestamp": 30.82,
      "finishTimestamp": 42.02
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
      "finishTime": 3.04,
      "dialogue": {
        "text": "What other collaboration tools are there?",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 3.29
    },
    {
      "character": "Alice",
      "opacity": 1,
      "startTime": 3.29
    },
    {
      "character": "Alice",
      "startTime": 3.54,
      "finishTime": 7.46,
      "dialogue": {
        "text": "Well, there are project management tools. They help teams to organize tasks.",
        "align": "center"
      }
    },
    {
      "character": "Alice",
      "startTime": 8.06,
      "finishTime": 12.2,
      "dialogue": {
        "text": "Also, cloud storage services make it easy to share and collaborate on documents.",
        "align": "center"
      }
    },
    {
      "character": "Alice",
      "opacity": 0,
      "startTime": 12.7
    }
  ]
}
```
