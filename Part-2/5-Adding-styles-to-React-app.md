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
