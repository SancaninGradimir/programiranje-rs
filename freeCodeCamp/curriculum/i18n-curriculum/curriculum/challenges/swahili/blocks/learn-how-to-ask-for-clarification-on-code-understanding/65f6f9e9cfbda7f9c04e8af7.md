---
id: 65f6f9e9cfbda7f9c04e8af7
title: Vežba 41
challengeType: 19
dashedName: task-41
lang: en-US
---
<!-- (Audio) Brian: Razumem. Možemo zajedno istražiti this, i na kraju toga, trebalo bi da imamo jasniju sliku onoga što se dešava. -->

# --description--

Usemi `by the end of it` se često koristi u engleskom jeziku za referisanje na zaključak ili završni deo procesa ili vremenskog perioda. To znači da na kraju određenih aktivnosti, postići će se specifični rezultati ili razumevanje.

# --questions--

## --text--

U razgovoru, šta Brian misli sa `by the end of it`?

## --answers--

Prekidaće istragu.

### --feedback--

Ovaj izraz se odnosi na zaključivanje, a nije potrebno prekidati radnju/operaciju.

---

Oni će početi sa nečim drugim/drugom aktivnošću.

### --feedback--

Brian se vraća na kraj trenutnog istraživanja, a ne započinje nešto novo.

---

Oni će odmoriti.

### --feedback--

Fokusiraj se na dostizanje razumevanja na kraju procesa, a ne na prestanak.

---

Imaće jasnije razumevanje te situacije nakon istrage.

## --video-solution--

4

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
      "filename": "6.3-3.mp3",
      "startTime": 1,
      "startTimestamp": 20.74,
      "finishTimestamp": 26.28
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
      "finishTime": 6.54,
      "dialogue": {
        "text": "Understood. We can investigate this together, and by the end of it, we should have a clearer picture of what's happening.",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 7.04
    }
  ]
}
```
