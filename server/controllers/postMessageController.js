const express = require("express");
var router = express.Router();

var { PostMessage } = require("../models/postMessage");

router.get("/", (req, res) => {
  PostMessage.find((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while retrieve all records :" + JSON.stringify(err, undefined, 2)
      );
  });
});

router.post("/", (req, res) => {
  var newRecord = {
    title: req.body.title,
    message: req.body.message,
  };

  newRecord.save((err, doc) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while creating new records :" + JSON.stringify(err, undefined, 2)
      );
  });
});

module.exports = router;
