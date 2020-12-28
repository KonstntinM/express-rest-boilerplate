//  This loader bundles all smaller loaders for a clearer import.

const mongooseLoader = require("./mongooseLoader");
const passportLoader = require("./passportLoader");

module.exports = { mongooseLoader, passportLoader }