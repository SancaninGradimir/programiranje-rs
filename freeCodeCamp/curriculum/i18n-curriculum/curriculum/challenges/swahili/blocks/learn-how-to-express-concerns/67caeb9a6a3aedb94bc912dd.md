---
id: 67caeb9a6a3aedb94bc912dd
title: Vežba 129
challengeType: 22
dashedName: task-129
lang: en-US
---
<!-- (Audio) Marija: Takođe su rekli da komunikacija nije odlična jer često ne čuju o promenama dok je prekasno. -->

# --instructions--

Slušajte audio snimak i dovršite rečenicu koja je dole.

# --fillInTheBlank--

## --sentence--

`They BLANK said the communication isn't great because they BLANK don't hear about changes until it's too late.`

## --blanks--

`also`

### --feedback--

Ovo znači takođe ili dodatno.

---  

`often`

### --feedback--

Ovo znači često ili vrlo često.

# --explanation--

`Also` znači dodavanje nečega što je prethodno pomenuto. Na primer:

`She speaks English and also knows French.` - To znači da zna francuski zajedno sa engleskim.

`Often` znači često ili obično. Na primer:

`He often works late on Fridays.` - Ovo znači da radi kasno noću često ili obično petkom.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Maria",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_12-3.mp3",
      "startTime": 1,
      "startTimestamp": 34.9,
      "finishTimestamp": 40.12
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
      "finishTime": 3.18,
      "dialogue": {
        "text": "They also said the communication isn't great",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "startTime": 3.18,
      "finishTime": 6.22,
      "dialogue": {
        "text": "because they often don't hear about changes until it's too late.",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 6.72
    }
  ]
}
```
