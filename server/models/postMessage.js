const mongoose = require("mongoose");

var PostMessage = mongoose.model(
  "PostMessage",
  {
    title: { type: String },
    message: { type: String },
    // the thirds parameter to pass a custom name to the model
  },
  "postMessages"
);

module.exports = { PostMessage };
