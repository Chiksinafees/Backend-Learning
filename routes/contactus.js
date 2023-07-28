const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");

//admin/add-product => GET
router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
  // res.sendFile(path.join(__dirname,"../",'views','add-product.html'));       both way is possible
});

//admin/add-product => POST
router.post("/contactus", (req, res, next) => {
  console.log(req.body);
  res.redirect("/success");
});

module.exports = router;
