const express = require("express");
const app = express();
const mysql = require("mysql");
const connection = require("express-myconnection");

app.set("port", process.env.port || 8000);
app.listen(app.get("port"), () => {
  console.log("Runnig on port ", app.get("port"));
});

app.get("/", (req, res) => {
  res.send("Welcome to my api");
});
