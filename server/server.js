// server.js
require('dotenv').config();

const express = require('express');
const allNotes = require('./routes/allNotesRoute');
const singleNote = require('./routes/singleNoteRoutes');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;


app.use(cors({ origin: 'http://localhost:5173'})); 
// Middleware to parse incoming JSON requests
app.use(express.json());

app.use(allNotes);
app.use(singleNote);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
