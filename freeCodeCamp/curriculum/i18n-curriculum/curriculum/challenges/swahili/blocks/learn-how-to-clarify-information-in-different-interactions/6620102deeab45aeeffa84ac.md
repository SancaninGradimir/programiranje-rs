---
id: 6620102deeab45aeeffa84ac
title: Vežba 5
challengeType: 22
dashedName: task-5
lang: en-US
---
<!-- (Audio) Tom: Ona je koleginica sa dugom, talasastom smeđom kosom i jaskro smeđim očima. -->

# --description--

Kada opisuješ nečiju boju očiju, obično počinješ od njihove boje. Uobičajene boje očiju su `black`, `brown`, `blue` i `green`. U zavisnosti od nijanse, mogu biti svetlije ili tamnije. U tom slučaju možeš dodati reči `light` (svetlije) ili `dark` (tamnije) ispred boje. Još jedna osobina koju često koristiš za opis očiju jeste njihov oblik – `round` kada su okrugle i `narrow` kada su uske. Na kraju možeš opisati njihovu veličinu kao `large` (velike) ili `small` (male). Tom takođe kaže da Lisine oči izgledaju pune energije i života. U tom slučaju kažeš da su nečije oči `bright`.

Kao što radiš sa `hair`, pridevi koji se koriste za opisivanje očiju osobe takođe prate redosled u engleskom jeziku. Prvo, opisuješ ove karakteristike, zatim prelaziš na veličinu, pa oblik i na kraju boju (bilo da je vođeno ili ne sa `light` ili `dark`).

Primer: `Tom has beautiful, small, narrow, light green eyes.`

Sada poslušaj i popuni praznine Tomovim opisom Lisinih očiju.

# --fillInTheBlank--

## --sentence--

`She's a colleague with long wavy brown hair and BLANK BLANK eyes.`

## --blanks--

`bright`

### --feedback--

Tom anatoa maoni kwanza. Anasema macho ya Lisa yamejaa nguvu.

---

`brown`

### --feedback--

Tom konačno govori o boji očiju Lise. To je nijansa koja je blizu `black`, i nije `blue` ni `green`.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Tom",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "4.3-1.mp3",
      "startTime": 1,
      "startTimestamp": 6.52,
      "finishTimestamp": 10.6
    }
  },
  "commands": [
    {
      "character": "Tom",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Tom",
      "startTime": 1,
      "finishTime": 5.08,
      "dialogue": {
        "text": "She's a colleague with long wavy brown hair and bright brown eyes.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 5.58
    }
  ]
}
```
