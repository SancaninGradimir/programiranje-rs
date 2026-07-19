---
id: 699eff4a6eefcef5c1d1059a
title: Vežba 24
challengeType: 22
dashedName: task-24
lang: es
---
<!-- (Audio) Basti: Domena je q-u-e-t-z-a-l punto g-t. -->

# --description--

`dominio` se odnosi na glavni deo mrežne adrese, obično deo koji sledi `@` u e-mail poruci ili nakon `www` na veb stranici.

Koristi se često prilikom pružanja ili verifikovanja adresa e-pošte sa URL. Primer:

`El dominio es gmail punto com.` – Glavni deo je gmail.com.

`¿Cuál es el dominio?` – Koja je glavna sekcija?

# --instructions--

Slušaj zvuk i dovrši sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`El BLANK es q-u-e-t-z-a-l punto g-t.`

## --blanks--

`dominio`

### --feedback--

Ovaj termin se odnosi na glavni deo mrežne adrese ili e-pošte.

# --explanation--

`Dominio` To je imenica koja se koristi za ime domenskog dela e-mail adrese ili veb stranice.

Često se primećuje kada ljudi navode ili potvrđuju digitalne kontakt informacije.

# --scene--

```json
{
  "setup": {
    "background": "desk.png",
    "characters": [
      {
        "character": "Sebastián",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_basti_personal_details.mp3",
      "startTime": 1,
      "startTimestamp": 54.95,
      "finishTimestamp": 64.01
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
      "finishTime": 10.06,
      "dialogue": {
        "text": "El dominio es q-u-e-t-z-a-l punto g-t.",
        "align": "center"
      }
    },
    {
      "character": "Sebastián",
      "opacity": 0,
      "startTime": 10.56
    }
  ]
}
```
