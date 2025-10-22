import { useState } from "react";
import styles from "./ContactListToolbar.module.css";
const ContactListToolbar = () => {
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
        <p className={styles.itemMenu}>
          <i class="fa-solid fa-plus"></i> New contact
        </p>
        <p className={styles.itemMenu}>
          <i class="fa-solid fa-trash"></i> Delete
        </p>
      </div>
      <div
        className={styles.actionMenuButton}
        onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
      >
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <button><i class="fa-solid fa-user-plus"></i></button>
      <button><i class="fa-solid fa-trash"></i></button>
      
    </div>
  );
};

export default ContactListToolbar;
