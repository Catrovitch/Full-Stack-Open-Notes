# 1. Background and introduction
- TypeScript is a typed superset of JavaScript
- Compiles to any version of JavaScript newer than ECMAScript 3
- Has better development-timing tooling, static code analysis, code-level documentation


## Main Priniciples
- TypeScript consists of three separate parts that fullfil each other:
  1. The language
  2. The complier
  3. The language service

- The language: syntax, keywords, type annotations
    - Syntax: close to JavaScript, but not the same
- The Complier: responsible for type information erasure (i.e. removing the typing information)
    - Since everything related to types is removed at compile-time --> TypeScript is NOT a genuine statically-typed-language
    - The complier is actually a *transplier*.


## TypeScript key language features
- Type annotations: lightweight way to record the intended *contract* of a function or a variable
- Example:

```
const birthdayGreeter = (name: string, age: number): string => {
  return `Happy birthday ${name}, you are now ${age} years old!`;
};

const birthdayHero = "Jane User";
const age = 22;

console.log(birthdayGreeter(birthdayHero, age));
```

- Structural typing: Two elements are compatible if for each feature within the type of the first element a corresponding and identical feature existts within the type of the second element. Two elements are considered to be identical if they are compatible.


- Type interface: The TypeScript compiler can attempt to infer the type information if no type has been specified.

- Type erasure: TypeScript removes all type system constructs during compilation
