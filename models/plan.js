import Joi from "joi";

const PlanModel = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    type: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Plan.associate = function(models) {
    // associations can be defined here
  };
  return Plan;
};

const PlanValidationSchema = Joi.object().keys({
  name: Joi.string().required(),
  price: Joi.number()
    .positive()
    .allow(0)
    .required(),
  type: Joi.string()
    .valid("monthly", "yearly")
    .required(),
  userId: Joi.number()
    .positive()
    .required()
});

export {
  PlanValidationSchema,
  PlanModel as default
}
