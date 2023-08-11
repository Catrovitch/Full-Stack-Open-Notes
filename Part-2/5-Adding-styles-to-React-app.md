# Adding styles to React app

- CSS index file if there is only one css file. This can be placed within the src directory
- CSS rules is made out of *selectors* and *declarations*. The selector defines which elements should be stylized according to which declaration.
- CSS rules can be applied either with the help of element-types or class-selectors.
- In HTML components can be asigned a specific *class* through the class-value.
- Example:
```
<li class="note">some text...</li>
```
- In React we use the className attribute instead.
- Example:
```
...react componenet...
  return (
    <li className='note'>
      {note.content}
      <button className='noteButton' onClick={toggleImportance>{label}</button>
    </li>
  )
}
```
- Class-selectors are defined with the *.classname* syntax:
```
.note {
  color: grey;
  padding-top: 5px;
  font-size: 15px;
}
```
- This way we can add other list elements with them not being affected by the CSS

## Improved error message
- Basic: alert('message')
- See example: Notes for an improved error message

## Inline styles
- React makes it possible to wrtie styles directly in teh code.
- This is called [inline styles](https://react-cn.github.io/react/tips/inline-styles.html)
- The idea with this is that any React component or element can be provided with a set of CSS properties through a JavaScript object.
- This is done through the *style* component
- There are minor differences to how CSS and React styles as JavaScript objects look like.
- CSS:
```
{
  color: green;
  font-style: italic;
  font-size: 16px;
}
```
- React style JavaScript object:
```
{
  color: 'green',
  fontStyle: 'italic',
  fontSize: 16
}
```
- Differences (CSS/React-style):
    1. Numeric values + px / Only Numeric value
    2. kebab-case / camelCase
- Inline styles come with certain limitations.
    1. [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- In the old school of thought the contnet (HTML), the functionality (JavaScript) and the styling (CSS) is to be completely separated.
- This has been proven to be clumsy when applications grow larger
- This is why React has gone with a completely opposite approach:
    - React oranizes everything around the lines of its logical functional entities
    - The funtional entities that make up a React application are the components
    - The componenet contains all of the elements; content (HTML), functionality (JavaScript) and styling (CSS/inline-styling)
    - The idea is that these components are as independent as possible and can thus be reused easily.

## Exercises 2.16-2.17
- Link to exercise: [Phonebook](https://github.com/Catrovitch/Full-Stack-Open-Exercises/tree/main/part2/phonebook)

## Couple of important remarks
- If a state is storing one thing - let the initial value be *null*
- Letting the initial value be an empty array *[]*, masks errors that would occur with null.
- But masking isn't solvning the error
- An example of this would be if a component renders a list but when it tries to do the first render the value of the state is *null*. This leads to an error.
- Alternatively to setting the initial value to be an empty array *[]* we can also use conditional rendering. Example:
```
if (!notes) {
  return null
}
...
```
- This leads to nothing being rendered if the value of notes is *null*. After if the value changes we can return something else which is then rendered
- Use conditional rendering when it is impossible to define an initial state that may be rendered with the normal logic used to return the component which should be rendered

- Another parameter which we need to take a look at is the second parameter is the useEffect()
```
useEffect(() => {
  noteService
    .getAll()
    .then(initialNotes => {
      setNotes(initialNotes)  
    })

}, [])
```
- The second paramter/parameters which are placed within an array is used to specify when the useEffect should be run.
- The useState is run:
  1. The first render of the component
  2. Always when the a parameter in the array changes
-  In case above with the empty array there is nothing that can change --> The useEffect is only run once
-  However there are examples where we want the useEffect to be run otherwise.
-  In these cases: put the parameter in the array and give it a useState() function



