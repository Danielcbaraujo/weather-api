async function getWeather(city) {
  const apiKey = process.env.WEATHER_API_KEY;

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`;

  const response = await fetch(url);

  const data = await response.json();

  return data;
}
module.exports = {
  getWeather,
};
