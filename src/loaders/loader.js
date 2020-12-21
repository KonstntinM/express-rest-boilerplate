//  This loader bundles all smaller loaders for a clearer import.

const mongooseLoader = require("./mongoose-loader")
const passportLoader = require("./passport-loader")

module.exports = { mongooseLoader, passportLoader }