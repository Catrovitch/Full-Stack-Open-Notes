# User administration
- Compared to relational databases - document based databases handle *one-to-many* relations, like User--*Notes, in a handful of different ways
- Document based databases do not traditionally offer *join queries*. Instead you make several queries and combine them afterwards. (Mongo 3.2 does offer *aggregation queries*)

## References across collections
- References can be stored as values in one document pointing to another.
- In contrast to relational databases where the reference would be stored in the *many table - (users <-- *notes), document based databases allows you to store the relation in either party, OR BOTH!
- In some cases you could even skip the entire reference and combine the two documents into one docuement "User" which then has a property "notes".
- Due to the level of freedom which Docuement based databases offer there is much more planning needed as there are many different ways to do things.
- Classic relational databases are more straight forward in this manner and works in most contexts.

## Mongoose schema for users
-

## Creating users
- Needed for the User model:
   1. username (unique)
   2. name (string)
   3. passwordHash
- PasswordHash is the output of a one-way-hash-function which takes the password given by the user and outputs an encrypted version of it.
- A library which you can use to achieve hasing:
```
npm install bcrypt
```
- Users should be created according to RESTful conventions: Make a HTTP POST request to the users path.
- Library: mongoose-unique-validator is a library to check for the uniqueness of a field

## Creating a new note
-

## Populate
- Relational databases are so called *Transactional*. This means that the state of the database does not change during the time when a query is made.
- In non-relational databases there is nothing to guarantee this.
- The method name for joining two documents together on soemthing is called *populate*
```
usersRouter.get('/', async (request, response) => {

  const users = await User
    .find({}).populate('notes')

  response.json(users)
})
```
- IMPORTANT: The database does not know that the ids stored in the *user* field references documents in the user collection.
- The populate method works based on the fact that we have defined "types" to the references in teh Mongoose shcema with the ref option.
