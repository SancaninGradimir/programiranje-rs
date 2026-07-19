---
id: 66c8fb021dcfcb767dfec33a
title: Vežba 16
challengeType: 19
dashedName: task-16
lang: en-US
---
<!-- (Audio) Linda: Ne, nismo. Ali rešili smo slične probleme na drugim projektima. -->

# --instructions--

Slušaj audio snimak i odgovori na pitanje koje je navedeno ispod.

# --questions--

## --text--

Da li je sledeća informacija tačna?

## --answers--

Nikada nismo rešavali ovakve problemi ranije.

### --feedback--

Zamisli da Linda spomene bilo kakvo iskustvo sa sličnim problemima.

---

Oni su već rešili ovaj problem na drugom projektu.

### --feedback--

Zamislite da Linda kaže da ima iskustva sa ovim konkretnim problemom ili sličnim problemom.

---

Nisu rešili ovaj specifičan problem, ali su ranije rešavali slične probleme.

---

Jeste li već nekada rešavali ovaj problem mnogo puta ranije?

### --feedback--

Zamislite da Linda govori o rešavanju ovog konkretnog problema ili sličnog problema.

## --video-solution--

3

# --explanation--

Da biste dobili tačan odgovor, obratite pažnju na ono o čemu Lina govori u vezi rešavanja `exact issue` ili `similar issues`.

Linda jasno objašnjava da nisu rešavali ovaj specifični problem ranije, ali pominje i da su ranije rešavale slične probleme.

Ispravan odgovor bi trebalo da pokaže ovu ravnotežu—priznanje da nije rešen specifičan problem, ali potvrđivanje prethodnog iskustva i srodnih problema.

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
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
      "filename": "B1_3-1.mp3",
      "startTime": 1,
      "startTimestamp": 17.02,
      "finishTimestamp": 20.16
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
      "finishTime": 1.86,
      "dialogue": {
        "text": "No, we haven't,",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "startTime": 1.9,
      "finishTime": 4.14,
      "dialogue": {
        "text": "but we've solved similar issues on other projects.",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "opacity": 0,
      "startTime": 4.64
    }
  ]
}
```
