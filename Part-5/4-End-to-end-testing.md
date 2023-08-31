# End-to-end testing
- End to end testing is testing that tests parts of an application all the way from the frontend to the backend
- This typically happens through using the browser and a testing library
- Selenium is a testing library which works with most browsers
- Another option is to use headless browsers --> browsers with no GUI. Chrome can run in headless mode
- End-to-end tests really tests the application, but can take minutes even hours to run
- They can also be flaky, sometimes passing or failing without the code changing

## Cypress
- Cypress is a testing library which runs completely within the browser
- This makes it considerably easier to use than, for example Selenium
```
npm install ---save-dev cypress
```
- Add npm script:
```
{
  // ...
  "scripts": {

    "dev": "vite --host",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "server": "json-server -p3001 --watch db.json",
    "test": "jest",

    "cypress:open": "cypress open"
  },
  // ...
}
```
- Cypress tests require the system to be running
- Starting Cypress does not start the server
- Cypress tests may be located within the frontend or the backend. In some cases it may even make sense to keep them in their own repository
- In the backend we need to add this script so that we can start the server for testing only:
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
    "test": "jest --verbose --runInBand",

    "start:test": "NODE_ENV=test node index.js"
  },
  // ...
}
```
- When both the backend and the frontend are running we can start the cypress tests with command:
```
npm run cypress:open
```
- To disable Eslint from misjudging some of Cypress's syntax:
```
npm install eslint-plugin-cypress --save-dev
```
- and edit the configuration in *.eslintrc.cjs* like this:
```
module.exports = {
  "env": {
    browser: true,
    es2020: true,
    "jest/globals": true,

    "cypress/globals": true
  },
  "extends": [ 
    // ...
  ],
  "parserOptions": {
    // ...
  },
  "plugins": [

      "react", "jest", "cypress"
  ],
  "rules": {
    // ...
  }
}
```

## Writing to a form
- If there is repetion within the "beforeEach" blocks --> refactor
- CSS id selector: #

## Testing new note form
- You can nest "beforeEach"s like for loops in python

## Controlling the state of the database
- When having to deal with a database in testing --> create a new testRouter
- The database should be in the same identical state each time tests are run
- Create a HTTP POST which empties the database
- Use the route before each test is run

## Failed login test
- Run a specific test by adding "only" after "it".
- Example:
```
describe('Note app', function() {
  // ...

  it.only('login fails with wrong password', function() {
    cy.contains('log in').click()
    cy.get('#username').type('mluukkai')
    cy.get('#password').type('wrong')
    cy.get('#login-button').click()

    cy.contains('wrong credentials')
  })

  // ...
)}
```
- cy.should() allows for some nice combinations with "and"
- CSS properties behave differently on Firefox

## Bypassing the UI
- Cypress documentation: Fully test the login flow - but only once, after this bypass the UI and do a direct HttP request to the backend to login.
- This saves time not filling in a form
- if details need to be saved to the browser's localStorage, Cypress can handle that as well.
- Cypress Custom Commands: Define these within *cypress/support/commands.js*. These are named and can simply be called on with *cy.nameOfCommand*
- Remove hardcoded adresses in tests.
- Move these to *cypress.config.js*. Example:
```
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173'
  },
  env: {
    BACKEND: 'http://localhost:3001/api'
  },
  video: false
})
```

## Changing the importance of a note
- When coding tests, you should check in the test runner that the tests use the right components!
- .parent().find('something) can be used on elements to search for something in their parent element
- .as let's us save an element to a variable and referneced to with '@variableName'.

## Running and debugging the tests
- Cypress commands are like promises
- Add script to run cypress from the terminal:
```
"test:e2e": "cypress run"
```
- Cypress saves videos of tests.
- Add *cypress/videos* to .gitignore to not bloat your repository
- You can also turn off making videos.
