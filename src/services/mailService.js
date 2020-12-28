/* This service is intended to verify users. By default, it provides token-based email verification. */

//  import other modules
const nodemailer = require('../loaders/nodemailerLoader');
const config = require('../config/config.js');
const fs = require('fs');
const { mjml2html } = require('mjml');

//  export services
module.exports = {
    sendVerificationMail
}

//  define services

/**
 * Sends a simple email with any content
 * 
 * @param {string} receiver Receivers email
 * @param {string} subject Subject of the email
 * @param {string} html Email contents
 * 
 * @returns {object} Assignement details (nodemailer)
 */
async function sendMail (receiver, subject, html) {
    return nodemailer.sendMail({
        from: '"' + config.server.name + ' <' + config.mail.mailadress + '>',
        to: receiver,
        subject: subject,
        html: html
    });
}

/**
 * Sends a verification mail to the given user.
 * 
 * @param {string} receiver Receivers email
 * @param {string} token Verification token
 * @returns {promise} Status of the action
 */
async function sendVerificationMail (receiver, token) {

    const name = config.server.name;
    const verificationLink = config.server.url + "/verify-email/" + token;
    
    const subject = "Welcome to " + name;
    var { err, data } = await fs.readFile('../utils/mail/verifyMail.mjml', 'utf8');

    if (err || !data) return new Promise((resolve, reject) => reject("Error while reading the template file for the verification email."));

    data.replace("{{name}}", name);
    data.replace("{{verificationLink}}", verificationLink);

    const html = await mjml2html(data);

    sendMail(receiver, subject, html)
        .then((data) =>{
            return new Promise((resolve, _reject) => resolve(data));
        })
        .catch((error) => {
            return new Promise((_resolve, reject) => reject("Error while sending the verification email."));
        })
}