const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { exec } = require('child_process');
const path = require('path');

// Create an instance of Express
const app = express();

// Create an HTTP server
const server = http.createServer(app);

// Attach Socket.io to the server
const io = socketIO(server);

// Path to the Python script
const pythonScriptPath = path.join(__dirname, 'public', 'static', 'py', 'cpu_usage.py');

// Function to get CPU usage by executing the Python script
function getCpuUsage(callback) {
    exec(`python3 ${pythonScriptPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script: ${error}`);
            return callback(null);
        }
        // Log the CPU usage and send data back through callback
        console.log(`CPU Core Usage: ${stdout}`);
        callback(stdout.trim());  // Send CPU usage to the callback
    });
}

// Serve static files (like HTML, CSS, JS)
app.use(express.static('public'));

// Handle socket connections for real-time communication
io.on('connection', (socket) => {
    console.log('A user connected');

    // Send CPU data to the client every second
    setInterval(() => {
        getCpuUsage((cpuUsage) => {
            if (cpuUsage) {
                socket.emit('cpu_update', cpuUsage); // Emit the CPU usage data to the client
            }
        });
    }, 1000);

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Set the port for the server
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
