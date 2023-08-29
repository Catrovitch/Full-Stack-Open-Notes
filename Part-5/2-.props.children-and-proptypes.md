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
 
