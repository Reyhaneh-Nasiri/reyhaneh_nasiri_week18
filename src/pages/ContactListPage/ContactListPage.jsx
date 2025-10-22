import SearchBox from "@/components/SearchBox/SearchBox";
import styles from "./ContactListPage.module.css";
import ContactListToolbar from "@/components/ContactListToolbar/ContactListToolbar";
const ContactListPage = () => {
  return (
    <>
      <ContactListToolbar />
      <SearchBox />
      <ul className={styles.contacts}>
        <li className={styles.contact}>
          <p className={styles.contact__name}>contact 1</p>
          <p className={styles.contact__email}>contact 1@gmail.com</p>
        </li>
        <li className={styles.contact}>
          <p className={styles.contact__name}>contact 2</p>
          <p className={styles.contact__email}>contact 2@gmail.com</p>
        </li>
        <li className={styles.contact}>
          <p className={styles.contact__name}>contact 3</p>
          <p className={styles.contact__email}>contact 3@gmail.com</p>
        </li>
      </ul>
    </>
  );
};

export default ContactListPage;
