const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')

 

const errorHandler = require('./middleware/errorMiddleware.js')
const connectDB = require("./config/db.js")
const router = require("./routes/activityRoutes.js")

const port = process.env.PORT || 5000


connectDB()

const app = express();

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/activity', router)

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))