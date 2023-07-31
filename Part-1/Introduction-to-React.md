# Introduction to React
To create a default base when using React use command:
```
create-react-app
```
To start the application:
```
npm start
```
By default the application runs on localhost port 3000. The address is http://localhost:3000.
See Part1 > Examples > Part1 for example of creating a base React app.

## Component
- A component is something to be rendered in React
- Create Components in a separate directory
- Then import them to ex. index.js
- index.js is then conencted to pubil/index.html which places the compent in the correct place
- Technically the Component is called a JavaScript function.

This is how a variable is declared with JavaScript ("App" being the name of the variable):
```
const App = ...
```

There are several ways to set up functions in JavaScript. This is how an arrow-function is set up: 
```
() => (
  <div>
    <p>Hello world</p>
  </div>
)
```

## JSX
Though it might seem like React components return HTML code it is in fact not like this. React components are mostly written in JSX. JSX is an extension to JavaScript which lets you write HTML-like markup within a JavaScript file. What this means is that JSX is compiled into JavaScript using Babel. This was set up to be done automatically when we used the command "create-react-app" for setting up a basic structure for React. [Part 7](../Part-7) will look more in to how to configure this.

The idea of JSX is that you can easily write dynamic content by mixing in JavaScript code in to the HTML markdown document. Just make sure yo always wrap JavaScript into {}. 

## Multiple components
A core idea with React is to write small reusable components that can be combined into larger ones. This way even larger, complex applications can be kept fairly simple to maintain. Another core idea with react is that the smaller components are wrapped in to the "root compnent" called "App". The App component is this way responsible for containing all other components. In some cases though are the App component itself may be found in a so called "utility component". More about utility components in [Part 6](../Part-6) .

## props: passing data to components
Passing data to components is done through [props](https://react.dev/learn/passing-props-to-a-component) . Props are a way for different components to communicate with each other. Parent components can pass any JavaScript value to its child components in this way. JavaScript values are for example: objects, arrays and functions.

## Some notes
- React components must be CAPITALIZED to work. An otherwise fully functioning component will not work if it referenced ex. footer instead of Footer.
- The content of a React component (most of the times), must contain ONE ROOT ELEMENT. In otherwords you need to wrap your elements within one bigger element. For example. <div></div>
- Wrapping the elements in an array works too, but this is not advicable.
- A better option is to wrap it in so called [Fragments](https://react.dev/reference/react/Fragment). These are simply empty elements: <></>.

## Do not render objects

## Exercises 1.1-1.2
