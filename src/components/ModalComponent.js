import '../styles/ModalStyles.css';

const Modal = ({ handleClose, showRoller, showBrekky, children }) => {
  const showHideClassName = showRoller ? "modal display-block" : showBrekky ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div 
            type="button" 
            id="close-modal-btn"
            onClick={handleClose}>
                &#10006;
        </div>
        {children}
      </section>
    </div>
  );
};

export default Modal;