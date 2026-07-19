---
id: 67fe85a3db9bad35f2b6a2bd
title: "Kako funkcionišu uslovi i odredbe za kriptografiju (ili: za matematičku/kriptografsku mašinu)"
challengeType: 19
dashedName: how-do-conditional-statements-and-logical-operators-work
---

# --description--

Uslovne izjave, ili uslovi, omogućavaju vam da kontrolišete tok vašeg programa u zavisnosti od toga da li su određeni uslovi istiniti ili netačni.

Ali pre nego što uđemo u sve to, hajde da pogledamo osnovne elemente uslovnih izjava, počevši od operatora poređenja. Operatori poređenja su operateri koji vam omogućavaju da uporedite dve ili više vrednosti i vrate vrednost tačno ili netačno.

U prethodnoj lekciji, naučili ste da vrednosti tačno ili netačno su jedna od vrsta podataka u Python, i mogu biti samo `True` ili `False`.

Ovde postoji tabela sa operatorima za poređenje u Python:

| Operator | Ime | Opis |
| --- | --- | --- |
| `==` | Jednako | Proverava da li su dve vrednosti jednake |
| `!=` | Nejednako | Proverava da li dve vrednosti nisu jednake |
| `>` | Veće od | Proverava da li je vrednost na levoj strani veća od vrednosti na desnoj strani |
| `<` | Manje od | Proverava da li je vrednost na levoj strani manja od vrednosti na desnoj strani |
| `>=` | Veće ili jednako | Proverava da li je vrednost na levoj strani veća ili jednaka vrednosti na desnoj strani |
| `<=` | Manje ili jednako | Proverava da li je vrednost na levoj strani manja ili jednaka vrednosti na desnoj strani |

Evo nekih matematičkih izraza koji evaluiraju na `True` ili `False`:

```python
print(3 > 4) # False
print(3 < 4) # True
print(3 == 4) # False
print(4 == 4) # True
print(3 != 4) # True
print(3 >= 4) # False
print(3 <= 4) # True
```

Ove operete mogu se koristiti u uslovima poređenja vrednosti i izvršavanja određenog koda, zavisno od toga da li izjava o uslovu procenjuje na `True` ili `False`.

U Python, informacija o apsolutnim osnovnim uslovima je informacija o `if`. Ovde je osnovna sintaksa:

```python
if condition:
    pass # Code to execute if condition is True
```

* Informacije za `if` počinju sa glavnom rečju od `if`.
    
* `condition` je matematički izraz koji procenjuje na `True` ili `False`, praćen dve tačke (`:`).

* Telo deklaracije `if` je grupa povezanih izjava. U Python, nivo uvlačenja (indentation) određuje grupu koda.
    
U gornjem primeru, telo deklaracije `if` sadrži deklaraciju `pass`. Kada se izvrši deklaracija `pass`, ništa se ne dešava. Ovo je specijalna ključna reč koja se može koristiti kao zamena za budući kod i važna je kada nisu dozvoljene prazne vitičaste zagradi.

Kod unutar tela izveštaja `if` se izvršava samo kada je uslov procenjen kao `True`. Primer:

```python
age = 18

if age >= 18:
    print('You are an adult') # You are an adult
```

Proverite ubacivanje pre `print('You are an adult')`. Dok druge programski jezike koriste znakove poput vitičastih zagrada za definisanje kodnih zagrada, i koriste ubacivanje samo radi čitljivosti, u Python kodne zagrade se određuju ubacivanjem.

Sledeći kod ukazuje na `IndentationError`, što je način za Python da se ukazuje da je potrebno uneti deo koda:

```py
age = 18

if age >= 18:
print('You are an adult') # IndentationError: expected an indented block after 'if' statement on line 3
```

Iako možete koristiti bilo koji broj razmaka (pod uslovom da je projekat stabilan) za određivanje svakog nivoa unosa, vodič stila Python savetuje korišćenje četiri razmaka.

Elementi se takođe mogu pronaći u krugovima i komponentama, o čemu ćete naučiti na narednim lekcijama.

Vratite se na naš primer, ako je `age` bilo šta manje od `18`, ništa se ne ispisuje na terminalu:

```python
age = 12

if age >= 18:
    print('You are an adult') # Nothing shows up in the terminal
```

Ali šta ako želiš da odštampa nešto ako je `age` manje od `18`? Tamo ulazi klauzula `else`. Klauzula `else` radi kada uslov `if` nije istinit. Ovo je sintaksa deklaracije `if…else`:

```python
if condition:
   pass # Code to execute if condition is True
else:
   pass # Code to execute if condition is False
```

Na primer:

```python
age = 12

if age >= 18:
    print('You are an adult')
else:
    print('You are not an adult yet') # You are not an adult yet
```

Zapamtite da ne možete umetnuti nikakve podatke između bloka `if` i sekcije `else`. Sledeći kod bi doveo do `SyntaxError`:

```python
age = 12

if age >= 18:
    print('You are an adult')
print('Almost there!')
else: # SyntaxError: invalid syntax
    print('You are not an adult yet')
```

Možda postoji situacija u kojoj želite uzeti u obzir mnogo uslova. Da biste to uradili, Python vam omogućava da dodate vaše informacije za if za glavnu reč/ključ `elif` (else if).

Ovo je sintaksa:

```python
if condition1:
   pass # Code to execute if condition1 is True
elif condition2:
   pass # Code to execute if condition1 is False and condition2 is True
else:
   pass # Code to execute if all conditions are False
```

Na primer:

```python
age = 12

if age >= 18:
    print('You are an adult')
elif age >= 13:
    print('You are a teenager')
else:
    print('You are a child') # You are a child
```

Zapamti da možeš koristiti sekcije `elif` kada god poželiš:

```python
age = 2

if age >= 65:
    print('You are a senior citizen')
elif age >= 30:
    print('You are an adult in your prime')
elif age >= 18:
    print('You are a young adult')
elif age >= 13:
    print('You are a teenager')
elif age >= 3:
    print('You are a young child')
else:
    print('You are a toddler or an infant') # You are a toddler or an infant
```

Sada kada razumete kako operateri za poređenje i uslovne izjave funkcionišu u Python, možete početi da pišete programe koji donose odluke na osnovu logike i unosa. Bilo da poredite vrednosti ili prolazite kroz mnogo uslova, ovi alati su osnova za pisanje koda koji se prilagođava uređaju.

# --questions--

## --text--

Šta radi operator za poređenje?

## --answers--

Izvršite aritmetičke proračune i vrednosti booleana

### --feedback--

Ovi operateri proveravaju stvari kao što je jednakost ili koja vrednost je veća, i rezultat je `True` ili `False`.

---

Promeni niz znakova u vrednosti tipa bool.

### --feedback--

Ove operacije proveravaju stvari kao što je jednakost ili koja vrednost je veća, a rezultat je `True` ili `False`.

---

Uporedi dve vrednosti i vrati vrednost Tačno ili Netačno.

---

Generiši kola i ponavljanja.

### --feedback--

Opereta hizi proverava da li je u pitanju jednakost ili koja je veća vrednost, a rezultati su `True` ili `False`.

## --video-solution--

3

## --text--

Šta će biti rezultat sledećeg koda?

```python
age = 12

if age >= 18:
    print('You are an adult')
elif age >= 13:
    print('You are a teenager')
else:
    print('You are a child') 
```

## --answers--

`You are an adult` To će biti ispisano na konzoli.

### --feedback--

Pregledaj poslednji deo lekcije za tačan odgovor.

---

`You are a teenager` Biće ispisano na konzolu.

### --feedback--

Proveri poslednji deo lekcije za tačan odgovor.

---

`You are a child` Biće ispisano na konzolu.

---

Greška će biti ispisana na konzoli.

### --feedback--

Pregledajte poslednji deo lekcije za tačan odgovor.

## --video-solution--

3

## --text--

Matematički izraz `3 >= 4` na šta će biti evaluiran?

## --answers--

`True`

### --feedback--

3 nije veće ili jednako od 4.

---

`SyntaxError`

### --feedback--

3 nije veće ili jednako od 4.

---

`None`

### --feedback--

3 je veće od ili jednako 4.

---

`False`

## --video-solution--

4