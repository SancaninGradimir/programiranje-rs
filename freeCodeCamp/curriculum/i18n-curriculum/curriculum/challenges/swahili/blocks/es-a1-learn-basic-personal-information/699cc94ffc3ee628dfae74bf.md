---
id: 699cc94ffc3ee628dfae74bf
title: Vežba 31
challengeType: 22
dashedName: task-31
lang: es
---
<!-- (Audio) Mateo: Es m-a-t-e-o punto d-e-l-g-a-d-o arroba s-a-n-j-u-a-n punto p-r. -->

# --description--

`Es` izvodi se od glagola `ser` i koristi se za prikazivanje ili predstavljanje nečega. Primer:

- `Es mi número.` - Ovo je moj broj.
  
- `Es mi correo.` - Ovo je moja e-pošta.

Prilikom izgovaranja e-mail adrese, neki znakovi se izgovaraju naglas:

`Punto` koristi se za znak `.` Primer:

`ana.lopez` čita se kao `ana punto lopez`.

`Arroba` koristi se za znak `@`. Primer:

`ana.lopez@ejemplo.com` čita se kao `ana punto lopez arroba ejemplo punto com`.

# --instructions--

Slušaj zvuk i dovrši sljedeću rečenicu.

# --fillInTheBlank--

## --sentence--

`BLANK m a t e o BLANK d e l g a d o BLANK s a n j u a n BLANK p r.`

## --blanks--

`Es`

### --feedback--

Ovaj tip od `ser` se koristi za prikazivanje ili pokazivanje nečega.

---

`punto`

### --feedback--

Ova reč se koristi kada se navodi oznaka `.` u adresi e-pošte.

---

`arroba`

### --feedback--

Ova reč se koristi kada se kaže simbol `@`.

---

`punto`

### --feedback--

Ovaj reč se ponovo pojavljuje pre zadnjih slova `p r`.

# --explanation--

Puni predikati su:

`Es m-a-t-e-o punto d-e-l-g-a-d-o arroba s-a-n-j-u-a-n punto p-r.`

`Es` Pokreće informacije.

`Punto` predstavlja simbol `.`

`Arroba` predstavlja simbol `@`

Ove reči se često koriste prilikom izgovaranja e-mail adrese naglas.

# --scene--

```json
{
  "setup": {
    "background": "interview-room2.png",
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
      "filename": "ES_A1_mateo_email_dialogue_with_camila.mp3",
      "startTime": 1,
      "startTimestamp": 17.02,
      "finishTimestamp": 35.09
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
      "finishTime": 19.07,
      "dialogue": {
        "text": "Es m-a-t-e-o punto d-e-l-g-a-d-o arroba s-a-n-j-u-a-n punto p-r.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 19.57
    }
  ]
}
```
