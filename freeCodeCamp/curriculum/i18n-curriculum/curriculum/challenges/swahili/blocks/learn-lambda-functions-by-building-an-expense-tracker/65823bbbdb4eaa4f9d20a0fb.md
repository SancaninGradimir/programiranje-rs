---
id: 65823bbbdb4eaa4f9d20a0fb
title: Korak 25
challengeType: 20
dashedName: step-25
---

# --description--

U funkciji `total_expenses`, sada ćete dodati lambda funkciju. Zamenite `pass` sa lambda funkcijom koja ima `expense` kao svoj parametar.

`expense` se očekuje da je rečnik, i tvoja lambda funkcija treba da vrati vrednost ključa `'amount'` iz rečnika `expense`.

# --hints--

Treba da kreiraš `lambda` koji koristi parametar `expense` i vrati `expense['amount']` u tvojoj funkciji `total_expenses`.

```js
({ test: () => assert(runPython(`_Node(_code).find_function("total_expenses").has_stmt("lambda expense: expense['amount']")`)) })
```

Treba ti da imaš `pass` u tvojoj funkciji od `total_expenses`.

```js
({ test: () => assert.isFalse(runPython(`_Node(_code).find_function("total_expenses").has_pass()`)) })
```

# --seed--

## --seed-contents--

```py
def add_expense(expenses, amount, category):
    expenses.append({'amount': amount, 'category': category})
    
def print_expenses(expenses):
    for expense in expenses:
        print(f'Amount: {expense["amount"]}, Category: {expense["category"]}')
    
--fcc-editable-region--
def total_expenses(expenses):
    pass
--fcc-editable-region--

expenses = []
```
