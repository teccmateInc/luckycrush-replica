const User = require('../models/user')

const jwt = require('jsonwebtoken')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('./catchAsyncErrors')

// CHECKS IF USER IS AUTHENTICATED OR NOT
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { luckyToken } = req.cookies

  if (!luckyToken) {
    return next(new ErrorHandler('Login First To Access This Resource.', 401))
  }

  const decoded = jwt.verify(luckyToken, process.env.JWT_SECRET)
  req.user = await User.findById(decoded.id)

  next()
})

// Handling users roles
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role (${req.user.role}) is not allowed to acccess this resource`,
          403
        )
      )
    }
    next()
  }
}
