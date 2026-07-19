---
id: 6903d3c4ccae5fffec5f3cbc
title: Vežba 4
challengeType: 19
dashedName: task-4
lang: es
---
<!-- (Audio) Mateo: Ja sam porto-rikanac. -->

# --instructions--

Poslušajte zvuk sa odgovorom na pitanje koje je dole.

# --questions--

## --text--

Koje je građanstvo Matea?

## --answers--

`Chileno`

### --feedback--

Ovaj izbor se tiče osobe/čoveka iz Čilea.

---

`Peruano`

### --feedback--

Ova reč opisuje osobu iz Perua.

---

`Puertorriqueño`

---

`Colombiana`

### --feedback--

Ovo je o ženi iz Kolumbije, i na kraju `-a` prikazuje ženski oblik, koji ne odgovara Mateu.

## --video-solution--

3

# --explanation--

`Soy` ("Ja sam") izvodi se iz glagola `ser` i koristi se za pokazivanje identiteta, državljanstva ili profesije. Primer:

- `Soy chilena.` – Ja sam Mchile. (kike)

- `Soy chileno.` – Ja sam Mchile. (muški)

- `Soy puertorriqueña` - Ja sam Puerto Riko. (kike)

- `Soy puertorriqueño` - Ja sam Puerto Riko. (muški)

- `Soy canadiense.` – Ja sam Kanadastanac. (bez roda)

# --scene--

```json
{
  "setup": {
    "background": "company3-reception.png",
    "characters": [
      {
        "character": "Mateo",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_meet_mateo.mp3",
      "startTime": 1,
      "startTimestamp": 5.81,
      "finishTimestamp": 7.13
    }
  },
  "commands": [
    {
      "character": "Mateo",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Mateo",
      "startTime": 1,
      "finishTime": 2.32,
      "dialogue": {
        "text": "Soy puertorriqueño.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 2.82
    }
  ]
}
```
