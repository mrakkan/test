const express = require("express");
const path = require("path");
const app = express();


// Serve static files
const port = process.env.PORT || 80;
const host = '0.0.0.0';

app.get('/health', (req, res) => res.send('ok'));

app.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});


