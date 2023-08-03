const router = require("express").Router();
const { notes } = require("../db/db.json");
const {v4: uuidv4} = require('../helper/fsutils');


//  readFromFile,
//   } = require('./helper/fsutils');
// const { json } = require("express");



// GET notes
router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});


// CREATE note
router.post('/notes', (req, res) => {
   
   
  router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
  });  
});

// DELETE note bonus

module.exports = router;
