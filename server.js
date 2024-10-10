const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { exec } = require('child_process');

// Create an instance of Express
const app = express();

// Create an HTTP server
const server = http.createServer(app);

// Attach Socket.io to the server
const io = socketIO(server);

function getCpuUsage() {
    exec('python3 /public/static/py/cpu_usage.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script: ${error}`);
            return;
        }

        // Log the CPU usage
        console.log(`CPU Core Usage: ${stdout}`);
    });
}

setInterval(getCpuUsage, 500);
// Serve static files (like HTML, CSS, JS)
app.use(express.static('public'));

// Handle socket connections for real-time communication
io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Send data to the client (example)
    setInterval(() => {
        const randomCPU = Math.random() * 100;  // Example data
        socket.emit('cpu_update', randomCPU);
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
