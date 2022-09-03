const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_COMPASS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongodb compass");
});
module.exports = mongoose.connection;
