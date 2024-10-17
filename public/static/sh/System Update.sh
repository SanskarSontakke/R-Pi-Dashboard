

sudo dpkg --configure -a                                         # Reconfigure any broken or partially installed packages
sudo apt update -y                                               # Fetch the latest package information from repositories
sudo apt upgrade -y                                              # Install the latest versions of all packages currently installed
sudo apt autoremove -y                                           # Autoremove unnecessary packages to free up space