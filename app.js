const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const loginRoutes=require("./routes/login")
const messageRoutes=require('./routes/message')

app.use(bodyParser.urlencoded());

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(loginRoutes)
app.use(messageRoutes)


app.use((req, res) => {
  res.status(404).send("<h1>Page not found !</h1>");
});

app.listen(3000);
