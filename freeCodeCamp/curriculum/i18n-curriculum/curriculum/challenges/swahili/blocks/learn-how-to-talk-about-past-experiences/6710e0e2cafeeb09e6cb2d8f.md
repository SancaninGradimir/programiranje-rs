---
id: 6710e0e2cafeeb09e6cb2d8f
title: Vežba 55
challengeType: 22
dashedName: task-55
lang: en-US
---
<!-- (Audio) Linda: Pa, tokom projekta, radila sam u uskoj saradnji sa razvojnim timom i stalno smo ažurirali korisnički interfejs na osnovu povratnih informacija korisnika. -->

# --instructions--

Slušajte audio i dovršite sledeću rečenicu.

# --fillInTheBlank--

## --sentence--

`Well, during the project, I BLANK BLANK closely with the development team, and we BLANK constantly BLANK the user interface based on user feedback.`

## --blanks--

`was`

### --feedback--

Ovo je glagolski afiks koji se koristi za kreiranje `Past Continuous` u formu množine prvog lica.

---

`working`

### --feedback--

Ovo je glavni glagol u `Past Continuous`, koji opisuje radnju.

---

`were`

### --feedback--

Ovo je sufiksni glagol koji se koristi za kreiranje `Past Continuous` u oblik prve osobe množine.

---

`updating`

### --feedback--

Ovo je glavni glagol u `Past Continuous`, koji opisuje tekući čin poboljšanja ili ažuriranja nečega.

# --explanation--

Upotreba `Past Continuous` koristi se za opis radnji koje su trajnile u određenom trenutku u prošlosti. Kada se dve rečenice `Past Continuous` koriste zajedno, često pokazuju radnje koje se dešavaju istovremeno ili paralelno.

U ovoj rečenici, Linda objašnjava kako je ona i njen tim radili i ažurirali korisnički interfejs tokom celog projekta. Ovo pokazuje dve radnje koje su se desile istovremeno u prošlosti, dajući kontekst ili istoriju za svaku od njih. Na primer:

`While I was preparing the report, they were testing the new features.` - To znači da je moja akcija pripreme izveštaja i testiranja novih funkcija nastupila istovremeno.

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
      "filename": "B1_2-2.mp3",
      "startTime": 1,
      "startTimestamp": 10.08,
      "finishTimestamp": 17.34
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
      "finishTime": 4.36,
      "dialogue": {
        "text": "Well, during the project, I was working closely with the development team,",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "startTime": 4.5,
      "finishTime": 8.26,
      "dialogue": {
        "text": "and we were constantly updating the user interface based on user feedback.",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "opacity": 0,
      "startTime": 8.76
    }
  ]
}
```
