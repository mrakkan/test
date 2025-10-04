const express = require("express");
const path = require("path");
const app = express();


// Serve static files
app.use(express.static(path.join(__dirname)));

app.get("/health", (req, res) => {
  res.send("OK");
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});




