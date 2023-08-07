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
