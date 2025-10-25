import SearchBox from "@/components/SearchBox/SearchBox";
import styles from "./ContactListPage.module.css";
import ContactListToolbar from "@/components/ContactListToolbar/ContactListToolbar";
const ContactListPage = ({ setCurrentPage, contacts, setSearch, search }) => {
  return (
    <>
      <ContactListToolbar setCurrentPage={setCurrentPage} />
      <SearchBox setSearch={setSearch} search={search} />
      <ul className={styles.contacts}>
        {contacts
          .filter((item) => {
            return search.trim().toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((contact) => (
            <li className={styles.contact} key={contact.id}>
              <p className={styles.contact__name}>{contact.name}</p>
              <p className={styles.contact__email}>{contact.email}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactListPage;
