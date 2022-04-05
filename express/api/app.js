import express from "express";
import {people, products} from "./data.js";

const app = express();
const port = 9000;

app.get("/", (req, res) => {
  //This method sends a response that is the parameter converted to a JSON string using JSON.stringify().
  res.json([{name: "Sammy"}, {name: "Kacy"}]);
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.all("*", (req, res) => {
  res.status(404).send("Data not found - incorrect url");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
