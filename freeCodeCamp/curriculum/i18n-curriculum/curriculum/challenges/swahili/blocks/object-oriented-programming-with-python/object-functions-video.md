---
id: 697fe3cb32baa3841ab62a63
title: Alati za stvari / Funkcionalnosti
challengeType: 11
videoId: 3Mla2uUDSu8
dashedName: object-functions
---

# --description--

U ovom videu ćete naučiti kako da radite sa aktuatorima unutar klasa objekata.

# --questions--

## --text--

Koja od sledećih je ispravan način za kreiranje funkcije unutar klase?

## --answers--

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self.function):
        return f"Hello, my name is {self.name} and I am {self.age} years old."
```

---

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."
```

---

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        self.pass
```

---

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    greet = (self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."
```

## --video-solution--

2