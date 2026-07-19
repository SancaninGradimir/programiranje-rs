---
id: 67efdfa59ffafb1f2a56381e
title: Vežba 55
challengeType: 19
dashedName: task-55
lang: en-US
---
<!-- (audio) Jessica: Hej Jake, noćas nam je prijavljen sigurnosni propust. Htela sam da razgovaram o tome šta ga je moglo uzrokovati. Imaš li neke ideje? -->

<!-- SPEAKING -->

# --instructions--

Slušaj audio odgovor na pitanje dole.

# --questions--

## --text--

Jake nema problema da razgovara o problemu sa Jessicom. Šta može reći?

## --answers--

`Sure, Jessica.`

### --audio-id--

EN54080a3b

---

`I'm too busy right now.`

### --audio-id--

EN9d00ecb9

### --feedback--

Ovaj odgovor ne odgovara zahtevu zato što Jake nema problema sa diskutovanjem problema.

## --video-solution--

1

# --explanation-- 

Jessica pita, `Do you have any ideas?`, šta je način da se nekoga pozove da podeli svoje misli ili mišljenje.

`Sure, Jessica` je način da pokažeš da si spreman za diskusiju problema. Drugi primer:

- **Noah:** `Do you have any ideas how to fix it?` - Ova osoba traži predloge ili rešenje.

- **David:** `Sure. We could check the server logs and see what's wrong.` - Ova osoba kaže da jeste i spremna je da podeli predlog.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Jessica",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_17-2.mp3",
      "startTime": 1,
      "startTimestamp": 0,
      "finishTimestamp": 6.38
    }
  },
  "commands": [
    {
      "character": "Jessica",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Jessica",
      "startTime": 1,
      "finishTime": 7.38,
      "dialogue": {
        "text": "Hey Jake, we had a security breach reported last night. I wanted to discuss what might have caused it. Do you have any ideas?",
        "align": "center"
      }
    },
    {
      "character": "Jessica",
      "opacity": 0,
      "startTime": 7.88
    }
  ]
}
```
