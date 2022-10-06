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
9. Make script run able
    - `chmod +x scripts/0_update_system_and_install_dependencies.sh`
    - `chmod +x scripts/1_setup_environment.sh`
10. Run [update script](scripts/other/0_update_system_and_install_dependencies.sh)
11. Edit environment variables in `.env` files
12. Run [script](scripts/other/1_setup_environment.sh) for setting up node environment and build production files.

## nginx

1. Install nginx
    - `sudo apt install nginx`
    - `sudo systemctl status nginx`
    - `sudo systemctl enable nginx`
    - `sudo systemctl start nginx`
    - `sudo systemctl status nginx`
    - `sudo ufw allow 'Nginx HTTP'`
    - `sudo ufw status`
2. Configure nginx
3. Create a new file in `/etc/nginx/sites-available/` called `mern-typescript-deployment`
4. Copy the following code into the file
   ```
   server {
       listen 80;
       server_name mern-typescript-deployment;
       location / {
           proxy_pass http://localhost:5000;
       }
   }
   ```
5. Create a symbolic link to the file in `/etc/nginx/sites-enabled/`
6. `sudo nginx -t`
7. `sudo systemctl restart nginx`
8. `sudo systemctl status nginx`
9. `sudo ufw status`
10. `sudo ufw allow 'Nginx Full'`
11. `sudo ufw status`
12. `sudo ufw delete allow 'Nginx HTTP'`
13. `sudo ufw status`
14.

### alternative

1. `sudo apt install nginx`
2. `curl localhost:80`
3. `nano /etc/nginx/sites-enabled/default`
    * `root /var/www/html;` -> `#root /var/www/html;`
    * under location add new last line: `proxy_pass http://localhost:8080;`
4. `sudo systemctl restart nginx`
5. 

## MongoDB

Add access to database from the droplets IP address


/var/www/html
chmod +x scripts/install_client_full.sh
chmod +x install_client_full.sh
chmod +x uninstall_client_full.sh
