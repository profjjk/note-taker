// LOAD DATA
// ====================================================
const fs = require('fs');
const notes = require("../db/db.json");
const uuid = require("uuid");


// ROUTING
// ====================================================
module.exports = function(app) {
  // GET ALL NOTES
  app.get("/api/notes", (req, res) => res.json(notes));

  // ADD NEW NOTE
  app.post("/api/notes", (req, res) => {
    // Create a new note.
    const newNote = {
      id: uuid.v4(),
      title: req.body.title,
      text: req.body.text
    };
    notes.push(newNote); // Add new note to notes array.
    res.json(notes); // Respond with all notes, including new.
  });

  // MODIFY NOTE
  app.put("/api/notes/:id", (req, res) => {
    // Find note in array.
    const found = notes.some(note => note.id === parseInt(req.params.id));
    // IF note exists...
    if (found) {
      const updNote = req.body; // Assign updated data to variable.
      notes.forEach(note => { // Loop through notes array.
        if (note.id === parseInt(req.params.id)) { // IF note found THEN...
          note.title = updNote.title ? updNote.title : note.title; // Change title IF updated.
          note.text = updNote.text ? updNote.text : note.text; // Change text IF updated.
          res.json(note); // Respond with updated note.
        } else {
          // ELSE change status code and respond with error message.
          res.status(400).json({ msg: "Note not found"});
        }
      })
    }
  })

  // DELETE NOTE
  app.delete("/api/notes/:id", (req, res) => {
    // Find note in array.
    const found = notes.some(note => note.id === parseInt(req.params.id));
    // IF note exists...
    if (found) {
      const updNote = req.body; // Assign updated data to variable.
      notes.forEach(note => { // Loop through notes array.
        if (note.id === parseInt(req.params.id)) { // IF note found THEN...
          // Respond with all notes EXCEPT the one deleted.
          res.json(notes.filter(note => note.id !== parseInt(req.params.id)))
        } else {
          // ELSE change status code and respond with error message.
          res.status(400).json({ msg: "Note not found"});
        }
      })
    }
  })
}





