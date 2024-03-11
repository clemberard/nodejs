import { add, highestNumber, removeVowels, orderByAsc, numToLetters, wordWithVowelsCaps, valueOfKeyInArray, NumberOfVowels, wordWithConsonantsCaps } from "./src/utils/functions_module.js";

const testWord1 = "Bonjour";
const testWord2 = "Hello";
const testNumber0 = 0;
const testNumber42 = 42;
const testNumber123 = 123;
const testNumber1000 = 1000;
const testArray1 = [2, 3, 4];
const testArray2 = [5, 3, 4];
const testArrayOfObjects1 = [{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 6 }];
const testArrayOfObjects2 = [{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5 }];

console.log("Exercice 1 : Ajout de 2 nombres");
console.log(`${testNumber0} + ${testNumber42} = ` + add(testNumber0, testNumber42));
console.log(`${testNumber123} + ${testNumber1000} = ` + add(testNumber123, testNumber1000));

console.log("");

console.log("Exercice 2 : Nombre le plus élevé");
console.log(`Le nombre le plus élevé de ${testArray1} est ` + highestNumber(testArray1));
console.log(`Le nombre le plus élevé de ${testArray2} est ` + highestNumber(testArray2));

console.log("");

console.log("Exercice 3 : Suppression des voyelles");
console.log(`Suppression des voyelles de '${testWord1}' : ` + removeVowels(testWord1));
console.log(`Suppression des voyelles de '${testWord2}' : ` + removeVowels(testWord2));

console.log("");

console.log("Exercice 4 : Tri par ordre alphabétique");
console.log(`Tri par ordre alphabétique de ['Bonjour', 'Hello', 'Salut'] : ` + orderByAsc(["Bonjour", "Hello", "Salut"]));
console.log(`Tri par ordre alphabétique de ['Clement, Mateo, Mounir'] : ` + orderByAsc(["Clement", "Mateo", "Mounir"]));

console.log("");

console.log("Exercice 5 : Conversion d'un nombre en toutes lettres");
console.log(`Conversion de 0 en toutes lettres : ` + numToLetters(0));
console.log(`Conversion de 1 en toutes lettres : ` + numToLetters(1));
console.log(`Conversion de 42 en toutes lettres : ` + numToLetters(42));
console.log(`Conversion de 123 en toutes lettres : ` + numToLetters(123));
console.log(`Conversion de 999 en toutes lettres : ` + numToLetters(999));
console.log(`Conversion de 1000 en toutes lettres : ` + numToLetters(1000));

console.log("");

console.log("Exercice 6 : Retourne la valeur des clés d'un tableau d'objets");
console.log(`Retourne la valeur des clés 'a' de { a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 6 } : ` + valueOfKeyInArray(testArrayOfObjects1, "a"));
console.log(`Retourne la valeur des clés 'b' de { a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5 } : ` + valueOfKeyInArray(testArrayOfObjects2, "b"));

console.log("");

console.log("Exercice 7 : Tri d'un tableau de nombres");
console.log(`Tri du tableau ${testArray1} : ` + orderByAsc(testArray1));
console.log(`Tri du tableau ${testArray2} : ` + orderByAsc(testArray2));

console.log("");

console.log("Exercice 8 : Chaine de caractere avec toutes les voyelles en majuscules");
console.log(`Chaine de caractere avec toutes les voyelles en majuscules de '${testWord1}' : ` + wordWithVowelsCaps(testWord1));
console.log(`Chaine de caractere avec toutes les voyelles en majuscules de '${testWord2}' : ` + wordWithVowelsCaps(testWord2));

console.log("");

console.log("Exercice 9 : Nombre de voyelles");
console.log(`Nombre de voyelles dans '${testWord1}' : ` + NumberOfVowels(testWord1));
console.log(`Nombre de voyelles dans '${testWord2}' : ` + NumberOfVowels(testWord2));

console.log("");

console.log("Exercice 10 : Chaine de caractere avec toutes les consonnes en majuscules");
console.log(`Chaine de caractere avec toutes les consonnes en majuscules de '${testWord1}' : ` + wordWithConsonantsCaps(testWord1));
console.log(`Chaine de caractere avec toutes les consonnes en majuscules de '${testWord2}' : ` + wordWithConsonantsCaps(testWord2));