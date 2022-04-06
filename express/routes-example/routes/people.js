import express from "express";
import {people} from "../data.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({success: true, people});
});

router.post("/", (req, res) => {
  const {name} = req.body;
  name
    ? res.status(201).json({status: "succ", person: name})
    : res.status(400).json({status: "fail", message: "pls provide a name"});
});

// .put()update - /api/people/3 -> add "name": "Sammy" to the body in postman
router.put("/:id", (req, res) => {
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
router.delete("/:id", (req, res) => {
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

export {router as people};
