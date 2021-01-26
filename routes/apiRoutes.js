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
  app.get("/api/notes", (req, res) => res.json(notes));

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

  // MODIFY NOTE
  app.put("/api/notes/:id", (req, res) => {
    const found = notes.some(note => note.id === req.params.id);
    if (found) {
      const updNote = req.body;
      notes.forEach(note => {
        if (note.id === req.params.id) {
          note.title = updNote.title ? updNote.title : note.title;
          note.text = updNote.text ? updNote.text : note.text;
          res.json(note);
        } else {
          res.status(400).json({ msg: "Note not found"});
        }
      })
    }
  })

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