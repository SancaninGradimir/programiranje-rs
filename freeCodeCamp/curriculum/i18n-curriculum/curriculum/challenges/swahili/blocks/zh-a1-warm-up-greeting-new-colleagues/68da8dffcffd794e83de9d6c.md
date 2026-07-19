---
id: 68da8dffcffd794e83de9d6c
title: Vežba 10
challengeType: 19
dashedName: task-10
lang: zh-CN
---
<!-- (Audio) Chen Na: Zdravo -->

# --instructions--

Slušaj zvuk odgovora na pitanje koje se nalazi ispod.

# --questions--

## --text--

Šta Chen Na kaže kada pozdravlja grupu ljudi?

## --answers--

`你好 (nǐ hǎo)`

### --feedback--

Ovo je pozdrav za jednu osobu, ali Chen Na maše pozdrave više od jedne osobe.

---

`您们好 (nín men hǎo)`

### --feedback--

Ova forma nije uobičajena na kineskom jeziku.

---

`你们好 (nǐ men hǎo)`

---

`大家好 (dà jiā hǎo)`

### --feedback--

Ovo takođe znači "Habari, kila mtu", ali Čen Na koristi drugu frazu.

## --video-solution--

3

# --explanation--

Pitanje pita šta Chen Na kaže kada pozdravlja **grupu ljudi**.

`你好 (nǐ hǎo)` je pozdrav za jednu osobu, dok `您好 (nín hǎo)` nije poštovan pozdrav za jednu osobu. `您们好 (nín men hǎo)` nije uobičajeno na kineski; `您 (nín)` je poštovanje za jednu osobu, nije uobičajeno za više osoba.

Ispravna fraza za pozdravljanje grupe je `你们好 (nǐ men hǎo)`, što je uobičajen način da se kaže "zdravo, svima". `大家好 (dà jiā hǎo)` je drugi način za pozdravljanje grupe, koji ćete naučiti kako napredujete.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Chen Na",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ZH_A1_greetings_and_introductions_warm_up.mp3",
      "startTime": 1,
      "startTimestamp": 8.98,
      "finishTimestamp": 9.9
    }
  },
  "commands": [
    {
      "character": "Chen Na",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Chen Na",
      "startTime": 1,
      "finishTime": 1.92,
      "dialogue": {
        "text": "你们好 (nǐ men hǎo)",
        "align": "center"
      }
    },
    {
      "character": "Chen Na",
      "opacity": 0,
      "startTime": 2.42
    }
  ]
}
```
