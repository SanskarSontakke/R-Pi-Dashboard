

cd ~                                                             # Move to the root directory
sudo rm -r -f Dashboard/                                         # Remove the excess Git directory and files
mkdir Dashboard/
cd Dashboard/                                                    # Move to the Dashboard directory
git clone https://github.com/SanskarSontakke/R-Pi-Dashboard.git  # Clone the dashboard project from GitHub
cd R-Pi-Dashboard/                                               # Move to the cloned repository directory
cp -r public/ ../                                                # Copy the 'public' directory to the parent directory
cp server.js ../                                                 # Copy 'server.js' to the parent directory
cp "Dashboard Update Full.sh" ../
cp "Dashboard Update Lite.sh" ../
cd ../                                                           # Move back to the parent directory
git clone https://github.com/nopnop2002/Raspberry-tm1637
cd Raspberry-tm1637
cc -o tm1637 main.c tm1637.c -lwiringPi -lpthread
rm -r -f R-Pi-Dashboard/                                         # Remove the excess Git directory and files
npm init -y                                                      # Initialize npm in the Dashboard directory
npm install express socket.io -y                                 # Install Express.js and Socket.IO for web app and real-time communication
npm install --save-dev nodemon -y                                # Install nodemon as a dev dependency to auto-restart the server on changes
npm fund                                                         # Display funding information for the installed npm packages (optional)
echo "==============================================================Lite Update Complete =============================================================="    