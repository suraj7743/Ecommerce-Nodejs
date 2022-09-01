const Joi = require("joi");
const schema = Joi.object({
  name: Joi.string().min(2).max(64).required(),
  password: Joi.string().required(),
  repeat_password: Joi.ref("password"),
  email: Joi.string().email().min(2).max(120).required(),
}).unknown(true);

module.exports = schema;
