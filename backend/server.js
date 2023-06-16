const express = require('express')
const dotenv = require('dotenv').config()

const errorHandler = require('./middleware/errorMiddleware.js')
const connectDB = require("./config/db.js")
const router = require("./routes/activityRoutes.mjs")

const port = process.env.PORT || 5000


connectDB()

const app = express();

app.unsubscribe(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/activity', router)

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))