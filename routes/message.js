const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("msg.txt", (err, data) => {
    if (err) {
      data = "No Chat Exists";
    }
    res.send(
      `${data}<form onsubmit="document.getElementById('userName').value = localStorage.getItem('userName');"
         action='/userMessage' method='POST'>
         <input id='message' name='message' type='text' placeholder='message'>
         <input id='userName' type='hidden' name='userName'>
         <button type='submit'>send</button>
     </form>`
    );
  });
});

router.post("/userMessage", (req, res, next) => {
  console.log(req.body.userName,  req.body.message);
  fs.writeFile(
    "msg.txt",
    `${req.body.userName}: ${req.body.message}`,
    { flag: "a" },
    (err) => (err ? console.log(err) : res.redirect("/"))
  );
});

module.exports = router;
