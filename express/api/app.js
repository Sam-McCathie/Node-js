import express from "express";
import {people, products} from "./data.js";

const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/api/users", (req, res) => {
  //This method sends a response that is the parameter converted to a JSON string using JSON.stringify().
  res.json([{name: "Sammy"}, {name: "Kacy"}]);
});

app.get("/api/product/all", (req, res) => {
  // returning part of the products array
  const newProducts = products.map((p) => {
    const {id, name} = p;
    return {id, name};
  });
  res.json(newProducts);
});

// :x are params. x is a placeholder value. Name this after the data passed.
// there can be many params
// Note - params will always be a string
app.get("/api/product/:id", (req, res) => {
  console.log(req.params); //  returns a params object

  const productId = req.params.id;
  const singleProduct = products.find((p) => p.id === Number(productId));

  singleProduct
    ? res.json(singleProduct)
    : res.status(404).send("<h1>Product not found</h1>");
});

// search query example
app.get("/api/v1/query", (req, res) => {
  // on front end add after query ? then key->value pairs serparated by & e.g. "?name=Sammy&id=4"
  console.log(req.query); // access query values
  const {search, limit} = req.query;
  let sortedProducts = [...products];

  // query examples:
  // - ?search=a&limit=3
  // - ?search=leather
  // - ?limit=4
  if (search) {
    sortedProducts = sortedProducts.filter((p) => {
      return p.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  // added handler if status is 200 and array is empty
  res
    .status(200)
    .json(
      sortedProducts.length > 0 ? sortedProducts : {success: true, data: []}
    );
});

app.all("*", (req, res) => {
  res.status(404).send("Data not found - incorrect url");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
