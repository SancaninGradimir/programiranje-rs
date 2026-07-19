---
id: 67eeb0a9bfe9ce2ab1cbffd2
title: Vežba 29
challengeType: 19
dashedName: task-29
lang: en-US
---
<!-- (audio) Sophie: Odlično. Takođe, trebalo je da pokrenete test suite pre slanja vašeg koda. -->

# --instructions--

Slušajte zvuk prema pitanju ispod.

# --questions--

## --text--

Šta još Mark treba da uradi?

## --answers--

Mora se prepisati sav njegov kod.

### --feedback--

Mark nije morao da prepravi sve.

---

Trebalo je da prvo isproba svoj kod.

---

Svi komentari moraju biti uklonjeni.

### --feedback--

Komentari su važni i ne bi trebalo da se uklanjaju.

---

Trebalo bi da preskočiš testiranje jer traje predugo.

### --feedback--

Testiranje je važan korak pre predaje koda.

## --video-solution--

2

# --explanation--

`test suite` je kolekcija testova koja proverava da li program radi ispravno. Na primer:

- `We ran the test suite to check if the app works properly.` - Tim je sproveo sve testove kako bi osigurao da program radi onako kako je očekivano.

- `We need to add more tests to the test suite to check for edge cases.` - Tim bi trebalo da uključi više testova kako bi pokrio sve moguće scenarije.

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
      "startTimestamp": 42.42,
      "finishTimestamp": 45.94
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
      "finishTime": 4.52,
      "dialogue": {
        "text": "Great. Also, you should have run the test suite before submitting your code.",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 5.02
    }
  ]
}
```
