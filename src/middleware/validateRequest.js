/* This validator checks if the body of a sent request matches the given schema. */

//  The function takes a joi schema and imports the validations configuration.
//  It then returns a Promise with a function that checks whether the request body meets the specified requirements.
//  This service should be included as often as possible to prevent unwanted input into the system, which is a potential security threat.

module.exports = function validateRequest (schema) {

    const options = require('../config/config').middleware.requestValidation;

    return [
        async (req, res, next) => {
            const { error, value } = schema.validate(req.body, options);
            if (error){
                return res.status(409).json({"message": error.message});
            } else {
                req.body = value;
                next();
            }
        }
    ];
}