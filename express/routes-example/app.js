import express from "express";
import path from "path";
import {people} from "./routes/people.js";
import {auth} from "./routes/auth.js";

const app = express();
const port = 9000;
const __dirname = path.resolve();

// static assets
app.use(express.static("./public"));

// form form example -> express.urlencoded() -> allows you to access the value of a post req
app.use(express.urlencoded({extended: false}));

// for javascript example -> parse incoming json
app.use(express.json());

// login route - "/login" means all files within auth will start with login
app.use("/login", auth);

// people routes
app.use("/api/people", people);

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
