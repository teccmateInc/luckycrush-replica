const app = require('./app')
const connectDatabase = require('./config/database')

const dotenv = require('dotenv')

// HANDLE UNCAUGHT EXCEPTIONS
process.on('uncaughtException', (err) => {
  console.log(`ERROR: ${err.message}`)
  console.log('Shutting Down Server Due To Uncaught Exception')
  process.exit(1)
})

// SETTING UP CONFIG FILE
dotenv.config({ path: 'config/config.env' })

// CONNECTING TO DATABASE
connectDatabase()

app.listen(process.env.PORT, () => {
  console.log(`Server Started On Port: ${process.env.PORT}`)
})

// HANDLE UNHANDLED PROMISE REJECTIONS

process.on('unhandledRejection', (err) => {
  console.log(`ERROR: ${err.message}`)
  console.log('Shutting Down The Server Due To Unhandled Promise Rejection')
  server.close(() => {
    process.exit(1)
  })
})
