---
id: 66b56cb9ff3bfb183fa1b7db
title: Vežba 83
challengeType: 22
dashedName: task-83
lang: en-US
---
<!-- (Audio) Anna: Kada misliš do da li će this new modul biti spreman? -->

# --instructions--

Slušajte audio ili dopunite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`When do you think BLANK BLANK BLANK will be ready?`

## --blanks--

`this`

### --feedback--

Ovaj termin se koristi za definisanje modula o kojem se trenutno govori.

---

`new`

### --feedback--

Nešto što se dogodilo nedavno.

---

`module`

### --feedback--

Specifični deo ili deo programa obuke.

# --explanation--

`Module` odnosi se na jedinicu ili deo kursa ili programa obuke. Primer:

- `The new module on cybersecurity will be added next week.` - Ovde, `module` se odnosi na određeni deo obuke koji je fokusiran na bezbednost mreže.

Obratite pažnju kako se reči `this`, `new`, i na `module` koriste. `This` se koristi za određivanje modula o kojima govore, `new` pokazuje da je to nedavni dodatak, i `module` se odnosi na deo obuke.

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Anna",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_1-2.mp3",
      "startTime": 1,
      "startTimestamp": 47.12,
      "finishTimestamp": 48.96
    }
  },
  "commands": [
    {
      "character": "Anna",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Anna",
      "startTime": 1,
      "finishTime": 2.84,
      "dialogue": {
        "text": "When do you think this new module will be ready?",
        "align": "center"
      }
    },
    {
      "character": "Anna",
      "opacity": 0,
      "startTime": 3.34
    }
  ]
}
```
