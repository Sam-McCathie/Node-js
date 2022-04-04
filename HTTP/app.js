import http from "http";

const server = http.createServer((req, res) => {
  console.log("user hit the server");

  const url = req.url;
  if (url === "/") {
    // add header
    res.writeHead(200, {"content-type": "text/html"});
    // output to page.
    res.write("<h1>Home page</h1>");
    // end response
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, {"content-type": "text/html"});
    // output to page.
    res.write("<h1>About</h1>");
    // end response
    res.end();
  } else {
    res.writeHead(404, {"content-type": "text/html"});
    res.write("<h1>404 - page not found</h1>");
    res.end();
  }
});

console.log("Server working");

server.listen(5000);
