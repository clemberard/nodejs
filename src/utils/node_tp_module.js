import fs from "node:fs";

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
