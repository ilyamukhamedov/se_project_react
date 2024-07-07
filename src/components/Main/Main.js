import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { defaultClothingItems } from "../../utils/constants";

function Main({ weather, onSelectCard, clothingItems, handleCardLike }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const temp = weather?.temp?.[currentTemperatureUnit];

  const weatherType = useMemo(() => {
    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp <= 65) {
        return "cold";
      }
    } else {
      if (temp >= 30) {
        return "hot";
      } else if (temp >= 19 && temp <= 29) {
        return "warm";
      } else if (temp <= 18) {
        return "cold";
      }
    }
  }, [temp]);

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={weather.day} type={weather.type} weatherTemp={temp} />
      <section>
        <div className="main__title">
          Today is {temp} °{currentTemperatureUnit} / You may want to wear:
        </div>
        <ul className="main__items">
          {defaultClothingItems.map((item) => (
            <ItemCard
              key={item._id}
              card={item}
              onSelectCard={onSelectCard}
              handleCardLike={handleCardLike}
            />
          ))}
          {/* {filteredCards.map((item) => (
            <ItemCard
              key={item._id}
              card={item}
              onSelectCard={onSelectCard}
              handleCardLike={handleCardLike}
            />
          ))} */}
        </ul>
      </section>
    </main>
  );
}

export default Main;
