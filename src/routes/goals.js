import express from "express";
import {
  getGoals,
  createGoal,
  showGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goals.js";

const router = express.Router();

router.get("/", getGoals);

router.post("/", createGoal);

router.put("/:id", updateGoal);

router.get("/:id", showGoal);

router.delete("/:id", deleteGoal);

export default router;
