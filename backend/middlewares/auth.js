const jwt = require('jsonwebtoken')
const User = require('../models/user')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('./catchAsyncErrors')

// CHECKS IF USER IS AUTHENTICATED OR NOT
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies

  if (!token) {
    return next(new ErrorHandler('Login First To Access This Resource.', 401))
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  req.user = await User.findById(decoded.id)

  next()
})
