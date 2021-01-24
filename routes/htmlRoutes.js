// DEPENDENCIES
// ====================================================
var path = require("path");


// ROUTING
// ====================================================
module.exports = function(app) {
  // Route HTML GET requests to pages.
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
  });
  // Default route if no matches.
  app.get("*", function(req, res) {
    res.sendFile(path.join(__driname, "../public/index.html"))
  });
}