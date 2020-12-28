const mongoose = require("mongoose");
const config = require("../config/config");

const MongoAuthenticationString =
    "mongodb+srv://" +
    config.database.username +
    ":" +
    config.database.password +
    "@" +
    config.database.server +
    "/" +
    config.server.name +
    "?retryWrites=true&w=majority";

module.exports = async () => {
  await mongoose.connect(MongoAuthenticationString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
    .then(res => console.log("\x1b[32m" + "[OnLearn] The connection to MongoDB was successfully established." + "\x1b[0m"))
    .catch( err => console.log("\x1b[41m" + "[OnLearn] Oops! There was an error connecting to the database. " + err + "\x1b[0m"))

  mongoose.Promise = global.Promise

}
