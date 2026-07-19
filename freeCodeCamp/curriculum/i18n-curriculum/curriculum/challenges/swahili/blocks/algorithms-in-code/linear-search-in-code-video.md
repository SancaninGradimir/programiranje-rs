---
id: 698dca057932b3cc4b19c926
title: Linearno pretraživanje u kodu
challengeType: 11
videoId: bKkgjdPkL3A
dashedName: linear-search-in-code
---

# --description--

U ovom videu, napisaćete kod algoritma linearnog pretraživanja koristeći Python.

# --questions--

## --text--

Koji od sledećih je ispravan način pisanja funkcije linearnog pretraživanja?

## --answers--

```python
def linear_search(list, target):
    for i in range(len(list) - 1):  
        if list[i] == target:
            return i
    return -1
```

---

```python
def linear_search(list, target):
    for i in range(len(list)):
        if i == target:   
            return i
    return -1

```

---

```python
def linear_search(list, target):
    for i in range(len(list)):
        if list[i] == target:
            return i
        else:
            return -1  
```

---

```python
def linear_search(list, target):
    for i in range(len(list)):
        if list[i] == target:
            return i  
    return None
```

## --video-solution--

4