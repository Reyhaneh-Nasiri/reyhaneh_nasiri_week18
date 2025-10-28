import { useState } from "react";
import styles from "./ContactListToolbar.module.css";
const ContactListToolbar = ({setCurrentPage, renderModal}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={styles.toolbar}>
      <div
        className={styles.itemsMenu}
        style={{
          height: `${isMenuOpen ? "fit-content" : "0"}`,
          transform: `translateY(${isMenuOpen ? "0%" : "50%"})`,
        }}
      >
        <p className={styles.itemMenu} onClick={() => setCurrentPage("add-contact")}>
          <i className="fa-solid fa-plus"></i> New contact
        </p>
        <p className={styles.itemMenu} onClick={renderModal}>
          <i className="fa-solid fa-trash"></i> Delete
        </p>
      </div>
      <div
        className={styles.actionMenuButton}
        onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
      >
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <button onClick={() => setCurrentPage("add-contact")}><i className="fa-solid fa-user-plus"></i></button>
      <button onClick={renderModal}><i className="fa-solid fa-trash"></i></button>
      
    </div>
  );
};

export default ContactListToolbar;
