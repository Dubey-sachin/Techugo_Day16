import joi from 'joi'

export const addValidation = joi.object({
    firstName:joi.string().min(3).max(10).required(),
    lastName: joi.string().min(3).max(10).required(),
    email: joi.string().email().required()

})

export const updateValidation = joi.object({
    firstName:joi.string().min(3).max(10).required(),
    lastName: joi.string().min(3).max(10).required(),
    email: joi.string().email().required()

})
