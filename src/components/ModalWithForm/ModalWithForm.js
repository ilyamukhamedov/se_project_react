import "./ModalWithForm.css";

const ModalWithForm = ({ children, onClose, title, onSubmit, name }) => {
  return (
    <div className="modal">
      <div className={`modal__container modal__container-${name}`}>
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <h2 className="modal__title">{title}</h2>
        <form onSubmit={onSubmit}>{children}</form>
      </div>
    </div>
  );
};

export default ModalWithForm;
