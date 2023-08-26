# Token authentication
- When a user is logged in, their user information must automatically be attached to any new notes they create
- This is achieved through token-based-authentication

- A token sequence diagram:

Participants:
  1. User
  2. Browser
  3. backend

Sequence:
  1. User fills in login information
  2. User presses login button
  3. Browser takes the login information and sends it as a HTTP POST request to the backend.
  4. backend generates a token.
  5. backend returns the token in the response body
  6. Browser saves the token
  7. User fills in the form for a new note
  8. User presses the create note button
  9. Browser takes the note info and sends it as a HTTP POST request which includes the Token in the header.
  10. Backend validates the token.
  11. Backend sends status code 201 (created) if validation goes through.

- jsonwebtoken: a library which can generate webtokens

## Limiting craeting new notes to logged-in users
- There are several ways of sending the token to the server.
- One way is to use the Authorization header
- This header also tells which authentication shceme is used
- This may be necessary if there are many wais to authenticate on the server
- We will use the *Bearer* scheme.
- Example:
```
Token: 'eyJhbGciOiJIUzI1NiIsInR5c2VybmFtZSI6Im1sdXVra2FpIiwiaW'
Auth Header: Bearer eyJhbGciOiJIUzI1NiIsInR5c2VybmFtZSI6Im1sdXVra2FpIiwiaW
```

## Problems of Token-based authentication
- The one problem with token-based authenticaiton is that, once the app gets the token it blindly trust it.
- There are two solitions:
  1. Create a timeout for the token
  2. Server-side session: Save info about each token to the backend database and check for each API request if the access rights corresponding to the tokens are still valid

- When server-side sessions are used the token is most often just a random string with no infromation about the user included. For each API request the server fetches the relevant info about the identity of the user from the database.
- This is in contrast to jwt-tokens which does store specific information from the user.
- As an alternative to the Authorization-header *cookies* may be used to send Tokens to the backend.
- The problem with option 2 is that this slows down performance significantly.
- One way to get around this is to use a separate database for authentication. This database can even be a *key-value* based database like Redis which otherwise has limited functionality.

## End notes
