

cd ~                                                             # Move to the root directory
cd Dashboard/                                                    # Move to the Dashboard directory
rm -r -f R-Pi-Dashboard/                                         # Remove the excess Git directory and files
git clone https://github.com/SanskarSontakke/R-Pi-Dashboard.git  # Clone the dashboard project from GitHub
rm -f -r public/
rm -f -r node_modules/
rm -f -r package.json/
rm -f -r package-lock.json/
rm -f -r server.js/
cd R-Pi-Dashboard/                                               # Move to the cloned repository directory
cp -r public/ ../                                                # Copy the 'public' directory to the parent directory
cp server.js ../                                                 # Copy 'server.js' to the parent directory
cp "Dashboard Install.sh" ../
cp "Dashboard Update Full.sh" ../
cp "Dashboard Update Lite.sh" ../
cd ../                                                           # Move back to the parent directory
rm -r -f R-Pi-Dashboard/                                         # Remove the excess Git directory and files