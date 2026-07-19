---
id: 65ef1a1fcb527bba0ca82ccf
title: Korak 6
challengeType: 20
dashedName: step-6
---

# --description--

Ako je `square_target` jednako `1`, deklariraj parametar `root` i postavi vrednost `1`. Takođe, ispiši poruku `'The square root of {square_target} is 1'`. Zapamti da kreiraš poruku koristeći f-string formatiranje.

# --hints--

Treba da uklonite glavnu reč `pass`.

```js
({
     test: () => 
     {
        assert.isFalse(runPython(`_Node(_code).find_function("square_root_bisection").find_ifs()[1].find_bodies()[0].has_pass()`))
    }
})
```

Treba da postavite vrednost `1` za parametar `root` i odštampate poruku `'The square root of {square_target} is 1'` unutar tela `if`.

```js

({
    test: () => 
    {        
        assert(runPython(`_Node(_code).find_function("square_root_bisection").find_ifs()[1].find_bodies()[0].is_equivalent("root = 1\\nprint(f'The square root of {square_target} is 1')")`));
    }
})

```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
def square_root_bisection(square_target, tolerance=1e-7, max_iterations=100):
    if square_target < 0:
        raise ValueError('Square root of negative number is not defined in real numbers')
    if square_target == 1:
        pass

--fcc-editable-region--
```
