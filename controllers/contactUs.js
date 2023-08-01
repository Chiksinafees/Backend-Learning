const rootDir = require("../util/path");
const path = require("path");

exports.contactUsGetPage = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
  // res.sendFile(path.join(__dirname,"../",'views','add-product.html'));      both way is possible
};

exports.contactUsPostPage = (req, res, next) => {
  console.log(req.body);
  res.redirect("/success");
};
