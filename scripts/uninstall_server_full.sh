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

echo -e "${BL}This script will Perform uninstallation of installed componenets.${CL}"
while true; do
    read -rp "Start the Cleeanup Script (y/n)?" yn
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

msg_info "Uninstall NodeJS and pm2"
sleep 2
pm2 stop all
pm2 delete all
sudo apt remove npm pm2 -y
#source ~/.bashrc
msg_ok "Uninstalled NodeJS pm2"

msg_ok "Done with cleanup"
