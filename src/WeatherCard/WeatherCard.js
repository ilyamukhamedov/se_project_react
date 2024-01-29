import "./WeatherCard.css";

const weatherOptions = [
  {
    url: require("../images/sunnyDay.svg").default,
    day: true,
    type: "Clear",
  },

  {
    url: require("../images/cloudyDay.svg").default,
    day: true,
    type: "Clouds",
  },

  { url: require("../images/rainDay.svg").default, day: true, type: "Rain" },

  {
    url: require("../images/stormDay.svg").default,
    day: true,
    type: "Thunderstorm",
  },

  { url: require("../images/snowDay.svg").default, day: true, type: "Snow" },

  { url: require("../images/fogDay.svg").default, day: true, type: "Mist" },

  {
    url: require("../images/moonNight.svg").default,
    day: false,
    type: "Clear",
  },

  {
    url: require("../images/cloudyNight.svg").default,
    day: false,
    type: "Clouds",
  },

  {
    url: require("../images/rainNight.svg").default,
    day: false,
    type: "Rain",
  },

  {
    url: require("../images/stormNight.svg").default,
    day: false,
    type: "Thunderstorm",
  },

  {
    url: require("../images/snowNight.svg").default,
    day: false,
    type: "Snow",
  },

  { url: require("../images/fogNight.svg").default, day: false, type: "Mist" },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = imageSrc?.url || "";

  return (
    <section className="weather">
      <div className="weather__info">{weatherTemp}°F</div>
      <img className="weather__image" src={imageSrcUrl} />
    </section>
  );
};

export default WeatherCard;
