const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "success",
    name: "VHAO LIVE API",
    message: "Server is running!"
  });
});

app.get("/health", (req, res) => {
  res.json({
    online: true,
    server: "VHAO LIVE API"
  });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("API running on port " + PORT);
});
