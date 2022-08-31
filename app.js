const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("./utils/db.config");
app.use(bodyParser.urlencoded({ extended: false }));
const userModel = require("./models/userModel");

app.set("view-engine", "ejs");
app.get("/", (req, res) => {
  return res.render("index.ejs");
});
app.get("/register", (req, res) => {
  return res.render("register.ejs");
});
app.post("/register", async (req, res) => {
  const user = new userModel(req.body);
  await user.save();

  return res.send(user);
});
app.listen(8000, () => {
  console.log("listening to server 8000 ");
});

module.exports = app;
