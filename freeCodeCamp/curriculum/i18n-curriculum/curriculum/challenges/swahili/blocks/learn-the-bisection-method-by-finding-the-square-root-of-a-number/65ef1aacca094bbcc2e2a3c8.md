---
id: 65ef1aacca094bbcc2e2a3c8
title: Korak 9
challengeType: 20
dashedName: step-9
---

# --description--

U Python, funkcija `max()` vraća najveću vrednost među ulaznim vrednostima.

```python
max(1, 2, 3) # Output: 3
```

Parametri `low` i `high` će se koristiti za definisanje početnog intervala unutar kojeg se nalazi kvadratni koren.

Unutar klauzule od `else`, inicijalizuj parametar `low` za `0` i parametar `high` neka bude veća vrednost između `1` ili `square_target` jer kvadratni koren broja je manji ili jednak samom broju.

# --hints--

Trebalo bi da uklonite glavnu reč `pass`.

```js
({
    test: () => 
    {
        assert.isFalse(runPython(`_Node(_code).find_function("square_root_bisection").find_ifs()[1].find_bodies()[2].has_pass()`))
    }
})
```

Treba da deklariš parametar `low` i postaviš mu vrednost `0`.

```js
({
    test: () => 
    {
        assert(runPython(`_Node(_code).find_function("square_root_bisection").find_ifs()[1].find_bodies()[2].find_variable("low").is_equivalent("low = 0")`));    }
})

```

Trebalo bi da deklarišete parametar `high` i koristeći funkciju `max()`, postavite njegovu vrednost na veliku vrednost između `1` i `square_target`.

```js

({ test: () => assert(runPython(`
node = _Node(_code).find_function("square_root_bisection").find_ifs()[1].find_bodies()[2].find_variable("high")
values = ["high = max(1, square_target)", "high = max(square_target, 1)"]
any(node.is_equivalent(val) for val in values)
`)) })
```

# --seed--

## --seed-contents--

```py
def square_root_bisection(square_target, tolerance=1e-7, max_iterations=100):
    if square_target < 0:
        raise ValueError('Square root of negative number is not defined in real numbers')
    if square_target == 1:
        root = 1
        print(f'The square root of {square_target} is 1')
    elif square_target == 0:
        root = 0
        print(f'The square root of {square_target} is 0')
--fcc-editable-region--
    else:
        pass
--fcc-editable-region--
```
