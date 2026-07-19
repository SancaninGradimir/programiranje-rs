---
id: 67d301cc87b84eaa42bdcdbe
title: Šta je `tsconfig` fajl, i zašto je važno da ga uključite u vaše TypeScript projekte?
challengeType: 19
dashedName: what-is-a-tsconfig-file-and-why-is-it-important-to-include-in-your-typescript-projects
---

# --description--

Podešavanja kompajlera za TypeScript mogu se konfigurisati da odgovaraju zahtevima vašeg projekta. Ta konfiguracija se nalazi u fajlu `tsconfig.json` u glavnom direktorijumu vašeg projekta. Zapravo, bez toga, kompajler neće raditi osim ako ne prosledite direktne komandne zastavice. Ali šta tačno radi ovaj fajl? Dobro, hajde da pregledamo primer fajla:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./prod",
    "lib": ["ES2023"],
    "target": "ES2023",
    "module": "ES2022",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true
  },
  "exclude": ["test/"]
}
```

Ovo izgleda kao mnogo! Dakle, analizirajmo. Svojstvo ``compilerOptions`` će imati "srce" vaše konfiguracije – ovde kontrolišete kako kompajler od `TypeScript` funkcioniše. Ako pogledate na nešto strukturirano unutra…

`rootDir` na `outDir` govori TypeScript koji direktorij ima vaše izvorni fajlovi, i koji direktorij bi trebalo da ima kod od JavaScript preveden.

Funkcija `lib` određuje kakve vrste tipova opisa koristi kompajler, i omogućava mu da uključi podršku za specifične verzije ES-a, DOM, i više.

`module` na `moduleResolution` radi zajedno da kontroliše kako vaš paket koristi module - bilo CommonJS ili ECMAScript.

`esModuleInterop` olakšava integraciju između CommonJS i ES modula automatskim kreiranjem namespace objekata za uvoz, što čini lakim korišćenje modula iz različitih sistema zajedno u vašim projektima od TypeScript, a opcija `skipLibCheck` preskače validaciju fajlova `.d.ts` koji nisu navedeni uvozima u vašem kodu.

I na kraju dolazimo do stanja `strict`. Može se reći da TypeScript nije zaista korisno bez omogućavanja ove zastavice, jer aktivira mnogo drugih provera, kao što je potreba za pravilnom obradom tipova koji mogu imati vrednost null, ili izdavanje upozorenja kada TypeScript ne može da utvrdi tip i vraća 'any'.

Pre nego što završimo, zapamtite mali detalj o visokonivoskoj karakteristici `exclude` - kada specifikujete izvorni direktorijum, možete imati kod TypeScript van tog direktorijuma koji ne želite da se piše kao deo vašeg produkcionog koda. Na primer, vaš test kod. Red `exclude` govori kompajleru da prestane da razmatra ove fajlove TypeScript tokom kompilacije, ali i dalje dozvoljava alatima kao što je Intellisense da prikažu potencijalne probleme.

Ima mnogo više opcija kompajlera koje možete istražiti – preko 50! Preporučujem vam da pregledate dokumentaciju i pokušate pronaći odgovarajuću konfiguraciju za potrebe vašeg projekta.

# --questions--

## --text--

Koja je karakteristika u fajlu `tsconfig.json` koja utiče na to kako kompajler radi?

## --answers--

`rootDir`

### --feedback--

Ova karakteristika je nešto sa opcijama kompajlera.

---

`compilerOptions`

---

`exclude`

### --feedback--

Ovaj atribut je nešto sa opcijama kompajlera.

---

`lib`

### --feedback--

Ova karakteristika je nešto sa opcijama kompilatora.

## --video-solution--

2

## --text--

Šta selekcija za `strict` u fajlu `tsconfig.json` radi?

## --answers--

On proverava samo tipove koji mogu imati null.

### --feedback--

Ova opcija omogućava različite provere, uključujući obradu tipova koji mogu imati null.

---

Preporučuje se korišćenje CommonJS modula.

### --feedback--

Ova opcija omogućava različite inspekcije, uključujući rukovanje tipovima koji mogu imati null.

---

Menja nekoliko opcija za proveru tipa.

---

Pruža fajlove za testiranje van snimanja/unosa.

### --feedback--

Ova opcija omogućava različite provere, uključujući rješavanje tipova koji mogu imati null.

## --video-solution--

3

## --text--

Koja je svrha reda `exclude` u fajlu `tsconfig.json`?

## --answers--

Koje fajlove treba napisati/navesti.

### --feedback--

Možete koristiti ovo da uklonite test kod tokom registracije.

---

Pružiti listu dodatnih biblioteka za uvoz.

### --feedback--

Možete koristiti ovo da uklonite test kod iz registracije.

---

Zaboravili ste neke fajlove tokom registracije.

---

Objašnjenje direktorijuma rezultata za prevedene fajlove.

### --feedback--

Možete koristiti ovo da uklonite test kod tokom registracije.

## --video-solution--

3