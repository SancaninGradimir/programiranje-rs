---
id: 677d3b8fac17ba6cbf3d8afa
title: Vežba 3
challengeType: 22
dashedName: task-3
lang: en-US
---
<!-- (Audio) Bob: Želim da počnem tako što kažem da si odlično uradio posao sa svojim QA radom. -->

# --instructions--

Poslušaj zvuk i dovrši rečenicu ispod.

# --fillInTheBlank--

## --sentence--

`I want to start by BLANK that you've done a great job with your BLANK work.`

## --blanks--

`saying`

### --feedback--

Ovo je vrsta `-ing` glagola `say`, koja se koristi nakon afiksa `by` za pokazivanje načina početka.

---

`QA`

### --feedback--

Ovo označava `Quality Assurance`, što znači proces osiguravanja da proizvodi ispunjavaju potrebne standarde.

# --explanation--

Kada glagol prati afiks, mora biti u vrsti `-ing` (gerundijum). U ovoj rečenici, `saying` prati afiks `by`, pokazujući način na koji Bob koristi da počne sa svojim izjavom. Primer:

`She improved her skills by practicing regularly.` - Ovde, `practicing` prati prefiks `by`, pokazujući kako je unapredio svoje znanje.

Bob hvali Jessiku za njen posao u `QA`. `QA` odnosi se na `Quality Assurance`. Radi se o procesu osiguravanja da proizvodi ili usluge ispunjavaju specifične standarde kvaliteta i funkcionišu kako treba. Drug primer:

`The QA team identified several bugs during testing.` - Ovo znači da su osobe odgovorne za osiguranje kvaliteta softvera mogle otkriti greške u programu pre nego što je objavljen.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Bob",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_8-1.mp3",
      "startTime": 1,
      "startTimestamp": 3.3,
      "finishTimestamp": 6.7
    }
  },
  "commands": [
    {
      "character": "Bob",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Bob",
      "startTime": 1,
      "finishTime": 4.4,
      "dialogue": {
        "text": "I want to start by saying that you've done a great job with your QA work.",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "opacity": 0,
      "startTime": 4.9
    }
  ]
}
```
