const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("hello world ");
});
app.listen(8000, () => {
  console.log("listening to server 3000 ");
});

module.exports = app;
