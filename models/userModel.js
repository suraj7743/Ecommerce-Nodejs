const mongoose = require("mongoose");
const userSchmea = mongoose.Schema({
  name: {
    type: String,
    required: [true, "must include a name "],
    maxlength: [60, "Name can't be greater than 60 character "],
    minlength: [2, "Minlength should be of 2 character long "],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    maxlength: [128, "Email can't be greater than 120 characters"],
    index: true,
  },
  password: {
    type: String,
    required: [true, "Must include a password"],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  idDeleted: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("n-ecommerceUser", userSchmea);
