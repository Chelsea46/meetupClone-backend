const asyncHandler = require('express-async-handler')
const Activity = require('../models/acitivityModel.js')

// Get Activity, GET /api/activity
const getActivity = asyncHandler(async (req, res) => {  
    const activities = await Activity.find()
    res.status(200).json(activities)
})

// Create Activity, POST /api/activity
const setActivity = asyncHandler(async (req, res) => {
    
    if(!req.body.name ){
        res.status(400)
        throw new Error('Please add name')
    }if(!req.body.type ){
        res.status(400)
        throw new Error('Please add type')
    }if(!req.body.creator ){
        res.status(400)
        throw new Error('Please add a creator')
    }if(!req.body.city){
        res.status(400)
        throw new Error('Please add a city')
    }if(!req.body.date){
        res.status(400)
        throw new Error('Please add a date')
    }
    const activity = await Activity.create({
        activityName: req.body.name,
        activityType: req.body.type,
        creatorName: req.body.creator,
        activityCity: req.body.city,
        activityDate: new Date(req.body.date)
    })
    console.log('activity added')

    res.status(200).json(activity)
})

// Update Activity, PUT /api/activity/:id
const updateActivity = asyncHandler(async (req, res) => {
    const activity = await Activity.findById(req.params.id)

    if(!activity){
        res.status(400)
        throw new Error('Activity not found')
    }

    const updatedActivity = await Activity.findByIdAndUpdate(req.params.id, {    
        activityName: req.body.name,
        activityType: req.body.type,
        creatorName: req.body.creator,
        activityCity: req.body.city,
        activityDate: new Date(req.body.date),
    },
    {new: true})

    res.status(200).json(updatedActivity)
})

// Update Enrolled, PUT /api/activity/:id
const updateEnrolled = asyncHandler(async (req, res) => {
    const activity = await Activity.findById(req.params.id)
  
    if (!activity) {
      res.status(400)
      throw new Error('Activity not found')
    }
  
    const newEnrollment = {
      enrolledFirstName: req.body.enrolledFirstName,
      enrolledLastName: req.body.enrolledLastName,
      enrolledEmail: req.body.enrolledEmail,
    };
  
    activity.enrolled.push(newEnrollment)
    const updatedActivity = await activity.save()
  
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
    removeActivity,
    updateEnrolled
}
