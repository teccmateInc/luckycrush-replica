const express = require('express')
const router = express.Router()

const {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser,
} = require('../controllers/userController')

const { isAuthenticatedUser } = require('../middlewares/auth')

router.route('/register').post(registerUser)
router.route('/me').get(isAuthenticatedUser, getUserProfile)
router.route('/login').post(loginUser)
router.route('/logout').get(logoutUser)

module.exports = router
