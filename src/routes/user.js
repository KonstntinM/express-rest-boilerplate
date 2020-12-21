/* This router configures all routes related to the user object. */

const router = require("express").Router({ mergeParams: true });

//  Import custom services
const userService = '../services/userService'

//  Describing the routes

router.post('/register')

//  Defining the controllers
function register (req, res, next) {
    
}

module.exports = router;