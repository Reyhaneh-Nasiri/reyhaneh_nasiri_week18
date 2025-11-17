import { useState } from "react";
import styles from "./ContactListToolbar.module.css";
import { useNavigate } from "react-router-dom";
const ContactListToolbar = ({ renderModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()
  return (
    <div className={styles.toolbar}>
      <div
        className={styles.itemsMenu}
        style={{
          height: `${isMenuOpen ? "fit-content" : "0"}`,
          transform: `translateY(${isMenuOpen ? "0%" : "50%"})`,
        }}
      >
        <p
          className={styles.itemMenu}
          onClick={() => navigate("/add-contact")}
        >
          <i className="fa-solid fa-plus"></i> New contact
        </p>
        <p className={styles.itemMenu} onClick={renderModal}>
          <i className="fa-solid fa-trash"></i> Delete
        </p>
        <p className={styles.itemMenu} onClick={() => navigate("/favorites")}>
          <i className="fa-solid fa-star"></i> Favorites
        </p>
      </div>
      <div
        className={styles.actionMenuButton}
        onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
      >
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <button onClick={() => navigate("/add-contact")}>
        <i className="fa-solid fa-user-plus"></i>
      </button>
      <button onClick={renderModal}>
        <i className="fa-solid fa-trash"></i>
      </button>
      <button className={styles.favoritesButton} onClick={() => navigate("/favorites")}>
        <i className="fa-solid fa-star"></i>
      </button>
    </div>
  );
};

export default ContactListToolbar;
