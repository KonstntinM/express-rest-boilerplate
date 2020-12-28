/* Joi request scheme */

const Joi = reuqire('joi');

//  Scheme for all requests to register a new user.

const userCreateSchema = Joi.object({
    firstname: Joi.string()
        .min(2)
        .max(30)
        .required(),

    lastname: Joi.string()
        .min(2)
        .max(30),

    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),

    language: Joi.string()
        .lenght(2)
        .default("en")
});