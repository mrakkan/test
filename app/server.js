const express = require("express");
const path = require("path");
const app = express();


// Serve static files
app.use(express.static(path.join(__dirname)));

// Start server
app.listen(PORT, () => {
  console.log(`Frontend running`);
});

app.get("/health", (req, res) => {
  res.send("OK");
});
