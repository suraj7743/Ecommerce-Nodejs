const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const session = require("express-session");
const MongoStore = require("connect-mongo");

require("./utils/db.config");
const Mongodbconnection = require("./utils/db.config");
app.use(bodyParser.urlencoded({ extended: false }));
const passport = require("passport");
require("./utils/localStrategy");

app.set("view-engine", "ejs");
const router = require("./routes/userRouter");
app.use(
  session({
    secret: process.env.SESSION_SECRECT,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: MongoStore.create(Mongodbconnection),
  })
);

//initalize the passport
app.use(passport.initialize());
app.use(passport.session());
//for user route
app.use("/", router);

//catching error from next(error )
app.use((err, req, res, next) => {
  err.statuscode = err.statuscode || 500;
  err.status = err.status || "error";
  console.log(err.message);
  res.status(err.statuscode).json({
    status: err.status,
    message: err.message,
  });
});

app.listen(process.env.PORT || 8000, () => {
  console.log("listening to server Port 8000 ");
});

module.exports = app;
