const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/userapi") {
    fs.readFile("UserApi.json", "utf-8", (error, data) => {
      res.end(data);
    });
  }
});
server.listen(4000, "127.0.0.1", () => {
  console.log("Listening tot the port 4000");
});
