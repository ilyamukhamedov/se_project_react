import React from "react";
import "./DeleteModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const DeleteModal = ({
  onClose,
  selectedCard,
  handleDeleteCard,
  isLoading,
}) => {
  return (
    <ModalWithForm onClose={onClose} name={"delete"}>
      <div className="delete__container">
        <p className="delete__container-text">
          Are you sure you want to delete this item? <br />
          This action is irreversible
        </p>
        <button
          className="delete__button-confirm"
          type="button"
          onClick={() => {
            handleDeleteCard(selectedCard._id);
          }}
        >
          {isLoading ? "Deleting" : "Yes, delete item"}
        </button>
        <button
          className="delete__button-cancel"
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </ModalWithForm>
  );
};

export default DeleteModal;
