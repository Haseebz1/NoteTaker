const router = require("express").Router();
const dbArray = require("../db/db.json");


// GET notes
router.get("/notes", (req, res) => {
  //logic to get a note from db.json
  console.log(dbArray);
});

// CREATE note
router.post('/notes', (req, res) => {
   
    const newNote = req.body
    dbArray.push(newNote)
    console.log(dbArray)
})

// DELETE note bonus

module.exports = router;
