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

## Searching for content in a component
