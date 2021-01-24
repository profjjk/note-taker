// LOAD DATA
// ====================================================
// Get JSON data from db.json.
var noteData = require("../db/db.json")


// ROUTING
// ====================================================
module.exports = function(app) {
  // Route GET requests to data.
  app.get("/api/notes", function(req, res) {
    // Convert data to JSON string.
    res.json(noteData);
  })
  // Route POST requests to data.
  app.post("/api/notes", function(req, res) {
    // Capture user input from page and add to data array.
    noteData.push(req.body);
    // ????
    res.json(true);
  })
}