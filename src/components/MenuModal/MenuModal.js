import React from "react";
import "./MenuModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Nav from "../Nav/Nav";

const MenuModal = ({
  onMobileModal,
  loggedIn,
  onCreateModal,
  onRegisterModal,
  onLogInModal,
  handleCloseModal,
}) => {
  return (
    <ModalWithForm onClose={handleCloseModal}>
      <div className="menu">
        <Nav
          onMobileModal={onMobileModal}
          loggedIn={loggedIn}
          onLogInModal={onLogInModal}
          onRegisterModal={onRegisterModal}
          onCreateModal={onCreateModal}
        />
      </div>
    </ModalWithForm>
  );
};

export default MenuModal;
