const mongoose = require('mongoose')

const activitySchema = mongoose.Schema({
    text: {
        type: String,
        requires: [true, 'Please add a value']
    }
}, {
    timestamps:true
}
)

module.exports = mongoose.model('Activity', activitySchema)