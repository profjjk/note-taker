// LOAD DATA
// ====================================================
const fs = require('fs');
const notes = require("../db/db.json");
const uuid = require("uuid");
const path = require("path")

console.log("# of notes: " + notes.length)

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
    console.log({ newNote });
    notes.push(newNote);
    fs.writeFileSync(path.join(__dirname, "/../db/db.json"), JSON.stringify(notes));
    res.json(notes);
  });

  // DELETE NOTE
  app.delete("/api/notes/:id", (req, res) => {
    const found = notes.some(note => note.id === req.params.id);
    const deletedNote = notes.filter(note => note.id === req.params.id);
    if (found) {
      const updatedNotes = notes.filter(note => note.id !== req.params.id)
      console.log({ deletedNote });
      fs.writeFileSync(path.join(__dirname, "/../db/db.json"), JSON.stringify(updatedNotes));
      res.json(updatedNotes);
    } else {
      res.status(400).json({ msg: "Note not found"});
    }
  })
}