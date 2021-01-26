// LOAD DATA
// ====================================================
const fs = require('fs');
const notes = require("../db/db.json");
const uuid = require("uuid");
const path = require("path")


// ROUTING
// ====================================================
module.exports = function(app) {
  // GET ALL NOTES
  app.get("/api/notes", (req, res) => {
    res.json(JSON.parse(fs.readFileSync(path.join(__dirname, "/../db/db.json"), 'utf-8')));
  });

  // ADD NEW NOTE
  app.post("/api/notes", (req, res) => {
    const newNote = {
      id: uuid.v4(),
      title: req.body.title,
      text: req.body.text
    };
    notes.push(newNote);
    fs.writeFileSync(path.join(__dirname, "/../db/db.json"), JSON.stringify(notes));
    res.json(notes);
  });

  // DELETE NOTE
  app.delete("/api/notes/:id", (req, res) => {
    const found = notes.some(note => note.id === req.params.id);
    if (found) {
      const updNotes = notes.filter(note => note.id !== req.params.id)
      console.log(updNotes);
      fs.writeFileSync(path.join(__dirname, "/../db/db.json"), JSON.stringify(updNotes));
      res.json(updNotes);
    } else {
      console.log("note not found")
      res.status(400).json({ msg: "Note not found"});
    }
  })
}