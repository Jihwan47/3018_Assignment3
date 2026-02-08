import Joi, { date, ObjectSchema } from "joi";
import { Category } from "../models/eventModel";

// Post operation schemas organized by request part
export const postSchemas = {
    // POST /posts - Create new post
    create: {
        body: Joi.object({
            name: Joi.string().min(3).required().messages({
                "any.required": "name is required",
                "string.empty": "name cannot be empty",
                "string.min": "name length must be at least 3 characters long",
                "string.base": "name must be a string"
            }),

            date: Joi.date().greater('now').messages({
                "date.greater": "date must be greater than now"
            }),

            capacity: Joi.number().integer().min(5).integer().messages({
                "number.min": "capacity must be greater than or equal to 5",
                "number.integer": "capacity must be an integer",
            }),

            registrationCount: Joi.number().integer().min(0).max(Joi.ref('capacity')).messages({
                "number.max": "registrationCount must be less than or equal to ref:capacity",
                "number.min": "registrationCount must be greater than 0",
                "number.integer": "registrationCount must be an integer",
            }),

            status: Joi.string().valid("active", "cancelled", "completed").default("active").messages({
                "string.valid": "status must be one of [active, cancelled, completed]"
            }),

            category: Joi.string().valid("conference", "workshop", "meetup", "seminar", "general").default("general").messages({
                "string.valid": "category must be one of [conference, workshop, meetup, seminar, general]"
            }),
        }),
    },
}