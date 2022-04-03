import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Home");
    res.end(); // ennds request
  } else if (req.url === "/about") {
    res.write("about");
    res.end();
  } else {
    res.write("what are you doing?");
    res.end();
  }
});

server.listen(5000);
