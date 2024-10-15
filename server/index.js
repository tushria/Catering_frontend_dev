// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '', 
    database: 'serviceDB', 
});

// Endpoint to check service availability
app.post('/check-service', (req, res) => {
    const { location, serviceDate, duration } = req.body;

    // Determine which time slot to check based on the duration
    const timeSlot = duration === 'day' ? 'daytime' : 'nighttime';

    const query = `
        SELECT COUNT(*) AS count 
        FROM available_services 
        WHERE Location = ? AND date = ? AND ?? = 'available'
    `;
    
    db.query(query, [location, serviceDate, timeSlot], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Database query failed' });
        }

        const count = results[0].count;
        res.json({ available: count > 0 });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
