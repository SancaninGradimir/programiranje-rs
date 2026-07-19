---
id: 65d86af6cdfed1fcab11abbe
title: Vežba 70
challengeType: 22
dashedName: task-70
lang: en-US
---
<!-- (Audio) Maria: Takođe obezbeđuje da se svako pridržava sigurnosnih procedura. -->

# --description--

`Follow security procedures` To znači delovati prema pravilima ili uzeti mere kako bi se osiguralo područje ili ljudi. Važno je na mnogim mestima, posebno na radnom mestu, sprečiti probleme ili opasnosti.

Naučio sam da nakon `everyone`, treba koristiti treće lice množine glagola jer se `everyone` tretira kao svako u grupi, obrađujući pojedinačno.

# --fillInTheBlank--

## --sentence--

`He also ensures that everyone BLANK BLANK BLANK.`

## --blanks--

`follows`

### --feedback--

Ovo je oblik trećeg lica glagola, što označava da svaka osoba izvodi tu akciju/radnju.

---

`security`

### --feedback--

Ova reč znači zaštititi ljude, lokacije ili stvari od opasnosti ili štete.

---

`procedures`

### --feedback--

Ovo su koraci ili pravila koja moraju biti prateći radi bezbednosti.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Maria",
        "position": {"x":50,"y":0,"z":1.5},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.3-3.mp3",
      "startTime": 1,
      "startTimestamp": 33.80,
      "finishTimestamp": 36.56
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
      "finishTime": 3.76,
      "dialogue": {
        "text": "He also ensures that everyone follows security procedures.",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 4.26
    }
  ]
}
```
