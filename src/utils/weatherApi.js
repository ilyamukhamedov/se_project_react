import { request } from "./api";
// import { APIkey } from "./constants";

export const getForecastWeather = (latitude, longitude, APIkey) => {
  return request(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
    `);
};

export const parseWeatherData = (data) => {
  if (!data) {
    return null;
  }

  const weather = {};

  // weather.city = data.name;

  weather.temp = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };

  weather.type = data.weather[0].main;

  const currentTime = Date.now();

  const day = data.sys.sunrise * 1000;

  const night = data.sys.sunset * 1000;

  if (currentTime >= day && currentTime < night) {
    weather.day = true;
  } else {
    weather.day = false;
  }

  return weather;
};
