const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("nafees");

  const url = req.url;
  const method = req.method;

  if (url === "/") {
    fs.readFile("msg.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
      res.write("<html");
      res.write("<head><title>home page</title></head>");
      res.write(`<body>${data}</body>`);
      res.write(
        "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>send</button></input></form></body>"
      );
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      // console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      fs.writeFile("msg.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write("<body><h1>hello from my node.js server!</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(4000);
