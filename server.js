const express = require('express');
const http = require('http');
const { exec, spawn } = require('child_process');

const app = express();
const server = http.createServer(app);

// Execute the shell script at startup and log its output
exec('sh ~/Dashboard/public/static/sh/TempTm1637.sh > ~/Dashboard/public/static/logs/TempTm1637.log 2>&1 &', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error starting TempTm1637.sh: ${error}`);
    } else {
        console.log('TempTm1637.sh started successfully');
    }
});

// Serve static files (HTML, CSS, JS)
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
