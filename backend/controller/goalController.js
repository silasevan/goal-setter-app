const Goal = require("../models/goalModel");
const User = require('../models/userModel')

const asyncHandler = require("express-async-handler");
//@route GET /api/goals
//@acces private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).json(goals);
});

//@route Post/api/goals
//@acces private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  console.log(req.body);
  res.status(200).json(goal);
});

//@route Put /api/goals/id
//@acces private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
    }
    const user = await User.findById(req.user.id)
    //chheck for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    // make sure only  the logged in matches the goal user
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

//@route delete /api/goals/:id
//@acces private
const deleteGoal = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    //chheck for user
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }
    // make sure only  the logged in matches the goal user
    if (goal.user.toString() !== user.id) {
      res.status(401);
      throw new Error("User not authorized");
    }
  const goal = await Goal.findByIdAndDelete(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoal,
};
