# A more complex state, debugging React apps

## Complex state
In more complex applications where there are many variables to keep track of it is usually best to use the useState function multiple times to create multiple separate states.
It is possible to use the technique of [object spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to handle multiple states as well.
In React it is strictly forbidden to mutate a state directly as this can lead to unexptected side effects. Changing a state has to always be done through setting the state to a new object. If properties from the previous state needs to remain unchange - simply copy them to the new object, with for example the use of object spread.
Choosing to store states in separate or the same object is an important aspect when designing React applications. In certain cases the added complexity makes sense while it may only complicate  matters in other. Here is [React's official documentation](https://react.dev/learn/choosing-the-state-structure) which has some guidelines to this. 

## Handling arrays
When handling arrays in React you may use a useState which keeps track of this. One idea is to use the method *push* to simply append the next item to the array, but DON'T do this. Remember that it is forbidden to directly mutate the state of a React component. Instead you should use the method *concat* which copies the existing state of the list to a new object to which it also adds the new item.

## Update of the state is asynchronous
States are updated in React asynchronously which means that they may not always update emediately after being updated in the code. This might lead to bugs which might be hard to spot. This can be avoided by setting new constants which do update emediately.

## Conditional rendering
[Conditional rendering](https://react.dev/learn/conditional-rendering) means that a component returns completely different elements depending on the state of that object. There are also other forms of conditional rendering. [Part 2](https://github.com/Catrovitch/Full-Stack-Open-Notes/tree/main/Part-2) will look more in to this.

## Old React
In the course [state hooks](https://react.dev/learn/state-a-components-memory) are used exclusively to add states to React components as this is how states are added in current and future variations of React. However - this feature was only added in version 16.8.0 and there is a lot of legacy code out there. Hence it is important to also be familiar with the old style of adding states. This was done through using JavaScript's class syntax. 

## Debugging React applications
- Developer console
- Especially the Console tab
- Keep code and webpage + developer console open (separate screens)
- Fix problems immediately
- Old-school console.log() gives great insight into how your code functions
- console.log(props) - That is, the entire props, instead of just parts
- Pause execution of the application code in Chrome developer console > Sources > filename. The code will stop anywhere by writing *debugger* at a specific place in your code.
- Inspect the current state of variables: Developer console > Console-tab
- The debugger allows for one-line-at-a-time execution. The controls for this are found on the right-hand side of the Sources-tab.
- The debugger can also be accessed without writing *debugger* in the code by adding breakpoints in teh *Sources*-tab.
- Inspecting a component's variables can be done in the *Scope*-section.
- React developer tools extension to Chrome lets you view all React elements in the application.
- This happens at: Developer Console > Components

## Rules of Hooks
- Hooks won't work correctly if not applied according to a few rules
- useState & useEffect functions *must not be called from within*:
    - loop
    - conditional expression
    - any place that is not a function defining a component
- This is so that hooks are always called in the same exact order. The application will behave unpredictably otherwise.

## Event Handling Revisited
- Event handlers must always be a function or a reference to a function
- It can *NOT* be a: *string, operation, variable-assignment, function-call
- Only a function or a reference to a function will work

## A function that returns a function
- An event handler can also use a *function that returns a function*.
- This introduces complexity to an application, but may be practical in some cases.

## Passing Event Handlers to Child Components
- 
## Do Not Define Components Within Components

## Useful Reading

## Web programmers oath

## Exercises 1.6-1.14
