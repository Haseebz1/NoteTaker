const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');


const readFromFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};


const writeToFile = (filePath, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};


const createNewNote = async (note) => {
  const dbPath = path.join(__dirname, "../db/db.json");

  try {
    const notesArray = await readFromFile(dbPath);

    const newNote = {
      id: uuidv4(),
      title: note.title,
      text: note.text,
    };

    notesArray.push(newNote);

    await writeToFile(dbPath, notesArray);

    return newNote;
  } catch (err) {
    throw err;
  }
};


router.get("/notes", async (req, res) => {
  const dbPath = path.join(__dirname, "../db/db.json");
  try {
    const notesArray = await readFromFile(dbPath);
    res.json(notesArray);
  } catch (err) {
    res.status(500).json({ error: "Unable to get notes." });
  }
});


router.post("/notes", async (req, res) => {
  try {
    const newNote = await createNewNote(req.body);
    res.json(newNote);
  } catch (err) {
    res.status(500).json({ error: "Unable to create a new note." });
  }
});



module.exports = router;
