const http = require("http");

const server = http.createServer((req, res) => {
  console.log("nafees");

  const url = req.url;
  if (url === "/home") {
    res.write("<html></html>");
    res.write("<head><title>home page</title></head>");
    res.write("<body><h1>WELCOME HOME</h1></body>");
    return res.end();
  }

  if (url === "/about") {
    res.write("<html></html>");
    res.write("<head><title>home page</title></head>");
    res.write("<body><h1>WELCOME TO ABOUT US PAGE</h1></body>");
    return res.end();
  }

  if (url === "/node") {
    res.write("<html></html>");
    res.write("<head><title>home page</title></head>");
    res.write("<body><h1>WELCOME TO MY NODE JS PROJECT</h1></body>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html></html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>hello from my node.js server!</h1></body>");
  res.end();
});

server.listen(4000);
