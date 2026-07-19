---
id: 678a5e7dffffba38c5ad16c4
title: Vežba 17
challengeType: 22
dashedName: task-17
lang: en-US
---
<!-- (audio) Linda: In my case, I prefer Python because it's great for data analysis. Plus, it's really good for building prototypes quickly. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`In my case, I prefer Python because it's BLANK data analysis. Plus, it's really BLANK building prototypes quickly.`

## --blanks--

`great for`

### --feedback--

Ovaj dvoredni izraz znači da je nešto veoma pogodno ili da dobro funkcioniše za određenu svrhu.

---

`good for`

### --feedback--

Ovaj izraz od dve reči znači nešto što je odgovarajuće ili korisno za određeni posao ili situaciju.

# --explanation--

Sve `great for` na `good for` znače nešto što je veoma korisno, prikladno ili dobro funkcioniše za određenu svrhu. Na primer:

- `This new software is great for managing large projects.` - Ovo znači da je program vrlo pogodan i efikasan za upravljanje velikim projektima.

- `Cloud storage is good for backing up large volumes of data.` - Ovo znači da je skladištenje u oblaku veoma efikasno i pogodno za sigurno skladištenje velike količine podataka.

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Linda",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_9-1.mp3",
      "startTime": 1,
      "startTimestamp": 16.04,
      "finishTimestamp": 21.9
    }
  },
  "commands": [
    {
      "character": "Linda",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Linda",
      "startTime": 1,
      "finishTime": 4.3,
      "dialogue": {
        "text": "In my case, I prefer Python because it's great for data analysis.",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "startTime": 4.64,
      "finishTime": 6.86,
      "dialogue": {
        "text": "Plus it's really good for building prototypes quickly.",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "opacity": 0,
      "startTime": 7.36
    }
  ]
}
```
