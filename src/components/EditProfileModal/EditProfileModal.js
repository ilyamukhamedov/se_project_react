import React, { useContext, useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ handleCloseModal, updateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setUrl] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, avatar });
  };

  useEffect(() => {
    setName(currentUser?.name);
    setUrl(currentUser?.avatar);
  }, [currentUser?.name, currentUser?.avatar]);

  return (
    <ModalWithForm
      title="Change profile data"
      onClose={handleCloseModal}
      onSubmit={onSubmit}
      buttontext="Save changes"
    >
      <label className="modal__label">
        Name *
        <input
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          required
          className="modal__input"
          placeholder={currentUser.name}
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Avatar *
        <input
          type="url"
          name="avatar"
          minLength="1"
          className="modal__input"
          required
          placeholder={currentUser.avatar}
          value={avatar}
          onChange={handleUrlChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
