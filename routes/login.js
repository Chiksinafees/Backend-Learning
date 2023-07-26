const express = require("express");
// const data=require('./data')

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    `<form onsubmit="localStorage.setItem('userName', document.getElementById('userName').value)"
  action="/userLogin" method="POST">
  <input id="userName" type="text" name="userName" placeholder="userName">
  <button type="submit">Login</button>
</form>`
  );
});

router.post("/userLogin", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
