---
id: 657b1a27dc6daf6ffd52ff1f
title: Vežba od 30
challengeType: 19
dashedName: task-30
lang: en-US
---
<!-- (Audio) Ana: Odlično. Možete li podeliti detalje o vašoj obrazovnoj pozadini? Da li ste bili obučeni za određeno polje?
Drugi kandidat: Da. Imam master diplomu iz računarstva/računarskih nauka. -->

# --description--

Na engleskom, imenica praćena sa `'s` i praćena strukturom druge imenice koristi se za pokazivanje vlasništva ili odnosa.

Ako je prva imenica u jednini, kao što je u `Sarah's laptop`, ukazuje da je kompaktni računar Sarafina. Međutim, ako je prva imenica u množini, struktura se menja u imenicu praćenu sa `'`, kao što je u `teachers' office`, pokazujući učiteljski kabinet.

# --questions--

## --text--

`master's degree` Na šta se u kontekstu razgovora odnosi?

## --answers--

Diploma za nastavnike škole

### --feedback--

`Master's degree` odnosi se na viši akademski stepen, nije samo za nastavnike.

---

Diploma osnovnog obrazovanja

### --feedback--

`Master's degree` je kvalifikacija višeg obrazovanja, iznad osnovnog nivoa.

---

Stupanj profesionalnih veština

### --feedback--

Iako ukazuje na stručnost, `master's degree` se tiče profesionalnih kvalifikacija.

---

Visoki akademski stepen

## --video-solution--

4

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
    "characters": [
      {
        "character": "Anna",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      },
      {
        "character": "Second Candidate",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.1-2.mp3",
      "startTime": 1,
      "startTimestamp": 43.44,
      "finishTimestamp": 51.78
    }
  },
  "commands": [
    {
      "character": "Anna",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Anna",
      "startTime": 1,
      "finishTime": 5.72,
      "dialogue": {
        "text": "Excellent. Can you share details about your educational background? Were you trained in a specific field?",
        "align": "center"
      }
    },
    {
      "character": "Anna",
      "opacity": 0,
      "startTime": 6
    },
    {
      "character": "Second Candidate",
      "opacity": 1,
      "startTime": 6
    },
    {
      "character": "Second Candidate",
      "startTime": 6.36,
      "finishTime": 9.34,
      "dialogue": {
        "text": "Yes. I have a master's degree in computer science.",
        "align": "center"
      }
    },
    {
      "character": "Second Candidate",
      "opacity": 0,
      "startTime": 9.84
    }
  ]
}
```
