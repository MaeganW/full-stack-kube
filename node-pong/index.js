const express = require("express");
const app = express();

app.listen(3001, function () {
  console.log("listening on 3001");
});

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/ping", (req, res) => {
  res.send("pong");
});
