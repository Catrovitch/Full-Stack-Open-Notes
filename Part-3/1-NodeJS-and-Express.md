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
- Example:
```
const http = require('http')

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello World')
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
```
- Start application with npm start
- It prints to the console: Server running on port 3001
- Open in browser with address: "http://localhost:3001
- const http = require('http) <-- CommonJS module import
- http.createServer creates a new web server
- the server is asigned an eventhandler ( => function after this)
- The event handler responds every time a request is made to http://localhost:3001
- As response the event handler gives:
    1. Status code: 200 with Content-Type header set to: text/plain
    2. The content "Hello World"
- The last part of the code binds the http server to listen to a specific port: 3001
```
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
```
- Let's change the response to this:
```
let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(notes))
})
```
- The server / event handler would now return a response:
    1. Status code: 200 with Content-Type header set to: application/json
    2. The content set to a Json-string of the notes

## Express
- Express is a Node library which abstracts much of the server side development.
- Add it to a Node project with command:
```
npm install expresss
```
- package.json has now a field with a list of dependencies, containing express
- In the node_modules directory you can find the dependencies as well as all the transitive dependencies
- update dependencies with:
```
npm update
```
