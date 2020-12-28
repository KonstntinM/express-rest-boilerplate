const User = require('../models/UserModel')

module.exports = {
    createUser,
    updateUser,
    deleteUser
}

/**
 * Creates a new user in the database
 * 
 * @param {object} user User data to be registered
 * @returns {promise} mongoose promise
 */
function createUser (user) {
    var user = new User(user);
    return user.save((err,res) => {});
}

/**
 * Updates user data in the database
 * 
 * The function takes over a user object with updated values. 
 * The differences to the stored object with the same id are saved.
 * 
 * @param {object} user user to be updated to
 * @returns {promise} mongoose promise
 */
function updateUser (user) {
    if (!user || !user.id) return new Promise((resolve, reject) => reject({ error: "No user has been given to update."}));

    var storedUser = User.findOneById(user.id);
    user.map((property) => {
        storedUser[property] = user[property];
    })

    return storedUser.save((err,res) => {});
}

function deleteUser (id) {

}