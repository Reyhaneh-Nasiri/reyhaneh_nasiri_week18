import styles from "./Modal.module.css";
const Modal = ({ title, desc, action, removeModal, onConfirm }) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <p className={styles.modal__title}>{title}</p>
        <p className={styles.modal__desc}>{desc} </p>
        <div className={styles.modal__btns}>
          <button className={styles.modal__button} onClick={removeModal}>
            Cancel
          </button>
          <button
            className={styles.modal__button}
            onClick={() => {
              if (onConfirm) onConfirm();
              removeModal();
            }}
          >
            {action}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
