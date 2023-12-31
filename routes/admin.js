const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");

//admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  console.log("1st middleware");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  // res.sendFile(path.join(__dirname,"../",'views','add-product.html'));       both way is possible
});

//admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;
