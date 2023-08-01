const path = require("path");

exports.error404Page = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../views/error404.html"));
};
