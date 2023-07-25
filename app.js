// const http = require("http");        we are using app.listen(3000) so this also not require


const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("1st middleware");
  next();
});
app.use((req, res, next) => {
  console.log("2nd middleware");
  res.send({ name: "nafees" });
});

app.listen(3000); // as app.listen(3000)  = http.createServer(app)
                                       //   server.listen(3000)

// const server = http.createServer(app)
// server.listen(3000);
