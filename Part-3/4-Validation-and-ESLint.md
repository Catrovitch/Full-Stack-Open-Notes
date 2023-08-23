# Validation and ESLint

- When wanting to validate what data goes into a mongoose database it can be validated in two ways. Either at the JavaScript backend or at Mongoose itself.
- It is advicable to use Mongoose in built functions for validation.
- Ex:
```
const noteSchema = new mongoose.Schema({

  content: {
    type: String,
    minLength: 5,
    required: true
  },
  important: Boolean
})
```
- In the above exampple the content value has a set of criteria which must be met.
- There are many built in validatiors like "minLength" and "type".
- We can also build custom validators

## Deploying  the database backend to production
- Change the fly secrets to use the database instead of pushing .env to fly environment
```
fly secrets set MONGODB_URI='....'
```
- Also change the port number with the same technique

## Exercises 3.19-3.21
- Link to Exercise repository [here](https://github.com/Catrovitch/Full-Stack-Open-Part-3-Exercises)

## Lint
- Linting is a term used to describe tools which perform static analysis of your written code
- This might include syntax check as well as styling
- We use the most common: ESLint
```
npm install eslint
```
- Configure it after this with:
```
npx eslint --init
```
- This will ask various questions which you need to answer in the wanted way
- The configurations are saved in .eslintrc.js file.
- To inspect / validate a certain file:
```
npx eslint filename
```
- Create a npm script to lint all files:
```
...
"lint": "eslint ."
```
- To ignore certain files create an .eslintignore file.
- An example of a file which is wise to ignor is the frontend build
- Easy way to use lint is to install an extension for VScode
- Example: Eslint
- You can further customize your lint within the *rules* section
- To disable any specific rule just write this:
```
...
'rule-name': 0
```
