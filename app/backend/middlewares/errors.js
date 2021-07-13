const ErrorHandler = require('../utils/errorHandler')

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  let error = { ...err }

  error.message = err.message

  // WRONG MONGOOSE OBJECT ID ERROR
  if (err.name === 'CastError') {
    const message = `Resource Not Found. Invalid: ${err.path}`
    error = new ErrorHandler(message, 400)
  }

  // HANDLING MONGOOSE VALIDATION ERRORS
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((value) => value.message)
    error = new ErrorHandler(message, 400)
  }

  // HANDLING MONGOOSE DUPLICATE KEY ERRORS
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`
    error = new ErrorHandler(message, 400)
  }

  // HANDLING WRONG JWT ERROR
  if (err.name === 'JsonWebTokenError') {
    const message = 'JSON Web Token Is Invalid. Try Again'
    error = new ErrorHandler(message, 400)
  }

  // HANDLING EXPIRED JWT ERROR
  if (err.name === 'TokenExpiredError') {
    const message = 'JSON Web Token Is Expired. Try Again'
    error = new ErrorHandler(message, 400)
  }

  res.status(error.statusCode).json({
    success: false,
    message: error.message || 'Internal Server Error',
  })
}
