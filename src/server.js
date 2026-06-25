require("dotenv").config();
const express = require("express");
const { getWeather } = require("./services/weatherService");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 3000;

// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo de requisições
  message: {
    error: "Muitas requisições. Tente novamente mais tarde.",
  },
});

app.use(express.json());
app.use(limiter);

app.get("/", (req, res) => {
  res.json({
    mensagem: "API Weather funcionando",
  });
});

app.get("/weather/:city", async (req, res) => {
  try {
    const city = req.params.city;

    const data = await getWeather(city);

    res.json(data);
  } catch (error) {
    if (error.message === "CITY_NOT_FOUND") {
      return res.status(404).json({
        error: "Cidade não encontrada",
      });
    }

    return res.status(500).json({
      error: "Erro interno no servidor",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
