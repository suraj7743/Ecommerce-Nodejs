const catchAsync = require("./asyncwrapper");
const schema = require("../modules/validation/validation");
const joiValidation = catchAsync(async (req, res, next) => {
  const validateData = schema.validateAsync(req.body, { abortEarly: false });
});
module.exports = {
  joiValidation,
};
