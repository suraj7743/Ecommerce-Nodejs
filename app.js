const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
require("./utils/db.config");
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view-engine", "ejs");
const router = require("./routes/userRouter");
app.use(
  session({
    secret: "may be some text written as keyword cat ",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
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

app.listen(8000, () => {
  console.log("listening to server Port 8000 ");
});

module.exports = app;
