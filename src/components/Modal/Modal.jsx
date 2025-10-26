import styles from "./Modal.module.css";
const Modal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <p className={styles.modal__title}>Delete 2 contacts</p>
        <p className={styles.modal__desc}>
          Are you sure you want to delete these contacts?
        </p>
        <div className={styles.modal__btns}>
          <button className={styles.modal__button}>Cancel</button>
          <button className={styles.modal__button}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
