---
id: 694afa3fcd55df0cbc49a3cf
title: Korak 2
challengeType: 0
dashedName: step-2
---

# --description--

Sada privlačite vaš fajl sa `styles.css` u dokument HTML.

# --hints--

Trebalo bi da imaš element `link` unutar elementa `head`.

```js
assert.exists(document.querySelector('head > link'));
```

Vaša karakteristika za `link` treba da ima atribut/svojstvo elementa `rel`.

```js
const linkEl = document.querySelector('head > link');
assert.exists(linkEl?.getAttribute('rel'));
```

Tvoj element za `link` mora imati svojstvo elemenata `rel` koje je postavljeno na `stylesheet`.

```js
const linkEl = document.querySelector('head > link');
assert.equal(linkEl?.getAttribute('rel'), 'stylesheet');
```

Element vašeg `link` mora imati svojstvo elementa `href` postavljeno na `styles.css`.

```js
const linkHrefValue = document.querySelector('head > link')?.dataset?.href;
assert.match(linkHrefValue, /^(\.\/)?styles\.css$/);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Colored Boxes</title>
--fcc-editable-region--
	
--fcc-editable-region-- 
</head> 
<body>
	<header>
		<h1>Colored Boxes Layout</h1>
	</header>
</body>
</html>
```
