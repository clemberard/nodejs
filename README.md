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

### 3.4. Tableaux

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