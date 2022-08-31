const express = require("express");
const app = express();
require("./utils/db.config");

app.set("view-engine", "ejs");
app.get("/", (req, res) => {
  return res.render("index.ejs");
});
app.listen(8000, () => {
  console.log("listening to server 8000 ");
});

module.exports = app;
