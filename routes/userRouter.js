const express = require("express");
const router = express();
const userController = require("../modules/users/controllers/userControllers");

router.get("/", userController.homepage);
router.get("/register", userController.getRegister);
router.post("/register", userController.postRegister);

module.exports = router;
