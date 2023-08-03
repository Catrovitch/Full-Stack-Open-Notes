# Component state, event handlers

## Component helper functions
```
const Hello = (props) => {

  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>

      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
```
In the example above the logic for guessing the year of birth is separated into a function of its own. This function is called when the component is rendered. There's no need to pass the person's age as a parameter, since the function has direct access of all the props of the passed component. If you notice the helper function "bornYear" is defined within another function. This is common in JavaScript.

## Destructuring
Upon asignment there is a way of destructuring values from both objects and arrays. This is done through asigning constants for the props at the beginning of the function. One of quicker ways to asign the props is to do it directly from within the props field in a function:
```
const Hello = ({ name, age }) => {...
```
## Page re-rendering
It is not adviced to re-render by making repeated calls to the function that renders the page.

## Stateful component

## Event handling

## An event handler is a function

## Passing State - to child components

## Changes in state cause rendering

## Refactoring the components
