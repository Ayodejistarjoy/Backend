const express = require('express');
const {WelcomeUser, About, Register, Login, Dahboard, Upload,Sendmail } = require("../Controllers/user.controller");
const router = express.Router();



router.get('/', WelcomeUser)
router.get('/About', About)
router.get('/dashboard', Dahboard)

router.post('/register', Register)
router.post('/login', Login)
router.post('/upload', Upload)
router.get('/sendmail', Sendmail)










module.exports = router; 