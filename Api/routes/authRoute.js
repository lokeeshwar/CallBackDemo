const express = require("express");
const router = express.Router()
const {logData} = require('../controllers/authController')

router.post('/logData',logData)


module.exports = router