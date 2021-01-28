const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.ATLAS_URI; // uri where our db is stored (we get it from atlas dashboard)

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
