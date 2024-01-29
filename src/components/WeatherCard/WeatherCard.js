import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, alt, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = imageSrc?.url || "";

  return (
    <section className="weather">
      <div className="weather__info">{weatherTemp}°F</div>
      <img className="weather__image" src={imageSrcUrl} alt={alt} />
    </section>
  );
};

export default WeatherCard;
