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

// VHAO LIVE API

app.get("/api/game", (req, res) => {
  res.json({
    success: true,
    name: "VHAO LIVE API",
    version: "1.0",
    status: "online"
  });
});

app.get("/api/game/status", (req, res) => {
  res.json({
    success: true,
    status: "online"
  });
});

app.get("/api/game/players", (req, res) => {
  res.json({
    success: true,
    total: 0,
    players: []
  });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("API running on port " + PORT);
});
