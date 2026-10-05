const db = require('../db');

const getNotes = async (req, res) => {
    try {
        // Execute query using async/await
        const [rows] = await db.query('SELECT * FROM notes');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { getNotes };
