const express = require("express");
const app = express();

var port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(201);
  res.json({
    nome: "Ademir",
    linguagem: "javascript"
  });
});

const server = app.listen(port, _ => {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});
