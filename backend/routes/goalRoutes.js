const express = require('express')

const router = express.Router()

const {getGoals,
    setGoals,
    updateGoals,
    deleteGoal} = require('../controller/goalController')


    // bring all the  same route together to  refactor
    router.route('/').get(getGoals).post(setGoals)

    router.route('/:id').delete(deleteGoal).put(updateGoals)


//router.get('/',getGoals)
//router.post('/',setGoals)
//router.put('/:id',updateGoals)
//router.delete('/:id', deleteGoal)


module.exports = router