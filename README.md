# application name

node-auth-and-testing

# steps to execute this application

1 - Please install node server, npm in your machine if you haven't already install.
2 - Execute the command on your application folder: npm install.
3 - Create an cloud mongodb account(free) if you do not already have one, please go the mongodb account creation. steps for cloud account and db creaion.
4 - Use your username and password inside db.js under section <UserName>, <password> and <cluster name>
5 - Execute below commands if you want run it on local / server / unit testing.
6 - Currently it has been default use cases. please use assertions based on your use cases when you run test cases.
6 - Here you are ready to execute the application successfully.
7 - If you are finding any blockers please reach out to me at "himansuunc11004@gmail.com"

# To execute this application on dev use below command

npm run dev

# To execute this application on unit testing use below command

npm run test

# cloud mongodb accout and db creation

1 - https://account.mongodb.com/account/login (Use your google auth to create a free account).
2 - After signup and login, you'll be redirect on a page called cluster (create cluster setup).
3 - Inside collection tab Create a data base called "User"
4 - Go to connect inside cluster section and setup for node.js follwed by
connect your application > connect to cluster(select node.js under the driver section) > get the URL
for exp: "mongodb+srv://<UserName>:<password>@<Cluster name>.jotgn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
