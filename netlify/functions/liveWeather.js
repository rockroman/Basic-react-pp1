import axios from "axios";

const weatherApiKey = process.env.VITE_REACT_WEATHER_API_KEY;

export async function handler(event, context) {
  console.log(event);
  const url = `https://api.openweathermap.org/data/2.5/group?id=2963155,2965402,2962216&units=metric&appid=${weatherApiKey}`;

  try {
    const { data } = await axios(url);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
}
