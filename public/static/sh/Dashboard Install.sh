

cd ~                                                             # Move to the root directory
sudo rm -r -f Dashboard/                                              # Remove the excess Git directory and files
mkdir Dashboard/
cd Dashboard/                                                    # Move to the Dashboard directory
git clone https://github.com/SanskarSontakke/R-Pi-Dashboard.git  # Clone the dashboard project from GitHub
cd R-Pi-Dashboard/                                               # Move to the cloned repository directory
cp -r public/ ../                                                # Copy the 'public' directory to the parent directory
cp server.js ../                                                 # Copy 'server.js' to the parent directory
cp "Dashboard Update Full.sh" ../
cp "Dashboard Update Lite.sh" ../
cd ../                                                           # Move back to the parent directory
rm -r -f R-Pi-Dashboard/                                         # Remove the excess Git directory and files