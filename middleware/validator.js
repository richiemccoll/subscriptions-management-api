import Joi from "joi";
import { SubscriptionSchema } from "../models/subscription";
import { PlanSchema } from "../models/plan";
import ValidationError from '../errors/validation-error';

let validators = {
  Subscription: {
    scopes: {
      default: SubscriptionSchema
    }
  },
  Plan: {
    scopes: {
      default: PlanSchema
    }
  }
};

function scopeExists(validator, scope) {
  return Object.keys(validator.scopes).find(key => key == scope) != undefined;
}

function getSchema(model, scope) {
  let validator = validators[model];
  if (!validator) {
    throw new Error("Validator does not exist");
  }

  // First check if the given validator has multiple scopes
  if (validator.scopes) {
    if (scope) {
      if (!scopeExists(validator, scope)) {
        throw new Error(`Scope: ${scope} does not exist in ${model} validator`);
      } else {
        return validator.scopes[scope];
      }
    }
  } else {
    return validator;
  }
}

function validate(model, object, scope) {
  return Joi.validate(object, getSchema(model, scope), {
    allowUnknown: true
  });
}

export default function validationMiddleware(model, scope) {
  return (req, res, next) => {
    debugger;
    const validationResult = validate(model, req.body, scope);
    if (validationResult.error) {
      throw new ValidationError(validationResult.error.message, model);
    } else {
      next();
    }
  };
}
