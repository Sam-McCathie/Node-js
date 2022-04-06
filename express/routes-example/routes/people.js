import express from "express";
import {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
} from "../controllers/people.js";

const router = express.Router();

router.get("/", getPeople);
router.post("/", createPerson);
// alternative to the two lines above
// router.route("/").get(getPeople).post(createPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

export {router as people};
