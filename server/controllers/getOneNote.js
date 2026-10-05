const db = require('../db');

const getOneNote = async (req, res) => {
  try {
    // 1. Extract the ID from the URL parameters
    const postId = req.params.id;

    // 2. Execute parameterized query to prevent SQL injection
    const [rows] = await db.query('SELECT * FROM notes WHERE noteId = ?', [postId]);

    // 3. Check if the post exists
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // 4. Return the found post
    res.json(rows[0]);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Database query failed' });
  }
};

module.exports = { getOneNote };
