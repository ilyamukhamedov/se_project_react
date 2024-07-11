import "./ItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemModal = ({ selectedCard, onClose, handleDeleteCard, loggedIn }) => {
  const currentUser = useContext(CurrentUserContext);

  const isOwner = selectedCard.owner == currentUser._id;

  return (
    <ModalWithForm onClose={onClose} name={"preview"}>
      <img
        className="item__image"
        src={selectedCard.imageUrl}
        alt={selectedCard.name}
      />
      <section className="item__section">
        <div>
          <h3 className="item__name">
            {selectedCard.name}{" "}
            <span className="item__weather">
              Weather: {selectedCard.weather}
            </span>
          </h3>
        </div>
        {isOwner && (
          <button
            className="item__delete-button"
            onClick={() => handleDeleteCard(selectedCard)}
          >
            Delete item
          </button>
        )}
      </section>
    </ModalWithForm>
  );
};

export default ItemModal;
