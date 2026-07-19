---
id: 698dea0c7932b3cc4b19c945
title: Implementiraj quicksort
challengeType: 11
videoId: 7k5rxhK3X_Y
dashedName: implementing-quicksort
---

# --description--

U ovom videu, naučićete kako da implementirate quicksort algoritam za Python.

# --questions--

## --text--

Koji je osnovni slučaj za ovu implementaciju quicksort-a u Python?

## --answers--

```python
while len(values) > 1:
    values.pop()
```

---

```python
for i in range(len(values)):
    if values[i] > 0:
        values[i] -= 1
```

---

```python
for i in range(len(values)):
    values[i] += 1
```

---

```python
if len(values) <= 1:
    return values
```

## --video-solution--

4