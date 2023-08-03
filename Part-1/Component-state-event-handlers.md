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
Through the use of React hooks and the { useState } function we can re-render components dynamically. This works so that the useState listens to change in a component and rerenders it according to how it has been asigned. In the example below the useState() function has been used to re-render the page once every 1000th ms.
```
import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
```

## Event handling
As already mentioned Event handling is a technique in React to set in motion certain things when an event happes, I.E. when certain criterias are met. This could for example be when a button is clicked. In React button elements have a set of mouse events - click is the most common. The click-event can also be triggered with a keybind or by a touch on a touchscreen. In React you can tie an event-handler-function to the click event like this:
```
const App = () => {
  const [ counter, setCounter ] = useState(0)


  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <div>{counter}</div>

      <button onClick={handleClick}>
        plus
      </button>
    </div>
  )
}
```
We assign the function handleClick to the buttons onClick parameter. Through editing this function we can play with what happens when you press the button. An alternative syntax of the above would be:
```
const App = () => {
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>

      <button onClick={() => setCounter(0)}> 
        zero
      </button>
    </div>
  )
}
```
Notice that here we define the function directly to the parameter onClick instead. This is not adviced however.

## An event handler is a function
Event handling is actually a function call and thus what can be passed to an event-handler are either a function or a reference to a function. Anything else will break the application the second the event-handler is used.

Usually it is not wise to define event handlers within JSX-templates. They should rather be separated into functions of their own and be referenced. 
## Passing State - to child components

## Changes in state cause rendering

## Refactoring the components
