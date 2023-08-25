# Testing the backend

- If a backend has farely simple logic --> no point to writing unit tests
- In some situations it is beneficial to use a mock data base for testing
- mongodb-memory-server is a library which helps with using a mock database
- We can use REST API to perform integration testing through out our backend

## Test environment
- It is common practice to define separate modes for developing and testing
- This is done in the package.json file

```
{
  // ...
  "scripts": {

    "start": "NODE_ENV=production node index.js",
    "dev": "NODE_ENV=development nodemon index.js",
    "build:ui": "rm -rf build && cd ../frontend/ && npm run build && cp -r build ../backend",
    "deploy": "fly deploy",
    "deploy:full": "npm run build:ui && npm run deploy",
    "logs:prod": "fly logs",
    "lint": "eslint .",

    "test": "NODE_ENV=test jest --verbose --runInBand"
  },
  // ...
}
```
- The "--runInBand" addition at "test": hinders jest from running the tests in pararel. More about why, later
- If working on Windows --> npm install --save-dev cross-env to make scripts work
- To achieve cross platform compatability: use the cross-env nonetheless:
```
{
  // ...
  "scripts": {
    "start": "cross-env NODE_ENV=production node index.js",
    "dev": "cross-env NODE_ENV=development nodemon index.js",
    // ...
    "test": "cross-env NODE_ENV=test jest --verbose --runInBand",
  },
  // ...
}
```
- The beauty of defining different environments is that we can for example define separate databases to be used for production / development / testing
- There are a few options for the type of database used for testing; Separate test MongoDB, local database, Mongo in-memory library, Docker containers
- Using a separate MongoDB is not optimal when many people develop simultaneusly on a product.
- In this case a local database for every separate developer is better.
- The best case would be that every test execution uses a separate database. This can be achieved relatively simply using Mongo in-memory library or Docker containers.
- At this point we will not complicate things.

## supertest
- supertest is a library which can be used to test API calls
- The idea is to wrap our normal express app in the supertest function of the supertest library.
- This creates a *superagent* object out of our app.
- This object is assigned to the *api* variable and can be used by tests for making HTTP requests to the backend
- For example a test could be to make a HTTP GET request to the url *api/notes* and verify that this returns a response with the status code 200.
- It could also verify that the Content-Type header is set to *application/json*.
- Desired values are written in regex
- It is also possible to write expected values as strings but then the match needs to be 100%.

- Some common errors:
  1. Mongoose version 6.x sometimes wont work well with jest. Add to */tests* a file *teardown.js* with this content:
```
module.exports = () => {
  process.exit(0)
}
```
  Extend the Jest defenitions:
```
{
 //...
 "jest": {
   "testEnvironment": "node",

   "globalTeardown": "./tests/teardown.js"
 }
}
```
 2. If tests take to long to finish they can fail due to timeout setters. Fix this by increasing the timeout.
- IMPORTANT NOTE: supertest: *"if the server is not already listening for connections then it is bound to an ephemeral port for you so there is no need to keep track of ports."*
- I.E supertest takes care of the port that the application being tested listens too.

 ## Initializing the database before tests
- It is wise to reset and restart the database everytime the tests are run
- This begins with resetting the database
- Then creating a data set which is pushed to the data set every time

## Running tests one by one
- There are several ways of running one test at a time
- One option is the "only" method. This is cumbersome if tests are spread over many files
- Other options:
```
npm test -- tests/note_api.test.js
npm test -- -t "a specific note is within the returned notes"
npm test -- -t 'notes'
```
- IMPORTANT: Mongoose might stay open if running just single tests as not all tests might close the connection.



