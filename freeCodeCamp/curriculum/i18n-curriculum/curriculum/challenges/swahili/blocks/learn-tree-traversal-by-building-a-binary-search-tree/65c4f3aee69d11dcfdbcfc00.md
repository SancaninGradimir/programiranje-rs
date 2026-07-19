---
id: 65c4f3aee69d11dcfdbcfc00
title: Korak 18
challengeType: 20
dashedName: step-18
---

# --description--

Sada, unutar metode `insert`, morate pozvati pomoćnu funkciju `_insert()` koju smo ranije implementirali.
Ovde, `_insert` je obavio *wrapping* izvršavanja logike unosa. Ovo je važno za ponovnu upotrebu i za skrivanje detalja implementacije od korisnika.

Postavi `pass` na vrednost od `self._insert(self.root, key)` za `self.root`.

Zapamtite da:

- `self.root` prosleđuje čvor korena drveta kao prvi argument. Ovo je početak procesa unosa.
- `key`: prosleđuje vrednost `key` koju želite da unesete kao drugi argument.

# --hints--

Trebalo bi da uklonite reč `pass` iz puta `insert`.

```js
({
  test: () => {
    assert.isFalse(
      runPython(
        `_Node(_code).find_class("BinarySearchTree").find_function("insert").has_pass()`
      )
    );
  },
});

```

Trebalo bi da pozoveš putanju `_insert()` za ponavljanje korišćenjem `self._insert()`

```js
({ test: () =>
  {
    const transformedCode = code.replace(/\r/g, "");        
    const ins = __helpers.python.getDef("\n"+transformedCode, "insert");
    const {function_body} = ins;    
    assert(function_body.match(/self\._insert\s*\([^(]*\)/));
  }
})
```

Morate proslediti `self.root` i `key` u vašem pozivu od `_insert()`.

```js
({ test: () =>
  {
    const transformedCode = code.replace(/\r/g, "");        
    const ins = __helpers.python.getDef("\n"+transformedCode, "insert");
    const {function_body} = ins;    
    assert(function_body.match(/self\._insert\s*\(\s*self\.root\s*,\s*key\s*\)/));
  }
})
```

Treba da postavite vrednost return za vaš poziv `_insert()` za `self.root`.

```js
({ test: () =>
  {
    const transformedCode = code.replace(/\r/g, "");        
    const ins = __helpers.python.getDef("\n"+transformedCode, "insert");
    const {function_body} = ins;    
    assert(function_body.match(/^\s{8}self\.root\s*=\s*self\._insert\s*\(\s*self\.root\s*,\s*key\s*\)/m));
  }
})
```

# --seed--

## --seed-contents--

```py

class TreeNode:

    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None


class BinarySearchTree:

    def __init__(self):
        self.root = None

--fcc-editable-region--
    def _insert(self, node, key):
        if node is None:
            return TreeNode(key)

        if key < node.key:
            node.left = self._insert(node.left, key)
        elif key > node.key:

            node.right = self._insert(node.right, key)
        return node

    def insert(self, key):
        pass


--fcc-editable-region--
```
