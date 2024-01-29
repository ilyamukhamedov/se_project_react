import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ModalWithForm from "./components/ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "./components/ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "./utils/weatherApi";

export default function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weather, setWeather] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  useEffect(() => {
    getForecastWeather().then((data) => {
      const temperature = parseWeatherData(data);
      console.log(temperature);
      setWeather(temperature);
    });
  }, []);

  useEffect(() => {
    const closeEsc = (e) => {
      if (e.key === "Escape") {
        setActiveModal("");
      }
    };
    window.addEventListener("keydown", closeEsc);
    return () => window.removeEventListener("keydown", closeEsc);
  }, []);

  useEffect(() => {
    const closeOutside = (e) => {
      if (e.target.classList.contains("modal")) {
        setActiveModal("");
      }
    };
    window.addEventListener("mousedown", closeOutside);
    return () => window.removeEventListener("mousedown", closeOutside);
  }, []);

  return (
    <div className="page">
      <div className="page__section">
        <Header cityName={weather.city} onCreateModal={handleCreateModal} />
        <Main
          type={weather.type}
          day={weather.day}
          weatherTemp={weather.temp}
          onSelectCard={handleSelectedCard}
        />
        <Footer />
      </div>
      {activeModal === "create" && (
        <ModalWithForm title="New garment" onClose={handleCloseModal}>
          <label className="modal__label">
            Name
            <input
              className="modal__input"
              type="text"
              name="name"
              placeholder="Name"
              minLength="1"
              maxLength="30"
              required
            ></input>
          </label>
          <label className="modal__label">
            Image
            <input
              className="modal__input"
              type="url"
              name="link"
              placeholder="Image URL"
              minLength="1"
              maxLength="30"
              required
            ></input>
          </label>
          <p className="modal__label">Select the weather type:</p>
          <div>
            <div className="modal__weather">
              <input
                className="modal__radio-label"
                type="radio"
                id="hot"
                name="weatherType"
                value="hot"
              />
              <label htmlFor="hot" className="modal__radio-text">
                Hot
              </label>
            </div>
            <div className="modal__weather">
              <input
                className="modal__radio-label"
                type="radio"
                id="warm"
                name="weatherType"
                value="warm"
              />
              <label htmlFor="warm" className="modal__radio-text">
                Warm
              </label>
            </div>
            <div className="modal__weather">
              <input
                className="modal__radio-label"
                type="radio"
                id="cold"
                name="weatherType"
                value="cold"
              />
              <label htmlFor="cold" className="modal__radio-text">
                Cold
              </label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}
