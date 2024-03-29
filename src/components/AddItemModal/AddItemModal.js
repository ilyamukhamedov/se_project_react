import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const AddItemModal = ({ onAddItem, handleCloseModal }) => {
  const [name, setName] = useState("");

  const [imageUrl, setUrl] = useState("");

  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => setName(e.target.value);

  const handleUrlChange = (e) => setUrl(e.target.value);

  const handleWeatherChange = (e) => setWeather(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();

    onAddItem({ name, imageUrl, weather });
  }

  return (
    <ModalWithForm
      title="New garment"
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
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
          maxLength="1000"
          value={imageUrl}
          onChange={handleUrlChange}
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
            onChange={handleWeatherChange}
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
            onChange={handleWeatherChange}
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
            onChange={handleWeatherChange}
          />
          <label htmlFor="cold" className="modal__radio-text">
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
