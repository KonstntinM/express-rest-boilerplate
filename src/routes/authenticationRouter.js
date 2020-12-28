/* This router configures all routes related to authentication to the server. */

const router = require("express").Router({ mergeParams: true });

//  Describing the routes

router.get('/login')

//  Defining the controllers
function login (req, res, next) {

}

module.exports = router;