# .props children and proptypes

## Displaying the login form only when appropriate
-
## The components children, aka. props.children
- If a piece of code makes up its own logical entity --> refactor it into its own moduel / componenet
- In React a child component is a component which is passed as a prop to another component.
- Example:
```
<Togglable buttonLabel='login'>
  <LoginForm
    username={username}
    password={password}
    handleUsernameChange={({ target }) => setUsername(target.value)}
    handlePasswordChange={({ target }) => setPassword(target.value)}
    handleSubmit={handleLogin}
  />
</Togglable>
```
- In the above *LoginForm* is a child component to *Togglable*.
- buttonlabel is passed as a normal prop.
- prop.children is a special case of prop as this actually refers to the given child component/components.
- If a React component is defined with both opening and closing tags like this:
```
<Togglable ...>
...
</Togglable>
```
then props.children is automatically assigned to what ever is passed in between the tags.
- If a componenet is defined with automatically closed tags, I.E only opening then props.children is automatically assigned to be null.
```
<Togglable ...><Togglable/>
```

## State of the forms
- React documentation says that if two (or more) components share a state, I.E. they always change state together do the following:
  1. Define their closest common parent
  2. Define the relevant states in the parent
  3. Pass the states down to the components.

## References to components with ref
- There are many ways to implement closing the form from the parent component.
- One such way is with the use of *ref* or *useRef* of the React library.
- Example:
```
import { useState, useEffect, useRef } from 'react'

const App = () => {
  // ...

  const noteFormRef = useRef()

  const noteForm = () => (

    <Togglable buttonLabel='new note' ref={noteFormRef}>
      <NoteForm createNote={addNote} />
    </Togglable>
  )

  // ...
}
```
- Here noteFormRef is first defined as a useRef.
- Secondly we pass noteFormRef to the parent component of NoteForm.
- In the parent componenet we do this:
```
 import { useState, forwardRef, useImperativeHandle } from 'react'


const Togglable = forwardRef((props, refs) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }


  useImperativeHandle(refs, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  )

})

export default Togglable
```
- forwardRef is used to forward the ref
- useImperativeHandle is a hook which is used to pass up functions to the parent component.
- Here toggleVisibility is passed up.
- We can now call the toggleVisibility() function from our App.js component:
```
noteFormRef.current.toggleVisibility()
```

- The same functionality could have been achieved with using "old React" calss-based components. More about this in part 7 of the course.

## PropTypes
- prop-types is an npm library which is used to enforce prop-types on to components.

## ESlint
- eslint-plugin-jest is a library used for avoiding undesired and irrelevant errors connected to ESLint, when testing an application.

