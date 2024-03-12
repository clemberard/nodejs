import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;
	res.writeHead(200, { "Content-Type": "text/html" });
	if (url === "/") {
		res.write("<html>");
		res.write("<head><title>Enter Message</title></head>");
		res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Envoyer</button></form></body>');
		res.write("</html>");
		return res.end();
	}
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", fs.readFileSync(`message.txt`, "utf8") + "\n" + message, (err) => {
				res.writeHead(302, { Location: "/" });
				return res.end();
			});
    });
	}
});

// Le serveur écoute sur le port 3000
server.listen(3000);
console.log("http://localhost:3000/");
