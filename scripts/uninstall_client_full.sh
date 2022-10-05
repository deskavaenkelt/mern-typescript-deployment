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

sudo apt update && sudo apt upgrade -y && sudo apt dist-upgrade -y

msg_info "Uninstall NodeJS nginx"
sleep 2
sudo apt remove npm nginx -y
rm -rf /var/www/html
source ~/.bashrc
msg_ok "Uninstalled NodeJS nginx"

msg_ok "Done with cleanup"
