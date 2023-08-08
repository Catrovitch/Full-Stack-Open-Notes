# Altering data in server
This chaper looks at conventions used by json-server and REST APIs in general. Specifically the use of conventional routes within REST will be in focus.

## REST
- In REST individual data objects are refered to as *resources*
- Every resource has a unique URL associeted with it.
- For example, every individual note in our [Notes](https://github.com/Catrovitch/Full-Stack-Open-Notes/tree/main/Part-2/Examples/example2/notes) application could be refered to as *notes/id* where id=id number of that particular note. Simply */notes* would give us all notes.
- Resources are fetched using HTTP GET requests.
- Resources are createed using HTTP POST requests.
- Data is sent in the *body* of the request
- json-server requires that all data is in JSON format and that the request contains *Content-Type* header with the value *application/json*.
