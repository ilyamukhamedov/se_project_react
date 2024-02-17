const latitude = 25;
const longitude = 55;
const APIkey = "f8f1018b1b0cb458a4680a5de0b2192d";

export const getForecastWeather = () => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
    `).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const parseWeatherData = (data) => {
  if (!data) {
    return null;
  }

  const weather = {};

  weather.city = data.name;
  // weather.temp = Math.ceil(data.main.temp);
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
