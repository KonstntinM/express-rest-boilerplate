const express = require('express');
var app = express();

//  Configure app details

process.env.NODE_ENV == "developement"

//  Imports third-party modules.

const dotenv = require('dotenv').config();
const helmet = require('helmet');

//  Import the custom modules.

const config = require('./config/config.js');
const { mongooseLoader, passportLoader } = require('./loaders/loader');

//  Connect to external services.

mongooseLoader();

//  Registering the Middelweare.

app.use(passportLoader.initialize());
app.use(helmet());

//  Importing the routes
const userRoutes = require('./routes/userRouter');

//  Setting the routes.

app.use('/user', userRoutes);

//  Start the server on the specified port.
const port = config.server.port || 80;
app.listen(port, () => {
  console.log('\x1b[32m' + '[OnLearn] The server has started successfully and is listening on port ' + '\x1b[33m' + port + '\x1b[32m' + '.' + '\x1b[0m');
});