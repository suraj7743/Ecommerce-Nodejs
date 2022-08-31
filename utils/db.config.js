const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/n-ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongodb compass");
});
