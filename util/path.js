const path = require("path");

module.exports = path.dirname(process.mainModule.filename);

// dirname = Return the directory name of a path. Similar to the Unix dirname command.
// process= global variable , is a variable avaible in all file
//mainModule= refer mainModule(app.js) which started the application
//
