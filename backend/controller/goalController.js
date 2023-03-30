const asyncHandler = require('express-async-handler')
//@route GET /api/goals
//@acces private
const getGoals = asyncHandler(async(req ,res) => {
    res.status(200).json({message: 'Get goals'})
})


//@route Post/api/goals
//@acces private
const setGoals =asyncHandler(async (req ,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    console.log(req.body)
    res.status(200).json({message:'create Goals'})
})

//@route Put /api/goals/id
//@acces private
const updateGoals = asyncHandler(async(req ,res) => {
    res.status(200).json({message:`Update goal ${req.params.id}`})
})

//@route delete /api/goals/:id
//@acces private
const deleteGoal =asyncHandler(async (req ,res) => {
    res.status(200).json({message:`Delete goal ${req.params.id}`})
})



module.exports = {
    getGoals, 
    setGoals,
    updateGoals,
    deleteGoal
}