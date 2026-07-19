---
id: 655b67f02eecf57fa75ceecf
title: Vežba 8
challengeType: 22
dashedName: task-8
lang: en-US
---
<!-- (Audio) Sophie: Ovo je važan posao. Pomažem našem timu da nauči kako da ostanu bezbedni onlajn. -->

# --description--

Ovaj glagol `stay` se koristi da pokaže preostanak u nekim uslovima ili pod određenom uslovnošću. Često se koristi u uputstvima ili savetima za samozaštitu u nekim situacijama. Na primer:

- `Stay safe online.` - Ostanite bezbedni kada koristite internet.

- `Stay calm during the test.` - Ostanite smireni.

- `Stay focused on your work.` - Nastavite da se fokusirate na svoj posao.

# --fillInTheBlank--

## --sentence--

`That's important work. I'm BLANK our team learn how to BLANK safe online.`

## --blanks--

`helping`

### --feedback--

Ovaj glagol pokazuje da Sofi pruža pomoć ili podršku svom timu. Završava se na `-ing`.

---

`stay`

### --feedback--

Ova reč se koristi da preporuči održavanje određenog stanja, u ovom slučaju, sigurnosti na internetu.

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
    "characters": [
      {
        "character": "Sophie",
        "position": {"x":50,"y":0,"z":1.4},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "2.3-1.mp3",
      "startTime": 1,
      "startTimestamp": 13.92,
      "finishTimestamp": 17.34
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
      "finishTime": 4.42,
      "dialogue": {
        "text": "That's important work. I'm helping our team learn how to stay safe online.",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 4.92
    }
  ]
}
```
