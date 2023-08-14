# Deploying app to internet

## Same origin policy and CORS
- A URL's origin is defined by the combination of protocol (scheme), hostname and port
- Example:
```
http://example.com:80/index.html

protocol: http
host: example.com
port: 80
```
- When ever you visit a webpage the browser sends a request to the server where the website is hosted.
- The response may contain a HTML file which contains references to external assets/resources
- These external assets/resources may be hosted on either the same or a completely different server
- When the browser stumbles on such a reference it will make a request to that server for that resource
- If this request is issued using the *same* URL as the source HTML was fetched from there will be no problem
- If the base URL is different however --> browser will check *Access-Control-Allow-origin* response header.
- If this header contains "*" it will allow the request - otherwise it will refuse it and throw an error
- This is due to a security principle called *same-origin-policy*, which strives to make web-browsing more secure from attacks such as session hijacking.
- To enable legitimate cross-origin requests W3C developed a mechanism called *CORS* (Cross-origin-resource-sharing)
- JavaScript, by default, only allows for communication with a server in the same origin
- Just as a note: CORS is not something specific to Node.js or React

## Application to the Internet
- Heroku, Fly.io, Render

### Fly io
- After installng Fly.io with Fly.io's own [guide](https://fly.io/docs/hands-on/install-flyctl/) I had to create my own .bash_profile file since this wasn't present on my computer
- Login with:
```
fly auth login
```
- Initialize app:
```
fly launch
```
- Configure *fly.toml*:
```
[env]
  PORT = "8080" # add this

[experimental]
  auto_rollback = true

[[services]]
  http_checks = []
  internal_port = 8080 
  processes = ["app"]
```
- Change http_service in *fly.toml*:
```
[http_service]
  internal_port = same as defined in [env]
```
- Deploy application:
```
fly deploy
```
- Open deployed app in browser:
```
fly open
```
- Check connection:
```
flyctl ping -o personal
```

### Frontend production build
- React code can be running in *development mode* or as a *production build*. When the app is deployed we need to create a production build.
- In an app created with command "create-react-app", we can create a production build with:
```
npm run build
```
- This creates a directory named "build" 
- This contains the HTML file in our application; index.html and a directory "static"
- The  static directory will maintain a "Minified" version of the app.

- 
