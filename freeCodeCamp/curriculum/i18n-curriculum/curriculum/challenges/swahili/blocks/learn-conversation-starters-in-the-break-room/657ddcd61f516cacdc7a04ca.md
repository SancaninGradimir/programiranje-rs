---
id: 657ddcd61f516cacdc7a04ca
title: Vežba 128
challengeType: 19
dashedName: task-128
lang: en-US
---
<!-- (audio) Marija: Knjižare koje se sećam su sve u centru. Ali ima autobus koji staje na dva bloka dalje. -->

# --description--

Maria obaveštava Toma o opcijama javnog prevoza, pominjući posebno saobraćaj koji staje u blizini stanice. Ovo je važno za putovanje unutar grada, posebno kada idete na mesta koja nisu lako dostupna peške.

`Two blocks away` To znači da morate proći za ugla dve ulice da biste stigli do nekog mesta. To je kratka pešačka udaljenost unutar grada.

`Downtown` To je centar grada gde ima mnogo prodavnica, kafića i obično visokih zgrada.

# --questions--

## --text--

Šta Marija kaže da je stanica na rastu dve ulice, daleko?

## --answers--

Teksti

### --feedback--

Marija spominje izbor javnog prevoza, a ne privatnu uslugu.

---

Treni

### --feedback--

Vozovi obično ne zaustavljaju na lokalnim stanicama; ne zaustavljaju se na železničkim stanicama.

---

Dosta je

---

Iznajmiti bicikl

### --feedback--

Standardne usluge iznajmljivanja su na određenoj lokaciji, a ne nešto što napušta fiksnu tačku.

## --video-solution--

3

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Maria",
        "position": {"x":50,"y":0,"z":1.5},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "1.3-5.mp3",
      "startTime": 1,
      "startTimestamp": 37.92,
      "finishTimestamp": 42.38
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
      "finishTime": 5.46,
      "dialogue": {
        "text": "The bookstores I remember are all downtown. But there's a bus that stops two blocks away.",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 5.96
    }
  ]
}
```
