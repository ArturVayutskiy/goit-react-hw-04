import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ bigUrl, isOpen, description, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
        content: {
          position: "fixed",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "none",
          border: "none",
        },
        modal: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          ariaHideApp: "false",
        },
      }}
    >
      <img src={bigUrl} alt={description} className={css.modalImage} />
      <div className={css.textAndButton}>
        <p className={css.description}>{description}</p>
        {/* <button className={css.closeButton} onClick={onClose}>
          Close
        </button> */}
      </div>
    </Modal>
  );
}
