---
id: 69ae96dfa9e6da4eb0d5f7f5
title: Koristeći komponentu
challengeType: 11
videoId: CDFRHw4SACU
dashedName: using-constructors
---

# --description--

U ovom videu, naučićete kako da radite sa komponentama u klasama objekata.

# --questions--

## --text--

Koja od sljedećih je ispravan način za pisanje komponente?

## --answers--

```py
class Dog:
    def __init__(self, name):
        name = name

    def bark(self):
        print(f"{self.name} says: Woof!")
```

---

```py
class Dog:
    def __init__(name):
        self.name = name

    def bark(self):
        print(f"{self.name} says: Woof!")
```

---

```py
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(f"{self.name} says: Woof!")
```

---

```py
class Dog:
    def __init__ self, name:
        self.name = name

    def bark(self):
        print(f"{self.name} says: Woof!")
```

## --video-solution--

3