import "./Main.css";
import WeatherCard from "../../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo } from "react";

function Main({ day, type, weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() == weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={day} type={type} weatherTemp={weatherTemp} />
      <section className="card__section">
        <div className="card__title">
          Today is {weatherTemp}°F / You may want to wear:
        </div>
        <ul className="card__items">
          {filteredCards.map((item) => (
            <ItemCard key={item._id} card={item} onSelectCard={onSelectCard} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
