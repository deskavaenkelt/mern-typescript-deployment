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
    read -rp "Start the Build Script (y/n)?" yn
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

sudo apt update && sudo apt upgrade -y && sudo apt dist-upgrade -y

msg_info "Install NodeJS"
sleep 2
sudo apt install npm -y
npm -v
msg_info "Install n"
sleep 2
npm i -g n
msg_info "Install latest stable NodeJS"
sleep 2
sudo n stable
source ~/.bashrc
msg_ok "NodeJS installed"


msg_info "Remove client build"
sleep 2
rm -rf /var/www/html
msg_ok "Removed old client build"


msg_info "Build Client"
sleep 2
cd ../client/
npm install
npm run build
msg_info "Builds to /var/www/html"


msg_ok "Built Client to /var/www/html"

msg_ok "Done with build steps"
