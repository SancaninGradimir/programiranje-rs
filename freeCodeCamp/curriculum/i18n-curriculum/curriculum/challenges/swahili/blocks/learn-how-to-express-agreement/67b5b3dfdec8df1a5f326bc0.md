---
id: 67b5b3dfdec8df1a5f326bc0
title: Vežbanje 110
challengeType: 22
dashedName: task-110
lang: en-US
---
<!-- (audio) Maria: Odabrali smo suptilnu paletu boja, ali bi dodavanje nečijeg svetlijih tonova pomoglo. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`We've chosen a BLANK color BLANK, but maybe adding some brighter tones would help.`

## --blanks--

`subtle`

### --feedback--

Ovo znači nešto što nije oštro ili očigledno. To je nešto mekano ili suptilno, što možda nećeš otkriti odjednom.

---

`palette`

### --feedback--

Ovo se tiče opsega boja koje se koriste u dizajnu ili umetničkom radu. U ovom slučaju, `color palette` se tiče izbora boja odabranih za dizajn programa ili projekta.

# --explanation--

`Subtle` Odnosi se na nešto blago ili nejasno. Na primer:

`The artist used subtle shades of blue in the painting.` - To znači da je umetnik koristio svetle ili nežne plave nijanse koje nisu previše jarke niti previše upadljive za oko.

`Palette` Odnosi se na raspon boja ili materijala koji koristi umetnik ili dizajner. Na primer:

`The designer chose a warm palette for the website, using reds, oranges, and yellows.` - To znači da je dizajner izabrao skup toplih boja, kao što su crvena, narandžasta i žuta, za dizajn veb-sajta.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
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
      "filename": "B1_10-3.mp3",
      "startTime": 1,
      "startTimestamp": 36.2,
      "finishTimestamp": 39.94
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
      "finishTime": 4.74,
      "dialogue": {
        "text": "We've chosen a subtle color palette, but maybe adding some brighter tones would help.",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 5.24
    }
  ]
}
```
