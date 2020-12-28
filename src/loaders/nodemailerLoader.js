const nodemailer = require('nodemailer')
const config = require('../config/config').mail;

if (process.env.NODE_ENV == "developement") {

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = nodemailer.createTestAccount();

    config.auth.user = testAccount.user
    config.auth.pass = testAccount.pass
}

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport(config);

module.exports = transporter;