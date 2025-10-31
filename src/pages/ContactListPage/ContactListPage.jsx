import SearchBox from "@/components/SearchBox/SearchBox";
import styles from "./ContactListPage.module.css";
import ContactListToolbar from "@/components/ContactListToolbar/ContactListToolbar";
import { useEffect, useState } from "react";
import SortButtons from "@/components/SortButtons/SortButtons";
const ContactListPage = ({
  setCurrentPage,
  contacts,
  setContacts,
  setSearch,
  search,
  showToast,
  showModal,
  onViewClick,
  setFavorites,
  favorites
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortBy, setSortBy] = useState(localStorage.getItem("sortBy") || "latest-added");

  const checkboxHandler = (e) => {
    const isSelected = e.target.checked;
    const value = parseInt(e.target.value);
    if (isSelected) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems((prevData) => prevData.filter((id) => id !== value));
    }
  };

  const deleteHandler = () => {
    setContacts(contacts.filter((item) => !selectedItems.includes(item.id)));
    setFavorites(favorites.filter((item) => !selectedItems.includes(item.id)));
    showToast(`${selectedItems.length} contact(s) deleted`, "success");
    setSelectedItems([]);
  };

  const renderModal = () => {
    if (!selectedItems.length) {
      showToast("No contact selected", "warning");
      return;
    }
    showModal(
      `Delete ${selectedItems.length} contact(s)`,
      "Are you sure you want to delete these contacts?",
      "Delete",
      () => deleteHandler()
    );
  };
  const filteredContacts = contacts.filter((item) => {
    const term = search.trim().toLowerCase();
    return (
      term === "" ||
      item.name.toLowerCase().includes(term) ||
      item.email.split("@")[0].toLowerCase().includes(term)
    );
  });

  let sortedContacts = [...filteredContacts];

  if (sortBy === "alphabet") {
    sortedContacts.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
  } else if (sortBy === "latest-added") {
    sortedContacts.reverse();
  } else {
    sortedContacts;
  }

  useEffect(() => {
    localStorage.setItem("sortBy", sortBy);
  }, [sortBy]);
  
  return (
    <>
      <ContactListToolbar
        setCurrentPage={setCurrentPage}
        renderModal={renderModal}
      />
      <SearchBox setSearch={setSearch} search={search} />
      {contacts.length ? (
        <>
          <SortButtons sortBy={sortBy} setSortBy={setSortBy} />
          <ul className={styles.contacts}>
            {sortedContacts.map((contact) => (
              <li className={styles.contact} key={contact.id}>
                <input
                  type="checkbox"
                  value={contact.id}
                  checked={selectedItems.includes(contact.id)}
                  onChange={checkboxHandler}
                />
                <div
                  className={styles.data}
                  onClick={() => onViewClick(contact.id)}
                >
                  <p className={styles.contact__name}>{contact.name}</p>
                  <p className={styles.contact__email}>{contact.email}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className={styles.message}>No contacts exist</p>
      )}
    </>
  );
};

export default ContactListPage;
