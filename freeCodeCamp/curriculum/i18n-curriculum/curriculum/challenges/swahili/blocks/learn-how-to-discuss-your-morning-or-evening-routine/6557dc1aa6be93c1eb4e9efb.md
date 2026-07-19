---
id: 6557dc1aa6be93c1eb4e9efb
title: Vežba 29
challengeType: 19
dashedName: task-29
lang: en-US
---
<!-- (Audio) Sara: U svakom slučaju, pre napuštanja for posla, volim da proverim svoje e-mailove i poruke da vidim if da li ima bilo kakvih hitnih ažuriranja za from tim. -->

# --description--

Reč `if` znači "da ili ne". Primer:

`She checks her emails to see if there are any urgent updates.` - To znači da pokušava da sazna da li ima ažuriranja ili ne.

`If` Takođe može biti deo matematičkog izraza uslova, koji prikazuje mogući status i njegov rezultat. Na primer:

`If there are urgent updates, I will reply immediately.` - Ovo znači da odgovor zavisi od dostupnosti hitnih ažuriranja.

# --questions--

## --text--

Šta Sarah znači koristeći `if` u svom izjavi o pregledavanju e-pošte i poruka?

## --answers--

Uvek prima hitne ažurmane od svog tima.

### --feedback--

`If` Ne prikazuje garanciju dobijanja hitnih ažuriranja.

---

Nekada ima hitnih ažuriranja, nekada ih nema.

---

Ne voli uopšte da proverava svoje e-poruke i poruke.

### --feedback--

Sarah zapravo kaže da proverava svoju e-poštu i poruke.

---

Provera e-pošte nije deo njenog rasporeda.

### --feedback--

Sarah navodi da je proveravanje e-pošte i poruka deo njenog rasporeda.

## --video-solution--

2

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Sarah",
        "position": {"x":50,"y":0,"z":1.4},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "2.2-1.mp3",
      "startTime": 1,
      "startTimestamp": 55.08,
      "finishTimestamp": 60.78
    }
  },
  "commands": [
    {
      "character": "Sarah",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sarah",
      "startTime": 1,
      "finishTime": 6.70,
      "dialogue": {
        "text": "Anyway, before leaving for work, I like to check my emails and messages to see if there are any urgent updates from the team.",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 7.20
    }
  ]
}
```
