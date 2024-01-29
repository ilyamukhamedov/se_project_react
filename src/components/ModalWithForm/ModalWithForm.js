import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  onClose,
  name,
  title,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className={`modal__container`}>
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <h2 className="modal__title">{title}</h2>
        <form>
          {children}
          <button
            className="modal__button modal__button_disabled"
            type="submit"
            disabled
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
