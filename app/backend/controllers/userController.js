const User = require('../models/user')

const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const sendToken = require('../utils/jwtToken')

// REGISTER A USER  =>  /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { username, email, password } = req.body

  const user = await User.create({
    username,
    email,
    password,
  })

  sendToken(user, 200, res)
})

// LOGIN USER   =>    /api/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body

  // CHECKS IF EMAIL & PASSWORD IS ENTERED BY USER
  if (!email || !password) {
    return next(new ErrorHandler('Please Enter Email & Password', 400))
  }

  // FINDING USER IN DATABASE
  const user = await User.findOne({ email }).select('+password')

  if (!user) {
    return next(new ErrorHandler('Invalid Email Or Password', 401))
  }

  // CHECK IF PASSWORD IS CORRECT OR NOT
  const isPasswordMatched = await user.comparePassword(password)

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Password Doesn't Match", 401))
  }

  const token = user.getJwtToken()

  res.status(200).json({
    success: true,
    token,
  })
})

// LOGOUT USER    =>    /api/v1/logout
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  })

  res.status(200).json({
    success: true,
    message: 'Logged Out',
  })
})
