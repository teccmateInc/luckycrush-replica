const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, 'Please Enter A Username'],
      maxLength: [30, 'Your Name Cannot Exceed 30 Characters'],
    },
    email: {
      type: String,
      require: [true, 'Please Enter Your Email Address'],
      unique: true,
      validate: [validator.isEmail, 'Please Enter Valid Email Address'],
    },
    password: {
      type: String,
      require: [true, 'Please Enter Your Password'],
      minLength: [6, 'Your Password Must Be Longer Than 6 Characters'],
      select: false,
    },
    role: {
      type: String,
      default: 'user',
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
)

// ENCRYPTING PASSWORD BEFORE SAVING USER
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  this.password = await bcrypt.hash(this.password, 10)
})

// COMPARE USER PASSWORD
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

// RETURN JWT TOKEN
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  })
}

module.exports = mongoose.model('User', userSchema)
