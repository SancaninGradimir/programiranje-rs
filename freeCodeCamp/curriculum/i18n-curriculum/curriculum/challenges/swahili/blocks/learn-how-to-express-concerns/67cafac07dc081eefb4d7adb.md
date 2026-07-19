---
id: 67cafac07dc081eefb4d7adb
title: Vežba 135
challengeType: 19
dashedName: task-135
lang: en-US
---
<!-- (Audio) Bob: To ima smisla. Da li biste mogli da set nedeljni sastanak da bismo diskutovali o napretku i da svi budu u toku? -->

# --instructions--

Slušaj audio i odgovori na pitanje koje se nalazi dole.

# --questions--

## --text--

Koja je svrha održavanja nedeljnih sastanaka?

## --answers--

Smanite broj vežbi koje tim ima.

### --feedback--

Bob ne spominje smanjenje vežbi.

---

Izbegavajte da napravite bilo kakve izmene na projektu.

### --feedback--

Bob nije savetovao da izbegavaju promene.

---

Povećanje broja sastanaka bez jasnog cilja.

### --feedback--

Bob ima specifičan cilj i spomenuo ga je.

---

Osigurati da svi dobiju nove informacije o projektu.

## --video-solution--

4

# --explanation--

`To keep someone in the loop` To znači obaveštavanje o važnim ažuriranjima i odlukama. Na primer:

`Please keep me in the loop about any changes to the schedule.` - Ovo znači da govornik želi da primi informacije ako se nešto promeni.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Bob",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_12-3.mp3",
      "startTime": 1,
      "startTimestamp": 43.3,
      "finishTimestamp": 48.18
    }
  },
  "commands": [
    {
      "character": "Bob",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Bob",
      "startTime": 1,
      "finishTime": 3.26,
      "dialogue": {
        "text": "That makes sense. Could you set up a weekly meeting",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "startTime": 3.26,
      "finishTime": 5.88,
      "dialogue": {
        "text": "to discuss progress and keep everyone in the loop?",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "opacity": 0,
      "startTime": 6.38
    }
  ]
}
```
