# NodeJS

## Introduction

### 1.1. Qu'est-ce que NodeJS ?

Node.js est un environnement d'exécution. Node.js contient une bibliothèque de serveur HTTP intégrée, ce qui rend possible de construire des serveurs web en temps réel et des applications réseau en utilisant JavaScript. Node.js est utilisé par des entreprises telles que Microsoft, LinkedIn, et Yahoo.

### 1.2. Rôle et utilisation de NodeJS

Node.js est utilisé pour développer des applications côté serveur. Node.js est conçu pour optimiser les applications web avec de nombreuses connexions simultanées. Node.js est souvent utilisé pour des applications en temps réel, telles que les chats en ligne, les jeux multijoueurs, et les applications collaboratives.

## Utilisation de NodeJS

### 2.1. Installation de NodeJS

Pour installer Node.js, téléchargez le fichier d'installation à partir du site officiel de Node.js. Exécutez le fichier d'installation et suivez les instructions à l'écran.

### 2.2 Création d'un fichier et exécution

Pour créer un fichier Node.js, ouvrez un éditeur de texte et saisissez votre code. Enregistrez le fichier avec l'extension .js. Pour exécuter le fichier, ouvrez une fenêtre de commande et tapez `node nom_du_fichier.js`.

### 2.3 Installation nodemon

Nodemon est un utilitaire qui surveille les modifications dans les fichiers et redémarre automatiquement le serveur. Pour installer nodemon, ouvrez une fenêtre de commande et tapez `npm install -D nodemon`.

## Rafraichissement de JS

### 3.1 Déclaration de variables

Pour déclarer une variable en JavaScript, utilisez le mot-clé `var`, `let`, ou `const`.

```javascript
var x = 5;
let y = 10;
const z = 15;
```

const est utilisé pour déclarer une variable qui ne changera jamais. let est utilisé pour déclarer une variable qui peut être modifiée. var est utilisé pour déclarer une variable globale.

var est abosuletement à éviter, il est préférable d'utiliser let car il est plus sécurisé. 

### 3.2. Petit script

```javascript
console.log('Hello, world!');

const test = 'test const';
let test2 = 'test let'; 
var test3 = 'test var'; // Don't use var

let num = 1;
num = 2;

let bool = true;
let nullVar = null;
let arr = [1, 2, 3];
let obj = { key: 'value' };
console.log(obj.key);

if (num == '2') {
	console.log("bool is true");
} else {
	console.log("bool is false");
}
```

### 3.3. Fonctions

```javascript
// Syntaxe classique
function auCarre(x) {
  return x * x;
}

// Syntaxe fléchée
const auCarre2 = (x) => {
  return x * x;
}

// Syntaxe fléchée simplifiée
const auCarre3 = x => x * x;

console.log(auCarre(5));
```

Un callback de fonctions est une fonction qui est passée en argument à une autre fonction. Les callbacks sont souvent utilisés pour exécuter du code après qu'une opération asynchrone a été terminée.

```javascript
function doSomething(callback) {
	setTimeout(() => {
		console.log('I did something');
		callback('First data');
	}, 1000);
}
```

### 3.4. Tableaux et objets

```javascript
const fruits = ["apple", "banana", "cherry"];
fruits.push("watermelon");

const clem = {
	firstname: "Clément",
	lastname: "Berard",
	age: 20,
	isStudent: true,
	hobbies: ["coding", "gaming", "reading"],
};

// spread operator
const clemCopy = { ...clem };

console.log(clemCopy);
```

## Modules

### 4.1. Introduction

Un module est un ensemble de fonctions et de variables qui peuvent être inclus dans une application. Les modules sont utilisés pour organiser le code et pour éviter les conflits de noms.

### 4.2. Création d'un module

Pour créer un module, créez un fichier contenant les fonctions et les variables que vous souhaitez inclure dans le module. Exportez les fonctions et les variables que vous souhaitez rendre accessibles à d'autres fichiers.

```javascript
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

```

### 4.3. Exportation d'un module

Il existe 2 façons d'exporter un module en Node.js. Vous pouvez exporter un module en utilisant `module.exports` ou en utilisant `exports` :
- La syntaxe CommonJS `module.exports` est utilisée pour exporter un module en Node.js. (utilisé dans Node.js)
- La syntaxe ES6+ `exports` est utilisée pour exporter un module en JavaScript. (utilisé dans les navigateurs)

```javascript
// math.js

// Syntaxe CommonJS
module.exports = {
  add,
  subtract,
};

// Syntaxe ES6+
exports.add = add;
exports.subtract = subtract;
```

## Express

### 5.1. Introduction

Express est un framework web pour Node.js. Express est utilisé pour créer des applications web et des API. Express est utilisé par des entreprises telles que IBM, Uber, et Accenture.

### 5.2. Installation d'Express

Pour installer Express, ouvrez une fenêtre de commande et tapez `npm install express`.

### 5.3. Création d'un serveur web

Pour créer un serveur web avec Express, créez un fichier contenant le code suivant :

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello, world!');
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
```

## Lexique

- Middleware : C'est une logique qui se cale entre la requete et la reponse