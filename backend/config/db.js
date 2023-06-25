const mongoose = require('mongoose')
const dotenv = require('dotenv').config()


const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://chelseajroberts:Labrinth@meetupcluster.ttrpyxo.mongodb.net/meetupapp?retryWrites=true&w=majority')
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB