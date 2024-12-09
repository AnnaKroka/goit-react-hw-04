import Modal from "react-modal";
import s from "./ImageModal.module.css"

Modal.setAppElement('#root');

const ImageModal = ({isOpen, onClose, modalImage}) => {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    className={s.modal}
    overlayClassName={s.overlay}
    >
      <img src={modalImage.urls.regular} alt={modalImage.alt_description} />
    </Modal>
  );
}

export default ImageModal