import { displayAllElements, addNumberFromArray, addFruit, minAndMax, stringWithMoreLetters } from "./src/utils/tableaux_module.js";

const numbersTo10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const evenNumberTo10 = [2, 4, 6, 8, 10];
const fruits = ["Pomme", "Banane", "Fraise", "Orange", "Cerise"];
const marks = [10, 12, 15, 3, 20, 10];
const birds = ["Pigeon", "Mouette", "Corbeau", "Merle", "Poule"];
const countries = ["France", "Allemagne", "Italie", "Espagne", "Portugal"];
const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const randomNumbers = [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)];
const somePhrases = ['Bonjour, comment ca va ?', 'Il fait beau aujourd\'hui', 'Vive la programmation'];

console.log("Exercice 1 : Affichage de tous les éléments d'un tableau");
console.log(`Affichage de tous les éléments de ${numbersTo10} : `);
console.log(displayAllElements(numbersTo10));

console.log("");

console.log("Exercice 2 : Affichage du premier jour de la semaine");
console.log(`Le premier jour de la semaine est ` + days[0]);

console.log("");

console.log("Exercice 3 : Ajoute chaque élément d'un tableau");
console.log(`La somme de tous les nombres ${evenNumberTo10} est ` + addNumberFromArray(evenNumberTo10));

console.log("");

console.log("Exercice 4 : Ajout d'un élément à un tableau");
console.log(`Ajout de 'Kiwi' à ${fruits} : ` + addFruit(fruits, "Kiwi"));

console.log("");

console.log("Exercice 5 : Moyenne des notes");
console.log(`La moyenne des notes ${marks} est ` + addNumberFromArray(marks) / marks.length);

console.log("");

console.log("Exercice 6 : Recherche d'un élément dans un tableau");
console.log(`Recherche de 'Merle' dans ${birds} : ` + birds.includes("Merle"));
console.log(`Recherche de 'Pélican' dans ${birds} : ` + birds.includes("Pélican"));

console.log("");

console.log("Exercice 7 : Tri par ordre alphabétique");
console.log(`Tri par ordre alphabétique de ${countries} : ` + countries.sort());

console.log("");

console.log("Exercice 8 : 3ème mois de l'année");
console.log(`Le 3ème mois de l'année est ` + months[2]);

console.log("");

console.log("Exercice 9 : Le plus petit et le plus grand nombre");
console.log(`Le plus petit et le plus grand nombre de ${randomNumbers} sont ` + minAndMax(randomNumbers).min + " et " + minAndMax(randomNumbers).max);

console.log("");

console.log("Exercice 10 : Phrase la plus longue"); 
console.log(`La phrase la plus longue de ${somePhrases} est ` + stringWithMoreLetters(somePhrases));