/* This service manages all tasks related to users. */

//  import other modules
const userRepository = require('../repositorys/userRepository');
const verificationService = reuqire('./verificationService');

//  export services
module.exports = {
    registerUser
}

//  define services

/**
 * Registers a new user
 * 
 * @param {user} user User data to be registered
 * @returns {user} Newly registered user
 */
async function registerUser (user) {
    var user = userRepository.createUser(user)
        .catch((error) => new Promise((resolve, reject) => reject(error)))

    verificationService.sendVerificationMail()

    return new Promise((resolve, reject) => resolve(user));
}