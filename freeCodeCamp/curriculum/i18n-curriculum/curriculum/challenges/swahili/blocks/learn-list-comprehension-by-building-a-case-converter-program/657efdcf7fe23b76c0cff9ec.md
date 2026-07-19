---
id: 657efdcf7fe23b76c0cff9ec
title: Korak 7
challengeType: 20
dashedName: step-7
---

# --description--

Potrebno je da obradite mala slova koja već postoje, dodavanjem ih na spisak izmenjenih znakova.

Nakon izjave `if` unutar opsega `for`, dodaj klauzulu `else` i koristi metodu `.append()` da dodeli `char` na parametar `snake_cased_char_list`.

# --hints--

Treba da dodaš deo `else` unutar petlje `for`. Nemoj zaboraviti tačku na kraju.

```js
({
    test: () => {
        const transformedCode = code.replace(/\r/g, "");
        const convert_to_snake_case = __helpers.python.getDef("\n" + transformedCode, "convert_to_snake_case");
        const { function_body } = convert_to_snake_case;

        assert.match(function_body, / +else:/);
    }
})
```

Trebalo bi da koristiš putanju `.append()` za dodavanje `char` u parametar `snake_cased_char_list`.

```js
({
    test: () => {
        const transformedCode = code.replace(/\r/g, "");
        const convert_to_snake_case = __helpers.python.getDef("\n" + transformedCode, "convert_to_snake_case");
        const { function_body } = convert_to_snake_case;

        assert.match(function_body, / +snake_cased_char_list.append\(\s*char\s*\)/);
    }
})
```

# --seed--

## --seed-contents--

```py
def convert_to_snake_case(pascal_or_camel_cased_string):
    snake_cased_char_list = []
    for char in pascal_or_camel_cased_string:
--fcc-editable-region--
        if char.isupper():
            converted_character = '_' + char.lower()
            snake_cased_char_list.append(converted_character)
--fcc-editable-region--
```
