---
id: 66db5c0fafea6d794c92ccea
title: Vežba 58
challengeType: 19
dashedName: task-58
lang: en-US
---
<!--
AUDIO REFERENCE:
Linda: Da. Prilagođavanja navigacione trake i podnožja već su napravila veliku razliku.
-->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Kako funkcionišu ažurirane karakteristike?

## --answers--

Ne rade ispravno na svim uređajima, i to je napravilo veliku razliku.

### --feedback--

Linda nije spomenula nikakve probleme u vezi tih korekcija.

---

Potrebno mu je više prilagođavanja da bi funkcionisao kako treba, a ovo nije napravilo nikakvu razliku.

### --feedback--

Linda nije pomenula potrebu za dodatnim izmenama.

---

Stvaraju nove probleme na korisničkom interfejsu, i ovo je donelo veliku razliku.

### --feedback--

Linda nije rekla da su izmene izazvale nove probleme.

---

Rade dobro i izmene su napravile veliku razliku.

## --video-solution--

4

# --explanation--

Da bi utvrdio da li nešto dobro funkcioniše, potraži reči ili izraze koji ukazuju na pozitivne rezultate ili poboljšanja.

Linda anatumia usemi `have already made a big difference`.

`Made a big difference` označava značajnu ili primetnu promenu. Kada se ovaj izraz koristi u pozitivnom kontekstu, obično znači da su promene bile korisne ili efikasne.

Dakle, odgovor Linde pokazuje da ažurirani elementi dobro funkcionišu i poboljšali su stanje.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
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
      "filename": "B1_3-2.mp3",
      "startTime": 1,
      "startTimestamp": 15.66,
      "finishTimestamp": 19.46
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
      "finishTime": 3.16,
      "dialogue": {
        "text": "Yes, the navigation bar and footer adjustments",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "startTime": 3.16,
      "finishTime": 4.6,
      "dialogue": {
        "text": "have already made a big difference,",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "opacity": 0,
      "startTime": 5.1
    }
  ]
}
```
