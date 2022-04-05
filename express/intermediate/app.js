import express from "express";
import {logger} from "./middleware/logger.js";

const app = express();
const PORT = 9000;

// middleware - are functions that execute during the request to the server
// - has access to req & res
// calling middleware from different files
app.use(logger);
// .use() defaults to "/" path. You can specifiy ony some routes by passing them as the first arg.
// - e.g. app.use("./api", logger) -> this would apply to all routes that start with api

// second arg = middleware or can be passed via .use()
app.get("/", (req, res) => {
  res.send("home");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.all("*", (req, res) => {
  res.send("I think you are lost?");
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
