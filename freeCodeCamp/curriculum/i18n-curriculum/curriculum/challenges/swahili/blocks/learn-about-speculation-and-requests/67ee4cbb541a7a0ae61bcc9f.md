---
id: 67ee4cbb541a7a0ae61bcc9f
title: Vežba 4
challengeType: 19
dashedName: task-4
lang: en-US
---
<!-- (audio) Sophie: Nije veliki problem, ali bi trebalo da to popravimo pre nego što napravi probleme. -->

# --instructions--

Slušaj audio odgovor na pitanje dole.

# --questions--

## --text--

Da li je ova mala greška velika?

## --answers--

Ne, oni ne moraju da rade ništa oko toga.

### --feedback--

Ono što Sophie ne kaže je veliki problem, ali oni bi trebalo da to poprave.

---

Da, uništit će ceo sistem.

### --feedback--

Sophie kaže da je to veliki problem, samo je nešto što bi trebalo da poprave.

---

Da, Sophie je veoma zabrinuta zbog toga.

### --feedback--

Sophie nije mnogo zabrinuta, ali i dalje misli da ga treba popraviti.

---

Nije, ali to još treba popraviti.

## --video-solution--

4

# --explanation--

`It's not a big deal` to znači mali problem. Na primer:

- **Monica:** `I can't join the meeting today.`

- **Eva:** `It's not a big deal. I'll take notes for you.` - Propustiti sastanak je u redu, a ova osoba može da pomogne.

Sofija takođe kaže `we should fix it before it causes problems`, što znači da je bolje popraviti to sada pre nego što postane veliki problem.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Sophie",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_17-1.mp3",
      "startTime": 1,
      "startTimestamp": 5.72,
      "finishTimestamp": 8.5
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
      "finishTime": 3.78,
      "dialogue": {
        "text": "It's not a big deal, but we should fix it before it causes problems.",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 4.28
    }
  ]
}
```
