const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { exec } = require('child_process');

// Create an instance of Express
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Function to get CPU, Disk, and RAM usage from Python
function getSystemStats(callback) {
    exec('python3 ~/Dashboard/public/static/py/cpu_usage.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script: ${error}`);
            return callback(null);
        }
        // Parse the JSON output from Python
        const stats = JSON.parse(stdout);
        callback(stats);
    });
}

// Serve static files (like HTML, CSS, JS)
app.use(express.static('public'));

// Handle socket connections for real-time communication
io.on('connection', (socket) => {
    console.log('A user connected');

    // Send actual CPU, Disk, and RAM data every second
    setInterval(() => {
        getSystemStats((stats) => {
            if (stats) {
                socket.emit('system_stats', stats);  // Send data to the client
            }
        });
    }, 1000);

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
