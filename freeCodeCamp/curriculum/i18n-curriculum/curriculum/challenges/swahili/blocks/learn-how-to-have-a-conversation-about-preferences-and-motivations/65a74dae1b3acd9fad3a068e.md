---
id: 65a74dae1b3acd9fad3a068e
title: Vežba 132
challengeType: 22
dashedName: task-132
lang: en-US
---
<!-- (Audio) Tom: Za mene, sviđa mi se ideja vežbanja svojih veština i dobijanja priznanja for za moje doprinose. -->

# --description--

`To recognize` znači prepoznavanje osobe ili stvari iz prošlosti, ili utvrđivanje postojanja ili validnosti nečega. Na primer, `I recognize your efforts in completing this project.`

`Recognition` je imenica od `recognize`, što se tiče čina prepoznavanja ili dodeljivanja pohvale nekome za njegov trud ili postignuće. Na primer, `He received recognition for his innovative work.`

# --fillInTheBlank--

## --sentence--

`For me, I like the idea of BLANK my skills and getting BLANK for my contributions.`

## --blanks--

`practicing`

### --feedback--

Ovaj termin znači redovno obavljati aktivnosti ili vežbe kako bi se poboljšale ili održale nečije veštine.

---

`recognition`

### --feedback--

Ova imenica se odnosi na čin ili proces prepoznavanja truda, dostignuća ili osobina pojedinca.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Tom",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "4.1-5.mp3",
      "startTime": 1,
      "startTimestamp": 41.5,
      "finishTimestamp": 47.12
    }
  },
  "commands": [
    {
      "character": "Tom",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Tom",
      "startTime": 1,
      "finishTime": 6.62,
      "dialogue": {
        "text": "For me, I like the idea of practicing my skills and getting recognition for my contributions.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 7.12
    }
  ]
}
```
