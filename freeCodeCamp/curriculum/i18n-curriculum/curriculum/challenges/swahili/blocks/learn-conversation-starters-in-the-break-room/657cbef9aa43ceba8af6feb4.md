---
id: 657cbef9aa43ceba8af6feb4
title: Vežba 51
challengeType: 22
dashedName: task-51
lang: en-US
---
<!-- (audio) Sophie: Mislim da ima strast for tehnologiju i uživa u vođenju našeg tima. -->

# --description--

Kada nešto jako voliš da radiš, možeš reći da ga volišeš `enjoy`. Ovo je jednostavan način da pokažeš da te nešto čini srećnim.

Na primer, možete reći, `I enjoy playing video games`. Ovo znači da je igranje video igara radost za vas.

Tokom razgovora, Sofija kaže nešto što Mariji prija u njenom radu.

# --fillInTheBlank--

## --sentence--

`I think she has a passion for technology and she BLANK leading our team.`

## --blanks--

`enjoys`

### --feedback--

Ovaj glagol znači da Marija voli nešto i oseća se srećno kada to radi. Završava sa `-s`.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Sophie",
        "position": {"x":50,"y":0,"z":1.4},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "1.3-3.mp3",
      "startTime": 1,
      "startTimestamp": 8.50,
      "finishTimestamp": 11.88
    }
  },
  "commands": [
    {
      "character": "Sophie",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sophie",
      "startTime": 1,
      "finishTime": 4.38,
      "dialogue": {
        "text": "I think she has a passion for technology and she enjoys leading our team.",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 4.88
    }
  ]
}
```
