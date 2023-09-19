const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(404).json({ error: "No such workout" });
    }
    const workout = await Workout.findById(id);
    if (!workout) {
      return res.status(404).json({ error: "No workout found" });
    } else {
      res.status(200).json(workout);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await Workout.findByIdAndDelete(id);

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    } else {
      res.status(200).json(workout);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await Workout.findByIdAndUpdate(id, { ...req.body });

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    } else {
      res.status(200).json(workout);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
