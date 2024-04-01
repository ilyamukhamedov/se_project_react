import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, React } from "react";

const LoginModal = ({ handleCloseModal, loginUser, openRegisterModal }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ email, password });
  };

  return (
    <>
      <ModalWithForm
        title="Log In"
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        buttonText="Log In"
      >
        <label className="modal__label">
          Email:
          <input
            className="modal__input"
            id="email"
            minLength="1"
            maxLength="30"
            required
            name="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
        </label>
        <label className="modal__label">
          Password:
          <input
            className="modal__input"
            id="password"
            minLength="1"
            required
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </label>
        <button className="modal__link " onClick={openRegisterModal}>
          or Sign Up
        </button>
      </ModalWithForm>
    </>
  );
};

export default LoginModal;
