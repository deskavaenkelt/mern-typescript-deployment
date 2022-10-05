#!/usr/bin/env bash

sudo apt update && sudo apt upgrade -y && sudo apt dist-upgrade -y

sudo apt install npm nginx -y
npm -v
npm i -g n
sudo n stable
source ~/.bashrc
npm install pm2@latest -g
#sudo n latest
exit
