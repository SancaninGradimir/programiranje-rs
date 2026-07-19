---
id: 655b275cadbebf5fc0f0db05
title: Vežba 82
challengeType: 22
dashedName: task-82
lang: en-US
---
<!-- (Audio) Marija: U utorku učim japanski. Online časove imam u sedam. -->

# --description--

Za `take` može imati različita značenja u zavisnosti od situacije. U kontekstu učenja, `take` znači pohađati ili učestvovati na času ili kursu. Na primer:

- `I take online lessons at 7.` - Hapa, `take` inamaanisha kuhudhuria mafundisho.

- `She is taking a programming course this semester.` - Ovde, `taking` znači da se prijavio i prisustvovao kursu.

Dakle, kada kažeš `take lessons` ili `take a course`, misliš na pridruživanje ili prisustvovanje, a ne na fizički predmet.

# --fillInTheBlank--

## --sentence--

`On Tuesdays, I learn Japanese. I BLANK BLANK lessons at 7.`

## --blanks--

`take`

### --feedback--

Ovaj glagol opisuje radnju učestvovanja u lekcijama.

---

`online`

### --feedback--

Ovaj termin se odnosi na mrežno okruženje.

# --scene--

```json
{
  "setup": {
    "background": "company2-parking.png",
    "characters": [
      {
        "character": "Maria",
        "position": {"x":50,"y":0,"z":1.5},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "2.2-4.mp3",
      "startTime": 1,
      "startTimestamp": 17.14,
      "finishTimestamp": 20.86
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
      "finishTime": 4.72,
      "dialogue": {
        "text": "On Tuesdays, I learn Japanese. I take online lessons at 7.",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 5.22
    }
  ]
}
```
