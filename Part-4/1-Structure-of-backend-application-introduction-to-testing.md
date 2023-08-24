# Structure-of-backend-application-introduction-to-testing

## Project structure
- Node.js best practice for project structure:
```
├── index.js
├── app.js
├── build
│   └── ...
├── controllers
│   └── notes.js
├── models
│   └── note.js
├── package-lock.json
├── package.json
├── utils
│   ├── config.js
│   ├── logger.js
│   └── middleware.js  
```
- logger: Takes care of logging messages / errors. You can also use this if you need to use some external loggin service
- config: Config will take care of configuration within the file
- middleware: contains all the middleware of the project

- app.js will contain the actuall express app
- index.js will only import other parts of the project and initialize everything
- controlles: takes care of route handling. Every base route should have an own module
