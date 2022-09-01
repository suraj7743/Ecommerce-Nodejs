const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("./utils/db.config");
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view-engine", "ejs");
const router = require("./routes/userRouter");
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
  console.log("listening to server 8000 ");
});

module.exports = app;
