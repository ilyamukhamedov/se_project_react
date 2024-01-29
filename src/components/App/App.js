import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";

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
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setWeather(temperature);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]); // watch activeModal here

  // useEffect(() => {
  //   const closeEsc = (e) => {
  //     if (e.key === "Escape") {
  //       setActiveModal("");
  //     }
  //   };
  //   window.addEventListener("keydown", closeEsc);
  //   return () => window.removeEventListener("keydown", closeEsc);
  // }, []);

  useEffect(() => {
    if (!activeModal) return;

    const closeOutside = (e) => {
      if (e.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };
    window.addEventListener("mousedown", closeOutside);
    return () => window.removeEventListener("mousedown", closeOutside);
  }, [activeModal]);

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
