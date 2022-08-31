const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchmea = mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

userSchmea.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
module.exports = mongoose.model("n-ecommerceUser", userSchmea);
