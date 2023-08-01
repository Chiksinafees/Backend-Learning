const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const loginRoutes = require("./routes/login");
const messageRoutes = require("./routes/message");
const contactusRoutes = require("./routes/contactus");
const successController = require("./controllers/success");
const error404Controller = require("./controllers/error404");

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(loginRoutes);
app.use(messageRoutes);
app.use(contactusRoutes);

app.use(successController.successPage);
app.use(error404Controller.error404Page);

app.listen(3001);
