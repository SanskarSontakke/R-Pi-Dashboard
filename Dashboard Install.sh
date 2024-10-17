

sudo dpkg --configure -a                                         # Reconfigure any broken or partially installed packages
sudo apt update -y                                               # Fetch the latest package information from repositories
sudo apt upgrade -y                                              # Install the latest versions of all packages currently installed
sudo apt install python3 -y                                      # Install Python 3 interpreter
sudo apt install python3-pip -y                                  # Install pip3 (Python package manager)
sudo pip3 install psutil                                         # Install psutil for system monitoring in Python
sudo apt install python3-venv -y                                 # Install python3-venv for virtual environments
sudo apt install python3-psutil -y                               # Install python3-psutil
sudo apt install nodejs -y                                       # Install Node.js (JavaScript runtime)
sudo apt install npm -y                                          # Install npm (Node.js package manager)
mkdir Dashboard                                                  # Create a directory for the dashboard
cd Dashboard/                                                    # Move to the Dashboard directory
npm init -y                                                      # Initialize npm in the Dashboard directory
npm install express socket.io -y                                 # Install Express.js and Socket.IO for web app and real-time communication
npm install --save-dev nodemon -y                                # Install nodemon as a dev dependency to auto-restart the server on changes
npm fund                                                         # Display funding information for the installed npm packages (optional)
sudo apt install nano -y                                         # Install nano (text editor)
sudo apt install git -y                                          # Install Git (version control system)
sudo apt autoremove -y                                           # Autoremove unnecessary packages to free up space
git clone https://github.com/SanskarSontakke/R-Pi-Dashboard.git  # Clone the dashboard project from GitHub
cd R-Pi-Dashboard/                                               # Move to the cloned repository directory
cp -r public/ ../                                                # Copy the 'public' directory to the parent directory
cp server.js ../                                                 # Copy 'server.js' to the parent directory
cd ../                                                           # Move back to the parent directory
rm -r -f /R-Pi-Dashboard                                         # Remove the excess git files

echo "============================================================== Install Complete =============================================================="