# Testing React apps
- To test the frontend in React apps we will continue to use the jest library
- When testing a frontend there is also a need for rendering during testing. For this we will use the *react-testing-library*
```
npm install --save-dev @testing-library/react @testing-library/jest-dom jest-environment-jsdom @babel/preset-env @babel/preset-react
```
- Extend *package.json*:
```
{
  "scripts": {
    // ...
    "test": "jest"
  }
  // ...
  "jest": {
    "testEnvironment": "jsdom"
  }
}
```
- Add *.babelrc*:
```
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```

# Rendering the component for tests
- Here is an example test with the component in the same file:
```
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Note from './Note'

test('renders content', () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  render(<Note note={note} />)

  const element = screen.getByText('Component testing is done with react-testing-library')
  expect(element).toBeDefined()
})
```
- React components are usually rendered to the *DOM* (Document Object Model - Document for modelling objects in the web-browser)
- When testing this is not necessary however. We can instead use the *screen*-object in combination with methods such as *getByTest()*.
- Note: The console might display warnings when running jest tests. Installing [Watchman](https://facebook.github.io/watchman/) might help.

## Test file location
- There are two different convention about where to store tests in a React project.
  1. The traditinal: in a separate folder named *tests*
  2. The new convention: in the same *components* folder where the components themselves are stored

## Searching for content in a component
- getByText()
- CSS-selectors with querySelector of the object container

## Debugging tests
- The *screen* object has a method *debug* which can be used to print the HTML which is generated from a component to the terminal.
- This didn't work for me for some reason

## Clicking buttons in tests
- user-event: a library which can be used to test user events
```
npm install --save-dev @testing-library/user-event
```
- Use mock objects and functions to replace dependencies on other components with hardcoded responses.

## Tests for the Togglable component
-

## Testing forms
- get access to input fields with method: getByRole() --> getByRole('textbox')
- method *type* to simulate typing into a field

## About finding elements
- If we have two input fields with no apparanet differences then getByRole('textbox') --> error.
- Instead we can use:
  1. getAllByRole('textbox') returns a list of all the textbox elements
  2. Give the textbox unique *placeholder texts* and then use method *getByPlaceholderText()*
  3. Use querySelector
  4. getByText() searches for an element with the exact text given as a parameter
  5. getByText('Text to be searched', {exact: false}) looks for elements which *contain* the given text
  6. findByText() returns a promise
  7. queryByText() returns the element, but does *not* cause an error if the element is not found --> useful if wanting to check that something does *not* exist.

## Test coverage
- Find out the coverage of your testing with command:
```
npm test -- --coverage --collectCoverageFrom='src/**/*.{jsx,js}'
```
- A simple HTML report will be generated to the coverage/lcov-report directory.

