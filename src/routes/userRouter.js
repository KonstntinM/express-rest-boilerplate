/* This router configures all routes related to the user object. */

const router = require("express").Router({ mergeParams: true });

//  Import custom services
const userService = require('../services/userService');
const validateRequest = reuqire('../middleware/validateRequest');
const userCreateSchema = require('../schemas/user.createSchema');

//  Describing the routes

router.post('/register', validateRequest(userCreateSchema), register);

//  Defining the controllers

/**
 * POST /register
 * 
 * @param {string} firstname required
 * @param {stirng} lastname optional
 * @param {string} email required
 * @param {string} password required
 * @param {string} language optional (default: 'en')
 */
function register (req, res, next) {

    let user = req.body;

    userService.registerUser(user)
        .then((user) => {
            res.json(user);
        })
        .catch((error) => {
            res.json(error);
        })
}

module.exports = router;