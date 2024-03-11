import { readFile, writeFile, removeAllContent } from "./src/utils/node_tp_module.js";

console.log("Exercice 1 : Lecture d'un fichier");
console.log("Contenu du fichier test.txt : ");
console.log(readFile('test.txt'));

console.log("");

console.log("Exercice 2 : Ecriture dans un fichier");
console.log("Contenu du fichier test.txt avant modification : ");
console.log(readFile('test.txt'));
writeFile('test.txt', 'Hello World');
console.log("Contenu du fichier test.txt après modification : ");
console.log(readFile('test.txt'));
removeAllContent('test.txt');

console.log("");

console.log("Exercice 3 : Création d'un serveur simple qui sert un fichier statique");
import http from "node:http";
http
	.createServer(function (req, res) {
		res.write(readFile("test.html")); //write a response to the client
		res.end(); //end the response
	})
  .listen(8080); //the server object listens on port 8080
console.log("Server listening on port 8080");
console.log("http://localhost:8080");