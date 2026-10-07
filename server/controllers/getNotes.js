const db = require('../db');

const getNotes = async (req, res) => {
const { category } = req.query;

    console.log(category);
    // res.status(200).json(category)
    if(category === "favourites") {
        try {
            // Execute query using async/await
            const [rows] = await db.query('SELECT * FROM notes WHERE favourite = 1');
            // const [rows] = await db.query('SELECT * FROM notes');
            res.status(200).json(rows);
        } catch (error) {
            console.error('Database query error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }  else if(category === undefined) {
        try {
            // Execute query using async/await
            const [rows] = await db.query('SELECT * FROM notes');
            res.status(200).json(rows);
        } catch (error) {
            console.error('Database query error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = { getNotes };
