---
id: 67ee6d7bcacdc02ff7d9beb2
title: Vežba 69
challengeType: 22
dashedName: task-69
lang: en-US
---

<!-- (Audio) Lisa: It could be a JavaScript issue. Maybe there's a problem with the event handling. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`It could be a JavaScript issue. Maybe BLANK a BLANK BLANK the BLANK.`

## --blanks--

`there's`

### --feedback--

Ova reč se koristi za razgovor o postojanju nečega ili da bi se reklo da nešto postoji ili nastavlja da se dešava. To je skraćenica od `there is`.

---

`problem`

### --feedback--

Ova reč se odnosi na problem ili poteškoću koju treba rešiti ili ispraviti.

---

`with`

### --feedback--

Ovaj glagol označava vezu ili povezivanje između dve stvari.

---

`event handling`

### --feedback--

Ova dvoslovna fraza se odnosi na način na koji programi ili veb sajtovi reaguju na akcije kao što su klikanje ili pritiskanje tastera, koje izvršava korisnik. Reč završava se sa `-ing`.

# --explanation--

`There's a problem with` Koristi se za opisivanje da nešto ne radi kako treba. To znači da postoji problem ili poteškoća povezana sa nečim. Na primer:

`There's a problem with the network.` – To znači da mreža ne radi ispravno.

`Event handling` se odnosi na način na koji program ili veb-sajt obrađuje korisničke radnje, kao što su klik mišem, pritisak na taster ili pomeranje miša. Na primer:

`There's an issue with event handling.` – To znači da program ne reaguje ispravno na korisničke radnje.

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
      "filename": "B1_16-2.mp3",
      "startTime": 1,
      "startTimestamp": 31.38,
      "finishTimestamp": 35.2
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
      "finishTime": 4.82,
      "dialogue": {
        "text": "It could be a JavaScript issue. Maybe there's a problem with the event handling.",
        "align": "center"
      }
    },
    {
      "character": "Lisa",
      "opacity": 0,
      "startTime": 5.32
    }
  ]
}
```
