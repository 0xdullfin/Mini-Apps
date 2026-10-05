const db = require('../db');

const createNote = async (req, res) => {
  console.log(req.body)
  const { title, main } = req.body;
  const id = Math.floor(Math.random() * 1000000);
  const sqlInsert = `INSERT INTO notes (noteId, title, main) VALUES (?, ?, ?)`;

  try {
    const result = await db.query(sqlInsert, [id, title, main]);
    res.status(201).send({
      message: "Note added to MySQL!", 
      id: result.insertId 
    });

    console.log(result)
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Database insertion failed" });
  }
};

module.exports = { createNote };
