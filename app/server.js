const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Start server
app.listen(PORT, () => {
  console.log(`Frontend running on http://localhost:${PORT}`);
});
