const express = require('express')
const cors = require('cors')
const app = express()

const cookieParser = require('cookie-parser')

const errorMiddleware = require('./middlewares/errors')

const user = require('./routes/user')

require('dotenv').config({ path: 'backend/config/config.env' })

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/api/v1', user)

// MIDDLEWARE TO HANDLE ERRORS
app.use(errorMiddleware)

module.exports = app
