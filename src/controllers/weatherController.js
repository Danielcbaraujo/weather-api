const { getWeather } = require("../services/weatherService");

async function weather(req, res) {
  const data = await getWeather();

  res.json(data);
}

module.exports = {
  weather,
};
