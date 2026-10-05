const db = require('../db');

const editNote = async (req, res) => {
  // 1. Extract the ID from the URL parameters
  const postId = req.params.id;
  const { title, main } = req.body;
  const sqlUpdate = `UPDATE notes SET title = ?, main =? WHERE noteId = ?`;

  try {
    const result = await db.query(sqlUpdate, [title, main, postId]);
    res.status(201).send({
      message: "Note updated successfully!",
      updateId: result.insertId 
    });

    console.log(result)
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Note update failed' });
  }
};

module.exports = {editNote};
