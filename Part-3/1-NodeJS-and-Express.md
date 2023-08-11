# Node.js and Express
- This chapter focuses mainly on the backend - serverside functionality
- [NodeJS](https://nodejs.org/en/) is a JavaScript runtime environment
- Browser may not run newest version of JavaScript --> *transpile* it using Babel
- Node.js supports (most of) the features of up to date JavaScript --> no transpiling needed

- To create an app using node use command:
```
npm init
```
- This creates a package.json file which contains information about the project
- Under the "scripts" header we can add our own npm commands. For example:
```
{
  // ...
  "scripts": {

    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // ...
}
```
- We added "start" to scripts --> performing the command *npm start* will execute index.js

## Simple web server
