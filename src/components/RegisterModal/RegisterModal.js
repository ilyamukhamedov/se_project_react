import { React, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ handleCloseModal, registerUser, openLogInModal }) => {
  const [name, setName] = useState("");
  const [avatar, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => setName(e.target.value);

  const handleUrlChange = (e) => setUrl(e.target.value);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText="Sign Up"
    >
      <label className="modal__label">
        Email *
        <input
          type="text"
          name="email"
          minLength="1"
          maxLength="30"
          className="modal__input"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label className="modal__label">
        Password *
        <input
          type="text"
          name="password"
          minLength="1"
          className="modal__input"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <label className="modal__label">
        Name *
        <input
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          className="modal__input"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Avatar URL *
        <input
          type="url"
          name="avatar"
          minLength="1"
          className="modal__input"
          placeholder="Avatar URL"
          value={avatar}
          onChange={handleUrlChange}
        />
      </label>

      <button className="modal__link" onClick={openLogInModal}>
        or Log In
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;
