const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.listen(3001, function () {
    console.log("listening on 3001");
});

app.get("/", (req, res) => {
    res.send("Api is running");
});

app.get("/ping", (req, res) => {
    setTimeout(() => {
        res.send("pong");
    }, 1000);
});
