const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi from Node-App");
});

app.listen(8088, () => {
  console.log("Listening on Port 8088");
});
