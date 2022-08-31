const userModel = require("../models/userModel");

//homepage
const homepage = async (req, res) => {
  try {
    return res.render("index.ejs");
  } catch (error) {
    res.status(400).json({
      status: "failure",
      msg: error.message,
    });
  }
};

//registerpage
const getRegister = async (req, res) => {
  try {
    return res.render("register.ejs", {
      message: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      message: error.message,
    });
  }
};

//postregisterPage
const postRegister = async (req, res) => {
  try {
    const user = new userModel(req.body);
    await user.save();
    return res.render("register.ejs", {
      message: "Registration successfull ",
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      message: error.message,
    });
  }
};

//exports module
module.exports = {
  homepage,
  getRegister,
  postRegister,
};
