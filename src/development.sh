#create angular project after install angular cli & node.js
    `ng g new firebase`
    `ng serve`
    'npm install firebase @angular/fire --save'

#AWS Create AWS account and login to  aws console
    1.search EC2 
    2. go to instances
    3. lunch instance
    4. Choose an Amazon Machine Image (AMI)
    5. Choose an Instance Type
    6. next upto  Configure Security Group
    7. add rules HTTP & HTTPS change surce custom to anyware
    8. lunch and keep .pem file 

#setup ec2 
    1. need install putty, user-name and host 
    2. `sudo apt-get install putty`
    3. go to pem file path and hit cmd `puttygen <filename>.pem -O private -o <filename>.ppk`
    4. open putty 
    5. enter your host name, user-name(default : ec2-user), select ppk file in `/connection/ssh/auth browse`
    6. hit open
    
    7. `sudo amazon-linux-extras list` #show all availeble packeges you just slect name and install
    8. `sudo amazon-linux-extras install <pkg-name>` # like nginx1, posgress, php7.2
    9. `mkdir var/www/public_html/html`
    10. `chmod 777 -R var/www/public_html/html`
    11. route path  root: `/usr/share/nginx/html` replace by `var/www/public_html/html` in /etc/nginx/nginx.conf. by nano or vi editor
    12. run host id
    13. issue on refresh page solve by changes in config    
         `location / {           
        }`
        by 
        `location / {
            try_files $uri $uri/ /index.html?/$request_uri;
        }`
   
    14. `systemctl restart nginx`

#install fileZila and setup on local
    1.`sudo apt-get install filezilla`
    2. select file manegar protocal: SFTP  login type: key file 
    3. enter host , user-name , select key file ppk
    4. upload your file on location `var/www/public_html/html`

#firebase setup
    1. login firebase console with google login
    2. create project then create app
    3. check database, storage
    4. go to app settings copy firebaseConfig and use in your project

    

    



