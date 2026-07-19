---
id: 67c4bacefd5097faecca40d4
title: Vežba 22
challengeType: 19
dashedName: task-22
lang: en-US
---
<!-- (Audio) Bob: Tačno, ali bismo mogli try raditi još više dodatnih sati samo za for this projekat. Zar to ne bi napravilo razliku? -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Bob šta želi da zna?

## --answers--

Da li treba da obrišu projekat?

### --feedback--

Bob razgovara o brisanju projekta.

---

Da li bi bilo bolje raditi nekoliko sati?

### --feedback--

Bob predlaže rad više sati, a ne manje.

---

Da li je tim već rešio problem?

### --feedback--

Bob pita da li će mu njegovo predlaganje pomoći, a ne da je problem već rešen.

---

Da li će rad na prekovremenim satima poboljšati situaciju?

## --video-solution--

4

# --explanation--

Korišćenje negativnih reči u pitanjima sa pomoćnim ili modalnim glagolima (kao `wouldn't`, `isn't`, `doesn't`), koji zahtevaju direktan odgovor na `yes`/`no`, ukazuje da govornik očekuje pozitivan odgovor — Bob misli, u ovom slučaju, da će raditi prekovredno pomoći. Drugi primer:

`Doesn't this plan seem like a good idea?` - Govornik očekuje da slušalac pristaje/misli da je plan dobar.

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
      "filename": "B1_12-1.mp3",
      "startTime": 1,
      "startTimestamp": 29,
      "finishTimestamp": 34.76
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
      "finishTime": 5.18,
      "dialogue": {
        "text": "True, but we could try working even more extra hours just for this project.",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "startTime": 5.68,
      "finishTime": 6.76,
      "dialogue": {
        "text": "Wouldn't that make a difference?",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "opacity": 0,
      "startTime": 7.26
    }
  ]
}
```
