const mongoose = require('mongoose')

const activitySchema = mongoose.Schema({
    activityName: {
        type: String,
        requires: [true, 'Please add name of activity']
    },
    activityType: {
        type: String,
        requires: [true, 'Please add what type of activity']
    },
    creatorName: {
        type: String,
        requires: [true, 'Please add a creator']
    },
    activityCity: {
        type: String,
        requires: [true, 'Please add a city']
    },
    activityDate: {
        type: Date,
        requires: [true, 'Please add a date']
    },
    enrolled: [
        {
          enrolledFirstName: {
            type: String,
            requires: [true, 'Please add a first name']
          },
          enrolledLastName: {
            type: String,
            requires: [true, 'Please add a last name']
          },
          enrolledEmail: {
            type: String,
            requires: [true, 'Please add an email']
          },
        },
      ],
   }, {
    timestamps:true
}
)

module.exports = mongoose.model('Activity', activitySchema)