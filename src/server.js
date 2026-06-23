require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API Weather funcionando",
  });
});

app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;

  const data = await getWeather(city);

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
