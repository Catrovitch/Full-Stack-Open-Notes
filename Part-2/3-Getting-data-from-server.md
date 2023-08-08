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

## The browser as a runtime environment
- There are many ways of fetching data from the server in JavaScript.
- XMLHttpRequest is one alternative, but is considered outdated.
- XMLHttpRequest uses an event-driven model
- Browsers widely support the [fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)-method
- Fetch-method is based on a model called [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- JavaScript follows an asynchronious model which requires all I/O operations (with some exceptions) to be executed as non-blocking.
- What this means is that code-execution continues immediately after calling an I/O finction wihtout waiting for it to return
- The JavaScript engine calls teh event handlers registered by the I/O operation at some point after an asynchronious operation is completed.
- JavaScript engines are singel-threaded which means they can't execute code in pararell.
- What this means is that JavaScript code logic needs to be written so that no single computation takes too long.
- For more on this topic see the [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- There are work arounds to the single-threaded nature of JavaScript engines. It is possible to run parallelized code with so-called [web-workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).
- The event loop of one browser window is however always and only run single-threadedly.

## npm

- [axios](https://github.com/axios/axios) is a library whici is used for communication between the browser and the server. It is similar to the fetch method, but has some quality of life.
- node package manager [npm](https://docs.npmjs.com/getting-started/what-is-npm) is the de facto tool to handle React projects
- A clear indication that a project uses npm is the *package.json* file.
- In *package.json* the dependencies part is responsible for defining the dependencies of a project.
- To install a library use the command:
```
npm install [library-name]
```
- npm-commands should always be run in the project-root-directory where *package.json* is found.
- npm install adds the library to the list of dependencies as well as downloading the library code to the *node_modules* directory
- If there is some library which is only relevant in the development phase of a project use:
```
npm install [library-name] --save-dev
```
- For example: npm install json-server --save-dev.
- In this case we also want to make a small edit in *package-json*:
```
{
  // ... 
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",

    *"server": "json-server -p3001 --watch db.json"*
  },
}
```
- This makes it convinient to start the json-server mentioned earlier as the port is defined within *package.json*, through only using command:
```
npm run server
```

## Axios and promises
- A promise is an object which represents either an eventual completion or the failure of an asynchronous operation [Mozzila parphrased]
- The three distinct phases of a promise:
    1. *Pending*: The final value of the promise is not ready.
    2. *Fulfilled*: The operation is completed and generally succesful. The final value is available. This state is sometimes also called *resolved*.
    3. *Rejected*: An error prevented the final value from being determined. Generally it means the operation failed.
- To access the result of a promise there must be an event-handler registered to the promise.
- This is achieved through the method "then":
```
const promise = axios.get(url)

promise.then(response => {
  console.log(response)
})
```
- The JavaScript runtime environment calls the call-back function registered by the *then* mehtod. This provides a response object as a parameter.
- This response object contains all the data related to the HTTP GET request perforned by axios promise. This includes: data, status code and headers.
- Usually it is not necessary to store the promise object in a variable. Instead we can achieve the same result like this:
```
axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data
    console.log(notes)
  })
```
- The data returned by the server is plain text, but axios is able to parse this to a JavaScript array, since the server also specified the data format using the content-type header.

