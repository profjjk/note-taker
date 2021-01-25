// DEPENDENCIES
// ====================================================
var path = require("path");


// ROUTING
// ====================================================
module.exports = function(app) {
  // Route HTML GET requests to pages.
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
  });
  // Default route if no matches.
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });
}