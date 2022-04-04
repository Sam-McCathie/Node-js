import express from "express";

const app = express();
const PORT = 5000;

// .get(path, callback)
app.get("/", (req, res) => {
  //.status(status code) ->  you can chain actions
  res.status(200).send("Homie");
});

app.get("/about", (req, res) => {
  res.status(200).send("about");
});

// .all(path,callback) -> catch all. if route doesn't take the above path it will fall back to this one
app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

// .listen(path, callback) -> Binds and listens for connections on the specified host and port.
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use -> middleware
