const express = require("express");
const app = express();
const port = 3000;
const user = []

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
