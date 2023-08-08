# Altering data in server
This chaper looks at conventions used by json-server and REST APIs in general. Specifically the use of conventional routes within REST will be in focus.

## REST
- In REST individual data objects are refered to as *resources*
- Every resource has a unique URL associeted with it.
- For example, every individual note in our [Notes](https://github.com/Catrovitch/Full-Stack-Open-Notes/tree/main/Part-2/Examples/example2/notes) application could be refered to as *notes/id* where id=id number of that particular note. Simply */notes* would give us all notes.
- Resources are fetched using HTTP GET requests.
- Resources are createed using HTTP POST requests.
- Data is sent in the *body* of the request
- json-server requires that all data is in JSON format and that the request contains *Content-Type* header with the value *application/json*.

## Sending Data to the Server
- Network tab > Headers > General:
  - Request URL: check that this is correct
  - Request Method:
  - Status code
- The above are great for checking that the request is such that we expected it to be.

- Network > Payload:
  - This is used to see the request data
- Network > Response:
  - This shows how what the server responded with

## Changing the Importance of Notes
- Individual notes stored on the JSON-server backend can be modified in two different ways by making a HTTP request to the note's unique URL
  1. Replace the whole note with HTTP PUT request
  2. Change the note with HTTP PATCH request
- Wanting to find a specific item in an array containing objects - use the below *find* syntax:
```
id = idWeWantToFind
const noteToFind = notes.find(n => n.id === id)
```
- Change the object property by making a copy of the old object and replacing the property:
```
const changedNote = {...note, important: !note.important}
```
- changedNote is a so called [shallow copy](https://en.wikipedia.org/wiki/Object_copying#Shallow_copy).
- A shallow copy is an object which was created by referencing to another object. If all the properties of the original object are simple there is no probelm. But if the properties of the original objects where objects themselves --> The new objects properties reference these same objects. This could cause issues when mutating these objects as mutating a component state directly is forbidden in REACT.

## Extracting Communication with the Backend into a Separate Module
- Single responsibility principle: One module should handle one thing.
- Database handlers are usually kept in a directory *src/services/nameOfTheHandler.js*
- App.js imports this module *import nameOfTheHandler from './services/nameOfTheHandler'
- App.js can now use the functions in the module by reference to *nameOfTheHandler.functionName*

## Cleaner Syntax for Defining Object Literals
- Exporting objects can utilize the syntax which came with ES6 JavaScript that lets us define the properties directly if the variables are the same. Example:
```
const person = {
  name: name,
  age: age
}
```
can be shortend:
```
const person = { name, age }
```

