import { readFile, writeFile, removeAllContent, launchServer } from "./src/utils/node_tp_module.js";

console.log("Exercice 1 : Lecture d'un fichier");
console.log("Contenu du fichier test.txt : ");
console.log(readFile('test.txt'));

console.log("");

console.log("Exercice 2 : Ecriture dans un fichier");
console.log("Contenu du fichier test.txt avant modification : ");
console.log(readFile('test.txt'));
console.log("Contenu du fichier test.txt après modification (en ajoutant Hello World !) : ");
writeFile("test.txt", "Hello World !");
console.log(readFile('test.txt'));
removeAllContent('test.txt');

console.log("");

console.log("Exercice 3 : Création d'un serveur simple qui sert un fichier statique");
launchServer();