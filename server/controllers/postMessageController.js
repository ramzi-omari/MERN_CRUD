const express = require("express");
var router = express.Router();
var ObjectID = require("mongoose").Types.ObjectId;

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

router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("No record with giver id : " + req.params.id);
  req.params.id;
  var updatedRecord = {
    title: req.body.title,
    message: req.body.message,
  };

  PostMessage.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    (err, doc) => {
      if (!err) res.send(docs);
      else
        console.log(
          "Error while creating new records :" +
            JSON.stringify(err, undefined, 2)
        );
    }
  );
});

module.exports = router;
