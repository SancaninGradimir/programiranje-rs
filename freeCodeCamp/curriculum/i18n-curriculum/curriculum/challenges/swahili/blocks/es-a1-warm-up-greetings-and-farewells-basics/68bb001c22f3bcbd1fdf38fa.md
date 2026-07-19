---
id: 68bb001c22f3bcbd1fdf38fa
title: Vežba 1
challengeType: 19
dashedName: task-1
lang: es
---
<!-- (Audio) Elena: Zdravo -->

# --description--

Elena želi da kaže "habari". Čutićeš ovu reč svaki put na španskom kada se ljudi sretnu.

# --instructions--

Slušaj audio i odgovori na pitanje koje se nalazi ispod.
Postoji samo jedan tačan odgovor. Ako ti je potrebna pomoć, klikni na **detalje** ispod forme.

# --questions--

## --text--

Koja reč koristi Elena da kaže "habari"?

## --answers--

`Hola`

---

`Adiós`

### --feedback--

Ovo znači suprotno od onoga što govornik kaže. Otvorite deo opisa ako vam je potrebna dodatna pomoć.

---

`Chao`

### --feedback--

Ovo znači suprotno od onoga što govornik kaže. Otvorite sekciju sa opisom ako vam je potrebna dodatna pomoć.

---

`Buenos días`

### --feedback--

Ovo znači "Dobro jutro", ali nije ono što čuješ u zvuku.

## --video-solution--

1

# --explanation--

Reč `Hola` je pozdrav. Koristi se prilikom susreta sa nekim, slično "Hello" ili "Hi". Primer:

`¡Hola, buenos días!` – Dobre vesti ujutru!

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
    "characters": [
      {
        "character": "Elena",
        "position": {
          "x": 50,
          "y": 25,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_greetings_in_the_morning.mp3",
      "startTime": 1,
      "startTimestamp": 0.35,
      "finishTimestamp": 0.9
    }
  },
  "commands": [
    {
      "character": "Elena",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Elena",
      "startTime": 1,
      "finishTime": 1.55,
      "dialogue": {
        "text": "¡Hola!",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 2.05
    }
  ]
}
```
