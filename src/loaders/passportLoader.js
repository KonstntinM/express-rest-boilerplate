var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

//  Importing the required database modules

const User = require("../models/userModel")

//  Determine the authentication strategies 

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

module.exports = passport