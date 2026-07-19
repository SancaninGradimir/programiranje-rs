---
id: 68f1196f0fedc6f6ecc9aba6
title: Korak 4
challengeType: 20
dashedName: step-4
---

# --description--

U Python, indikator tipa povratne vrednosti pokazuje očekivani tip koji će vratiti funkcija ili metoda. To radite dodavanjem `-> return_type` nakon spiska parametara u definiciji metode.

Ovo je primer metode sa parametrima i tipovima, gde je tip povratne vrednosti `bool`:

```py
def example_method(self, value: int) -> bool:
  pass
```

Ostali tipovi referenci za povrat koje možete koristiti uključuju `str`, `None`, `float` i slično.

U postojećoj putanji ``__init__``, dodajte tip podskup za vraćanje od ``None`` jer komponente ne vraćaju vrednosti.

# --hints--

Tvoja putanja za `__init__` bi trebalo da ima indikator tipa povratka `None`.

```js
({
  test: () => runPython(`assert _Node(_code).find_class("Product").find_function("__init__").has_returns("None")`)
})
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
class Product:
    def __init__(self, name: str, price: float):
        self.name = name
        self.price = price
--fcc-editable-region--
    def __str__(self):
        return f'{self.name} - ${self.price}'
```
