---
id: 67d81e8afbcfb390dd7fc1e0
title: Vežba 133
challengeType: 19
dashedName: task-133
lang: en-US
---
<!-- (audio) Lisa: Da li ste proverili koje su datoteke bile kompromitovane? -->

<!-- SPEAKING -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Jake još uvek nije proverio to i kaže da tim treba da bude oprezan oko nečega drugog. Šta bi rekao?

## --answers--

`Not yet, but we should focus on the critical systems first.`

### --audio-id--

ENcd1493b2

---

`I already checked, and everything looks fine.`

### --audio-id--

EN4ec0b91b

### --feedback--

Jake još nije proverio, pa ne bi mogao da to potvrdi.

## --video-solution--

1

# --explanation--

Osiguravanje bezbednosti kritičnih sistema obično je prvi prioritet pre procenjivanja ličnih fajlova.

`Not yet.` to znači da Jake još uvek nije pregledao oštećene fajlove.

`We should focus on the critical systems first.` umesto pregleda fajlova, tim treba da prioritetizira zaštitu kritičnih delova sistema.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Lisa",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_14-3.mp3",
      "startTime": 1,
      "startTimestamp": 37.82,
      "finishTimestamp": 39.88
    }
  },
  "commands": [
    {
      "character": "Lisa",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Lisa",
      "startTime": 1,
      "finishTime": 3.06,
      "dialogue": {
        "text": "Have you checked which files were compromised?",
        "align": "center"
      }
    },
    {
      "character": "Lisa",
      "opacity": 0,
      "startTime": 3.56
    }
  ]
}
```
