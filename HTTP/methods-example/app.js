import express from "express";
import path from "path";
import {people} from "./data.js";

const app = express();
const port = 9000;
const __dirname = path.resolve();

// static assets
app.use(express.static("./public"));

// form form example -> express.urlencoded() -> allows you to access the value of a post req
app.use(express.urlencoded({extended: false}));

// for javascript example -> parse incoming json
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.get("/api/people", (req, res) => {
  res.json({success: true, people});
});

// submit form will direct to this route
app.post("/login", (req, res) => {
  // access the name from the form request
  const {name} = req.body;
  name
    ? res.status(200).send(`welcome ${name}`)
    : res.status(401).send("please enter a name..");
});

app.post("/api/people", (req, res) => {
  const {name} = req.body;
  name
    ? res.status(201).json({status: "succ", person: name})
    : res.status(400).json({status: "fail", message: "pls provide a name"});
});

// .put()update - /api/people/3 -> add "name": "Sammy" to the body in postman
app.put("/api/people/:id", (req, res) => {
  const {id} = req.params;
  const {name} = req.body;

  const person = people.find((p) => p.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({status: "fail", message: "cannot update - id does not exist"});
  } else {
    const newPeople = people.map((p) => {
      if (p.id === Number(id)) {
        p.name = name;
      }
      return p;
    });
    return res.status(201).json({status: "succ", newPeople});
  }
});

// filters instead of deletes
app.delete("/api/people/:id", (req, res) => {
  const {id} = req.params;

  const person = people.find((p) => p.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({status: "fail", message: "cannot delete - id does not exist"});
  } else {
    const newPeople = people.filter((p) => p.id !== Number(id));
    return res.status(200).json({status: "succ", newPeople});
  }
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
