# mern-typescript-deployment

## Programs to get

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)
- [Postman](https://www.postman.com/)
- [MobaXterm](https://mobaxterm.mobatek.net/)

## MongoDB Atlas

1. You can sign up for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and create an online database for
   free.
2. Create a new account, accept, verify, login.
3. Build a database
    * Choose "FREE" tier
    * Choose a provider and region. I chose AWS and Stockholm.
    * Choose a cluster name. I chose `mern-typescript-deployment`.
    * Click "Create Cluster"
4. Security Quickstart
    * Authenticate your connection with `username` and `password`
    * Choose a username and password
    * Click "Create User"
    * Where do you want to access your database from? I chose "Mylocal environment" and added my IP address. You can
      also add a whitelist for a specific IP address or a range of IP addresses.
    * Click "Add My current IP Address"
    * Finish and Close
5. Connect to mern-typescript-deployment and add connection string to .env

## Digital Ocean

1. You can sign up
   for [Digital Ocean](https://www.digitalocean.com/?refcode=2c4c3ec5405a&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=CopyPaste)
   and create a virtual machine for free.
2. Create Droplets
3. Choose an image. I chose Ubuntu 22.04.
4. Choose a plan. I chose Basic.
5. Choose a size. I chose Premium Intel with NVMe SSD $21/month.
6. Choose a datacenter region. I chose Frankfurt.
7. Authentication: Choose a root password.
8. Choose a hostname. I chose `mern-typescript-deployment`.
9. Click "Create Droplet"

## SSH into Digital Ocean Droplet with MobaXterm

1. Open MobaXterm
2. Click "Session"
3. Click "SSH"
4. Enter the IP address of your Digital Ocean Droplet
5. Enter the username. I chose `root`.
6. Connect
7. Enter the password you chose when creating the Droplet.
8. `git  clone https://github.com/deskavaenkelt/mern-typescript-deployment.git`

## SSH into Digital Ocean Droplet with VSCode integration

1. Open VSCode
2. Click "Remote Explorer"
3. Click "SSH Targets"
4. Click "Add New SSH Host"
5. Enter the IP address of your Digital Ocean Droplet
6. Enter the username. I chose `root`.
7. Enter the password you chose when creating the Droplet.
8. Click "Save"
9. Click "Connect"


## Manual work

### MongoDB

   Add access to database from the droplets IP address

### MERN-Server

1. Create and Edit environment variables in `.env` file
2. Edit row 11 in `mern-typescript-deployment/server_js/src/middlewares/Middleware.js` -> `const ALLOWED_ORIGINS = 'http://droplet-url'`
3. Edit row 15 in `mern-typescript-deployment/server_js/src/configuration/Configuration.js` -> `uri = 'mongodb+srv://'`

### MERN-Client

1. Create and Edit environment variables in `.env` file

### Run Scripts

1. Make script run able with `chmod +x mern-typescript-deployment/scripts/*.sh`
2. Run install script for respective Client and Server

/var/www/html
chmod +x scripts/install_client_full.sh
chmod +x install_client_full.sh
chmod +x uninstall_client_full.sh
