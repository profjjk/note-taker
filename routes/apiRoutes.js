// LOAD DATA
// ====================================================
var notes = require("./db/db.json")


// ROUTING
// ====================================================
module.exports = function(app) {
  // GET ALL NOTES
  app.get("/api/notes", (req, res) => res.json(notes));

  // GET SINGLE NOTE
  app.get("/api/notes/:id", (req, res) => {
    // Find note in array.
    const found = notes.some(note => note.id === parseInt(req.params.id));
    // IF note exists...
    if (found) {
      // Respond with note.
      res.json(notes.filter(note => note.id === parseInt(req.params.id)))
    } else {
      // ELSE change status code and respond with error message.
      res.status(400).json({ msg: "Note not found"});
    }
  })
  
  // ADD NEW NOTE

  // MODIFY NOTE

  // DELETE NOTE
}





