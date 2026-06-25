const express = require("express");
const router = express.Router();
const { getWeather } = require("../services/weatherService");
router.get("/weather/:city", async (req, res) => {
  try {
    const city = req.params.city;

    const weather = await getWeather(city);

    res.json(weather);
  } catch (error) {

    if (error.message === "CITY_NOT_FOUND") {
      return res.status(404).json({
        error: "Cidade não encontrada",
      });
    }

    res.status(500).json({
      error: "Erro interno no servidor",
    });
  }
});

module.exports = router;