const express = require('express')
const cors = require('cors')
const app = express()

const cookieParser = require('cookie-parser')

const errorMiddleware = require('./middlewares/errors')

app.use(express.json())
app.use(cookieParser())
app.use(cors())

const user = require('./routes/user')

app.use('/api/v1', user)

// MIDDLEWARE TO HANDLE ERRORS
app.use(errorMiddleware)

module.exports = app
