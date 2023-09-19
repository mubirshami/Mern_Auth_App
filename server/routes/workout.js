const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

router.post("/", createWorkout);

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;
