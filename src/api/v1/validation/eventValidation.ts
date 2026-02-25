import Joi from "joi";

// Post operation schemas organized by request part
export const postSchemas = {
    // POST /posts - Create new post
    // validate all the require fields when creating
    create: {
        body: Joi.object({
            name: Joi.string().min(3).required().messages({
                "any.required": '"name" is required',
                "string.empty": '"name" cannot be empty',
                "string.min": '"name" length must be at least 3 characters long',
                "string.base": '"name" must be a string'
            }),

            date: Joi.date().iso().greater('now').default(() => new Date()).messages({
                "date.greater": '"date" must be greater than now',
                "date.format": "'date' must be in ISO format"
            }),

            capacity: Joi.number().integer().min(5).default(5).messages({
                "number.min": '"capacity" must be greater than or equal to 5',
                "number.integer": '"capacity" must be an integer"',
                "number.base": '"capacity" must be a number'
            }),

            registrationCount: Joi.number().integer().min(0).default(0).max(Joi.ref('capacity')).messages({
                "number.max": '"registrationCount" must be less than or equal to ref:capacity',
                "number.min": '"registrationCount" must be greater than 0',
                "number.integer": '"registrationCount" must be an integer',
            }),

            status: Joi.string().valid("active", "cancelled", "completed").default("active").messages({
                "string.valid": '"status" must be one of [active, cancelled, completed]'
            }),

            category: Joi.string().valid("conference", "workshop", "meetup", "seminar", "general").default("general").messages({
                "string.valid": '"category" must be one of [conference, workshop, meetup, seminar, general]'
            }),
        }),
    },
    // validate all the require fields when updating
    update: {
        body: Joi.object({
            name: Joi.string().min(3).required().messages({
                "any.required": '"name" is required',
                "string.empty": '"name" cannot be empty',
                "string.min": '"name" length must be at least 3 characters long',
                "string.base": '"name" must be a string'
            }),

            date: Joi.date().iso().greater('now').messages({
                "date.greater": '"date" must be greater than now',
                "date.format": "'date' must be in ISO format"
            }),

            capacity: Joi.number().integer().min(5).messages({
                "number.min": '"capacity" must be greater than or equal to 5',
                "number.integer": '"capacity" must be an integer"',
                "number.base": '"capacity" must be a number'
            }),

            registrationCount: Joi.number().integer().min(0).max(Joi.ref('capacity')).messages({
                "number.max": '"registrationCount" must be less than or equal to ref:capacity',
                "number.min": '"registrationCount" must be greater than 0',
                "number.integer": '"registrationCount" must be an integer',
            }),

            status: Joi.string().valid("active", "cancelled", "completed").messages({
                "string.valid": '"status" must be one of [active, cancelled, completed]'
            }),

            category: Joi.string().valid("conference", "workshop", "meetup", "seminar", "general").messages({
                "string.valid": '"category" must be one of [conference, workshop, meetup, seminar, general]'
            }),
        }),
    },
    // validate all the require fields when calling an event by its id
    getById: {
        body: Joi.object({
            id: Joi.string().required()
        }),
    },
    // validate all the require fields when deleting an event by its id
    delete: {
        body: Joi.object({
            id: Joi.string().required()
        }),
    },
    
}