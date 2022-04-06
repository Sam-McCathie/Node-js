import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  // access the name from the form request
  const {name} = req.body;
  name
    ? res.status(200).send(`welcome ${name}`)
    : res.status(401).send("please enter a name..");
});

// export {router};

export {router as auth};
