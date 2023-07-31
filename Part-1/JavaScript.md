# JavaScript
- Browser do not always support the newest version of JavaScript. To get around this problem there are methods of transpiling newer JavaScript to older versions.
- This is most commonly done today with [Babel](https://babeljs.io/)
- [Node.js](https://nodejs.org/en)is a JavaScript runtime environment. Node.js is based on Google's Chrome V8 JavaScript engine and is almost universal in where it works - servers, mobile phones.
  
## Variables
There are many ways to define variables in JavaScript.
```
const x = 1
let y = 5

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
x = 4               // causes an error
```

- const = constant - the value can not be changed
- let = normal variable (value can be changed)
- Trying to change the value of a constant will cause an error
- var = similar to "let", but with subtle variances. It is adviced in this course to use a mix of "const" and "let".

## Arrays
- Even if arrays are defined as const, they can still be modified.
- Arrays are objects
- forEach is a way to iterate
- array.push = append
- When using React techniques resembling funcitonal programming is often used. One such paradigm is the use of immutable data structures.
- Instead of "push" we would prefer to use "concat" which creates a new list instead of appending.
- array.map = copies another array and implements the function given as an argument to the map function on all items in the original list.
- Ex.
```
const t1 = [1, 2, 3]
      const t2 = t1.map(value => value*2)
      console.log(t2) // [2, 4, 6] is printed
```

- destructing assignment = a method to name items in an array.
- Ex:
```
const t = [1, 2, 3, 4, 5]
const [first, second, ...rest] = t

console.log(first, second)   // 1, 2 is printed
console.log(rest)           // [3, 4, 5] is printed
```

## Objects
There are many ways to define objects in JavaScript. One common way to do this is through object literals. The values may be anything.
```
const object1 = {
  name: 'Batman',
  age: 100,
  education: '?',
}
const objcet2 = {
  name: {
    first: 'Bruce'
    last: 'Wayne'
  },
  alterego: 'Batman',
  enemies: ['Joker', 'Penguin', 'Poison-Ivy'],
}
```
- Properties can be referenced through:
  1. DOT, object1.name
  2. brackets, object1[name]
- If the fieldname has an emtpy space ' ' in it, brackets must be used.

## Functions
- Arrow funciton:
```
const sum = (p1, p2) => {
  return p1 + p2
}
```
If there is only one parameter the parenthesis may be excluded.
```
const square = p => p*p
```

## Exercises 1.3-1.5

## Object methods and "this"

## Classes

## JavaScript materials
