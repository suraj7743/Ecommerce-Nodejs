const express = require("express");
const router = express();
const userController = require("../modules/users/controllers/userControllers");
const authenticateMiddleware = require("../middleware/IfLoginHomepage");
const guestMiddleware = require("../middleware/ifRegisterHomepage");
router.locals.message = null;
router.locals.Errorstack = null;
router.get(
  "/homepage",
  (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
  },
  (req, res, next) => {
    res.send(`welcome, ${req.user.name}`);
  }
);
router.get("/", userController.homepage);
router.get("/register", guestMiddleware, userController.getRegister);
router.post("/register", userController.postRegister);
router.get("/login", authenticateMiddleware, userController.getLogin);
router.post(
  "/login",
  userController.passportAuthenticate,
  userController.postLogin
);
router.get(
  "/logout",
  (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
  },
  function (req, res, next) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/login");
    });
  }
);

module.exports = router;
