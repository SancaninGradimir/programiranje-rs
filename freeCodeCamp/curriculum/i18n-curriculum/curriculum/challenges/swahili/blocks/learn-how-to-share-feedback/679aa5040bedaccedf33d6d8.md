---
id: 679aa5040bedaccedf33d6d8
title: Vežba 45
challengeType: 19
dashedName: task-45
lang: en-US
---
<!-- (Audio) Brian: Ako se svi složimo oko svega, možemo propustiti važne detalje, zar ne misliš? -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Zašto Brian misli da nije dobro kada svi razmišljaju na isti način?

## --answers--

Kwa sababu wanaweza kupuuzia maelezo muhimu.

---

Zato što bi učinilo odluke brže.

### --feedback--

Brian ne kaže da je saglasnost uvek korisna.

---

Jer konflikti uvek uzrokuju probleme.

### --feedback--

Brian kaže da neki sukobi su korisni, a ne da izazivaju probleme.

---

Kwa sababu hakuna mtu angegawisha maoni yao.

### --feedback--

Brian ne govori o tome da ljudi odbijaju da dele svoja mišljenja.

## --video-solution--

1

# --explanation--

Obrazac `if + Simple Past`, praćen glagolom `might` u glavnoj rečenici, koristi se za izražavanje hipotetičke situacije sa mogućom posledicom. Na primer:

`If you studied more, you might pass the exam.` - Ovo znači da postoji mogućnost prolaska ako neko nauči više.

U ovoj diskusiji, `If we all agreed on everything, we might miss important details` pokazuje moguće loše rezultate kompletnog sporazuma.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Brian",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_8-2.mp3",
      "startTime": 1,
      "startTimestamp": 15.4,
      "finishTimestamp": 19.24
    }
  },
  "commands": [
    {
      "character": "Brian",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Brian",
      "startTime": 1,
      "finishTime": 3.98,
      "dialogue": {
        "text": "If we all agreed on everything, we might miss important details,",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "startTime": 4.26,
      "finishTime": 4.84,
      "dialogue": {
        "text": "don't you think?",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 5.34
    }
  ]
}
```
