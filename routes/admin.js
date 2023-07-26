const express = require("express");

const router = express.Router();

//admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  console.log("1st middleware");
  res.send(
    `<form action="/admin/add-product" method="POST">
       <input type="text" name="title">
       </input><input type="number" name="size">
       <button type="submit">Add Product</button>
     </form>`
  );
});

//admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;
