const express = require("express");
const router = express();
const userController = require("../modules/users/controllers/userControllers");
const authenticateMiddleware = require("../middleware/IfLoginHomepage");
const guestMiddleware = require("../middleware/ifRegisterHomepage");
router.locals.message = null;
router.locals.Errorstack = null;

router.get("/", userController.homepage);
router.get("/register", guestMiddleware, userController.getRegister);
router.post("/register", userController.postRegister);
router.get("/login", authenticateMiddleware, userController.getLogin);
router.post(
  "/login",
  userController.passportAuthenticate,
  userController.postLogin
);
router.get("/homepage", (req, res, next) => {
  res.send(`welcome, ${req.user.name}`);
});

module.exports = router;
