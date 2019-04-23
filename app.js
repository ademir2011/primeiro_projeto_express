const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bem vindo!");
});

const server = app.listen(3000, _ => {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});
