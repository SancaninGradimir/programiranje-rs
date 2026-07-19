---
id: 67f39babe1e2ec1fb6eea32a
title: Pregled Rečnika i Skupa
challengeType: 31
dashedName: review-dictionaries-and-sets
---

# --description--

## Rečnik

- **Rečnik**: Rečnik je ugrađena struktura podataka koja skladišti kolekcije parova ključ-vrednost. Ključevi moraju biti nemjenjivi tipovi podataka. Ovo je opšta sintaksa rečnika za Python:

```python
dictionary = {
    key1: value1,
    key2: value2
}
```

- **`dict()` Konstruktor**: Konstruktor za `dict()` je alternativa za kreiranje rečnika. Prošle je lista tupola kao argument konstruktoru `dict()`. Ovi tupi imaju ključe kao prvi element i vrednost kao drugi element.

```python
pizza = dict([('name', 'Margherita Pizza'), ('price', 8.9), ('calories_per_slice', 250), ('toppings', ['mozzarella', 'basil'])])
```

- **Notacija vitičastih zagrada (Bracket Notation)**: Da biste dobili vrednost para ključ-vrednost, možete koristiti sintaksu poznatu kao notacija vitičastih zagrada.

```python
dictionary[key]
```

## Uobičajeni načini za rečnik

- **Njia ya `get()`**: Njia ya `get()` vraća vrednost povezana sa ključem. Slično je korišćenju zagrada, ali vam omogućava da postavite podrazumevanu vrednost, sprečavajući greške ako ključ ne postoji.

```python
dictionary.get(key, default)
```

- **Njia za `keys()` na `values()`**: Putevi za `keys()` na `values()` vraćaju objekat pogleda sa svim ključevima i vrednostima u rečniku, po odelima. Objekt pogleda je način za pregledavanje sadržaja rečnika bez kreiranja zasebne kopije podataka.

```python
pizza = {
    'name': 'Margherita Pizza',
    'price': 8.9,
    'calories_per_slice': 250
}

pizza.keys()
# dict_keys(['name', 'price', 'calories_per_slice'])

pizza.values()
# dict_values(['Margherita Pizza', 8.9, 250])
```

- **Metoda `items()`**: Metoda `items()` vraća objekat pogleda koji sadrži sve parove ključ-vrednost u rečniku, uključujući ključeve i vrednosti.

```python
pizza.items()
# dict_items([('name', 'Margherita Pizza'), ('price', 8.9), ('calories_per_slice', 250)])
```

- **Njia ya `clear()`**: Metoda `clear()` uklanja sve parove ključ-vrednost iz mape.

```python
pizza.clear()
```

- **Metoda `pop()`**: Metoda `pop()` uklanja par ključ-vrednost sa ključem navedenim kao prvi argument i vraća njegovu vrednost. Ako ključ ne postoji, vraća podrazumevanu vrednost navedenu kao drugi argument. Ako ključ ne postoji i nije navedena podrazumevana vrednost, `KeyError` se vraća.

```python
pizza.pop('price', 10)
pizza.pop('total_price') # KeyError
```

- **Metoda za `popitem()`**: U Python 3.7 i više, metoda `popitem()` uklanja poslednji postavljen element.

```python
pizza.popitem()
```

- **Metoda `update()`**: Metoda `update()` spaja parove ključ-vrednost sa parovima ključ-vrednost drugog rečnika. Ako imaju iste ključeve, njihove vrednosti se ažuriraju. Novi ključevi će biti dodati kao novi parovi ključ-vrednost.

```python
pizza.update({ 'price': 15, 'total_time': 25 })
```

## Pregled rečnika

- **Iteiranje po vrednostima**: Ako vam je potrebno iterirati po vrednostima u rečniku, možete napisati petlju sa `for` i `values()` da dobijete sve vrednosti rečnika.

```python
products = {
    'Laptop': 990,
    'Smartphone': 600,
    'Tablet': 250,
    'Headphones': 70,
}

for price in products.values():
    print(price)
```

Rezultati:

```md
990
600
250
70
```

- **Iteracija po ključevima**: Ako vam je potrebno da iterirate po ključevima u sözlüku `products` iznad, možete direktno napisati `products.keys()` ili `products`.

```python
for product in products.keys():
    print(product)

# Or

for product in products:
    print(product)
```

Rezultati:

```md
Laptop
Smartphone
Tablet
Headphones
```

- **Iteriranje po parovima ključ-vrednost**: Ako vam je potrebno da iterirate preko ključeva i njihovih vrednosti istovremeno, možete iterirati preko `products.items()`. Dobijate pojedinačne tuple sa njihovim ključevima i vrednostima.

```python
for product in products.items():
    print(product)
```

Rezultati:

```md
('Laptop', 990)
('Smartphone', 600)
('Tablet', 250)
('Headphones', 70)
```

Da biste sačuvali ključ i vrednost u različitim parametrima ciklusa, morate ih razdvojiti zarezom. Prvi parametar čuva ključ, a drugi vrednost.

```python
for product, price in products.items():
    print(product, price)
```

Rezultati:

```md
Laptop 990
Smartphone 600
Tablet 250
Headphones 70
```

- **Funkcija za `enumerate()`**: Ako vam je potrebno iterirati preko rečnika dok pratite indeks, možete pozvati funkciju `enumerate()`. Funkcija vraća objekat `enumerate`, koji dodeljuje broj svakom elementu kao indeks. Možete početi indeks od bilo kog broja, ali podrazumevano počinje od 0.

Postavljanje obrasca i elementa u različite parametre ciklusa je uobičajen način za korišćenje `enumerate()`. Na primer, za `products.items()`, možete dobiti ceo par ključ-vrednost zajedno sa obrascem:

```python
for index, product in enumerate(products.items()):
    print(index, product)
```

Rezultati:

```md
0 ('Laptop', 990)
1 ('Smartphone', 600)
2 ('Tablet', 250)
3 ('Headphones', 70)
```

Da biste promenili početnu vrednost izračunavanja, možete preskočiti drugi argument pomoću `enumerate()`. Na primer, ovde započinjemo proračun od 1.

```python
for index, product in enumerate(products.items(), 1):
    print(index, product)
```

Rezultati:

```md
1 ('Laptop', 990)
2 ('Smartphone', 600)
3 ('Tablet', 250)
4 ('Headphones', 70)
```

## Skup

- **Skup**: Skup je struktura podataka kreirana unutar `Python` koja ne dozvoljava duplikate vrednosti. Škupi su promenljivi i bez redosleda, što znači da se njihovi elementi ne čuvaju u određenom redosledu, pa ga ne možete pristupiti pomoću indeksa ili ključeva. Takođe, skupovi mogu sadržati samo vrednosti nemenjivih tipova podataka, kao što su brojevi, niz znakova i tuple.

- **Definisati skup**: Da biste definisali skup, morate napisati njegove elemente unutar vitičastih zagrada i razdvojiti ih zarezima.

```python
my_set = {1, 2, 3, 4, 5}
```

- **Definisanje praznog skupa**: Ako je potrebno definisati prazan skup, morate koristiti funkciju `set()`. Samo pisanje praznih vitičastih zagrada će direktno kreirati rječnik.

```python
set() # Set
{}    # Dictionary
```

## Opšte metode za skupove

- **Način za `add()`**: Možete dodati element u skup koristeći `add()`, prosleđujući novi element kao argument.

```python
my_set.add(6)
```

- **Metode za `remove()` i `discard()`**: Za uklanjanje elemenata iz skupa, možete koristiti metodu `remove()` ili metodu `discard()`, prosleđujući element koji želite ukloniti kao argument. Metoda `remove()` će vratiti `KeyError` ako element nije pronađen, dok metoda `discard()` neće vraćati.

```python
my_set.remove(4)
my_set.discard(4)
```

- **Metoda za `clear()`**: Metoda za `clear()` uklanja sve elemente iz skupa.

```python
my_set.clear()
```

## Operacije sa skupovima

- **Njia za `issubset()` na `issuperset()`**: Njia za `issubset()` i `issuperset()` proverava da li je skup podskup ili nadskup drugog skupa, respektivno.

```python
my_set = {1, 2, 3, 4, 5}
your_set = {2, 3, 4, 5}

print(your_set.issubset(my_set)) # True
print(my_set.issuperset(your_set)) # True
```

- **Metoda `isdisjoint()`**: Metoda `isdisjoint()` proverava da li dva skupa nemaju identične elemente.

```python
my_set = {1, 2, 3}
your_set = {4, 5, 6}

print(my_set.isdisjoint(your_set)) # True
```

- **Funkcija spajanja (`|`)**: Funkcija spajanja `|` vraća novi skup sa svim elementima iz oba skupa.

```python
my_set = {1, 2, 3}
your_set = {4, 5, 6}

my_set | your_set # {1, 2, 3, 4, 5, 6}
```

- **Kolekciona funkcija (`&`)**: Kolekciona funkcija `&` vraća novi set sa komponentama dostupnim u svim setovima.

```python
my_set = {1, 2, 3, 4, 5}
your_set = {2, 3, 4, 6}

my_set & your_set # {2, 3, 4}
```

- **Diferencijalni element (`-`)**: Diferencijalni element `-` vraća novi set sa elementima prvog seta koji nisu u drugom setu.

```python
my_set = {1, 2, 3, 4, 5}
your_set = {2, 3, 4, 6}

my_set - your_set # {1, 5}
```

- **Karakteristika simetrične razlike (`^`)**: Karakteristika simetrične razlike `^` vraća novi skup sa elementima koji su u prvom ili drugom skupu, ali ne i u oba.

```python
my_set = {1, 2, 3, 4, 5}
your_set = {2, 3, 4, 6}

my_set ^ your_set # {1, 5, 6}
```

- **Funkcija `in`**: Možete proveriti da li je funkcija u skupu ili ne koristeći funkciju `in`.

```python
print(5 in my_set) # True
```

## Standardna biblioteka za Python

- **Standardna biblioteka za Python**: Biblioteka vam pruža prethodno napisani i ponovno upotrebljiv kod, kao što su funkcije, klase i strukture podataka, koje možete koristiti u svojim projektima. Python ima široku standardnu biblioteku sa ugrađenim modulima koji implementiraju rešenja standarda za brojne izazove i vežbe. Primeri popularnih ugrađenih modula su `math`, `random`, `re` (skraćeno za "standardni izraz"), i `datetime`.

## Izjava o import

- **Deklaracija import**: Da biste pristupili elementima definisanim u ugrađenim modulima, koristite deklaraciju import. Deklaracije import obično se pišu na vrhu fajla. Deklaracije import funkcionišu isto za funkcije, klase, konstante, parametre i sve ostale elemente definisane u modulu.

- **Osnovna fraza za import**: Možete koristiti glavnu reč `import` praćenu nazivom modula:

```python
import module_name
```

Zatim, ako treba da pozoveš funkciju iz tog modula, koristićeš tačkasto zapisivanje, sa imenom modula praćenim imenom funkcije.

```python
module_name.function_name()
```

Na primer, napisaćete sledeće u svoj kod da učitate modul `math` i da dobijete kvadratni koren 36:

```python
import math

math.sqrt(36)
```

- **Importovanje modula pod drugačijim imenom**: Ako je potrebno uvesti module pod drugačijim imenom (poznato i kao "alias"), možete koristiti `as` praćen aliasom na kraju deklaracije/izjave import. Ovo se često koristi za duža imena modula ili za izbegavanje kolizija imena.

```python
import module_name as module_alias
```

Na primer, ako se referencirate na modul `math` kao `m` u vašem kodu, možete postaviti alias ovako:

```python
import math as m
```

Zatim, možete dobiti komponente modula koristeći alias:

```python
m.sqrt(36)
```

- **Uključivanje specifičnih elemenata**: Ako ne treba sve iz modula, možete uključiti specifične elemente koristeći `from`. U ovom slučaju, izjava import počinje sa `from`, praćeno nazivom modula, zatim glavnom rečju `import` i na kraju nazivima elemenata koje želite uključiti.

```python
from module_name import name1, name2
```

Zatim, možete koristiti ova imena bez prefiksa modula u vašem skriptu za Python. Na primer:

```python
from math import radians, sin, cos

angle_degrees = 40
angle_radians = radians(angle_degrees)

sine_value = sin(angle_radians)
cos_value = cos(angle_radians)

print(sine_value) # 0.6427876096865393
print(cos_value)  # 0.766044443118978
```Ovo je napomena, ali može izazvati kolizije imena ako već imate funkcije ili parametre sa istim imenima. Molimo vas da ovo uzmete u obzir kada odlučujete koji tip deklaracije import želite koristiti.

Ako trebate postaviti ova imena i nadimke, možete to takođe učiniti koristeći glavnu reč `as` praćen nadimkom.

```python
from module_name import name1 as alias1, name2 as alias2
```

- **Izjava za import sa zvezdom (`*`)**: Zvezda govori Python da želiš da sve prebaciš u taj modul, ali želiš da ga prebaciš tako da ne moraš da koristiš ime modula kao prefiks.

```python
from module_name import *
```

Na primer, ako koristite ovo za učitavanje modula ``math``, moći ćete da pozovete bilo koju funkciju definisanu u tom modulu bez navođenja imena modula kao prefiksa.

```python
from math import *
print(sqrt(36))  # 6.0
```

Međutim, ovo se obično ne preporučuje jer može uzrokovati kolizije imena i otežati određivanje odakle ta imena potiču.

## `if __name__ == '__main__'`

- **Kigezo cha `__name__`**: `__name__` je posebna varijabla ugrađena u Python. Kada se fajl Python izvrši direktno, Python postavlja vrednost ove varijable na niz znakova `"__main__"`. Ali ako se fajl Python učita kao modul u drugi skript Python, vrednost varijable `__name__` se postavlja na ime tog modula.

To je razlog da često naiđete na ove uslove u skriptama za Python. One imaju kod koji se želi pokrenuti **samo** ako je skripta za Python izvršena kao glavni program.

```python
if __name__ == '__main__': 
    # Code
```

# --assignment--

Pregledajte teme i pojmove za rečnik u skupu/setu.