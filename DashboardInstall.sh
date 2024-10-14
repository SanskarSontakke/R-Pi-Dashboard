
# Update broken packages
sudo dpkg --configure -a          # Reconfigure any broken or partially installed packages

# Update the System
sudo apt update -y                # Fetch the latest package information from repositories

# Upgrade the packages
sudo apt upgrade -y               # Install the latest versions of all packages currently installed

# Download python3
sudo apt install python3 -y        # Install Python 3 interpreter

# Download python3-pip
sudo apt install python3-pip -y    # Install Python package manager (pip)

# Install necessary pip packages (psutil for system information)
sudo apt install python3-psutil -y        # Install psutil package to monitor system usage in Python

# Install python3-venv for virtual environments (if needed)
sudo apt install python3-venv -y   # Install Python virtual environment package

# Install nodejs
sudo apt install nodejs -y         # Install Node.js (JavaScript runtime)

# Install Node Package Manager (npm)
sudo apt install npm -y            # Install npm (Node Package Manager)

# Update broken packages
sudo dpkg --configure -a          # Reconfigure any broken or partially installed packages

# Update the System
sudo apt update -y                # Fetch the latest package information from repositories

# Upgrade the packages
sudo apt upgrade -y               # Install the latest versions of all packages currently installed

# Verify the node installation
echo "node version : " && node -v  # Check the installed version of Node.js

# Verify the npm installation
echo "npm version : " && npm -v    # Check the installed version of npm

# Verify the python installation
echo "python3 version :" && python3 --version   # Check the installed version of Python

# Verify the pip installation
echo "pip3 version :" && pip3 --version         # Check the installed version of pip

# Create a directory for the dashboard
mkdir Dashboard                   # Create a new directory named 'Dashboard'

# Move to that directory
cd Dashboard/                      # Change the current working directory to 'Dashboard'

# Initialize npm
npm init -y                        # Initialize the project with a default package.json file

# Install necessary node packages (express and socket.io)
npm install express socket.io -y    # Install Express (web framework) and Socket.IO (real-time communication library)

# Install nodemon as a dev dependency
npm install --save-dev nodemon -y   # Install nodemon (development tool that auto-restarts Node.js app on changes)

# Run npm fund (optional, to display funding info for installed packages)
npm fund                            # Display funding information for the installed npm packages

# Install nano (a text editor)
sudo apt install nano -y            # Install nano text editor

# Autoremove unnecessary packages
sudo apt autoremove -y              # Remove unnecessary packages to free up space

# Install git
sudo apt install git -y             # Install Git (version control system)

# Clone the git repo for the dashboard
git clone https://github.com/SanskarSontakke/R-Pi-Dashboard.git  # Clone the dashboard project from GitHub

# Move to the cloned directory
cd R-Pi-Dashboard/                  # Change the directory to the cloned repository

# Copy the public static directories to the parent directory
cp -r public/ ../                   # Copy the 'public' directory to the parent directory

# Copy the server.js file to the parent directory
cp server.js ../                    # Copy 'server.js' to the parent directory

# Move back to the parent directory
cd ../                              # Change the directory back to the parent directory
