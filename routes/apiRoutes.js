const router = require("express").Router();
const dbArray = require("../db/db.json");
const {v4: uuid} = require('../helper/fsutils');
const {

 readFromFile,
readAndAppend ,
writeToFile,
  } = require('./helper/fsutils');
const { json } = require("express");



// GET notes
router.get("/notes", (req, res) => {
  console.info(`${req.method} request for notes received`);
  readFromFile('dbArray').then((data) => res.json(JSON.parse(data)));
});

// CREATE note
router.post('/notes', (req, res) => {
   
    const newNote = req.body
    readFromFile('dbArray')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const result = json.filter((newNote) => newNote.note_id === note_id);
        return result.lenght > 0
        ? res.json(result)
        : res.json('no note with that ID')
    });
    
});

// DELETE note bonus

module.exports = router;
