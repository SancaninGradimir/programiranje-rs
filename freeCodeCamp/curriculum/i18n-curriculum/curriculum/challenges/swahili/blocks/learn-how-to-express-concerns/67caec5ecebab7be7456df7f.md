---
id: 67caec5ecebab7be7456df7f
title: Vežba 130
challengeType: 19
dashedName: task-130
lang: en-US
---
<!-- (Audio) Maria: Takođe su rekli da komunikacija nije dobra jer često ne čuju o promenama dok nije prekasno. -->

# --instructions--

Slušaj audio i odgovori na pitanje koje se nalazi dole.

# --questions--

## --text--

Koji je još problem koji je tim izazvao?

## --answers--

Da primaju ažuriranja previše rano.

### --feedback--

Marija spominje nešto sasvim suprotno.

---

Da ne žele da komuniciraju mnogo.

### --feedback--

Maria pita o spremnosti tima da komunicira.

---

Da često ne čuju o promenama na vreme.

---

Misle da je mnogo ljudi uključeno u komunikaciju.

### --feedback--

Marija pita o broju uključenih ljudi.

## --video-solution--

3

# --explanation--

Kada kažete nešto `isn't great`, ublažavate negativnu poruku (umesto da kažete `it is bad`, na primer). Ovo čini da kritika zvuči sa poštovanjem ili indirektno. Pogledajte sledeće rečenice:

- `The design is bad.` - Ovo je veoma oštar izraz, koji se često čuje nepoštovano.

- `The design isn't great. Maybe we can improve it.` - Govoriti ovo zvuči tečnije i ima više strukture.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Maria",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_12-3.mp3",
      "startTime": 1,
      "startTimestamp": 34.9,
      "finishTimestamp": 40.12
    }
  },
  "commands": [
    {
      "character": "Maria",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Maria",
      "startTime": 1,
      "finishTime": 3.18,
      "dialogue": {
        "text": "They also said the communication isn't great",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "startTime": 3.18,
      "finishTime": 6.22,
      "dialogue": {
        "text": "because they often don't hear about changes until it's too late.",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 6.72
    }
  ]
}
```
