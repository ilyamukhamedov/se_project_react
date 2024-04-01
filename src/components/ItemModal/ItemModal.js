import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, handleDeleteCard, loggedIn }) => {
  return (
    <div className="modal">
      <div className="item__modal">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <img
          className="item__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <h3 className="item__name">{selectedCard.name}</h3>
        <p className="item__weather">Weather: {selectedCard.weather}</p>
        {loggedIn && (
          <button
            className="item__delete-button"
            onClick={() => handleDeleteCard(selectedCard)}
          >
            Delete item
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemModal;
