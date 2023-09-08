import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BsDropletHalf } from "react-icons/bs";
import { BsSpeedometer } from "react-icons/bs";
import { BsWind } from "react-icons/bs";

const weatherApiKey = import.meta.env.VITE_REACT_WEATHER_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/group?id=2963155,2965402,2962216&units=metric&appid=${weatherApiKey}`;

const CampLiveWeather = () => {
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  const response = useQuery({
    queryKey: ["camps"],
    queryFn: async () => {
      const { data } = await axios(url);
      // console.log(data);
      return data;
    },
  });
  if (response.isLoading) {
    return (
      <div className="widget">
        <h2>Loading......</h2>
      </div>
    );
  }
  if (response.isError) {
    return (
      <div className="widget">
        <h2>Error occurred ......</h2>
      </div>
    );
  }
  const result = response.data.list;
  console.log(result);

  if (result.length < 1) {
    return (
      <div className="widget">
        <h2>No resluts found ......</h2>
      </div>
    );
  }

  return (
    <div>
      <h3 className="custom-color">CAMPS WEATHER (LIVE)</h3>
      <section className="live-container">
        {result.map((item) => {
          const { id, name, main, wind, weather } = item;

          return (
            <div key={id} className="camp-weather1">
              <div className="widget">
                <div className="left-panel panel">
                  <div className="date">{formattedTime}</div>
                  <div className="city">{name}</div>
                  <div className="temp">{main.temp.toFixed(1)}C</div>
                </div>
                <div className="right-panel panel">
                  <div className="icon-wind">
                    <img
                      src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
                      alt="open weather icon"
                      width="55"
                    />
                    <span>
                      <BsWind /> {wind.speed} m/s
                    </span>
                  </div>

                  <div className="two-parameters">
                    <span>
                      <BsSpeedometer /> {main.pressure} mmHg
                    </span>
                    <span>
                      <BsDropletHalf /> {main.humidity}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default CampLiveWeather;

// Kinsale: Geo coords [51.7075, -8.5306],id=2963155
// Clonakilty: Geo coords [51.6231, -8.8706] id=2965402
// Nohaval:Geo coords [51.7247, -8.4069] id=2962216
