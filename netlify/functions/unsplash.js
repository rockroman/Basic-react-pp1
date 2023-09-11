import axios from "axios";

export async function handler(event, context) {
  console.log(event);
  try {
    const page = event.queryStringParameters.page || 1;
    const count = event.queryStringParameters.count || 6;

    const unsplashApiKey = process.env.VITE_REACT_APP_UNSPLASH_API_KEY;

    const { data } = await axios(
      `https://api.unsplash.com/search/photos?page=${page}&per_page=${count}&query=surfing`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Client-ID ${unsplashApiKey}`,
        },
      }
    );
    console.log(data);
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
