# A more complex state, debugging React apps

## Complex state
In more complex applications where there are many variables to keep track of it is usually best to use the useState function multiple times to create multiple separate states.
It is possible to use the technique of [object spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to handle multiple states as well.
In React it is strictly forbidden to mutate a state directly as this can lead to unexptected side effects. Changing a state has to always be done through setting the state to a new object. If properties from the previous state needs to remain unchange - simply copy them to the new object, with for example the use of object spread.
Choosing to store states in separate or the same object is an important aspect when designing React applications. In certain cases the added complexity makes sense while it may only complicate  matters in other. Here is [React's official documentation](https://react.dev/learn/choosing-the-state-structure) which has some guidelines to this. 

## Handling arrays

## Update of the state is asynchronous

## Conditional rendering

## Old React

## Debugging React applications

## Rules of Hooks

## Event Handling Revisited

## A function that returns a function

## Passing Event Handlers to Child Components

## Do Not Define Components Within Components

## Useful Reading

## Web programmers oath

## Exercises 1.6-1.14
