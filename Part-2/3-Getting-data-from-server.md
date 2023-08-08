# Getting data from server

When developing an app it may be helpful to emulate a server database with the help of a local json-database. You can install json-server globally through this command:
```
npm install -g json-server
```
Since our app is using the local port 3000 we need to change the json-servers default port (also 3000) to 3001. This is done like this (db.json = name of the file which functions as our server database which is actually local):
```
json-server --port 3001 --watch db.json
```

Alternatively you can create a json-server locally through this command (this worked for me):
```
npx json-server --port 3001 --watch db.json
```
- After this you just need to open localhost:3001/[folder which you have the db.json]
- JSONVue is a handy plugin for Chrome which formmats JSON files into a readable format
