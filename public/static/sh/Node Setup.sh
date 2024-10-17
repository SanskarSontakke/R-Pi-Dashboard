

mkdir Dashboard                                                  # Create a directory for the dashboard
cd Dashboard/                                                    # Move to the Dashboard directory
npm init -y                                                      # Initialize npm in the Dashboard directory
npm install express socket.io -y                                 # Install Express.js and Socket.IO for web app and real-time communication
npm install --save-dev nodemon -y                                # Install nodemon as a dev dependency to auto-restart the server on changes
npm fund                                                         # Display funding information for the installed npm packages (optional)