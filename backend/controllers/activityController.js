const asyncHandler = require('express-async-handler')
const Activity = require('../models/acitivityModel.js')

// Get Activity, GET /api/activity
const getActivity = asyncHandler(async (req, res) => {  
    const activities = await Activity.find()
    res.status(200).json(activities)
})

// Create Activity, POST /api/activity
const setActivity = asyncHandler(async (req, res) => {
    
    // if(!req.body.text){
    //     res.status(400)
    //     throw new Error('Please add text field')
    // }
    const activity = await Activity.create({
        activityName: req.body.name,
        activityType: req.body.type,
        creatorName: req.body.creator,
        activityCity: req.body.city,
        activityDate: new Date(req.body.date)
    })

    res.status(200).json(activity)
})

// Update Activity, PUT /api/activity/:id
const updateActivity = asyncHandler(async (req, res) => {
    console.log(req.body)
    const activity = await Activity.findById(req.params.id)

    // if(!activity){
    //     res.status(400)
    //     throw new Error('Activity not found')
    // }

    const updatedActivity = await Activity.findByIdAndUpdate(req.params.id, {    
        activityName: req.body.name,
        activityType: req.body.type,
        creatorName: req.body.creator,
        activityCity: req.body.city,
        activityDate: new Date(req.body.date),
        enrolled: {
            enrolledFirstName: req.body.enrolledFirstName,
            enrolledLastName: req.body.enrolledLastName,
            enrolledEmail: req.body.enrolledEmail
        }
    },
    {new: true})

    res.status(200).json(updatedActivity)
})

//  Delete Activity, DELETE /api/activity/:id
const removeActivity = asyncHandler(async (req, res) => {

    const activity = await Activity.findByIdAndDelete(req.params.id)
    if(!activity){
        res.status(400)
        throw new Error('Activity not found')
    }

    

    res.status(200).json({id: req.params.id})
})


module.exports = {
    getActivity,
    setActivity,
    updateActivity,
    removeActivity
}
