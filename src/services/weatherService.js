// const redisClient = require("../config/redis");

async function getWeather(city) {
  const cacheKey = `weather:${city}`;

  /*
  try {
    const cachedData = await redisClient.get(cacheKey);

    if (cachedData) {
      console.log("CACHE HIT");
      return JSON.parse(cachedData);
    }
  } catch (err) {
    console.log("⚠️ Redis indisponível (GET ignorado)");
  }

  console.log("CACHE MISS");
  */

  const apiKey = process.env.WEATHER_API_KEY;

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("CITY_NOT_FOUND");
  }

  const data = await response.json();

  const weather = {
    city: data.address,
    temperature: data.currentConditions.temp,
    humidity: data.currentConditions.humidity,
    condition: data.currentConditions.conditions,
  };

  /*
  try {
    await redisClient.set(cacheKey, JSON.stringify(weather), {
      EX: 60 * 60 * 12,
    });
  } catch (err) {
    console.log("⚠️ Redis indisponível (SET ignorado)");
  }
  */

  return weather;
}

module.exports = { getWeather };
