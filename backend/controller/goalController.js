
//@route GET /api/goals
//@acces private
const getGoals = (req ,res) => {
    res.status(200).json({message: 'Get goals'})
}


//@route Post/api/goals
//@acces private
const setGoals = (req ,res) => {
    res.status(200).json({message:'create Goals'})
}

//@route Put /api/goals/id
//@acces private
const updateGoals = (req ,res) => {
    res.status(200).json({message:`Update goal ${req.params.id}`})
}

//@route delete /api/goals/:id
//@acces private
const deleteGoal = (req ,res) => {
    res.status(200).json({message:`Delete goal ${req.params.id}`})
}



module.exports = {
    getGoals, 
    setGoals,
    updateGoals,
    deleteGoal
}