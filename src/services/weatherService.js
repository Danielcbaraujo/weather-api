async function getWeather(city) {
  try {
    const apiKey = process.env.WEATHER_API_KEY;

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("CITY_NOT_FOUND");
    }

    const data = await response.json();

    console.log(data); // Mostra os dados no terminal

    return {
      city: data.address,
      temperature: data.currentConditions.temp,
      humidity: data.currentConditions.humidity,
      condition: data.currentConditions.conditions,
    };
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

module.exports = { getWeather };
