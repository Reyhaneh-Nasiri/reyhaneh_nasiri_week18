import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import styles from "./ViewContactPage.module.css";
import { useState } from "react";
const ViewContactPage = ({
  id,
  contacts,
  setCurrentPage,
  setContacts,
  showToast,
  setEditId,
  showModal,
  setFavorites,
  favorites,
}) => {
  const [isFavorite, setIsFavorite] = useState(
    favorites.find((contact) => contact.id == id)
  );
  const contact = contacts.find((contact) => contact.id == id);
  const values = Object.keys(contact);
  const deleteHandler = () => {
    setContacts(contacts.filter((contact) => contact.id != id));
    setFavorites(favorites.filter((f) => f.id != id));
    setCurrentPage("contact-list");
    showToast("Contact deleted", "success");
  };

  const renderModal = () => {
    showModal(
      `Delete Contact`,
      "Are you sure you want to delete this contact?",
      "Delete",
      () => deleteHandler()
    );
  };

  const favoriteHandler = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      setFavorites(() => [...favorites, contact]);
    } else {
      setFavorites((prevData) => prevData.filter((c) => c.id !== contact.id));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <i
          onClick={() => setCurrentPage("contact-list")}
          className="fa-solid fa-arrow-left"
        ></i>
        <i
          className="fa-solid fa-pen-to-square"
          onClick={() => {
            setCurrentPage("edit-contact"), setEditId(id);
          }}
        ></i>
      </div>
      <button
        className={`${styles.favorite} ${isFavorite && styles.active}`}
        onClick={favoriteHandler}
      >
        {isFavorite ? (
          <i className="fa-solid fa-star"></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </button>
      <ul className={styles.information}>
        {values.map((value) => {
          if (value !== "id") {
            return (
              <li key={value}>
                {capitalizeFirstLetter(value)}: {contact[value.toLowerCase()]}
              </li>
            );
          }
        })}
      </ul>
      <div className={styles.footer}>
        <button onClick={renderModal}>Delete</button>
      </div>
    </div>
  );
};

export default ViewContactPage;
