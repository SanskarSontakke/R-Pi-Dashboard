sudo apt update -y                                          # Update the Syatem
sudo apt upgrade -y                                         # Upgrade the packages
sudo apt install nodejs                                     # Install nodejs
sudo apt install npm                                        # Install Node Package Manager
sudo echo "node version : " && sudo node -v                 # Verify the installation
sudo echo "npm version : " && sudo npm -v                   # Verify the installation
mkdir Dashboard                                             # Make the directory for dashboard
cd Dashboard/                                               # Move to that directory
npm init -y                                                 # init npm
npm install express socket.io                               # Install necessary node packages
npm install --save-dev nodemon                              # Install necessary node packages
npm fund                                                    # Fund the npm packages
sudo apt install nano -y                                    # Install nano
sudo apt autoremove -y                                      # Autoremove extra packages