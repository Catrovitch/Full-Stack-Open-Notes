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
## Web and Express
- Express let's us define automize the Status-code and Content-Type parameters
- Lets us define roots
- automizes Json.stringify and more
- node-repl: interactive node command line, where you can test how commands work in node

## nodemon
- In React the webpage reloaded automatically when making changes to any file
- This is not the case with standard Node.js/Express
- To circumvent this we can use a package called "nodemon"
- Install nodemon as a development dependencie:
```
npm install --save-dev nodemon
```
- Start the application using nodemon like this:
```
node_modules/.bin/nodemon index.js
```
- For ease of use: add it to the package.json scripts:
```
{
  // ..
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // ..
}
```
- Now use the command:
```
npm run dev
```
- "run" is needed here because nodemon is not a node-native script
- Note: The backend will restart automatically when changes are made to files. BUT! The browser will still need a refresh to show the changes. This is because we don't have the functionality of [hot reload](https://gaearon.github.io/react-hot-loader/getstarted/) like we had in React.

## REST
- Representational State Transfer
- Singular things are refered to as "resources" in REST
- Every resource has a unique URL
- Convention: combine the name of the resource with a unique indentifier
- Example:
```
localhost:3001/notes/13
```
- The above will return note number 13

- We can execute different operations on resources.
- These opreations are known has HTTP verbs
- The three parts of REST:

|   URL    |   Verb   |   Functionality                                     |
|:--------:|:--------:|:---------------------------------------------------:|
| notes/13 |   GET    |   Fetches a single resource                         |
|   notes  |   GET    |   Fetches all resources in the collection           |
|   notes  |   POST   |   Creates a new resource based on the request data |
| notes/10 |  DELETE  |   Removes the identified resource                   |
| notes/10 |   PUT    |   Replaces the entire identified resource          |
| notes/10 |  PATCH   |   Replaces a part of the identified resource       |


- The a above is a rough definition of what REST refers to as a [uniform interface](https://en.wikipedia.org/wiki/Representational_state_transfer#Architectural_constraints)
- Uniform interfaces means a consistent way of defining interfaces that make it possible for systems to interact

## Fetching a single resource
- Parameters in express routes can be defined using ":".
- Example:
```
app.get('/api/notes/:id', ...)
```
- Whole example:
```
app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  

  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})
```
- Remember that JavaScript === takes type into consideration --> Number(request.params.id)
- If no note of id x can be found the server should respond accordingly: response.status(404).end()
- JavaScript objects are [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- This means that if they exist they evaluate to true and if not they evaluate to false

## Deleting resources
- Example:
```
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})
```
- There is no consensus on what status code should be returned to a DELETE request if the resource does not exist.
- Alternatives: 204: no content, 404: Error

## Postman
- Postman is a tool to make testing of backends easier

## The Visual Studio Code REST client
- Alternative to Postman
- REST client is a extension for VS code.
- Make a directory in the root of the project named *requests*
- save request files into this directory with the file type *.rest*
- example: *get_all_notes.rest*
```
GET http://localhost:3001/api/notes
```
- Open the file and click the *Send Requst*. This will open a new tab with the response

## The WebStorm HTTP Client
This is another alternative to view requests. See more [here](https://www.jetbrains.com/help/webstorm/http-client-in-product-code-editor.html)

## Receiving data
- When debugging you might want to find out what headers have are set in the HTTP request
- One way of getting to know this is with the GET method of the request object which can be used to get the value of a specific header
- The request object also has the headers property which contains all of the headers of a specific request
- VS REST: An extra empty line between the top row and the row specifying HTTP headers will lead to the REST client interperating this as "all headers are empty"
 

