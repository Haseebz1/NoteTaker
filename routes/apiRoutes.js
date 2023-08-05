const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

// Helper function to read data from a file
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

// Helper function to write data to a file
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

// Function to create a new note and add it to the 'notes' array
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

// GET notes
router.get("/notes", async (req, res) => {
  const dbPath = path.join(__dirname, "../db/db.json");
  try {
    const notesArray = await readFromFile(dbPath);
    res.json(notesArray);
  } catch (err) {
    res.status(500).json({ error: "Unable to get notes." });
  }
});

// CREATE note
router.post("/notes", async (req, res) => {
  try {
    const newNote = await createNewNote(req.body);
    res.json(newNote);
  } catch (err) {
    res.status(500).json({ error: "Unable to create a new note." });
  }
});

// DELETE note bonus

module.exports = router;
