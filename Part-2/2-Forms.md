# Forms

Example of a form which adds a note to a list:
```
const addNote = (event) => {
  event.preventDefault()
  console.log('button clicked', event.target)
}
```

- The event parameter triggers the call to the event handler function
- The event handler calls the event.preventDefault() method to prevent, among other things, reloading the page
- The target of the event is logged. In this case the target of the event is the HTML form that is defined in the component
- There are several ways of accessing the data submitted in the form

## Controlled component
- [Controlled componenents](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable) are given the prop "value" (or "checked" for checkboxes and radiobuttons). This forces the input to have the *value* you passed.
- This is done so that you declare a state variable.
- There is no need to call on event.preventDefault() when the input changes since this, unline onSubmit, has no default action.

## Filtering Displayed Elements

A conditional operator in JavaScript:
```
const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)
```
This operator works so taht if we have:
```
const result = condition ? val1 : val2
```
- If the condition === True --> set the result value to val1
- If the condition === False ---> set the result value to val2
