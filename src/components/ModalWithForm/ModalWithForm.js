import "./ModalWithForm.css";

const ModalWithForm = ({ children, onClose, name, title, onSubmit }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container">
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
