const db = require('../db');

const deleteNote = (req, res) => {
  // 1. Extract the ID from the URL parameters
  const noteId = req.params.id;

  // 2. Define the SQL delete statement with a placeholder
  const sqlDelete = "DELETE FROM notes WHERE id = ?";

  // 3. Execute the query
  db.query(sqlDelete, [noteId], (err, result) => {
    if (err) {
      console.error("Database error details:", err);
      return res.status(500).json({ error: "Database deletion failed" });
    }

    // 4. Verify if any row was actually deleted
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Record not found" });
    }

    // 5. Send a success response
    return res.status(200).json({ message: "Record deleted successfully" });
  });
};

module.exports = { deleteNote };
