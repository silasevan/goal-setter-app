const express = require("express");

const router = express.Router();

const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoal,
} = require("../controller/goalController");

const { protect } = require("../middleware/authMiddleware");

// bring all the  same route together to  refactor
router.route("/").get(protect, getGoals).post(protect, setGoals);

router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoals);

//router.get('/',getGoals)
//router.post('/',setGoals)
//router.put('/:id',updateGoals)
//router.delete('/:id', deleteGoal)

module.exports = router;
