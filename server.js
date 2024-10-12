const express = require('express');
const http = require('http');
const { exec } = require('child_process');

const app = express();
const server = http.createServer(app);

// Serve static files (like HTML, CSS, JS)
app.use(express.static('public'));

// API endpoint to get system stats
app.get('/system-stats', (req, res) => {
    exec('python3 ~/Dashboard/public/static/py/usage.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script: ${error}`);
            res.status(500).send('Server error');
            return;
        }

        // Send the stats back as JSON
        res.json(JSON.parse(stdout));
    });
});

// Set the port for the server
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
