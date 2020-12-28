const verificationService = require('../../../src/services/verificationService');
const userRepository = require('../../../src/repositorys/userRepository');
const mongooseLoader = require('../../../src/loaders/mongooseLoader');

test('Verification mail gets sent', () => {

    // load mongoose

    mongooseLoader();

    // create new test user

    user = {
        firstname: "DELETE THIS USER",
        email: "lacag97538@j24blog.com",
        password: "12345"
    }

    userRepository.createUser(user);

    // send email

    verificationService.sendVerificationEmail(user);
})