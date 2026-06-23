const express = require("express");

const router = express.Router();

app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;

  await getWeather(city);

  res.json({
    message: "ok",
  });
});

module.exports = router;
