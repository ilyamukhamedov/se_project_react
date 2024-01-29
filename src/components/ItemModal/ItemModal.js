import "./ItemModal.css";
import "../ModalWithForm/ModalWithForm.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__container item__modal">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <img
          className="item__image"
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <h3 className="item__name">{selectedCard.name}</h3>
        <p className="item__weather">Weather: {selectedCard.weather}</p>
      </div>
    </div>
  );
};

export default ItemModal;
