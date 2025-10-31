import styles from "./FavoritesPage.module.css";
const FavoritesPage = ({ favorites, setCurrentPage, onViewClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <i
            onClick={() => setCurrentPage("contact-list")}
            className="fa-solid fa-arrow-left"
          ></i>
        </div>
        <div>
          <h3>Favorites</h3>
        </div>
      </div>
      {favorites.length ? (
        <ul className={styles.contacts}>
          {favorites.map((contact) => (
            <li
              className={styles.contact}
              key={contact.id}
              onClick={() => onViewClick(contact.id)}
            >
              <div className={styles.data}>
                <p className={styles.contact__name}>{contact.name}</p>
                <p className={styles.contact__email}>{contact.email}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.message}>Empty</p>
      )}
    </div>
  );
};

export default FavoritesPage;
