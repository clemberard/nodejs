import fs from "node:fs";
import http from "node:http";

// https://grafikart.fr/tutoriels/nodejs-filesystem-2083
export function readFile(nameFile) {
	return fs.readFileSync(`./files/${nameFile}`, "utf8");
}

export function writeFile(nameFile, content) {
	fs.writeFileSync(`./files/${nameFile}`, fs.readFileSync(`./files/${nameFile}`, "utf8") + " " + content);
}

export function removeAllContent(nameFile) {
	fs.writeFileSync(`./files/${nameFile}`, "On va mettre un peu de contenu quand meme, sinon ca fait vide ...");
}

export function filesList() {
	return fs.readdirSync("./files");
}

// https://www.w3schools.com/nodejs/nodejs_http.asp
export function launchServer() {
	http
		.createServer(function (req, res) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.writeHead(200, { "charset": "utf-8" });
			// affiche le formulaire post dans la console
			if (req.method == "POST") {
				let body = "";
				req.on("data", function (data) {
					body += data;
				});
				req.on("end", function () {
					console.log("POSTed: " + body);
				});
			}
			// res.write(req.url); // write the url of the request. Ex: http://localhost:8080/test.html -> /test.html
			res.write(readFile("header.html")); 		
			res.write(readFile("test.html")); 
			res.end(); //end the response
		})
		.listen(8080); //the server object listens on port 8080
	console.log("http://localhost:8080");
}
