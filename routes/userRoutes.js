const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Import controller

// Define routes and map them to controller functions
router.get('/', userController.getHome); // Home route
router.get('/about', userController.getAbout); // About route
router.get('/getUser',userController.getUser)

module.exports = router;
