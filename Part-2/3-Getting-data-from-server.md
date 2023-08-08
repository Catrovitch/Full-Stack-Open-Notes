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
