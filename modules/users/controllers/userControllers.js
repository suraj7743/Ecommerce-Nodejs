const userModel = require("../models/userModel");
const catchAsync = require("../../../middleware/asyncwrapper");
const validateSchmea = require("../../validation/validation");
const catchError = require("../../../error/catchError");
const passport = require("passport");
const bcrypt = require("bcrypt");

//bcrypt compare

//homepage
const homepage = catchAsync(async (req, res, next) => {
  return res.render("index.ejs");
});

//registerpage
const getRegister = catchAsync(async (req, res, next) => {
  return res.render("register.ejs");
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

const getLogin = catchAsync(async (req, res, next) => {
  return res.render("login.ejs");
});

//passportauthenticate
const passportAuthenticate = passport.authenticate("local", {
  successRedirect: "/login-success",
  failureRedirect: "/login-failed",
});

const postLogin = catchAsync(async (req, res, next) => {
  return res.render("login.ejs", {
    message: "Login successfull",
    Errorstack: null,
  });
});

//exports module
module.exports = {
  homepage,
  getRegister,
  postRegister,
  getLogin,
  passportAuthenticate,
  postLogin,
};
