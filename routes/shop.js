const express = require("express");

const router = express.Router();

router.get("/shop", (req, res, next) => {
  res.send("<h1>learning Express.js</h1>");
});

module.exports = router;