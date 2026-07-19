---
id: 67a9f44e6dcabb0c402a9bfb
title: Vežba 5
challengeType: 19
dashedName: task-5
lang: en-US
---
<!-- (Audio) Bob: Misliš li da je to dobra ideja? -->

# --instructions--

Slušajte audio odgovor na pitanje ispod.

# --questions--

## --text--

Šta Bob želi da zna?

## --answers--

Da li su zaposleni već kupili nameštaj za kancelariju?

### --feedback--

Bob ne može da potvrdi kupovinu.

---

Trošak namještaja za kancelariju.

### --feedback--

Bob ne pita o ceni.

---

Je, kampuni itapandisha kiasi cha ruzuku.

### --feedback--

Bob haongei kuhusu mabadiliko ya ruzuku.

---

Da li misli Ana da je korišćenje subvencija za kancelarijski nameštaj dobra ideja?

## --video-solution--

4

# --explanation--

Bob pita, `Do you think that's a good idea?` Ovo je način da se traži tuđe mišljenje o predlogu ili planu. Evo drugih načina za traženje mišljenja:

- `Do you think this will work?`

- `What's your opinion on this?`

- `How do you feel about this plan?`

Tokom ovog razgovora, Bob pominje zaposlene koji koriste subvenciju za rad na daljinu da kupe kancelarijski nameštaj. Umesto da iznese sopstveno mišljenje, pita Anu šta misli.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
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
      "filename": "B1_11-1.mp3",
      "startTime": 1,
      "startTimestamp": 8.6,
      "finishTimestamp": 10.04
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
      "finishTime": 2.44,
      "dialogue": {
        "text": "Do you think that's a good idea?",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "opacity": 0,
      "startTime": 2.94
    }
  ]
}
```
