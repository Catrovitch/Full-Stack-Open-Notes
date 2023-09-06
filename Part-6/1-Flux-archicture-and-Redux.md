# Flux-architecture and Redux

- So far the state of the app as well as the functions for handling has been placed in higher level components according to the recommendations of React.
- In small to medium sized applications it works to have the app state and the functions reside directly in the root component. From here they can be passed on to other componenets as props.
- This set up becomes cumbersome when the application expands.

## Flux-architecture
- In Flux, states are separated from the React componenets and into their own *stores*.
- From here they can be altered through different *actions* - never directly.

## Redux
- Redux is a library which uses Flux, but makes it simpler to use
- Example of a reducer:
```
const counterReducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1
  } else if (action.type === 'DECREMENT') {
    return state - 1
  } else if (action.type === 'ZERO') {
    return 0
  }

  return state
}
```
- The first parameter is a the *state* of the store
- Then we have a set of actions
- In this way we can define a set of actions which gives us control of the application
- The reducer should enver be called directly from the app's code.
- Instead we should pass it as a parameter to the createStore-function which creates the store.
- To find out what the state is at any given time - use the *getState()* function.
- The third important method in the *store* is *subscribe()*. *subscribe* let's us create callback functions which the stor calls whenever an action is dispatched to the store.

## A note about the use of createStore
- It is depriciated and should be replaced with the configureStore().
- For learning purposes we will come to this later

## Redux-notes
-- 

## Pure functions, immutable
- Redux reducers must be pure functions
- Pure functions are functions that *do not cause any side effects* they must also *always return the same response when called with the same paramters*
