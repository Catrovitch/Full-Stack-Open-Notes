## General Info

## Fundamentals of Web apps
- Always have the developer console open when developing web applications.
- The web browser and the server can communicate through the HTTP protocol.
- The Network tab in the developer console shows this communication.
- Network > Headers give even more information.
- Headers > General shows: address requested, method used (GET/POST...), if the request was successful (200).
- There are several other headers than General.
- Headers > Response headers: the size of the the response in bytes, the time of the respons.
- Headers > Content-Type: Tells the type of the response, ex. text file in utf-8 format which have been formatted with HTML. <-- This is how the web browser can know which methods to use when rendering the web page.
- Network > Response: Shows the response data, eg. HTML page.

- Traditional web applications run all application logic on the server only rendering static web pages.
- Modern web applications can move some of the login into the browser through Javascript.

### Event handlers and Callback functions
- Event handlers or so called callback functions, can be used to execute certain actions when certain criteras are met.
- These are very common in Javascript.
- These functions are called from within the browser which is different from traditional web applications.

### Document Object Model - DOM
- HTML has a tree structure.
- DOM is an Application Programming Interface (API) which allows the manipulation of the HTML tree structure.

### Cascading Style Sheets - CSS
- Can be examinded at the Elements tab in the developer console.

### Loading a page containing JavaScript - review
Example: 
1. browser: GET web page from server
2. server: Returns a HTML document containing reference to a.) css file, b.) Javascript file
3. browser: GET css file
4. server: Returns css file
5. browser: GET Javascript file
6. server: Returns Javascript file
7. browser: executes Javascript file
8. browser: GET data.json that the Javascript file returned
9. browser: executes the callback function which renders the page using DOM-API

### Forms and HTTP POST
- Network > Payload (right to Headers) > Form Data: Here you can see what message was sent to the server when for example filling in a form.

### Asynchronous JavaScript and XML - AJAX
- This term was coined in 2005 when browser technology advancement made it possible to fetch content through using Javascript from within the HTML document. This doesn't render the page again.
- This is taken for granted nowadays. Fetching data the old way, ex. https://somesite.cs.helsinki.fi/get_data is not acceptable as it doesn't conform with RESTful APIs. See part 3 for more on this

### Single page app - SPA
- SPA don't fetch all pages through separate requests from the server. Instead you fetch only one HTML document which is then heavily manipulated through JavaScript.

### JavaScript - libraries
- The sample app has only used vanilla JavaScript with DOM-API.
- There are easier ways to manipulate the HTML than vanilla Javascript and DOM-API. Ex. jQuery.
- JQuery is not used nowadays, but was significant in it's early days due to cross-browser-compatability.
- This course will focus on the React library, couppled with Redux.

### Full-stack web development
- No universal definition.
- This course: Frontend, Backend and Databases
- Backend will be coded using JavaScript and Node.js runtime environment
- Also important: configurations, administrations etc.
