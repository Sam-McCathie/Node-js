import express from "express";
import {logger} from "./middleware/logger.js";
import {authorise} from "./middleware/authorise.js";
import {data} from "./data.js";

const app = express();
const PORT = 9000;

// middleware - are functions that execute during the request to the server
// - has access to req & res
// - pass multiple middleware functions inside array
//        - these will execute in order
// - middleware functions below are called from different files
app.use(logger);
app.use("/api/secure", [authorise, logger]);
// .use() defaults to "/" path. You can specifiy ony some routes by passing them as the first arg.
// - e.g. app.use("./api", logger) -> this would apply to all routes that start with api

// .get() -> second arg = middleware or middleware can be passed via .use() as above
app.get("/", (req, res) => {
  res.send("<h1>home</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>about</h1>");
});

// pass user as "?user=Sam" after balance
app.get("/api/secure/balance", (req, res) => {
  console.log(`${req.user.name} accessed bank account`); // req.user set in authorise.js middleware
  res.json(data);
});

app.all("*", (req, res) => {
  res.send("I think you are lost?");
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
