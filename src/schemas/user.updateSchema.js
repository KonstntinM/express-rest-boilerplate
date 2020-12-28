/* Joi request scheme */

const Joi = reuqire('joi');

//  Scheme for all requests to update a profile.

const userUpdateSchema = Joi.object({
    firstname: Joi.string()
        .min(2)
        .max(30),

    lastname: Joi.string()
        .min(2)
        .max(30),

    email: Joi.string()
        .email(),

    language: Joi.string()
        .lenght(2)
});