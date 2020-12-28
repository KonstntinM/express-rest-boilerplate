/* This service is intended to verify users. By default, it provides token-based email verification. */

//  import other modules
const crypto = require('crypto');
const mailService = require('./mailService');
const userRepository = require('../repositorys/userRepository');

//  export services
module.exports = {
    sendVerificationEmail
}

//  define services

/**
 * Verifies users' email addresses with the help of the sent token.
 * 
 * @param {string} token given token to verify the user
 * @param {user} user User to be verified
 */
async function verifyUser (token, user) {

}

/**
 * Sends mail to the given user.
 * 
 * @param {user} user
 */
async function sendVerificationEmail (user) {

    const token = generateToken(50);

    user.verification.email.token = token;
    userRepository.updateUser(user);

    mailService.sendVerificationEmail(user.email, token)
        .then(() => {
            user.verification.mail.verificationMailSent = true;
            userRepository.updateUser(user);
        })
}

/**
 * Generates token to verify the email.
 * 
 * @param {number} lenght Lenght of the token
 * @returns {string} random token string
 */
function generateToken (lenght) {
    return crypto.randomBytes(lenght)
}