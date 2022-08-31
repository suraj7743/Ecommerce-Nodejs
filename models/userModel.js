const mongoose = require("mongoose");
const userSchmea = mongoose.Schema({
  name: {
    typeof: String,
    required: [true, "must include a name "],
    maxlength: [60, "Name can't be greater than 60 character "],
    minlength: [2, "Minlength should be of 2 character long "],
  },
  email: {
    typeof: String,
    required: [true, "Email is required"],
    maxlength: [128, "Email can't be greater than 120 characters"],
    index: true,
  },
  password: {
    typeof: String,
    required: [true, "Must include a password"],
  },
  isActive: {
    typeof: Boolean,
    default: true,
  },
  idDeleted: {
    typeof: Boolean,
    default: false,
  },
  timestamps: true,
});
module.exports = mongoose.model("n-ecommerceUser", userSchmea);
