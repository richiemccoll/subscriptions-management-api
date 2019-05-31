import Joi from 'joi';

const PlanValidationSchema = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().positive().allow(0).required(),
    type: Joi.string().valid('monthly', 'yearly').required(),
    userId: Joi.number().positive().required(),
})

export default PlanValidationSchema;