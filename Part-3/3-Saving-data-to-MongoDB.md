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
