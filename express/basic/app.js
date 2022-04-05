import express from "express";
import path from "path";

const app = express();
const PORT = 5000;
const __dirname = path.resolve();

// middleware = .use()

// static asset is a file that the server does not have to change
// - e.g. css, image and js
// - saving in public file is common convention
// - express also handles the content types
app.use(express.static("./public"));

// .get(path, callback)
app.get("/", (req, res) => {
  //.status(status code) ->  you can chain actions
  // Note: 304 response -> 304 is not a problem. Your response is not modified and your browser turns to cache to fetch the resource.
  res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
  // Note: The index file could be moved to the public file.
  // - This way the "/" route would not need to be used.
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

// types:
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use -> middleware
