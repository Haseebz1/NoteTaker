const router = require("express").Router();
const dbArray = require("../db/db.json");
const {v4: uuid} = require('uuid');
const {

 readFromFile,
readAndAppend ,
writeToFile,
  } = require('./helper/fsutils');



// GET notes
router.get("/notes", (req, res) => {
  console.info(`${req.method} request for notes received`);
  readFromFile('dbArray').then((data) => res.json(JSON.parse(data)));
});

// CREATE note
router.post('/notes', (req, res) => {
   
    const newNote = req.body
    dbArray.push(newNote)
    console.log(dbArray)
})

// DELETE note bonus

module.exports = router;
