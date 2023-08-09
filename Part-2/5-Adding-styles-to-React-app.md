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

