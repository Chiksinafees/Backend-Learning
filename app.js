// const http = require("http");        we are using app.listen(3000) so this also not require

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());
app.use("/add-product", (req, res, next) => {
  console.log("1st middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"></input><input type="number" name="size"><button type="submit">Add Product</button></input></form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
}); 

app.use("/", (req, res, next) => {
  res.send("<h1>learning Express.js</h1>");
});

app.listen(3000); // as app.listen(3000)  = http.createServer(app)
//   server.listen(3000)

// const server = http.createServer(app)
// server.listen(3000);
