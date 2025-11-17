import { Link, useNavigate } from "react-router-dom";
import styles from "./FavoritesPage.module.css";
import { memo, useContext } from "react";
import { ContactsContext } from "@/components/context/ContactsContext";
const FavoritesPage = () => {
  const { contacts } = useContext(ContactsContext);
  const navigate = useNavigate();


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <i
            onClick={() => navigate("/contact-list")}
            className="fa-solid fa-arrow-left"
          ></i>
        </div>
        <div>
          <h3>Favorites</h3>
        </div>
      </div>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.filter(contact => contact.isFavorite).map((contact) => (
            <Link to={`/view-contact/${contact.id}`} key={contact.id}>
              <li className={styles.contact}>
                <div className={styles.data}>
                  <p className={styles.contact__name}>{contact.name}</p>
                  <p className={styles.contact__email}>{contact.email}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <p className={styles.message}>Empty</p>
      )}
    </div>
  );
};

export default memo(FavoritesPage);
