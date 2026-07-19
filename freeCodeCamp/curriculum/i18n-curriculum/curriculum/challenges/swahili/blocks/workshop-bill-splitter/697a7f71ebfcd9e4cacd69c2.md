---
id: 697a7f71ebfcd9e4cacd69c2
title: Korak 8
challengeType: 20
dashedName: step-8
---

# --description--

Deljenje je izvršeno, ali deljenje često rezultira dugim decimalnim brojevima. Pošto se novac obično predstavlja sa dve decimale, treba da zaokružite konačni rezultat.

U prvom kursu, naučili ste o funkciji `round()` koja uzima dva argumenta: broj koji želite zaokružiti i broj decimalnih mesta koje želite sačuvati. Evo primera:

```py
num = 4.815162342
round(num, 3) # 4.815
```

Koristi funkciju `round()` da zaokruži `final_bill` na dve decimale i stavi tu vrednost u novi parametar nazvan `each_pays`.

Konačno, koristi `print()` da prikaže niz znakova `Each person pays:`, praćen razmakom i tvojim parametrom `each_pays`.

Stoga, radionica za podele računa je završena.

# --hints--

Trebalo bi da definišete parametar nazvan `each_pays`.

```js
({
    test: () => assert(runPython(`
    _Node(_code).has_variable('each_pays')
    `))
})
```

Morate koristiti funkciju `round()` za zaokruživanje `final_bill` na dve decimale i postaviti tu vrednost u svoj parametar `each_pays`.

```js
({
    test: () => assert(runPython(`
    _Node(_code).find_variable('each_pays').is_equivalent('each_pays = round(final_bill, 2)')
    `))
})
```

Trebalo bi da koristiš `print()` da prikažeš sekvencu slova `Each person pays:` praćenu razmakom i tvojim atributom `each_pays`.

```js
({
    test: () => runPython(`
import io, contextlib, re

buffer = io.StringIO()
with contextlib.redirect_stdout(buffer):
    exec(_code)

match = re.search(r"Each person pays: ([0-9]+(?:\\.[0-9]+)?)", buffer.getvalue())

assert match
assert abs(float(match.group(1)) - 62.13) < 1e-6
`)
})
```

# --seed--

## --seed-contents--

```py
running_total = 0

num_of_friends = 4

appetizers = 37.89
main_courses = 57.34
desserts = 39.39
drinks = 64.21

running_total += appetizers + main_courses + desserts + drinks
print('Total bill so far:', running_total)

tip = running_total * 0.25
print('Tip amount:', tip)

running_total += tip
print('Total with tip:', running_total)

final_bill = running_total / num_of_friends
print('Bill per person:', final_bill)

--fcc-editable-region--

--fcc-editable-region--
```

# --solutions--

```py
running_total = 0

num_of_friends = 4

appetizers = 37.89
main_courses = 57.34
desserts = 39.39
drinks = 64.21

running_total += appetizers + main_courses + desserts + drinks
print('Total bill so far:', running_total)

tip = running_total * 0.25
print('Tip amount:', tip)

running_total += tip
print('Total with tip:', running_total)

final_bill = running_total / num_of_friends
print('Bill per person:', final_bill)

each_pays = round(final_bill, 2)
print('Each person pays:', each_pays)
```
