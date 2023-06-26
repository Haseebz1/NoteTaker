const router = require("express").Router();
const db = require("../db/db.json");
// GET notes
router.get("/notes", (req, res) => {
  //logic to get a note from db.json
  console.log(db);
});

// CREATE note

// DELETE note bonus

module.exports = router;
