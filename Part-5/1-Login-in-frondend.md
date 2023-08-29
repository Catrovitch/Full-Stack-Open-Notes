# Login in frontend

## Handling Login
- A commonly used React trick:
```
{
  user === null && loginform()
}
```
- This renders the loginform if user equals null.

## Creating new notes
- Creating new notes requires we add the token to be activated from the frontend.
- This is done through having a *setToken* function in the noteService.
- The noteService communicates with the backend so that the token can be handed to the backend.
  Then we only have to add and call the noteService.setToken(user.token) in the handleLogin() function.

## Saving the token to the browser's local storage
- One problem still persists: When reloading the browser --> token is forgotten.
- A way to solve this is to save it in the browser's local storage.
- Local storage is a key-value database in the browser
- A value (token) is saved to the database using method: setItem(key, token).
- The value can be reached with: getItem(key)
- It can later be removed with: removeItem(key)
- Check the localstorage with the developers console's promt:
```
window.localStorage (press enter)
Storage {...
}
```
- This will print out all that is currently stored in the browser's local storage.
- - You can also remove items from the local storage from the developer's console's promt:
  ```
  window.localStorage.removeItem(key)
  ```
  or
  ```
  window.localStorage.clear()
  ```
  which clears the whole storage.
  
