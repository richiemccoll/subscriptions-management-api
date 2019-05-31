import Joi from "joi";

const SubscriptionValidationSchema = Joi.object().keys({
  planId: Joi.number()
    .positive()
    .required(),
  coupon: Joi.number()
    .min()
    .max(100)
    .optional()
    .allow(null),
  cardNumber: Joi.string()
    .creditCard()
    .required(),
  holderName: Joi.string()
    .alphanum()
    .required(),
  expirationDate: Joi.string().required(),
  cvv: Joi.string()
    .min(3)
    .max(3)
    .required()
});

export default SubscriptionValidationSchema;
