// Create Own Web Server Start
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Welcome to Home Page");
  } else if (req.url == "/about") {
    res.end("Welcome to About Page");
  } else if (req.url == "/contact") {
    res.end("welcome to Contact Page");
  } else {
    res.writeHead(404);
    res.end("404 Error. Page doesn't Exists");
  }
});
server.listen(7000, "127.0.0.1", () => {
  console.log("Listening to the server 7000");
});
// End