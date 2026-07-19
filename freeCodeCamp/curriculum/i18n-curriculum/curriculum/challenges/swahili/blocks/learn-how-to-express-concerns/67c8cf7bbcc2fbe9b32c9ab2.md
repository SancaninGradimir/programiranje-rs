---
id: 67c8cf7bbcc2fbe9b32c9ab2
title: Vežba 92
challengeType: 19
dashedName: task-92
lang: en-US
---
<!-- (Audio) Marija: To je dobra napomena. Predlažem da imamo redovnije provere/sastanke sa timom kako bismo poboljšali komunikaciju. -->

# --instructions--

Slušaj audio i odgovori na pitanje koje se nalazi dole.

# --questions--

## --text--

Šta će Maria uraditi sa komentarima koje je dobila od Jamesa?

## --answers--

On/Ona će to ignorisati.

### --feedback--

Maria prihvatila je Jamesov argument i planira da preduzme korake.

---

Rekće im timu da prestanu da se brinu o komunikaciji.

### --feedback--

Maria želi da poboljša komunikaciju, ne da zanemari zabrinutosti.

---

Traži sastanke tima.

### --feedback--

Maria će potražiti te sastanke.

---

Predlažem da imamo više sastanaka kako bismo poboljšali komunikaciju.

## --video-solution--

4

# --explanation--

Koristeći glagol `suggest`, koristite sledeći glagol u formi `-ing` umesto infinitiva. Na primer:

- `She suggested taking a break.` - To znači da je predložena ideja odmoriti.

- `He suggested starting the meeting earlier to avoid delays.` - To znači da je predložio da se sastanak počne ranije.

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
      "filename": "B1_12-2.mp3",
      "startTime": 1,
      "startTimestamp": 57.14,
      "finishTimestamp": 61.36
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
      "finishTime": 2.9,
      "dialogue": {
        "text": "That's a good point. I'll suggest having more",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "startTime": 3,
      "finishTime": 5.22,
      "dialogue": {
        "text": "regular check-ins with the team to improve communication.",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 5.72
    }
  ]
}
```
