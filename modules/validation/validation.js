const Joi = require("joi");
const schema = Joi.object({
  name: Joi.string().min(2).max(64).required(),
  password: Joi.string().required(),
  Confirm_password: Joi.string().required().valid("password"),
  email: Joi.string().email().min(2).max(120).required(),
}).unknown(true);

module.exports = schema;
