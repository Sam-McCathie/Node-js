import http from "http";

// alternate method
// const server = http.createServer((req, res) => {
//   res.end("welcome");
// });

// setup server using event emitter api
const server = http.createServer();

// using event emitter api
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
