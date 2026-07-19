---
id: 69399bbb6d7a7bfeedaddd96
title: Lekcija 13
challengeType: 22
dashedName: task-13
lang: es
---
<!-- (Audio) Basti: Me llamo Sebastián Ávila Gómez. -->

# --description--

Glagol `escribir` znači "pisati". Kada španski govornici žele da objasne kako je reč napisana ili kako se piše slovo po slovo, često koriste računski izraz `se escribe`.

Ova forma se izvodi iz glagola `escribir` i često se koristi pre pisanja imena, e-pošte ili drugih reči slovo po slovo. Primer:

- `Carlos se escribe C-a-r-l-o-s.` – Carlos se piše C-a-r-l-o-s.

- `Mi apellido se escribe con z.` – Moje prezime piše se slovima.

# --instructions--

Slušajte zvuk i dovršite rečenicu koja je ispod.

# --fillInTheBlank--

## --sentence--

`Hola, buenas noches.`

`Me llamo Sebastián Ávila Gómez.`

`Sebastián BLANK BLANK S-e-b-a-s-t-i-á-n, con acento en la última a.`

## --blanks--

`se`

### --feedback--

Ova mala reč je deo uobičajenog govora koji se koristi kada se objašnjava kako je nešto napisano.

---

`escribe`

### --feedback--

Ovaj oblik glagola potiče iz `escribir` i koristi se prilikom pisanja reči slovo po slovo.

# --explanation--

`Se escribe` koristi se kada je potrebno objasniti kako je reč ili ime napisano.

Potiče od glagola `escribir` i često se koristi pre nego što nešto napišete slovo po slovo.

# --scene--

```json
{
  "setup": {
    "background": "interview-room2.png",
    "characters": [
      {
        "character": "Sebastián",
        "position": {
          "x": 50,
          "y": 25,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_basti_personal_details.mp3",
      "startTime": 1,
      "startTimestamp": 0.81,
      "finishTimestamp": 16.5
    }
  },
  "commands": [
    {
      "character": "Sebastián",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sebastián",
      "startTime": 1,
      "finishTime": 2.41,
      "dialogue": {
        "text": "Hola, buenas noches.",
        "align": "center"
      }
    },
    {
      "character": "Sebastián",
      "startTime": 3.32,
      "finishTime": 6.25,
      "dialogue": {
        "text": "Me llamo Sebastián Ávila Gómez.",
        "align": "center"
      }
    },
    {
      "character": "Sebastián",
      "startTime": 7.36,
      "finishTime": 16.69,
      "dialogue": {
        "text": "Sebastián se escribe s-e-b-a-s-t-i-á-n, con acento en la última a.",
        "align": "center"
      }
    },
    {
      "character": "Sebastián",
      "opacity": 0,
      "startTime": 17.19
    }
  ]
}
```
