const express = require("express");
const router = express.Router();

const contactusController = require("../controllers/contactUs");

//admin/add-product => GET
router.get("/contactus", contactusController.contactUsGetPage);

//admin/add-product => POST
router.post("/contactus", contactusController.contactUsPostPage);

module.exports = router;
