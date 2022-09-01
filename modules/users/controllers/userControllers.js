const userModel = require("../models/userModel");
const catchAsync = require("../../../middleware/asyncwrapper");
const validateSchmea = require("../../validation/validation");
const catchError = require("../../../error/catchError");

//homepage
const homepage = catchAsync(async (req, res, next) => {
  return res.render("index.ejs");
});

//registerpage
const getRegister = catchAsync(async (req, res, next) => {
  return res.render("register.ejs", {
    message: null,
    Errorstack: null,
  });
});

//postregisterPage
const postRegister = catchAsync(async (req, res, next) => {
  let Errorstack = [];
  const { error, value } = validateSchmea.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    // next(new catchError(error.details, 400));
    // console.log(error);
    error.details.forEach((element) => {
      Errorstack.push(element.message);
    });
    return res.render("register.ejs", {
      message: null,
      Errorstack,
    });
  }
  const user = new userModel(req.body);
  await user.save();
  // res.send(value);
  return res.render("register.ejs", {
    message: "Registration successfull ",
  });
});

//exports module
module.exports = {
  homepage,
  getRegister,
  postRegister,
};
