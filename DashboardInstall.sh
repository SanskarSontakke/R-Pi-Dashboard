
# Update the System
sudo apt update -y                                             

# Upgrade the packages
sudo apt upgrade -y                                            

# Download python3
sudo apt install python3                                       

# Download python3-pip
sudo apt install python3-pip                                   

# Verify the python installation
echo "python3 version :" && python3 --version                  

# Verify the pip installation
echo "pip3 version :" && pip3 --version                        

# Install necessary pip packages (psutil for system information)
sudo pip3 install psutil                                       

# Install python3-venv for virtual environments (if needed)
sudo apt install python3-venv                                  

# Install nodejs
sudo apt install nodejs                                        

# Install Node Package Manager (npm)
sudo apt install npm                                           

# Verify the node installation
echo "node version : " && node -v                              

# Verify the npm installation
echo "npm version : " && npm -v                                

# Create a directory for the dashboard
mkdir Dashboard                                                

# Move to that directory
cd Dashboard/                                                  

# Initialize npm
npm init -y                                                    

# Install necessary node packages (express and socket.io)
npm install express socket.io                                  

# Install nodemon as a dev dependency
npm install --save-dev nodemon                                  

# Run npm fund (optional, to display funding info for installed packages)
npm fund                                                       

# Install nano (a text editor)
sudo apt install nano -y                                       

# Autoremove unnecessary packages
sudo apt autoremove -y                                         

# Install git
sudo apt install git                                           

# Clone the git repo for the dashboard
git clone https://github.com/SanskarSontakke/R-Pi-Dashboard.git 

# Move to the cloned directory
cd R-Pi-Dashboard/                                             

# Copy the public and static directories to the parent directory
cp -r public/ ../                                               
cp -r static/ ../                                               

# Copy the server.js file to the parent directory
cp server.js ../                                               

# Move back to the parent directory
cd ../                                                         
