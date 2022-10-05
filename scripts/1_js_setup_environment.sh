#!/usr/bin/env bash

# This script sets up the environment for the project. It should be run from the
# root of the project.
set -euo pipefail
shopt -s inherit_errexit nullglob
YW=`echo "\033[33m"`
BL=`echo "\033[36m"`
RD=`echo "\033[01;31m"`
BGN=`echo "\033[4;92m"`
GN=`echo "\033[1;92m"`
DGN=`echo "\033[32m"`
CL=`echo "\033[m"`
BFR="\\r\\033[K"
HOLD="-"
CM="${GN}✓${CL}"
CROSS="${RD}✗${CL}"
clear

echo -e "${BL}This script will Perform installation and build steps.${CL}"
while true; do
    read -p "Start the Build Script (y/n)?" yn
    case $yn in
        [Yy]* ) break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done

function msg_info() {
    local msg="$1"
    echo -ne " ${HOLD} ${YW}${msg}..."
}

function msg_ok() {
    local msg="$1"
    echo -e "${BFR} ${CM} ${GN}${msg}${CL}"
}


msg_info "Remove old production build"
sleep 2
rm -rf ../server/dist
msg_ok "Removed old production build"

msg_info "Build Server"
sleep 2
cd ../server/
npm install
#npm run build
# fix error in logger `nano src/middlewares/MorganMiddleware.js`
msg_ok "Built Server"

msg_info "Build Client"
sleep 2
cd ../client/
npm install
npm run build_std
mv build/ ../server_js/static/
msg_ok "Built Client and moved to production folder"

msg_ok "Done with build steps"

# node ../server/dist/index.js
#pm2 start ../server/dist/index.js --name "server"

