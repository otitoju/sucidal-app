const express = require('express')
const router = express.Router()
const usercontroller = require('../controller/user')
const predictions = require('../controller/prediction')

router.post('/register', usercontroller.reqisterUser)
router.post('/email', usercontroller.userEmail)
router.post('/password', usercontroller.userPassword)

router.post('/prediction', predictions.makePredictions)

module.exports = router;
