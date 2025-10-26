import SearchBox from "@/components/SearchBox/SearchBox";
import styles from "./ContactListPage.module.css";
import ContactListToolbar from "@/components/ContactListToolbar/ContactListToolbar";
import { useEffect, useState } from "react";
const ContactListPage = ({
  setCurrentPage,
  contacts,
  setContacts,
  setSearch,
  search,
  showToast,
  showModal,
  isOk,
  onViewClick
}) => {
  useEffect(() => {
    if (isOk) {
      setContacts(contacts.filter((item) => !selectedItems.includes(item.id)));
      showToast(`${selectedItems.length} contact(s) deleted`, "success");
      setSelectedItems([]);
    }
  }, [isOk]);
  const [selectedItems, setSelectedItems] = useState([]);

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
    if (!selectedItems.length) {
      showToast("No contact selected", "warning");
      return;
    }
    showModal(
      `Delete ${selectedItems.length} contact(s)`,
      "Are you sure you want to delete these contacts?",
      "Delete"
    );
  };
  return (
    <>
      <ContactListToolbar
        setCurrentPage={setCurrentPage}
        deleteHandler={deleteHandler}
      />
      <SearchBox setSearch={setSearch} search={search} />
      <ul className={styles.contacts}>
        {contacts
          .filter((item) => {
            return search.trim().toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((contact) => (
            <li className={styles.contact} key={contact.id} onClick={() => onViewClick(contact.id)}>
              <input
                type="checkbox"
                value={contact.id}
                checked={selectedItems.includes(contact.id)}
                onChange={checkboxHandler}
              />
              <p className={styles.contact__name}>{contact.name}</p>
              <p className={styles.contact__email}>{contact.email}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactListPage;
