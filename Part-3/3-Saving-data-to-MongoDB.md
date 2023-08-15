# Saving Data to MongoDB

## Debugging Node Applications
- Console.log, Console.log, Console.log.
- There are also fancier versions, for example various tools within VScode
- Run app using Chrome dev tools:
```
node --inspect index.js
```
- Access the Chrome tool by clicking the green icon

### Question everything
- Never write more code if there is something that doesn't work
- Toyota: Stop and fix

## MongoDB
- MongoDB is a so called NoSql database which uses a collections/document based storing system
- You can either install MongoDB locally or use a internet service
- MongoAtlas let's you choose three different versions:
  1. Serverless. This is good for apps with variable traffic
  2. Dedicated. This is good for apps with sophisticated workload requirements
  3. Shared. The free version
- We choose the free
- After this we need to pick a cloud provide, I.E: AWS, Google Cloud, Azure
- Then a Region where the DB should be hosted
- Then "Create Cluster" - Wait until this is ready
- Fill in a username and password specific for this database
- Fill in an IP from which the database may be connected to
- Connect it to our app
- This generates an address which we will use in our application to connect to the DB

- To abstract from the DB we will use the "mongoose" library
```
npm install mongoose
```
- The address looks something like this:
```
mongodb+srv://Fullstack-course:<password>@full-stack-open.wzmd2i9.mongodb.net/?retryWrites=true&w=majority
// Fullstack-course = name of the cluster
// <password> = insert the password for that database
// at "/?" insert a name before "?" to create a database with that name
```

## Schema
- Define schemas for a type in the database using a model
- Example:
```
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)
```
- A schema for a note is stored in the constant noteSchema.
- This schema tells Mongoose how note objects ought to be stored
- When defining noteSchema in Mongoose we define it using a model:
```
const Note = mongoose.model('Note', noteSchema)
```
- The const Note should be in singular - Mongoose will automatically rewrite this to plural as this is convention in Mongoose
- Document based Databases are *schemaless*. This means we can freely define what data goes in to a collection
- The idea with Mongoose that the logic for the database happen at the Application level.

## Creating and saving objects
- When data is saved to MongoDB the connection needs to be closed for the application to not run indefinately.
```
note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
```

## Fetching objects from the database
- Data is fetched from the server with the find method on the relevant model.
```
Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})
```
- If we want to find a specific document we can pass conditions:
```
Note.find({ important: true }).then(result => {
  // ...
})
```

## Exercise 3.12
- Link to [Phonebook exercise](https://github.com/Catrovitch/Full-Stack-Open-Part-3-Exercises)

## Connecting the backend to a Database
- To format what is returned from a MongoDB database, we can use Mongoose transform.
- Transform can be used to format the data according to need 
- Mongoose id property is an object, but is often transformed into a string for simplicity
- This is especially needed when writing tests
