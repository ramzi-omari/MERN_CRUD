require("./db");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

var postMessageRoutes = require("./controllers/postMessageController");

var app = express();
app.use(bodyparser.json());
app.use(cors({ oridin: "http://localhost:3000" }));
app.listen(4000, () => console.log("Server started at : 4000"));

app.use("/postMessages", postMessageRoutes);
