# Rendering a collection, modules

## console.log
- For God sake - use console.log()
- Correct format: console.log('props value is', props)

## Protip: Visual Studio Code snippets
- Snippets are templates which boost productivity by giving suggestions as to what you want to write.
- You can configure your own snippets
- There are lots of ready made extensions for Visual Studio Code
- Example of built in snippet: write 'log' and press 'tab' --> turns in to console.log(). 

## JavaScript Arrays
Some videos about functional programming in JavaScript:
1. [Higher-order functions](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
  - Functions = values
  - Higher order functions: Pass smaller functions as values into a larger "Higher order function"
  - Call back functions: The function that is passed to another function
  - Composability: If a function1 and a function2 can be combined as HOF and CBF they are "composable"
  - Example:
```
var isDog = function(animal) {
  return animal.speciels === 'dog'

var dogs = animals.filter(isDog)
var otherAnimals = animals.reject(isDog)
```
  - The call back function "isDog" is "composable" with the two Higher order functions "dogs" and "otherAnimals"

2. [Map](https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2)
  - Map is a Higher Order Function that transforms the items in an array according to a given Call back function.
  - Example:
```
var names = animals.map((animal) => animal.name)
//prints the names of all animals
```

3. [Reduce basics](https://www.youtube.com/watch?v=Wl98eZpkp-c&t=31s)
  - If you can't find a fitting ready made Higher Order Function for transforming an array you can use Reduce design your own.
  - Reduce needs: 1. Call back function 2. object (starting point)
  - The object will be passed as the first argument to the Call back function.
  - The iterated item will be passed as the second argument to the Call back function
  - Example:
```
var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

var totalAmount = order.reduce((sum, order) =>
  return sum + order.amount
}, 0)
```
  - In the above:
  - Higher Order function reduce function: totalAmount
  - Object (starting point): 0
  - Call back function: return sum + order.amount
  - Iterated item: order
  - Works like this:
      1. Initiate sum as 0
      2. Itarate through list like this:
           1. Take given sum and add to it the current items amount
           2. return the new sum
      3. The returned sum will be passed to the next item in the list
      4. After last item: return the sum as totalAmount

## Event Handlers Revisited
See [Part 1 - Event Handlers](https://github.com/Catrovitch/Full-Stack-Open-Notes/blob/main/Part-1/Component-state-event-handlers.md)

## Rendering Collections

## Key-Attribute

## Map

## Anti-pattern: Array Indexes as Keys

## Refactoring Modules

## When the Application Breaks

## Web developer's oath

## Exercises 2.1-2.5
