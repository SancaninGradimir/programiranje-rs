---
id: 6723cc7a8e7aa3b9befd4bac
title: Inspekcija funkcionisanja DOM-a i događaja klikova korišćenjem JavaScript-a
challengeType: 31
dashedName: review-dom-manipulation-and-click-events-with-javascript
---

# --interactive--

## Raditi sa DOM i API za mrežu

- **API**: API (Application Programming Interface) ni seti ya sheria na itifaki zinazoruhusu programu za kompyuta kuwasiliana na kubadilishana data kwa ufanisi.
- **Web API**: API-ji za veb su posebno dizajnirani za veb aplikacije. Ove vrste API-ja se često dele u dve glavne kategorije: API-ji pregledača i API-ji trećih strana.
- **API-ji pregledača**: Ovi API-ji omogućavaju pristup podacima iz pregledača. Kao veb programer, možete pristupiti ovim podacima i upravljati njima koristeći JavaScript.
- **API-ji trećih strana**: Oni nisu ugrađeni u pregledač po podrazumevanim podešavanjima. Njihov kod morate dobiti na neki način. Obično imaju detaljnu dokumentaciju koja objašnjava kako se koriste njihove usluge. Primer je Google Maps API, koji možete koristiti za prikaz interaktivnih mapa na vašem sajtu.
- **DOM**: DOM je skraćenica za Document Object Model. To je programski interfejs koji omogućava interakciju sa HTML dokumentima. Pomoću DOM-a možete dodavati, menjati ili brisati elemente na veb stranici. Koren DOM stabla je element `html`. On je kontejner najvišeg nivoa za sav sadržaj HTML dokumenta. Svi ostali čvorovi su potomci ovog korenog čvora. Ispod korenog čvora nalaze se drugi čvorovi u hijerarhijskom nizu. Roditeljski čvor je element koji sadrži druge elemente. Dete čvor je element koji se nalazi unutar drugog elementa.
- **`navigator` interfejs**: Obezbeđuje informacije o okruženju pregledača, kao što su user agent string, platforma i verzija pregledača. User agent string je tekstualni niz koji identifikuje pregledač i operativni sistem koji se koristi.
- **`window` interfejs**: Predstavlja prozor pregledača koji uključuje DOM dokument. Obezbeđuje metode i svojstva za interakciju sa prozorom pregledača, kao što su promena veličine prozora, otvaranje novih prozora i navigacija ka različitim URL adresama.

## Raditi sa putanjama `querySelector()`, `querySelectorAll()` na `getElementById()`

- **Putanja za `getElementById()`**: Ova putanja se koristi za dobijanje objekta koji predstavlja element od HTML sa `id` navedenim. Imajte na umu da ID-ovi moraju biti jedinstveni u svakom dokumentu za HTML, stoga će ova putanja vratiti samo jedan Element objekat.

:::interactive_editor

```html
<div id="container"></div>
<script src="./index.js"></script>
```

```js
const container = document.getElementById("container");
console.log(container)
```

:::

- **Putanja za `querySelector()`**: Ova putanja se koristi za dobijanje prvog elementa u dokumentu HTML koji odgovara selektoru CSS poslatom kao argument.

:::interactive_editor

```html
<section class="section"></section>
<script src="./index.js"></script>
```

```js
const section = document.querySelector(".section");
console.log(section)
```

:::

- **Metoda za `querySelectorAll()`**: Možete koristiti ovu metodu da dobijete listu svih elemenata DOM koji odgovaraju specifičnom filtru CSS.

:::interactive_editor

```html
<ul class="ingredients">
  <li>Sugar</li>
  <li>Milk</li>
  <li>Eggs</li>
</ul>
<script src="./index.js"></script>
```

```js
const ingredients = document.querySelectorAll('ul.ingredients li');
console.log(ingredients)
```

:::

## Rad sa metodama `innerText()`, `innerHTML()`, `createElement()` i `textContent()`

- **Svojstvo `innerHTML`**: Ovo je svojstvo `Element` koje se koristi za postavljanje ili ispravljanje delova pisanih znakova za HTML.

:::interactive_editor

```html
<div id="container">
  <!-- Add new elements here -->
</div>
<script src="./index.js"></script>
```

```js
const container = document.getElementById("container");
container.innerHTML = '<ul><li>Cheese</li><li>Tomato</li></ul>';
```

:::

- **Putanj za `createElement`**: Ovo se koristi za kreiranje elementa HTML.

```js
const img = document.createElement("img");
```

- **`innerText`**: Ovo predstavlja vidljivi tekstualni sadržaj elementa HTML i njegovog potomstva.

:::interactive_editor

```html
<div id="container">
  <p>Hello, World!</p>
  <p>I'm learning JavaScript</p>
</div>
<script src="./index.js"></script>
```

```js
const container = document.getElementById("container");
console.log(container.innerText);
```

:::

- **`textContent`**: Ovo vraća standardni tekstualni sadržaj elementa, uključujući sav tekst unutar njegovog izvora.

:::interactive_editor

```html
<div id="container">
  <p>Hello, World!</p>
  <p>I'm learning JavaScript</p>
</div>
<script src="./index.js"></script>
```

```js
const container = document.getElementById("container");
console.log(container.textContent);
```

:::

## Rad sa metodama `appendChild()` i `removeChild()`

- **Putanja za `appendChild()`**: Ova putanja se koristi za dodavanje čvora na kraj liste potomaka navedenog roditeljskog čvora.

:::interactive_editor

```html
<ul id="desserts">
  <li>Cake</li>
  <li>Pie</li>
</ul>
<script src="./index.js"></script>
```

```js
const dessertsList = document.getElementById("desserts");
const listItem = document.createElement("li");

listItem.textContent = "Cookies";
dessertsList.appendChild(listItem);
```

:::

- **Putanja za `removeChild()`**: Ova putanja se koristi za brisanje čvora iz DOM.

:::interactive_editor

```html
<section id="example-section">
  <h2>Example sub heading</h2>
  <p>first paragraph</p>
  <p>second paragraph</p>
</section>
<script src="./index.js"></script>
```

```js
const sectionEl = document.getElementById("example-section");
const lastParagraph = document.querySelector("#example-section p:last-of-type");

sectionEl.removeChild(lastParagraph);
```

:::

## Rad sa putanjom `setAttribute()`

- **Opis**: Ova metoda se koristi za postavljanje svojstva nekog elementa. Ako svojstvo već postoji, onda mu se ažurira vrednost. Inače, dodaje se novo svojstvo sa njegovom vrednošću.

:::interactive_editor

```html
<p id="para">I am a paragraph</p>
<script src="./index.js"></script>
```

```js
const para = document.getElementById("para");
para.setAttribute("class", "my-class");
```

:::

## Detalji Događaja

- **Definicija**: Stvar `Event` je događajni okidač koji se dešava kada korisnik na neki način interaguje sa vašom veb stranicom. Ova interakcija može biti sve, od klika na dugme ili fokusiranja na polje za unos, do treštanja mobilnog uređaja. Svi elementi `Event` će imati svojstvo `type`. Ovo svojstvo pokazuje tip događaja koji je pokrenuo učitavanje, kao što su `keydown` ili `click`. Ove vrednosti će biti povezane sa onima koje možete poslati na `addEventListener()`, gde možete uhvatiti i koristiti stvar od `Event`.

## Putevi za `addEventListener()` na `removeEventListener()`

- **Njia ya `addEventListener`**: Ova metoda se koristi za slušanje događaja. Prihvata dva argumenta: događaj koji želite pratiti i funkciju koja će biti pozvana kada se dogodi taj događaj. Uobičajeni primeri događaja su klikovi, događaji unosa i događaji promene.

:::interactive_editor

```html
<button id="btn">Click Me</button>
<script src="./index.js"></script>
```

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", () => alert("You clicked the button"));
```

:::

- **Metoda za `removeEventListener()`**: Ova metoda se koristi za uklanjanje hendlera događaja koji je prethodno dodat komponenti koristeći metodu `addEventListener()`. Ovo je važno kada želite prestati da slušate određeni događaj na komponenti.

:::interactive_editor

```html
<body>
  <p id="para">Hover over me to disable the button's click event</p>
  <button id="btn">Toggle Background Color</button>
</body>
<script src="./index.js"></script>
```

```js
const bodyEl = document.querySelector("body");
const para = document.getElementById("para");
const btn = document.getElementById("btn");

let isBgColorGrey = true;

function toggleBgColor() {
  bodyEl.style.backgroundColor = isBgColorGrey ? "blue" : "grey";
  isBgColorGrey = !isBgColorGrey;
}

btn.addEventListener("click", toggleBgColor);

para.addEventListener("mouseover", () => {
  btn.removeEventListener("click", toggleBgColor);
});
```

:::

- **Inline Event Handler**: Inline event handler je posebna svojstvo na elementu HTML koje se koristi za izvršavanje koda JavaScript kada dođe do događaja. U modernom JavaScript, inline event handler nije smatran najboljom praksom. Preporučuje se korišćenje metode `addEventListener` umesto toga.

:::interactive_editor

```html
<button onclick="alert('Hello World!')">Show alert</button>
```

:::

## Događaj promene

- **Definicija**: Događaj promene je specifičan događaj koji se pokreće kada korisnik promeni vrednost određenih ulaznih elemenata. Primeri su kao kada se izabere čekirica ili radio dugme. Ili kada korisnik bira nešto iz opcija, poput izbornika datuma ili padajućeg menija.

:::interactive_editor

```html
<label>
  Choose a programming language:
  <select class="language" name="language">
    <option value="">---Select One---</option>
    <option value="JavaScript">JavaScript</option>
    <option value="Python">Python</option>
    <option value="C++">C++</option>
  </select>
</label>

<p class="result"></p>
<script src="./index.js"></script>
```

```js 
const selectEl = document.querySelector(".language");
const result = document.querySelector(".result");

selectEl.addEventListener("change", (e) => {
  result.textContent = `You enjoy programming in ${e.target.value}.`;
});
```

:::

## Pojavljivanje Događaja

- **Definicija**: Bubbleovanje događaja, ili propagacija, odnosi se na način na koji se događaj propušta do roditeljskih elemenata kada je pokrenut.
- **Metoda za `stopPropagation()`**: Ova metoda sprečava dalju propagaciju događaja.

## Distribucija događaja

- **Definicija**: Propagacija događaja je proces slušanja događaja koji su se proširili do roditeljskog elementa, umesto da ih obrađuje direktno na elementu koji je pokrenuo događaj.

## DOMContentLoaded

- **Opis**: Događaj `DOMContentLoaded` se aktivira kada je sav sadržaj u dokumentu HTML preuzet i analiziran. Ako imate eksterne stilove ili slike, događaj `DOMContentLoaded` neće čekati da se dostave. Čekaće samo da se HTML primeni.

## Raditi sa `style` i `classList`

- **Svojstvo `Element.style`**: Ovo svojstvo je samo za čitanje i predstavlja inline stil elementa. Možete koristiti ovo svojstvo da dobijete ili postavite stil elementa.

:::interactive_editor

```html
<p id="para">This paragraph will turn red.</p>
<script src="./index.js"></script>
```

```js
const paraEl = document.getElementById("para");
paraEl.style.color = "red";
```

:::

- **Svojstvo `Element.classList`**: Ovo svojstvo je samo za čitanje i može se koristiti za dodavanje, uklanjanje ili menjanje klasa na elementu.

:::interactive_editor

```html
<link rel="stylesheet" href="./styles.css"/>
<p id="para" class="blue-background">This paragraph will have classes added and removed.</p>
<div id="menu" class="menu">Menu Content</div>
<button id="toggle-btn">Toggle Menu</button>
<script src="./index.js"></script>
```

```css
.highlight {
  background-color: yellow;
}

.blue-background {
  background-color: lightblue;
}

.menu {
  display: none;
  padding: 10px;
  background-color: #f0f0f0;
}

.menu.show {
  display: block;
}
```

```js
// Example adding a class
const paraEl = document.getElementById("para");
paraEl.classList.add("highlight");

// Example removing a class
paraEl.classList.remove("blue-background");

// Example toggling a class
const menu = document.getElementById("menu");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => menu.classList.toggle("show"));
```

:::

## Rad sa metodama za `setTimeout()` i `setInterval()`

- **Njia ya `setTimeout()`**: Ovaj put vam omogućava da odložite akciju na navedeno vreme.

:::interactive_editor

```js
setTimeout(() => {
 console.log('This runs after 3 seconds'); 
}, 3000);
```

:::

- **Putanja `setInterval()`**: Ova putanja izvršava deo koda periodično za određeno vreme. Pošto `setInterval()` nastavlja da izvršava funkciju koja je objavljena za pomenuto vreme, možda želite da ga blokirate. Za ovo, trebalo bi da koristite putanju `clearInterval()`.

:::interactive_editor

```js
setInterval(() => {
 console.log('This runs every 2 seconds');
}, 2000);

// Example using clearInterval
const intervalID = setInterval(() => {
 console.log('This will stop after 5 seconds');
}, 1000);

setTimeout(() => {
 clearInterval(intervalID);
}, 5000);
```

:::

## Put za `requestAnimationFrame()`

- **Definicija**: Ova metoda vam omogućava da predvidite sledeći korak vaše animacije pre nego što se ekran osveži, čime pruža glatko i vizuelno privlačan doživljaj. Osveženje ekrana odnosi se na trenutak kada pregledač ponovo prikazuje sadržaj web stranice. To se dešava više puta u sekundi, obično oko 60 puta (ili 60 frejmova u sekundi) na većini ekrana.

```js
function animate() {
 // Update the animation...
 // for example, move an element, change a style, and more.
 update();
 // Request the next frame
 requestAnimationFrame(animate);
}
```

## API Animacija mreže

- **Definicija**: API za Animaciju mreže omogućava vam kreiranje i kontrolisanje animacija direktno unutar JavaScript.

:::interactive_editor

```html
<link rel="stylesheet" href="./styles.css"/>
<div id="square"></div>
<script src="./index.js"></script>
```

```css
#square {
  width: 100px;
  height: 100px;
  background: red;
}

```

```js
const square = document.querySelector('#square');

const animation = square.animate(
 [{ transform: 'translateX(0px)' }, { transform: 'translateX(100px)' }],
 {
   duration: 2000, // makes animation lasts 2 seconds
   iterations: Infinity, // loops indefinitely
   direction: 'alternate', // moves back and forth
   easing: 'ease-in-out', // smooth easing
 }
);
```

:::

## API za platno za crtanje

- **Definicija**: Canvas API za crtanje je moćan alat koji vam omogućava crtanje unutar JavaScript fajla. Da biste radili sa Canvas API-jem za crtanje, prvo morate obezbediti `canvas` element u HTML-u. Ovaj element funkcioniše kao površina za crtanje kojom se može upravljati metodama i svojstvima interfejsa Canvas API-ja. API ima interfejse kao što su `HTMLCanvasElement`, `CanvasRenderingContext2D`, `CanvasGradient`, `CanvasPattern` i `TextMetrics`, koji imaju metode i svojstva koja možete koristiti za kreiranje crteža u vašem JavaScript fajlu.

:::interactive_editor

```html
<canvas id="my-canvas" width="400" height="400"></canvas>
<script src="./index.js"></script>
```

```js
const canvas = document.getElementById('my-canvas');

// Access the drawing context of the canvas. 
// "2d" allows you to draw in two dimensions 
const ctx = canvas.getContext('2d');

// Set the background color
ctx.fillStyle = 'crimson';

// Draw a rectangle
ctx.fillRect(1, 1, 150, 100);
```

:::

## Otvaranje i zatvaranje dijaloga i modala korišćenjem JavaScript

- **Objašnjenje Modala i Dijalog-okna**: Dijalog vam omogućava da prikažete važne informacije ili akcije korisnicima. Sa ugrađenom funkcijom dijaloškog okna u HTML, možete lako kreirati ove dijaloge (modale i ne-modale) u svojim web aplikacijama. Modalni dijalog je vrsta dijaloga koja prisiljava korisnika da sa njim interaguje pre nego što dobije pristup drugim delovima aplikacije ili veb stranice. Nasuprot tome, ne-modalni dijalog omogućava korisniku da nastavi sa interakcijom sa drugim delovima stranice ili aplikacije čak i dok je dijalog otvoren. Ne blokira pristup drugom sadržaju.
- **Metoda `showModal()`**: Ova metoda se koristi za otvaranje modala.

:::interactive_editor

```html
<dialog id="my-modal">
   <p>This is a modal dialog.</p>
</dialog>
<button id="open-modal">Open Modal Dialog</button>
<script src="./index.js"></script>
```

```js
const dialog = document.getElementById('my-modal');
const openButton = document.getElementById('open-modal');

openButton.addEventListener('click', () => {
  dialog.showModal();
});
```

:::

- **Putanja za `close()`**: Ova putanja se koristi za zatvaranje modala.

:::interactive_editor

```html
<dialog id="my-modal">
   <p>This is a modal dialog.</p>
   <button id="close-modal">Close Modal</button>
</dialog>
<button id="open-modal">Open Modal Dialog</button>
<script src="./index.js"></script>
```

```js
const dialog = document.getElementById('my-modal');
const openButton = document.getElementById('open-modal');
const closeButton = document.getElementById('close-modal');

openButton.addEventListener('click', () => {
  dialog.show();
});

closeButton.addEventListener('click', () => {
  dialog.close();
});
```

:::

# --assignment--

Pregledajte temu i koncepte funkcionisanja DOM i događaje klikom koristeći JavaScript.