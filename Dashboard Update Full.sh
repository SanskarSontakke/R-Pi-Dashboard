#!/bin/bash

sudo sh "public/static/sh/System Update.sh"                             # Run the system update and clean-up script
sudo sh "public/static/sh/Dependences Install.sh"                       # Install dependencies like nano, git, and tree
sudo sh "public/static/sh/Python Install.sh"                            # Install Python, pip, venv, and psutil for system monitoring
sudo sh "public/static/sh/Node Install.sh"                              # Install Node.js and npm package manager
cd ~/Dashboard                                                          # Navigate to the Dashboard directory
sudo sh "public/static/sh/Dashboard Install.sh"                         # Clone the dashboard project and set up files
sudo sh "public/static/sh/Node Setup.sh"                                # Initialize npm, install Express, Socket.IO, and nodemon
echo "============================================================== Update Complete =============================================================="